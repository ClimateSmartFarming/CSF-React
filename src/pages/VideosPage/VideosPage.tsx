// src/pages/VideosPage/VideosPage.tsx
import React from 'react';
import HeroSection from '../../components/sections/HeroSection/HeroSection';
import Container from '../../components/common/Container/Container';
import styles from '../HomePage/HomePage.module.css';
import videoStyles from './VideosPage.module.css';

const VideosPage: React.FC = () => {
  return (
    <div className={styles.homePage}>
      <main className={styles.mainContent}>
        <HeroSection
          title="Videos & Webinars"
          subtitle="Gain first-hand knowledge via farmer success stories and tool demonstrations"
        />

        <Container>
          <section className={videoStyles.videoSection}>

            {/* Webinars Section */}
            <div className={videoStyles.categorySection}>
              <h2 className={videoStyles.categoryTitle}>Webinars</h2>

              <div className={videoStyles.videoGrid}>
                <div className={videoStyles.videoCard}>
                  <div className={videoStyles.videoThumbnail}>
                    <img
                      src="https://via.placeholder.com/400x225/2e7d32/ffffff?text=Webinar"
                      alt="Solar on Farmland Webinar"
                    />
                  </div>
                  <div className={videoStyles.videoContent}>
                    <h3 className={videoStyles.videoTitle}>
                      Webinar: Implications of Large Solar Installations and Leasing on Farmland
                    </h3>
                    <p className={videoStyles.videoDate}>CSF Webinar: February 12, 2021</p>
                    <p className={videoStyles.videoDescription}>
                      Explore the impacts and considerations for large-scale solar installations on agricultural land.
                    </p>
                    <div className={videoStyles.linkGroup}>
                      <a
                        href="https://climatesmartfarming.org/videos/webinar-recording-implications-of-large-solar-installations-and-leasing-on-farmland/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={videoStyles.watchLink}
                      >
                        Watch Recording →
                      </a>
                    </div>
                  </div>
                </div>

                <div className={videoStyles.videoCard}>
                  <div className={videoStyles.videoThumbnail}>
                    <img
                      src="https://via.placeholder.com/400x225/43a047/ffffff?text=Webinar"
                      alt="Climate Change Webinar"
                    />
                  </div>
                  <div className={videoStyles.videoContent}>
                    <h3 className={videoStyles.videoTitle}>
                      Webinar: Understanding Climate Change and its Impacts on Local Agriculture
                    </h3>
                    <p className={videoStyles.videoDate}>CSF Webinar: January 22, 2021</p>
                    <p className={videoStyles.videoDescription}>
                      Learn about climate change science and how it affects farming in the Northeast.
                    </p>
                    <a
                      href="https://climatesmartfarming.org/videos/webinar-understanding-climate-change-and-its-impacts-on-local-agriculture-1-22-21/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={videoStyles.watchLink}
                    >
                      Watch Recording →
                    </a>
                  </div>
                </div>

                <div className={videoStyles.videoCard}>
                  <div className={videoStyles.videoThumbnail}>
                    <img
                      src="https://via.placeholder.com/400x225/66bb6a/ffffff?text=Presentation"
                      alt="Dr. Toby Ault"
                    />
                  </div>
                  <div className={videoStyles.videoContent}>
                    <h3 className={videoStyles.videoTitle}>
                      Dr. Toby Ault presents at the Public Forum on the Climate and Community Protection Act
                    </h3>
                    <p className={videoStyles.videoDescription}>
                      Dr. Toby Ault participated in a public hearing on climate change legislation in New York, testifying as an expert witness.
                    </p>
                    <a
                      href="https://climatesmartfarming.org/videos/dr-toby-ault-presents/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={videoStyles.watchLink}
                    >
                      Watch Testimony →
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Tool Tutorials Section */}
            <div className={videoStyles.categorySection}>
              <h2 className={videoStyles.categoryTitle}>Tool Tutorials</h2>

              <div className={videoStyles.videoGrid}>
                <div className={videoStyles.videoCard}>
                  <div className={videoStyles.videoThumbnail}>
                    <img
                      src="https://via.placeholder.com/400x225/2e7d32/ffffff?text=Tutorial"
                      alt="Apple Freeze Tool"
                    />
                  </div>
                  <div className={videoStyles.videoContent}>
                    <h3 className={videoStyles.videoTitle}>
                      CSF Apple Stage/Freeze Damage Probability Tool Tutorial
                    </h3>
                    <p className={videoStyles.videoDescription}>
                      Learn how to use the Cornell CSF Apple Freeze Risk Tool, part of the Climate Smart Farming agricultural decision support tools.
                    </p>
                    <a
                      href="https://climatesmartfarming.org/videos/apple-freeze-tutorial/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={videoStyles.watchLink}
                    >
                      Watch Tutorial →
                    </a>
                  </div>
                </div>

                <div className={videoStyles.videoCard}>
                  <div className={videoStyles.videoThumbnail}>
                    <img
                      src="https://via.placeholder.com/400x225/43a047/ffffff?text=Tutorial"
                      alt="GDD Calculator"
                    />
                  </div>
                  <div className={videoStyles.videoContent}>
                    <h3 className={videoStyles.videoTitle}>
                      CSF Growing Degree Day Calculator Tool Tutorial
                    </h3>
                    <p className={videoStyles.videoDescription}>
                      Learn how to use the Cornell CSF Growing Degree Day Calculator for tracking crop development stages.
                    </p>
                    <a
                      href="https://climatesmartfarming.org/videos/gdd-tutorial/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={videoStyles.watchLink}
                    >
                      Watch Tutorial →
                    </a>
                  </div>
                </div>

                <div className={videoStyles.videoCard}>
                  <div className={videoStyles.videoThumbnail}>
                    <img
                      src="https://via.placeholder.com/400x225/66bb6a/ffffff?text=Tutorial"
                      alt="Grape Hardiness Tool"
                    />
                  </div>
                  <div className={videoStyles.videoContent}>
                    <h3 className={videoStyles.videoTitle}>
                      CSF Grape Hardiness and Freeze Risk Tool Tutorial
                    </h3>
                    <p className={videoStyles.videoDescription}>
                      Learn how to use the Cornell Grape Hardiness and Freeze Risk Tool for vineyard management.
                    </p>
                    <a
                      href="https://climatesmartfarming.org/videos/grape-hardiness-tutorial/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={videoStyles.watchLink}
                    >
                      Watch Tutorial →
                    </a>
                  </div>
                </div>

                <div className={videoStyles.videoCard}>
                  <div className={videoStyles.videoThumbnail}>
                    <img
                      src="https://via.placeholder.com/400x225/2e7d32/ffffff?text=Tutorial"
                      alt="Water Deficit Calculator"
                    />
                  </div>
                  <div className={videoStyles.videoContent}>
                    <h3 className={videoStyles.videoTitle}>
                      CSF Water Deficit Calculator Tool Tutorial
                    </h3>
                    <p className={videoStyles.videoDescription}>
                      Learn how to use the Cornell CSF Water Deficit Calculator for irrigation planning.
                    </p>
                    <a
                      href="https://climatesmartfarming.org/videos/water-deficit-tutorial/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={videoStyles.watchLink}
                    >
                      Watch Tutorial →
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Farmer Interviews Section */}
            <div className={videoStyles.categorySection}>
              <h2 className={videoStyles.categoryTitle}>Farmer Success Stories</h2>

              <div className={videoStyles.videoGrid}>
                <div className={videoStyles.videoCard}>
                  <div className={videoStyles.videoThumbnail}>
                    <img
                      src="https://via.placeholder.com/400x225/43a047/ffffff?text=Video"
                      alt="Gansvoort Farm"
                    />
                  </div>
                  <div className={videoStyles.videoContent}>
                    <h3 className={videoStyles.videoTitle}>Gansvoort Farm</h3>
                    <p className={videoStyles.videoDate}>August 2016</p>
                    <p className={videoStyles.videoDescription}>
                      Jennifer Phillips of Gansvoort Farm in Germantown, NY explains how variable weather and extreme weather events affect sheep farming.
                    </p>
                    <a
                      href="https://climatesmartfarming.org/videos/gansvoort-farm/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={videoStyles.watchLink}
                    >
                      Watch Video →
                    </a>
                  </div>
                </div>

                <div className={videoStyles.videoCard}>
                  <div className={videoStyles.videoThumbnail}>
                    <img
                      src="https://via.placeholder.com/400x225/66bb6a/ffffff?text=Video"
                      alt="Stein Farms"
                    />
                  </div>
                  <div className={videoStyles.videoContent}>
                    <h3 className={videoStyles.videoTitle}>Stein Farms</h3>
                    <p className={videoStyles.videoDate}>July 2014</p>
                    <p className={videoStyles.videoDescription}>
                      Interview with Dale Stein of Stein Farms in LeRoy, NY. An 850 dairy cow farm and field crop producer.
                    </p>
                    <a
                      href="https://climatesmartfarming.org/videos/stein-farms/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={videoStyles.watchLink}
                    >
                      Watch Video →
                    </a>
                  </div>
                </div>

                <div className={videoStyles.videoCard}>
                  <div className={videoStyles.videoThumbnail}>
                    <img
                      src="https://via.placeholder.com/400x225/2e7d32/ffffff?text=Video"
                      alt="Adaptation and Agriculture"
                    />
                  </div>
                  <div className={videoStyles.videoContent}>
                    <h3 className={videoStyles.videoTitle}>Adaptation and Agriculture</h3>
                    <p className={videoStyles.videoDate}>July 2014</p>
                    <p className={videoStyles.videoDescription}>
                      Various New York farmers and Cornell researchers discuss observed changes in extreme weather and climate variability.
                    </p>
                    <a
                      href="https://climatesmartfarming.org/videos/adaptation-and-agriculture/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={videoStyles.watchLink}
                    >
                      Watch Video →
                    </a>
                  </div>
                </div>

                <div className={videoStyles.videoCard}>
                  <div className={videoStyles.videoThumbnail}>
                    <img
                      src="https://via.placeholder.com/400x225/43a047/ffffff?text=Video"
                      alt="Apple Growers"
                    />
                  </div>
                  <div className={videoStyles.videoContent}>
                    <h3 className={videoStyles.videoTitle}>Apple Growers</h3>
                    <p className={videoStyles.videoDate}>July 2014</p>
                    <p className={videoStyles.videoDescription}>
                      Various apple growers in New York State discuss extreme weather and climate variability impacts on their farms.
                    </p>
                    <a
                      href="https://climatesmartfarming.org/videos/apple-growers/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={videoStyles.watchLink}
                    >
                      Watch Video →
                    </a>
                  </div>
                </div>

                <div className={videoStyles.videoCard}>
                  <div className={videoStyles.videoThumbnail}>
                    <img
                      src="https://via.placeholder.com/400x225/66bb6a/ffffff?text=Video"
                      alt="Common Thread Farm"
                    />
                  </div>
                  <div className={videoStyles.videoContent}>
                    <h3 className={videoStyles.videoTitle}>Common Thread Farm</h3>
                    <p className={videoStyles.videoDate}>July 2014</p>
                    <p className={videoStyles.videoDescription}>
                      Interview with Wendy Burkhart-Spiegel of Common Thread Farm in Madison, NY. A CSA emphasizing locally-produced food.
                    </p>
                    <a
                      href="https://climatesmartfarming.org/videos/common-thread-farm/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={videoStyles.watchLink}
                    >
                      Watch Video →
                    </a>
                  </div>
                </div>

                <div className={videoStyles.videoCard}>
                  <div className={videoStyles.videoThumbnail}>
                    <img
                      src="https://via.placeholder.com/400x225/2e7d32/ffffff?text=Video"
                      alt="Cornell Maple"
                    />
                  </div>
                  <div className={videoStyles.videoContent}>
                    <h3 className={videoStyles.videoTitle}>Cornell Maple</h3>
                    <p className={videoStyles.videoDate}>July 2015</p>
                    <p className={videoStyles.videoDescription}>
                      Steve Childs, NYS Maple Specialist, discusses extreme weather, climate variability, and adaptations in maple production.
                    </p>
                    <a
                      href="https://climatesmartfarming.org/videos/cornell-maple/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={videoStyles.watchLink}
                    >
                      Watch Video →
                    </a>
                  </div>
                </div>

                <div className={videoStyles.videoCard}>
                  <div className={videoStyles.videoThumbnail}>
                    <img
                      src="https://via.placeholder.com/400x225/43a047/ffffff?text=Video"
                      alt="Farming for Energy"
                    />
                  </div>
                  <div className={videoStyles.videoContent}>
                    <h3 className={videoStyles.videoTitle}>Farming for Energy</h3>
                    <p className={videoStyles.videoDate}>July 2014</p>
                    <p className={videoStyles.videoDescription}>
                      Highlights the importance and benefits of on-farm renewable energy production. Featuring Don Jensen and Chip Bailey.
                    </p>
                    <a
                      href="https://climatesmartfarming.org/videos/farming-for-energy/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={videoStyles.watchLink}
                    >
                      Watch Video →
                    </a>
                  </div>
                </div>

                <div className={videoStyles.videoCard}>
                  <div className={videoStyles.videoThumbnail}>
                    <img
                      src="https://via.placeholder.com/400x225/66bb6a/ffffff?text=Video"
                      alt="Fishkill Farms"
                    />
                  </div>
                  <div className={videoStyles.videoContent}>
                    <h3 className={videoStyles.videoTitle}>Fishkill Farms</h3>
                    <p className={videoStyles.videoDate}>Spring 2012</p>
                    <p className={videoStyles.videoDescription}>
                      Interview with Mark Doyle of Fishkill Farms in Hopewell Junction, NY. A small organic orchard dedicated to sustainable practices.
                    </p>
                    <a
                      href="https://climatesmartfarming.org/videos/fishkill-farms/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={videoStyles.watchLink}
                    >
                      Watch Video →
                    </a>
                  </div>
                </div>

                <div className={videoStyles.videoCard}>
                  <div className={videoStyles.videoThumbnail}>
                    <img
                      src="https://via.placeholder.com/400x225/2e7d32/ffffff?text=Video"
                      alt="Hahn Farm"
                    />
                  </div>
                  <div className={videoStyles.videoContent}>
                    <h3 className={videoStyles.videoTitle}>Hahn Farm</h3>
                    <p className={videoStyles.videoDate}>March 2012</p>
                    <p className={videoStyles.videoDescription}>
                      Interview with Tom Hahn of Hahn Farm in Salt Point, NY. A historic dairy farm that has diversified production.
                    </p>
                    <a
                      href="https://climatesmartfarming.org/videos/hahn-farm/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={videoStyles.watchLink}
                    >
                      Watch Video →
                    </a>
                  </div>
                </div>

                <div className={videoStyles.videoCard}>
                  <div className={videoStyles.videoThumbnail}>
                    <img
                      src="https://via.placeholder.com/400x225/43a047/ffffff?text=Video"
                      alt="KC Orchards"
                    />
                  </div>
                  <div className={videoStyles.videoContent}>
                    <h3 className={videoStyles.videoTitle}>KC Orchards</h3>
                    <p className={videoStyles.videoDate}>July 2014</p>
                    <p className={videoStyles.videoDescription}>
                      Interview with Chip Bailey of KC Orchards in Williamson, NY. A net-zero energy apple orchard.
                    </p>
                    <a
                      href="https://climatesmartfarming.org/videos/kc-orchards/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={videoStyles.watchLink}
                    >
                      Watch Video →
                    </a>
                  </div>
                </div>

                <div className={videoStyles.videoCard}>
                  <div className={videoStyles.videoThumbnail}>
                    <img
                      src="https://via.placeholder.com/400x225/66bb6a/ffffff?text=Video"
                      alt="Lawnhurst Farms"
                    />
                  </div>
                  <div className={videoStyles.videoContent}>
                    <h3 className={videoStyles.videoTitle}>Lawnhurst Farms</h3>
                    <p className={videoStyles.videoDate}>July 2014</p>
                    <p className={videoStyles.videoDescription}>
                      Interview with Don Jensen of Lawnhurst Farms in Stanley, NY. A dairy operation with an anaerobic digester.
                    </p>
                    <a
                      href="https://climatesmartfarming.org/videos/lawnhurst-farms/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={videoStyles.watchLink}
                    >
                      Watch Video →
                    </a>
                  </div>
                </div>

                <div className={videoStyles.videoCard}>
                  <div className={videoStyles.videoThumbnail}>
                    <img
                      src="https://via.placeholder.com/400x225/2e7d32/ffffff?text=Video"
                      alt="McEnroe Organic Farms"
                    />
                  </div>
                  <div className={videoStyles.videoContent}>
                    <h3 className={videoStyles.videoTitle}>McEnroe Organic Farms</h3>
                    <p className={videoStyles.videoDate}>July 2014</p>
                    <p className={videoStyles.videoDescription}>
                      Interview with Erich McEnroe of McEnroe Organic Farm in Millerton, NY. A diversified 1200 acre farm with commercial compost operations.
                    </p>
                    <a
                      href="https://climatesmartfarming.org/videos/mcenroe-organic-farms/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={videoStyles.watchLink}
                    >
                      Watch Video →
                    </a>
                  </div>
                </div>

                <div className={videoStyles.videoCard}>
                  <div className={videoStyles.videoThumbnail}>
                    <img
                      src="https://via.placeholder.com/400x225/43a047/ffffff?text=Video"
                      alt="Oechsner Farm"
                    />
                  </div>
                  <div className={videoStyles.videoContent}>
                    <h3 className={videoStyles.videoTitle}>Oechsner Farm</h3>
                    <p className={videoStyles.videoDate}>July 2015</p>
                    <p className={videoStyles.videoDescription}>
                      Thor Oechsner of Oechsner Farm in Ithaca, NY discusses extreme weather and climate variability.
                    </p>
                    <a
                      href="https://climatesmartfarming.org/videos/oechsner-farm/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={videoStyles.watchLink}
                    >
                      Watch Video →
                    </a>
                  </div>
                </div>

                <div className={videoStyles.videoCard}>
                  <div className={videoStyles.videoThumbnail}>
                    <img
                      src="https://via.placeholder.com/400x225/66bb6a/ffffff?text=Video"
                      alt="Poughkeepsie Farm Project"
                    />
                  </div>
                  <div className={videoStyles.videoContent}>
                    <h3 className={videoStyles.videoTitle}>Poughkeepsie Farm Project</h3>
                    <p className={videoStyles.videoDate}>July 2014</p>
                    <p className={videoStyles.videoDescription}>
                      Interview with Jesica Clark of the Poughkeepsie Farm Project. A CSA and certified naturally grown farm with educational focus.
                    </p>
                    <a
                      href="https://climatesmartfarming.org/videos/poughkeepsie-farm-project/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={videoStyles.watchLink}
                    >
                      Watch Video →
                    </a>
                  </div>
                </div>

                <div className={videoStyles.videoCard}>
                  <div className={videoStyles.videoThumbnail}>
                    <img
                      src="https://via.placeholder.com/400x225/2e7d32/ffffff?text=Video"
                      alt="Six Mile Creek Vineyard"
                    />
                  </div>
                  <div className={videoStyles.videoContent}>
                    <h3 className={videoStyles.videoTitle}>Six Mile Creek Vineyard</h3>
                    <p className={videoStyles.videoDate}>July 2014</p>
                    <p className={videoStyles.videoDescription}>
                      Interview with Paul King, farm manager of Six Mile Creek Vineyard in Ithaca, NY. A small vineyard producing wine and spirits.
                    </p>
                    <a
                      href="https://climatesmartfarming.org/videos/six-mile-creek-vineyard/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={videoStyles.watchLink}
                    >
                      Watch Video →
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </section>
        </Container>
      </main>
    </div>
  );
};

export default VideosPage;