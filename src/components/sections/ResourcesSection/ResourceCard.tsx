import React from 'react';
import type { Resource } from '../../../data/resources';
import styles from './ResourceCard.module.css';

interface ResourceCardProps {
  resource: Resource;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ resource }) => {
  const handleClick = () => {
    console.log(`Navigating to ${resource.link}`);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleClick();
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'guide': return '📖';
      case 'publication': return '📄';
      case 'video': return '🎥';
      case 'webinar': return '💻';
      case 'tool': return '🔧';
      case 'dataset': return '📊';
      default: return '📄';
    }
  };

  return (
    <div 
      className={styles.resourceCard}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`Read more about ${resource.title}`}
    >
      <div className={styles.resourceHeader}>
        <div className={styles.typeIndicator}>
          <span className={styles.typeIcon} role="img" aria-hidden="true">
            {getTypeIcon(resource.type)}
          </span>
          <span className={styles.typeLabel}>
            {resource.type}
          </span>
        </div>
        
        <div className={styles.publishDate}>
          {formatDate(resource.publishDate)}
        </div>
      </div>
      
      <div className={styles.resourceContent}>
        <h3 className={styles.resourceTitle}>
          {resource.title}
        </h3>
        
        <p className={styles.resourceDescription}>
          {resource.description}
        </p>
        
        {resource.author && (
          <p className={styles.resourceAuthor}>
            By {resource.author}
          </p>
        )}
      </div>
      
      <div className={styles.resourceFooter}>
        <div className={styles.tags}>
          {resource.tags.slice(0, 3).map((tag, index) => (
            <span key={index} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
        
        <div className={styles.readMoreLink}>
          <span>Read More →</span>
        </div>
      </div>
    </div>
  );
};

export default ResourceCard;