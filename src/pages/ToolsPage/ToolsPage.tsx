import React from 'react';
import HeroSection from '../../components/sections/HeroSection/HeroSection';
import styles from '../HomePage/HomePage.module.css';
import FeaturedTools from "../../components/sections/FeaturedTools/FeaturedTools.tsx";
import Container from '../../components/common/Container/Container';

const ToolsPage: React.FC = () => {
  return (
    <div className={styles.homePage}>

        <main className={styles.mainContent}>
            <HeroSection
              title="Tools"
              subtitle=""
            />

            <Container>
            <p>
                The Cornell Climate Smart Farming online toolkit is designed to help farmers from the Northeast US
                improve their productivity and resiliency in the face of a changing climate. These decision support
                tools are used when making informed decisions about production systems based on location-specific
                climate data, weather forecasts, and future outlooks. All CSF tools allow for selection of multiple
                locations, at the field level, in order to receive the most local and relevant data. Tools produced by
                other organizations, including NOAA and USDA, are also provided.
            </p>
            </Container>

            <FeaturedTools
                showTitle={false}
                maxTools={12}
            />

        </main>

    </div>
  );
};

export default ToolsPage;