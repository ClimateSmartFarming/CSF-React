import React from 'react';
import Container from '../../common/Container/Container';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import ResourceCard from './ResourceCard';
import { getFeaturedResources } from '../../../data/resources';
import styles from './ResourcesSection.module.css';

interface ResourcesSectionProps {
  showTitle?: boolean;
  title?: string;
  maxResources?: number;
  featuredOnly?: boolean;
}

const ResourcesSection: React.FC<ResourcesSectionProps> = ({ 
  showTitle = true,
  title = "Featured Resources",
  maxResources = 6
}) => {
  const allResources = getFeaturedResources();
  const resourcesToShow = allResources.slice(0, maxResources);

  return (
    <section className={styles.resourcesSection}>
      <Container>
        {showTitle && (
          <SectionTitle centered>
            {title}
          </SectionTitle>
        )}
        
        <div className={styles.resourcesDescription}>
          <p>
            Access our collection of research-based guides, tools, and educational materials 
            designed to help farmers adapt to changing climate conditions and implement 
            sustainable agricultural practices.
          </p>
        </div>
        
        <div className={styles.resourcesGrid}>
          {resourcesToShow.map((resource) => (
            <ResourceCard 
              key={resource.id} 
              resource={resource} 
            />
          ))}
        </div>
        
        {allResources.length > maxResources && (
          <div className={styles.viewAllContainer}>
            <button 
              className={styles.viewAllButton}
              onClick={() => console.log('Navigate to all resources')}
            >
              Browse All Resources
            </button>
          </div>
        )}
      </Container>
    </section>
  );
};

export default ResourcesSection;