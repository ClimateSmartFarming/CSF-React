// src/pages/ContactPage/ContactPage.tsx
import React from 'react';
import HeroSection from '../../components/sections/HeroSection/HeroSection';
import Container from '../../components/common/Container/Container';
import styles from '../HomePage/HomePage.module.css';
import contactStyles from './ContactPage.module.css';

const ContactPage: React.FC = () => {
  return (
    <div className={styles.homePage}>
      <main className={styles.mainContent}>
        <HeroSection
          title="Contact Us"
          subtitle="Get in touch with the Cornell Climate Smart Farming team"
        />

        <Container>
          <section className={contactStyles.contactSection}>

            <div className={contactStyles.contactGrid}>

              {/* Contact Information */}
              <div className={contactStyles.infoCard}>
                <h2>Cornell Climate Smart Farming Program</h2>
                <p className={contactStyles.intro}>
                  We're here to help farmers in New York and the Northeast US adapt to climate change and implement sustainable farming practices.
                </p>

                <div className={contactStyles.contactDetails}>
                  <div className={contactStyles.contactItem}>
                    <h3>📧 Email</h3>
                    <p>
                      <a href="mailto:climatesmartsolutions@gmail.com">
                        climatesmartsolutions@gmail.com
                      </a>
                    </p>
                  </div>

                  <div className={contactStyles.contactItem}>
                    <h3>🏢 Location</h3>
                    <p>
                      Cornell University<br />
                      College of Agriculture and Life Sciences<br />
                      Ithaca, NY 14853
                    </p>
                  </div>

                  <div className={contactStyles.contactItem}>
                    <h3>🗺️ Find Your Local Extension Associate</h3>
                    <p>
                      Looking for local support? Use our interactive map to find your nearest Cornell Cooperative Extension associate.
                    </p>
                    <a href="/map" className={contactStyles.mapButton}>
                      View Extension Associate Map
                    </a>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className={contactStyles.quickLinks}>
                <h3>Quick Links</h3>
                <ul>
                  <li>
                    <a href="/tools/decision">CSF Decision Tools</a>
                  </li>
                  <li>
                    <a href="/tools/climate">CSF Climate Tools</a>
                  </li>
                  <li>
                    <a href="/programs">Programs & Fellowships</a>
                  </li>
                  <li>
                    <a href="/videos">Videos & Webinars</a>
                  </li>
                  <li>
                    <a href="/resources/external">External Resources</a>
                  </li>
                  <li>
                    <a href="/news">Latest News</a>
                  </li>
                </ul>

                <div className={contactStyles.socialMedia}>
                  <h3>Follow Us</h3>
                  <div className={contactStyles.socialIcons}>
                    <a
                      href="https://www.facebook.com/ClimateSmartCU"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={contactStyles.socialLink}
                    >
                      Facebook
                    </a>
                    <a
                      href="https://twitter.com/ClimateSmartCU"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={contactStyles.socialLink}
                    >
                      Twitter
                    </a>
                    <a
                      href="https://www.youtube.com/channel/UC18K9H429WZ8V-H9gGrJzzQ"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={contactStyles.socialLink}
                    >
                      YouTube
                    </a>
                  </div>
                </div>
              </div>

            </div>

            {/* Additional Information */}
            <div className={contactStyles.additionalInfo}>
              <h2>About Our Program</h2>
              <p>
                The Cornell Climate Smart Farming program is a collaborative effort between Cornell University, Cornell Cooperative Extension, and the USDA Northeast Climate Hub. We provide research-based tools, resources, and support to help farmers adapt to climate change and reduce greenhouse gas emissions.
              </p>
              <p>
                Whether you're interested in learning about climate-smart practices, accessing decision support tools, or connecting with agricultural advisors, we're here to support your farming operation.
              </p>
            </div>

          </section>
        </Container>
      </main>
    </div>
  );
};

export default ContactPage;