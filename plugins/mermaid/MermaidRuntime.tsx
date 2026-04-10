import React, { useEffect } from 'react';

interface MermaidRuntimeProps {
  defaultTheme?: string;
}

// Mermaid CDN URL
const MERMAID_CDN_URL = 'https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs';

/**
 * Mermaid 运行时组件
 *
 * 这个组件会：
 * 1. 查找页面上所有包含 mermaid 代码的 pre 元素
 * 2. 将它们转换为 mermaid 渲染容器
 * 3. 动态加载 mermaid.js 并渲染图表
 */
export default function MermaidRuntime(props: MermaidRuntimeProps) {
  useEffect(() => {
    let cancelled = false;
    let mermaidModule: any = null;

    const renderMermaidDiagrams = async () => {
      if (cancelled) return;

      // 动态加载 mermaid（仅在尚未加载时）
      if (!mermaidModule) {
        try {
          // 使用 Function 构造函数来绕过 webpack 的静态分析
          // 这样可以避免 "Critical dependency" 警告
          // eslint-disable-next-line @typescript-eslint/no-implied-eval
          const loadMermaid = new Function('url', 'return import(url)');
          mermaidModule = await loadMermaid(MERMAID_CDN_URL);
        } catch (err) {
          console.error('[rspress-plugin-mermaid] 加载 mermaid 失败:', err);
          return;
        }
      }

      if (cancelled) return;

      // 获取 mermaid 实例（处理 default 导出）
      const mermaid = mermaidModule.default || mermaidModule;

      // 检测当前主题
      const isDark = document.documentElement.classList.contains('dark');
      const theme = isDark ? 'dark' : (props?.defaultTheme || 'default');

      mermaid.initialize({
        securityLevel: 'loose',
        startOnLoad: false,
        theme,
        fontFamily: 'var(--rp-font-family-base)',
        flowchart: { curve: 'basis', htmlLabels: true },
        sequence: { useMaxWidth: true, diagramMaxWidth: 800 },
      });

      // 查找所有代码块，检查是否包含 mermaid 内容
      const allPreElements = document.querySelectorAll<HTMLPreElement>('pre');

      for (const pre of allPreElements) {
        // 获取代码内容
        const code = pre.querySelector('code');
        if (!code) continue;

        const codeContent = code.textContent || '';
        const codeClass = code.className || '';

        // 检查是否已处理
        if (pre.getAttribute('data-mermaid-processed')) continue;

        // 检查是否是 mermaid 代码块
        // Rspress 使用 shiki，类名格式为 language-mermaid
        const isMermaid = codeClass.includes('language-mermaid') ||
                         codeClass.includes('mermaid') ||
                         pre.getAttribute('data-language') === 'mermaid';

        if (!isMermaid && !codeContent.trim().startsWith('flowchart') &&
            !codeContent.trim().startsWith('sequenceDiagram') &&
            !codeContent.trim().startsWith('stateDiagram') &&
            !codeContent.trim().startsWith('classDiagram') &&
            !codeContent.trim().startsWith('gantt') &&
            !codeContent.trim().startsWith('pie')) {
          continue;
        }

        pre.setAttribute('data-mermaid-processed', 'true');

        // 创建渲染容器
        const container = document.createElement('div');
        container.className = 'mermaid-diagram';
        container.setAttribute('data-mermaid-source', codeContent);

        // 生成唯一 ID
        const id = `mermaid-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;

        try {
          const { svg } = await mermaid.render(id, codeContent);

          // 包装 SVG
          const wrapper = document.createElement('div');
          wrapper.className = 'mermaid-wrapper';
          wrapper.innerHTML = svg;

          container.appendChild(wrapper);

          // 隐藏原始 pre 元素
          pre.style.display = 'none';

          // 插入容器
          pre.parentNode?.insertBefore(container, pre.nextSibling);
        } catch (err) {
          container.innerHTML = `<div class="mermaid-error">
            <div class="mermaid-error-title">图表渲染失败</div>
            <div class="mermaid-error-message">${err instanceof Error ? err.message : '未知错误'}</div>
          </div>`;
          pre.style.display = 'none';
          pre.parentNode?.insertBefore(container, pre.nextSibling);
        }
      }
    };

    // 延迟执行，等待页面内容加载
    const timer = setTimeout(renderMermaidDiagrams, 100);

    // 监听主题切换
    const observer = new MutationObserver(() => {
      renderMermaidDiagrams();
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    // 监听路由变化（Rspress SPA）
    const handleRouteChange = () => {
      setTimeout(renderMermaidDiagrams, 100);
    };

    document.addEventListener('routechange', handleRouteChange);

    return () => {
      cancelled = true;
      clearTimeout(timer);
      observer.disconnect();
      document.removeEventListener('routechange', handleRouteChange);
    };
  }, [props?.defaultTheme]);

  return null;
}
