// src/pages/ClimateImpactsPage/ClimateImpactsPage.tsx
import React from 'react';
import HeroSection from '../../components/sections/HeroSection/HeroSection';
import Container from '../../components/common/Container/Container';
import styles from '../HomePage/HomePage.module.css';
import climateStyles from './ClimateImpactsPage.module.css';

const ClimateImpactsPage: React.FC = () => {
  return (
    <div className={styles.homePage}>
      <main className={styles.mainContent}>
        <HeroSection
          title="How is Climate Change Affecting Your Farm?"
          subtitle="Understanding climate impacts and adaptation strategies for Northeast farmers"
        />

        <Container>
          <article className={climateStyles.impactsContent}>

            {/* Introduction */}
            <section className={climateStyles.introSection}>
              <blockquote className={climateStyles.mainQuote}>
                The earth's climate is always in flux, but today's rate of change, the result of human activity, is far beyond what previous generations of farmers have had to face. Climate change is already posing new challenges, such as extreme precipitation, short term drought, heat stress, warmer winters, late spring freezes, increased pest pressures, and increased production costs.
              </blockquote>

              <p>
                Some farmers are beginning to plan to minimize the risks and capitalize on opportunities. In the Northeastern United States, there will be plenty of both. Making business decisions based on future scenarios is always a complex endeavor, and is muddled even more by trying to discern between normal weather variability and long-term climate shifts.
              </p>

              <p>
                Many of the commodities that currently dominate the Northeast agricultural sector, such as dairy products, apples, cabbage, and potatoes, are not well suited for the warming trends predicted for this century. However, there will be profitable opportunities to experiment with new crops or new crop varieties as temperatures rise and growing seasons lengthen.
              </p>

              <div className={climateStyles.resourceBox}>
                <p><strong>Additional Resources:</strong></p>
                <ul>
                  <li><a href="http://climatesmartfarming.org/wp-content/uploads/2015/09/CornellClimateChange_Farming-Success-in-an-Uncertain-Climate-Dec2014_FINAL.pdf" target="_blank" rel="noopener noreferrer">Cornell Climate Change Fact Sheet: Farming Success in an Uncertain Climate</a></li>
                  <li><a href="https://nysclimateimpacts.org/wp-content/uploads/2024/02/Assessment-ch3-agriculture-01-31-24.pdf" target="_blank" rel="noopener noreferrer">New York State Climate Impacts Assessment Agriculture Chapter</a></li>
                  <li><a href="https://www.nyserda.ny.gov/climaid" target="_blank" rel="noopener noreferrer">NYS ClimAID Report</a></li>
                </ul>
              </div>
            </section>

            {/* Flooding and Extreme Rainfall */}
            <section className={climateStyles.impactSection}>
              <h2 className={climateStyles.impactTitle}>🌧️ Flooding and Extreme Rainfall</h2>

              <p className={climateStyles.impactIntro}>
                A warmer atmosphere holds more water. Because of this, more precipitation is occurring in heavy rainfall events (more than 2 in / 48 hrs), and this trend is expected to continue.
              </p>

              <div className={climateStyles.challengeSolution}>
                <div className={climateStyles.challenges}>
                  <h3>Flooding Challenges:</h3>
                  <ul>
                    <li>Springtime flooding can delay planting and harvesting</li>
                    <li>Root damage and reduced yield due to flooding</li>
                    <li>Farm building and infrastructure damage</li>
                    <li>Soil compaction from the use of heavy machinery on wet soils</li>
                    <li>Soil loss from erosion during heavy rain events</li>
                    <li>Contamination of waterways from agricultural run-off</li>
                  </ul>
                </div>

                <div className={climateStyles.solutions}>
                  <h3>Flooding Solutions:</h3>
                  <ul>
                    <li>Increase soil organic matter for better drainage with practices such as reduced tillage, cover cropping, and use of composts or other organic amendments</li>
                    <li>Invest in tile or other drainage systems for problem fields to help transport water away from crops</li>
                    <li>Shift to more flood-tolerant crops</li>
                    <li>Buy or lease new acreage with better drainage</li>
                    <li>Shift planting dates to avoid wet conditions</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Short-term Drought */}
            <section className={climateStyles.impactSection}>
              <h2 className={climateStyles.impactTitle}>🏜️ Short-term Drought</h2>

              <p className={climateStyles.impactIntro}>
                The Northeast does not face the severe water shortages predicted for some other regions, but the risk of short-term summer drought is expected to increase over this century. Warmer temperatures and longer growing seasons will increase crop water demand, while summer rainfall will remain about the same or possibly decline.
              </p>

              <div className={climateStyles.challengeSolution}>
                <div className={climateStyles.challenges}>
                  <h3>Drought Challenges:</h3>
                  <ul>
                    <li>Declining and more variable yields of rain-fed crops</li>
                    <li>Decline in quality of high-value fruit and vegetable crops</li>
                    <li>Reduces crop yields and causes water shortages</li>
                  </ul>
                </div>

                <div className={climateStyles.solutions}>
                  <h3>Drought Solutions:</h3>
                  <ul>
                    <li>Increase irrigation capacity, particularly for high-value crops</li>
                    <li>Shift to drought-tolerant crop varieties</li>
                    <li>Shift plant dates to avoid dry periods</li>
                    <li>Reduce tillage and plant cover crops</li>
                    <li>Reduce the distance between rows of field crops to shade soil</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Heat Stress */}
            <section className={climateStyles.impactSection}>
              <h2 className={climateStyles.impactTitle}>🌡️ Heat Stress</h2>

              <p className={climateStyles.impactIntro}>
                The growing season across the state has already increased by an average of 11.5 days over the period from 1895 to 2020. With temperatures projected to warm in all seasons, growing seasons can be expected to lengthen. The number of summer heat stress days (e.g., exceeding 90°F) is also expected to increase substantially.
              </p>

              <div className={climateStyles.challengeSolution}>
                <div className={climateStyles.challenges}>
                  <h3>Heat Stress Challenges:</h3>
                  <ul>
                    <li>Warmer summer temperatures decrease yields for grain crops by speeding development and shortening grain maturation</li>
                    <li>Hot temperatures during critical phases reduce yield and quality</li>
                    <li>Heat-sensitive crops like potatoes, cabbage, snap beans, and apples become more challenging to grow</li>
                    <li>Warmer winters can increase frost and freeze damage for perennial fruit crops</li>
                    <li>Extreme heat can cause illness or death among farm workers</li>
                  </ul>
                </div>

                <div className={climateStyles.solutions}>
                  <h3>Heat Stress Solutions:</h3>
                  <ul>
                    <li>Shift planting dates to avoid heat stress during critical periods</li>
                    <li>Perform labor-intensive harvesting at night when temperatures are cooler</li>
                    <li>Explore new varieties of heat-resistant crops</li>
                    <li>Capitalize on opportunities to grow longer-season crops</li>
                    <li>Use protective covers on fruit crops</li>
                  </ul>
                </div>
              </div>

              <div className={climateStyles.calloutBox}>
                <h4>Heat Stress and Livestock</h4>
                <p>
                  Heat stress can have devastating consequences for livestock. Even moderately warm temperatures, above 75°F when combined with moderate humidity, can lead to milk production decline. In 2005, unusually warm temperatures reduced milk production 5 to 15 lbs per cow per day for many dairies (leading to losses of 8 to 20%).
                </p>

                <div className={climateStyles.livestockSolutions}>
                  <div>
                    <h5>Low Cost Solutions:</h5>
                    <ul>
                      <li>Reduce overcrowding and improve barn ventilation</li>
                      <li>Minimize heat exposure, maximize shade</li>
                      <li>Increase water availability and adjust diet</li>
                    </ul>
                  </div>
                  <div>
                    <h5>Moderate to High Cost Solutions:</h5>
                    <ul>
                      <li>Improve cooling capacity with fans, sprinklers, or misters</li>
                      <li>Insulate under barn roofs to buffer extreme heat</li>
                      <li>Build new barns with adequate cooling capacity</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Disease, Pests, and Weeds */}
            <section className={climateStyles.impactSection}>
              <h2 className={climateStyles.impactTitle}>🐛 Disease, Pests, and Weeds</h2>

              <p className={climateStyles.impactIntro}>
                Interactions between climate, crops, insects, and disease are complex, but evidence suggests that climate change will require Northeast farmers to invest in earlier and more intensive pest and weed management.
              </p>

              <div className={climateStyles.caseStudy}>
                <h4>Case Study: Brown Marmorated Stink Bug</h4>
                <p>
                  Described as "the bug from hell" after eating $37 million of the 2010 Maryland apple crop, the brown marmorated stink bug will munch on anything from orchard crops to corn and soybeans. First introduced in Pennsylvania during the '90s, these bugs are streaming northward, taking advantage of recent warm winters and long summers.
                </p>
              </div>

              <div className={climateStyles.challengeSolution}>
                <div className={climateStyles.challenges}>
                  <h3>Insect Challenges:</h3>
                  <ul>
                    <li>Spring populations expand as survivorship rates increase</li>
                    <li>Longer growing season means more insect generations per season</li>
                    <li>Higher temperatures allow new invasive species to move into the state</li>
                    <li>More pests can lead to more pesticide use</li>
                  </ul>
                </div>

                <div className={climateStyles.challenges}>
                  <h3>Weed Challenges:</h3>
                  <ul>
                    <li>Warmer weather and CO₂ favor weed growth over crop plants</li>
                    <li>Weeds need control for longer periods with greater seed production</li>
                    <li>Southern weed species are migrating northward</li>
                    <li>Climate change may reduce efficacy of certain pesticides and herbicides</li>
                  </ul>
                </div>
              </div>

              <div className={climateStyles.solutions}>
                <h3>Management Solutions:</h3>
                <ul>
                  <li>Improved rapid response plans and regional monitoring efforts</li>
                  <li>Enhanced monitoring and implementation of integrated pest management (IPM)</li>
                  <li>Use online pest forecast systems updated for changing weather patterns</li>
                </ul>
              </div>
            </section>

            {/* Freeze Risk */}
            <section className={climateStyles.impactSection}>
              <h2 className={climateStyles.impactTitle}>❄️ Freeze Risk</h2>

              <p className={climateStyles.impactIntro}>
                While global warming is causing freezes to be less severe, spring frosts and freezes are not receding as quickly as flowering is advancing, resulting in increased freeze risk.
              </p>

              <div className={climateStyles.solutions}>
                <h3>Freeze Solutions:</h3>
                <ul>
                  <li>Watch the calendar and forecast – use the <a href="/tools/apple-freeze" target="_blank">CSF Freeze Risk tools</a></li>
                  <li>Harvest early if possible</li>
                  <li>Irrigate before or during the freeze event</li>
                  <li>Use heaters and wind machines</li>
                </ul>
                <p>
                  Read more details about frost and freeze <a href="http://www.gardening.cornell.edu/weather/frost.pdf" target="_blank" rel="noopener noreferrer">here</a>.
                </p>
              </div>
            </section>

            {/* Conclusion */}
            <section className={climateStyles.conclusionSection}>
              <h2>When is it Time to Make a Change?</h2>
              <p>
                This will be a critical question for farmers. Climate scientists can provide useful information to help determine when a poor season or two is due to just "normal" bad weather, and when it is due to a shift in the climate that will likely be here to stay.
              </p>
              <p>
                At Cornell, we are working on new decision tools that will allow farmers to examine different future climate scenarios for their region, the impacts these might have on crops and livestock, and evaluate various options for timing adaptation investments to minimize negative effects or take advantage of opportunities brought about by climate change.
              </p>
            </section>

          </article>
        </Container>
      </main>
    </div>
  );
};

export default ClimateImpactsPage;