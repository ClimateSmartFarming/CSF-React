import React from 'react';
import styles from './Container.module.css';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
}

const Container: React.FC<ContainerProps> = ({ 
  children, 
  className = '', 
  fullWidth = false 
}) => {
  const containerClass = fullWidth 
    ? `${styles.containerFull} ${className}`.trim()
    : `${styles.container} ${className}`.trim();

  return (
    <div className={containerClass}>
      {children}
    </div>
  );
};

export default Container;