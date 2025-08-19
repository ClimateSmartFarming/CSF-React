import React from 'react';
import styles from './SectionTitle.module.css';

interface SectionTitleProps {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  centered?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  children, 
  level = 2, 
  className = '',
  centered = false
}) => {
  const titleClass = `${styles.sectionTitle} ${centered ? styles.centered : ''} ${className}`.trim();

  if (level === 1) return <h1 className={titleClass}>{children}</h1>;
  if (level === 2) return <h2 className={titleClass}>{children}</h2>;
  if (level === 3) return <h3 className={titleClass}>{children}</h3>;
  if (level === 4) return <h4 className={titleClass}>{children}</h4>;
  if (level === 5) return <h5 className={titleClass}>{children}</h5>;
  return <h6 className={titleClass}>{children}</h6>;
};

export default SectionTitle;