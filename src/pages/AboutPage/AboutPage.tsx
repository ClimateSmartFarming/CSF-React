import React from 'react';
import HeroSection from '../../components/sections/HeroSection/HeroSection';
import styles from '../HomePage/HomePage.module.css';

const AboutPage: React.FC = () => {
  return (
    <div className={styles.homePage}>

        <main className={styles.mainContent}>
            <HeroSection
              title="About Us"
            />

            <h3>
                The Cornell Climate Smart Farming program is a voluntary initiative that
                    helps farmers in New York and the Northeastern US to:
            </h3>

            <ul>
                <li>Increase agricultural productivity and farming incomes sustainably</li>
                <li>Reduce greenhouse gas emissions from agricultural production through adoption of best
                    management practices, increased energy efficiency, use of renewable energy, and increased
                    carbon sequestration
                </li>
                <li>Increase farm resiliency to extreme weather and climate variability through the adoption of
                    best management practices for climate change adaptation
                </li>
            </ul>

            <p>
                Our program follows the three pillars of <a
                    href="https://www.fao.org/climate-smart-agriculture/en/">Climate-Smart Agriculture</a>, as
                    defined by the UN Food and Agriculture Organization, and the USDA’s <a
                        href="https://www.usda.gov/climate-solutions">Climate-Smart Agriculture and Forestry
                        Initiative</a>.
            </p>

            <h3>
                Research and Extension Specialists can help farmers to:
            </h3>

            <ul>
                <li>Identify on-farm vulnerabilities to extreme weather and variability; inventory energy use
                    and greenhouse gas (GHG) emissions on the farm; set goals and plan for adaptation,
                    mitigation, and increased carbon sequestration
                </li>
                <li>Increase on-farm adaptation through best management practices, including cropping systems,
                    IPM, land-use planning, and water resource management
                </li>
                <li>Upgrade infrastructure, such as cooling, irrigation, drainage, and waste management systems
                    for increased resiliency
                </li>
                <li>Increase&nbsp;farm energy efficiency and install renewable energy systems on the farm, which
                    can contribute to cost savings
                </li>
                <li>Adopt best management practices to reduce GHG emissions and sequester carbon through
                    Cornell-recommended practices (e.g. soil health, cover crops, low-till practices)
                </li>
                <li>Improve on-farm recycling, solid waste disposal, and nutrient management practices</li>
                <li>Utilize new climate-smart agricultural decision support tools with Cornell University</li>
                <li>Support local food and climate-smart initiatives in the surrounding community</li>
                <li>Inform and inspire other farmers to be leaders and innovators through peer-to-peer
                    information exchange and recognition
                </li>
            </ul>
            <p align="left">
                <strong>For more information, contact the CSF Program at:<br/>
                <a href="mailto:climatesmartsolutions@gmail.com">climatesmartsolutions@gmail.com</a>
                </strong>
            </p>

        </main>

    </div>
  );
};

export default AboutPage;