import { useEffect, useRef, useState } from 'react';
import './index.css';
import { techStacks } from '../../../theme_config/techStacks';

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
