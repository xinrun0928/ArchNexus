import { useEffect, useRef, useState } from 'react';
import './index.css';

interface TechStack {
  name: string;
  description: string;
  link: string;
  icon: string;
}

const techStacks: TechStack[] = [
  {
    name: 'Java',
    description: '主要开发语言',
    link: 'https://guide.docs.zxinrun.cn/',
    icon: '☕',
  },
  {
    name: 'Spring Boot',
    description: '企业级应用框架',
    link: '/spring',
    icon: '🌱',
  },
  {
    name: 'MySQL',
    description: '关系型数据库',
    link: '/database/mysql',
    icon: '🐬',
  },
  {
    name: 'Redis',
    description: '缓存与分布式锁',
    link: '/cache/redis',
    icon: '🔴',
  },
  {
    name: 'Kafka',
    description: '消息队列',
    link: '/middleware/kafka',
    icon: '📨',
  },
  {
    name: 'Docker',
    description: '容器化部署',
    link: '/devops/docker',
    icon: '🐳',
  },
];

export const TechStackButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="tech-stack-container" ref={dropdownRef}>
      <button
        className="tech-stack-button"
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
        aria-label="技术栈"
        aria-expanded={isOpen}
      >
        <svg
          className="tech-stack-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="3" width="7" height="7" />
          <rect x="14" y="3" width="7" height="7" />
          <rect x="14" y="14" width="7" height="7" />
          <rect x="3" y="14" width="7" height="7" />
        </svg>
      </button>

      <div className={`tech-stack-dropdown ${isOpen ? 'open' : ''}`}>
        <div className="tech-stack-header">
          <span className="tech-stack-title">我的生态</span>
        </div>
        <div className="tech-stack-list">
          {techStacks.map((stack) => {
            const isExternal = stack.link.startsWith('http://') || stack.link.startsWith('https://');
            return (
              <a
                key={stack.name}
                href={stack.link}
                className="tech-stack-item"
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                onClick={() => setIsOpen(false)}
              >
                <span className="tech-stack-item-icon">{stack.icon}</span>
                <div className="tech-stack-item-content">
                  <span className="tech-stack-item-name">{stack.name}</span>
                  <span className="tech-stack-item-desc">{stack.description}</span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};
