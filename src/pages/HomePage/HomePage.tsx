import React from 'react';
import Header from '../../components/layout/Header/Header';
import Footer from '../../components/layout/Footer/Footer';
import HeroSection from '../../components/sections/HeroSection/HeroSection';
import FeaturedTools from '../../components/sections/FeaturedTools/FeaturedTools';
import TeamSection from '../../components/sections/TeamSection/TeamSection';
import ResourcesSection from '../../components/sections/ResourcesSection/ResourcesSection';
import styles from './HomePage.module.css';

const HomePage: React.FC = () => {
  return (
    <div className={styles.homePage}>
      <Header />
      
      <main className={styles.mainContent}>
        <HeroSection 
          title="Climate Smart Farming"
          subtitle="Empowering New York farmers with data-driven tools and resources for sustainable agriculture in a changing climate"
        />
        
        <FeaturedTools 
          title="Featured Tools"
          maxTools={8}
        />
        
        <TeamSection 
          title="Meet Our Team"
          maxMembers={6}
        />
        
        <ResourcesSection 
          title="Featured Resources"
          maxResources={6}
          featuredOnly={true}
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default HomePage;