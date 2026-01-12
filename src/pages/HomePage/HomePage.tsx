import React from 'react';
import HeroSection from '../../components/sections/HeroSection/HeroSection';
import FeaturedTools from '../../components/sections/FeaturedTools/FeaturedTools';
import ResourcesSection from '../../components/sections/ResourcesSection/ResourcesSection';
import styles from './HomePage.module.css';

const HomePage: React.FC = () => {
  return (
    <div className={styles.homePage}>
      
      <main className={styles.mainContent}>
        <HeroSection 
          title="Climate Smart Farming"
          subtitle="Empowering New York farmers with data-driven tools and resources for sustainable agriculture in a changing climate"
        />
        
        <FeaturedTools 
          title="Featured Tools"
          maxTools={4}
        />


        <ResourcesSection
          title="Featured Resources"
          maxResources={6}
          featuredOnly={true}
        />
      </main>

    </div>
  );
};

export default HomePage;