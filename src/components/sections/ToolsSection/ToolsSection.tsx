// src/components/sections/ToolsSection/ToolsSection.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ToolsSection.module.css';

interface Tool {
  id: string;
  title: string;
  description: string;
  icon: string;
  link: string;
}

interface ToolsSectionProps {
  title: string;
  tools: Tool[];
  viewAllLink?: string;
}

const ToolsSection: React.FC<ToolsSectionProps> = ({ title, tools, viewAllLink }) => {
  return (
    <section className={styles.toolsSection}>
      <div className={styles.toolsContainer}>
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          {viewAllLink && (
            <Link to={viewAllLink} className={styles.viewAllLink}>
              View All Tools →
            </Link>
          )}
        </div>

        <div className={styles.toolsGrid}>
          {tools.map((tool) => (
            <Link
              key={tool.id}
              to={tool.link}
              className={styles.toolCard}
            >
              <div className={styles.toolIcon}>{tool.icon}</div>
              <h3 className={styles.toolTitle}>{tool.title}</h3>
              <p className={styles.toolDescription}>{tool.description}</p>
              <span className={styles.learnMore}>Learn More →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;