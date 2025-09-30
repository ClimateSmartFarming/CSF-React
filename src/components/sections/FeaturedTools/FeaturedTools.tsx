import { useNavigate } from 'react-router-dom';
import React from 'react';
import Container from '../../common/Container/Container';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import ToolCard from './ToolCard';
import { featuredTools } from '../../../data/tools';
import styles from './FeaturedTools.module.css';

interface FeaturedToolsProps {
  maxTools?: number;
  showTitle?: boolean;
  title?: string;
}

const FeaturedTools: React.FC<FeaturedToolsProps> = ({ 
  maxTools = 4,
  showTitle = true,
  title = "Featured Tools"
}) => {
  const toolsToShow = featuredTools.slice(0, maxTools);
  const navigate = useNavigate();

  return (
    <section className={styles.featuredToolsSection}>
      <Container>
        {showTitle && (
          <SectionTitle centered>
            {title}
          </SectionTitle>
        )}
        
        <div className={styles.toolsGrid}>
          {toolsToShow.map((tool) => (
            <ToolCard 
              key={tool.id} 
              tool={tool} 
            />
          ))}
        </div>
        
        {featuredTools.length > maxTools && (
          <div className={styles.viewAllContainer}>
            <button 
              className={styles.viewAllButton}
              onClick={() => navigate('/tools')}
            >
              View All Tools
            </button>
          </div>
        )}
      </Container>
    </section>
  );
};

export default FeaturedTools;