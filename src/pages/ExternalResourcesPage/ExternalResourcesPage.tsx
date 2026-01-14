// src/pages/ExternalResourcesPage/ExternalResourcesPage.tsx
import React from 'react';
import HeroSection from '../../components/sections/HeroSection/HeroSection';
import Container from '../../components/common/Container/Container';
import styles from '../HomePage/HomePage.module.css';
import resourceStyles from './ExternalResourcesPage.module.css';

interface Resource {
  title: string;
  description: string;
  link: string;
}

const ExternalResourcesPage: React.FC = () => {
  const resources: Resource[] = [
    {
      title: 'New York State Climate Impacts Assessment',
      description: 'A scientific investigation into how climate change affects communities, ecosystems, and agriculture in New York State.',
      link: 'https://nysclimateimpacts.org/'
    },
    {
      title: 'The Fifth National Climate Assessment',
      description: 'The US Government\'s preeminent report on climate change impacts, risks, and responses.',
      link: 'https://nca2023.globalchange.gov/'
    },
    {
      title: 'NYS Climate Resilient Farming Program',
      description: 'Cost-share assistance to farmers to reduce GHG emissions and increase climate resilience through conservation practices.',
      link: 'https://agriculture.ny.gov/soil-and-water/climate-resilient-farming'
    },
    {
      title: 'USDA COMET-Planner Tool',
      description: 'Digital carbon sequestration and greenhouse gas mitigation evaluation tool specific to conservation practices.',
      link: 'https://comet-planner.com/'
    },
    {
      title: 'NYS Draft Scoping Plan: Agriculture & Forestry',
      description: 'Climate Leadership and Community Protection Act scoping plan focused on agriculture and forestry sectors.',
      link: 'https://climate.ny.gov/resources/scoping-plan/'
    },
    {
      title: 'USDA Climate-Smart Agriculture Resources',
      description: 'Up-to-date resources, tools, and links to support the adoption of climate-smart agriculture practices on farms.',
      link: 'https://www.usda.gov/climate-smart'
    },
    {
      title: 'AFT NYS Soil Health Case Studies',
      description: 'Compelling two-page soil health economic case studies developed by American Farmland Trust.',
      link: 'https://farmland.org/project/new-york-soil-health/'
    },
    {
      title: 'Cornell\'s Natural & Working Lands Website',
      description: 'Tools, training webinars, videos, factsheets, and resources to help manage land resources sustainably.',
      link: 'https://blogs.cornell.edu/workinglands/'
    },
    {
      title: 'Economic Case Study on the Benefits of Irrigation',
      description: 'Economic case study on irrigation benefits at Intervale Community Farm in Vermont.',
      link: 'https://www.uvm.edu/aric/irrigation-case-study'
    },
    {
      title: 'NYSERDA Agriculture Energy Audit Program',
      description: 'Free energy audits to identify electric and natural gas energy efficiency measures for eligible farms.',
      link: 'https://www.nyserda.ny.gov/All-Programs/Agriculture-Energy-Audit'
    },
    {
      title: 'Forest Management & GHG Mitigation',
      description: 'Information on how forests act as carbon sinks and opportunities for greenhouse gas mitigation.',
      link: 'https://www.dec.ny.gov/lands/4969.html'
    },
    {
      title: 'Solar on Farmland Resources',
      description: 'Resources on implications of large solar installations and leasing on farmland.',
      link: 'https://farmland.org/solar'
    }
  ];

  const categories = [
    {
      title: 'Agricultural Sectors',
      items: [
        { name: 'Dairy, Poultry, and Livestock', count: 22 },
        { name: 'Field Crops', count: 24 },
        { name: 'Forestry', count: 2 },
        { name: 'Grapes', count: 6 },
        { name: 'Greenhouse, Nursery, and Sod', count: 10 },
        { name: 'Maple', count: 7 },
        { name: 'Specialty Crops', count: 9 },
        { name: 'Tree Fruit and Berries', count: 9 },
        { name: 'Vegetables', count: 14 }
      ]
    },
    {
      title: 'Adaptation Strategies',
      items: [
        { name: 'Conservation Tillage', count: 11 },
        { name: 'High-Residue Cover Crops', count: 11 },
        { name: 'Irrigation', count: 6 },
        { name: 'Multiple Adaptation Strategies', count: 14 },
        { name: 'Sod-Based Rotation', count: 3 },
        { name: 'Soil Health', count: 15 }
      ]
    },
    {
      title: 'Mitigation Strategies',
      items: [
        { name: 'Green House Gas Accounting', count: 11 },
        { name: 'Multiple Mitigation Strategies', count: 15 },
        { name: 'Nitrogen Management', count: 8 },
        { name: 'Renewable Energy', count: 5 },
        { name: 'Solar', count: 2 }
      ]
    }
  ];

  return (
    <div className={styles.homePage}>
      <main className={styles.mainContent}>
        <HeroSection
          title="External Resources"
          subtitle="Best management practices, research, and tools for climate-smart farming"
        />

        <Container>
          <section className={resourceStyles.resourceSection}>

            {/* Left Sidebar - Categories */}
            <aside className={resourceStyles.categoriesSection}>
              <h2 className={resourceStyles.sidebarTitle}>Browse by Category</h2>

              {categories.map((category, index) => (
                <div key={index} className={resourceStyles.categoryBlock}>
                  <h3 className={resourceStyles.categoryTitle}>{category.title}</h3>
                  <ul className={resourceStyles.categoryList}>
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className={resourceStyles.categoryItem}>
                        <a
                          href="https://climatesmartfarming.org/resources/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className={resourceStyles.categoryLink}
                        >
                          {item.name} <span className={resourceStyles.count}>({item.count})</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <div className={resourceStyles.calloutBox}>
                <h3>More Resources</h3>
                <p>
                  Visit the full Climate Smart Farming Resources page for additional materials.
                </p>
                <a
                  href="https://climatesmartfarming.org/resources/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={resourceStyles.viewAllButton}
                >
                  View All
                </a>
              </div>
            </aside>

            {/* Main Content - Resources Grid */}
            <div className={resourceStyles.mainContent}>
              <div className={resourceStyles.resourcesGrid}>
                {resources.map((resource, index) => (
                  <a
                    key={index}
                    href={resource.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={resourceStyles.resourceCard}
                  >
                    <h3 className={resourceStyles.resourceTitle}>{resource.title}</h3>
                    <p className={resourceStyles.resourceDescription}>{resource.description}</p>
                    <span className={resourceStyles.readMore}>Read More →</span>
                  </a>
                ))}
              </div>
            </div>

          </section>
        </Container>
      </main>
    </div>
  );
};

export default ExternalResourcesPage;