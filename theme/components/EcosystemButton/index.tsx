import { useEffect, useRef, useState } from 'react';
import './index.css';
import { ecosystemButton } from '../../../theme_config/ecosystemButton';

export const EcosystemButton = () => {
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
    <div className="ecosystem-button-container" ref={dropdownRef}>
      <button
        className="ecosystem-button-button"
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
        aria-label="生态导航"
        aria-expanded={isOpen}
      >
        <svg
          className="ecosystem-button-icon"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M2.5 5H5V2.5H2.5V5zM5 11.25H2.5v-2.5H5v2.5zm12.5 0H15v-2.5h2.5v2.5zm-8.75 0h2.5v-2.5h-2.5v2.5zM5 17.5H2.5V15H5v2.5zm10 0h2.5V15H15v2.5zm-3.75 0h-2.5V15h2.5v2.5zM17.5 5H15V2.5h2.5V5zM8.75 5h2.5V2.5h-2.5V5z"
            fill="currentColor"
          />
        </svg>
      </button>

      <div className={`ecosystem-button-dropdown ${isOpen ? 'open' : ''}`}>
        <div className="ecosystem-button-header">
          <span className="ecosystem-button-title">我的生态</span>
        </div>
        <div className="ecosystem-button-list">
          {ecosystemButton.map((item) => {
            const isExternal = item.link.startsWith('http://') || item.link.startsWith('https://');
            return (
              <a
                key={item.name}
                href={item.link}
                className="ecosystem-button-item"
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                onClick={() => setIsOpen(false)}
              >
                <span className="ecosystem-button-item-icon">{item.icon}</span>
                <div className="ecosystem-button-item-content">
                  <span className="ecosystem-button-item-name">{item.name}</span>
                  <span className="ecosystem-button-item-desc">{item.description}</span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};
