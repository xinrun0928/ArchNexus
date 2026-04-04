# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

ArchNexus 是一个基于 Rspress 构建的 Java 后端架构知识文档站点，旨在系统化梳理 Java 后端核心知识与架构设计能力，帮助开发者从基础到进阶成长为真正的架构师。

## 常用开发命令

### 开发与构建
- `npm run dev` - 启动开发服务器（热重载）
- `npm run build` - 构建生产版本
- `npm run preview` - 预览生产构建结果

### 代码质量
- `npm run check` - 使用 Biome 检查并自动修复代码问题
- `npm run format` - 使用 Biome 格式化代码

### 文档统计
- `python3 scripts/count.py [路径]` - 统计目录文件的行数、字数、字符数
  - `--ext md,mdx` - 按扩展名过滤
  - `--exclude interview` - 排除指定目录

## 项目架构

### 目录结构
```
ArchNexus/
├── docs/                    # Markdown 文档源码根目录
│   ├── public/             # 静态资源（图片、图标等）
│   └── **/*.mdx            # 文档文件（使用 MDX 格式）
├── theme_config/           # 主题配置
│   ├── nav.js             # 顶部导航栏配置
│   └── sidebar.js         # 侧边栏配置
├── styles/
│   └── global.css         # 全局样式
├── scripts/
│   └── count.py           # 文档统计脚本
├── rspress.config.ts      # Rspress 核心配置
├── biome.json             # Biome 代码规范配置
└── tsconfig.json          # TypeScript 配置
```

### 配置文件职责

**rspress.config.ts** - Rspress 核心配置文件，包含：
- `root`: 文档根目录（`docs`）
- `themeConfig`: 主题外观配置（导航、侧边栏、搜索、社交链接等）
- `markdown`: Markdown 渲染配置（代码块行号等）
- `route`: 路由配置（简洁 URL 模式）
- `head`: 页面头部标签注入（SEO、meta 标签）

**theme_config/nav.js** - 顶部导航栏配置，数组格式：
```js
export const nav = [
  // 导航项配置
]
```

**theme_config/sidebar.js** - 侧边栏配置，对象格式：
```js
export const sidebar = {
  // 路径对应的侧边栏配置
}
```

## 文档编写规范

本项目有严格的文档编写规范，所有规范在 `.cursor/rules/` 目录下：

| 规则文件 | 内容 |
|---|---|
| `.cursorrules` | 文档编写总规则（规范索引、问题查询来源、AI 行为规则） |
| `.cursor/rules/rspress-syntax.mdc` | Rspress 基础语法（代码块、容器、徽章、目录导航、正文格式） |
| `.cursor/rules/rspress-writing.mdc` | 写作风格（开场设计、节奏控制、渐进讲解、表达技巧） |
| `.cursor/rules/rspress-notation.mdc` | 符号转义规范（比较运算符、箭头运算符、泛型类型、JSX 模板字面量等） |
| `.cursor/rules/language-response.mdc` | 语言响应规范（简体中文、术语翻译、例外情况） |

### 文档编写核心要点

1. **文件格式**：统一使用 `.mdx` 格式，文件名使用 kebab-case
2. **代码块**：必须指定语言标识符，支持 meta 属性（`title`、`wrapCode`、`fold` 等）
3. **符号转义**：
   - 比较运算符（`=`、`<=`、`>=`、`==`、`!=`、`->`、`=>`）在正文中需用反引号包裹
   - 泛型类型（`<T>`）需用反引号包裹
   - JSX 模板字面量 `${` 需转义为 `\${`
4. **内部链接**：不得包含 `/docs` 前缀，不得出现 `.mdx` 后缀
5. **禁止事项**：
   - 禁止使用 `<Badge>` 组件，使用纯文本替代
   - 禁止在段落内容后、下一级标题前插入 `---` 装饰性分隔线
   - 容器类型必须小写（`:::tip`、`:::warning` 等）

### 代码规范

- 使用 Biome 进行代码检查和格式化
- JavaScript/TypeScript 使用单引号
- 缩进使用空格
- 开启自动导入整理

## 问题查询顺序

遇到 Rspress 相关问题时，必须遵循以下查询顺序：

1. **首要查询**：Rspress 官方文档 https://rspress.dev/
2. **辅助参考**：Rspress GitHub 仓库 Issues（仅用于确认 bug 是否已知）
3. **禁止行为**：不得基于经验或猜测提供配置方案，不得使用非官方文档中的语法或 API

## TypeScript 配置

- 目标版本：ES2020
- JSX 模式：react-jsx
- 严格模式：启用
- 模块系统：ESNext
- 包含目录：`docs`、`theme`、`rspress.config.ts`
- 启用 MDX 检查

## 代码与语言规则

**所有响应必须使用简体中文**，包括：
- 对话回复中的正文文字
- 技术术语的翻译（保留英文原文时需加括号注明）
- 错误提示和状态信息
- 代码注释（除非代码本身使用英文）

**例外情况**：
- 代码、命令、配置文件中的内容保持原样
- 外部文档引用（保持原文档语言）
- 技术术语的标准英文缩写（API、CLI、HTTP 等）
