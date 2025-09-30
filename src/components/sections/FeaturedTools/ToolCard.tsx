import React from 'react';
import type { Tool } from '../../../data/tools';
import styles from './ToolCard.module.css';
import { useNavigate } from 'react-router-dom';


interface ToolCardProps {
  tool: Tool;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    // For now, just log the click - in a real app this would navigate
    navigate(`/tools/${tool.id}`);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleClick();
    }
  };

  return (
    <div
      className={styles.toolCard}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`Learn more about ${tool.title}`}
    >
      <div className={styles.toolIcon}>
        <span className={styles.iconEmoji} role="img" aria-hidden="true">
          {tool.icon}
        </span>
      </div>
      
      <h3 className={styles.toolTitle}>
        {tool.title}
      </h3>
      
      <p className={styles.toolDescription}>
        {tool.description}
      </p>
      
      <div className={styles.toolCategory}>
        <span className={`${styles.categoryBadge} ${styles[tool.category]}`}>
          {tool.category}
        </span>
      </div>
    </div>
  );
};

export default ToolCard;