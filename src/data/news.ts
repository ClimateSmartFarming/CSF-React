// src/data/news.ts

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  image?: string;
  author?: string;
  category?: string;
}

export const newsItems: NewsItem[] = [
  {
    id: 'sarah-ficken-adaptation',
    title: 'Sarah Ficken: There\'s Always More to Learn About Adaptation',
    date: '2026-01-12',
    excerpt: 'Dairy Climate Adaptation and Mitigation Fellow, Sarah Ficken, gained a wealth of new knowledge even as a project leader.',
    content: `
      <p>Sarah Ficken works in the dairy industry both as a farmer and as program manager for a dairy training program in New York (NY). She is also on the leadership team for the Dairy Climate Adaptation and Mitigation Fellowship (Dairy CAMF). Even as a member of the Dairy CAMF leadership team, Sarah still learned a great deal about how to prepare her farm for extreme weather events.</p>
      
      <p>Sarah and her husband, Chris, run a first-generation farm, New Moon Farmstead, in Munnsville, NY. The farm consists of 35 cows and focuses on grazing and sustainable practices.</p>
      
      <p>Through the Dairy CAMF program, Sarah gained valuable insights into climate adaptation strategies that she could apply to her own operation, demonstrating that learning about climate resilience is an ongoing process for all farmers.</p>
    `,
    image: 'https://via.placeholder.com/800x400/2e7d32/ffffff?text=Sarah+Ficken',
    category: 'Dairy CAMF'
  },
  {
    id: 'amber-machia-vermont',
    title: 'Amber Machia: Helping Vermont\'s Dairies Become Resilient',
    date: '2026-01-03',
    excerpt: 'Dairy Climate Adaptation and Mitigation Fellow, Amber Machia, gained valuable resilience-building experience that she carries into her professional career.',
    content: `
      <p>During her time with the Dairy Climate Adaptation and Mitigation Fellowship (Dairy CAMF), Amber Machia was an advisor to dairy farmer Brian McGarry. Alongside his parents, Brian owns McGarry Dairy in Berkshire, Vermont, where they milk around one hundred cows.</p>
      
      <p>Amber farmed for 13 years, and now works with the University of Vermont (UVM) Extension, focusing on dairy research and outreach. In her role, she supports dairy farms across the state, focusing on nutrient and feed management.</p>
      
      <p>Dairy CAMF provided Amber with practical tools and frameworks for helping farmers build climate resilience on their operations.</p>
    `,
    image: 'https://via.placeholder.com/800x400/43a047/ffffff?text=Amber+Machia',
    category: 'Dairy CAMF'
  },
  {
    id: 'koval-duo-resilience',
    title: 'The Kovals: Wife and Husband Duo Build Resilience On Their Farm',
    date: '2026-01-02',
    excerpt: 'Dairy Climate Adaptation and Mitigation Fellows Jennifer and Chris Koval worked together as advisor and farmer pair to better prepare their farm for extreme weather events.',
    content: `
      <p>Wife and husband duo Jennifer and Chris Koval operate a dairy farm milking 500 cows in Saratoga County, New York. The couple participated in the 2024 Dairy Climate Adaptation and Mitigation Fellowship (Dairy CAMF).</p>
      
      <p>Dairy farmers are paired with agricultural advisors as part of the program, guiding them in decision-making and identifying challenges. The Kovals had a unique partnership: Jennifer served as the advisor fellow for her husband, Chris, the farmer fellow.</p>
      
      <p>For Chris, having his wife as his advisor meant having someone who truly understood the day-to-day operations and challenges of their farm, making the adaptation planning process more effective and tailored to their specific needs.</p>
    `,
    image: 'https://via.placeholder.com/800x400/66bb6a/ffffff?text=Koval+Farm',
    category: 'Dairy CAMF'
  },
  {
    id: 'emily-mccarthy-water',
    title: 'Emily McCarthy: Collecting Clean Water and Preventing Pollution',
    date: '2025-12-30',
    excerpt: 'Dairy Climate Adaptation and Mitigation Fellow Emily McCarthy worked with dairy farmer Neal Foley to manage excess water on his farm.',
    content: `
      <p>Dairy Climate Adaptation and Mitigation Fellowship (Dairy CAMF) advisor fellow Emily McCarthy partnered with dairy farmer Neal Foley to increase farm resilience in Waldoboro, Maine.</p>
      
      <p>Emily worked for the Maine Farmland Trust (MFT) as part of two different teams supporting farmers with conservation easements on farm properties and helping interested farmers develop climate adaptation plans.</p>
      
      <p>For many years, Emily has known Neal, who operates a small-scale dairy farm, East Forty Farm and Lakin's Gorges Cheeses, with his wife. Together, they developed strategies for managing excess water on the farm to prevent pollution and improve water quality.</p>
    `,
    image: 'https://via.placeholder.com/800x400/2e7d32/ffffff?text=Water+Management',
    category: 'Dairy CAMF'
  },
  {
    id: 'cop30-un-conference',
    title: 'Climate Smart Farming at the 2025 United Nations Climate Change Conference',
    date: '2025-11-26',
    excerpt: 'Cornell Climate Smart Farming represented at COP30 in Belém, Brazil, sharing work on climate adaptation and AI innovations.',
    content: `
      <p>By Candace Hulbert</p>
      
      <p>Last week, I had the honor of attending Week 2 of the UN Climate Change Conference in Belém, Brazil, as a part of the Cornell University delegation, where I shared the work of the Cornell Atkinson Center for Sustainability, AI-LEAF Institute, Cornell Climate Smart Farming Program, and the Johannes Lehmann Lab.</p>
      
      <p>COP30 was incredibly insightful, offering a window into climate policy from the local to the global scale. I had the opportunity to connect with climate professionals from all over the world, observe international climate negotiations, learn from leading experts about carbon markets for high-integrity removal, and share Cornell's innovative work in climate-smart agriculture.</p>
    `,
    image: 'https://via.placeholder.com/800x400/43a047/ffffff?text=COP30',
    author: 'Candace Hulbert',
    category: 'Conference'
  },
  {
    id: 'nys-climate-resilient-grant',
    title: 'New York State Department of Agriculture and Markets Announces Climate-Resilient Farming Grant Opportunity',
    date: '2025-10-20',
    excerpt: 'Funding opportunity for NY State Soil and Water Conservation Districts to complete climate mitigation and adaptation projects.',
    content: `
      <p>The New York Department of Agriculture and Markets announces a funding opportunity for New York State Soil and Water Conservation Districts to complete projects that mitigate agriculture's impact on climate change. The funds can also be used for projects that enhance on-farm adaptation and resiliency to increased climate change effects.</p>
      
      <p>Applications must fall into one of the following categories:</p>
      <ul>
        <li>Track 1: Livestock Management: Alternative Waste Management and Precision Feed Management</li>
        <li>Track 2: Adaptation and Resiliency</li>
        <li>Track 3: Healthy Soils NY (Systems and BMPs that support soil health and agroforestry)</li>
        <li>Track 4: Agricultural Forest Management</li>
      </ul>
      
      <p>The deadline for submitting proposals is approaching. Visit the NYS Ag & Markets website for more information.</p>
    `,
    image: 'https://via.placeholder.com/800x400/66bb6a/ffffff?text=Grant+Opportunity',
    category: 'Funding'
  },
  {
    id: 'fao-digital-agriculture',
    title: 'Watch As Members of Climate Smart Farming Present In "Travel Around the World with Digital FAO and Agro-Informatics"',
    date: '2025-10-20',
    excerpt: 'Cornell faculty and students showcase AI and digital tools for climate-smart agriculture in virtual workshop.',
    content: `
      <p>In September, Cornell faculty and students from Climate Smart Farming and AI-LEAF joined the Food and Agriculture Organization of the United Nations for a Zoom titled "Travel Around the World with Digital FAO and Agro-Informatics."</p>
      
      <p>The session featured Dr. Allison Chatrchyan, Dr. Louis Longchamps, and Ph.D. students Phillip Lanza, Lee Dunnigan, and Haodi Xu, who presented their work on using artificial intelligence to help farmers mitigate and adapt to climate change.</p>
      
      <p>The virtual workshop is part of a series that connects universities from around the world to showcase how researchers can use digital tools in the study of agrifood systems and climate adaptation.</p>
    `,
    image: 'https://via.placeholder.com/800x400/2e7d32/ffffff?text=Digital+Agriculture',
    category: 'Research'
  },
  {
    id: 'urban-camp-nyc-announcement',
    title: 'Resiliency Rising: New Program Supports NYC Farmers and Advisors Adapting to New Extremes',
    date: '2025-09-30',
    excerpt: 'Urban Climate Adaptation and Mitigation Program launched to help NYC urban farmers address increasing weather extremes.',
    content: `
      <p>Urban agriculture provides more than just fresh food to cities. Farms and garden spaces reduce the urban heat island effect, decrease stormwater runoff, provide wildlife habitat, and give city occupants a beautiful place to socialize and recreate.</p>
      
      <p>Recently, more frequent and intense flooding, drought, and record-breaking temperature events have negatively impacted urban farmers. To remain productive and profitable, urban farmers need support to address increasing weather extremes.</p>
      
      <p>In response to the challenges facing urban agriculture, the USDA Northeast Climate Hub, Cornell University, and Harvest NY Cooperative Extension developed the Urban Climate Adaptation and Mitigation Program (Urban CAMP) in New York City to help urban farmers build resilience.</p>
    `,
    image: 'https://via.placeholder.com/800x400/43a047/ffffff?text=Urban+CAMP',
    category: 'Urban Agriculture'
  },
  {
    id: 'urban-camp-nyc-strategies',
    title: 'Resiliency Rising: NYC Urban Farmers Dig into Adaptation Strategies',
    date: '2025-09-30',
    excerpt: 'NYC urban farmers face unique micro-climates and challenges requiring tailored adaptation strategies.',
    content: `
      <p>Like their rural counterparts, urban farmers are facing more drought, heat, heavy rain, floods, and high wind events. Adapting to these challenges is not one-size-fits-all. Many farmers have been struggling to remain productive and profitable.</p>
      
      <p>In New York City (NYC), farmers experience unique micro-climates across the five boroughs; each created by its geographic location and surrounding infrastructure. Some farms experience strong winds caused by daily temperature swings. Others deal with frequent flooding and saltwater intrusion caused by rising sea levels.</p>
      
      <p>In response to these challenges, the USDA Northeast Climate Hub and Cornell University's Cooperative Extension delivered the Urban Climate Adaptation and Mitigation Program, providing farmers with tailored strategies for their specific urban farming conditions.</p>
    `,
    image: 'https://via.placeholder.com/800x400/66bb6a/ffffff?text=NYC+Farmers',
    category: 'Urban Agriculture'
  },
  {
    id: 'fao-cornell-announcement',
    title: '"Travel Around the World with Digital FAO and Agro-Informatics" Next Stop: Cornell University',
    date: '2025-09-08',
    excerpt: 'Join Cornell experts on Zoom for presentations on climate-smart farming, digital agriculture, and AI-LEAF innovations.',
    content: `
      <p>Please join us on Zoom for "Travel Around the World with Digital FAO and Agro-Informatics." Hear from Cornell experts on climate-smart farming, digital agriculture, and AI-LEAF innovations.</p>
      
      <p>Our lineup includes:</p>
      <ul>
        <li>Allison Chatrchyan, Ph.D. (Climate-Smart Farming Tools & AI-LEAF Institute)</li>
        <li>Louis Longchamps, Ph.D. (Digital Agriculture & On-Farm Experimentation)</li>
        <li>Phillips Lanza (CALS Ph.D. Student)</li>
        <li>Lee Dunnigan (Cornell & AI-LEAF Ph.D. Student)</li>
        <li>Haodi Xu (Cornell & AI-LEAF Ph.D. Student)</li>
      </ul>
      
      <p>Stick around for an exciting Q&A and discussion!</p>
      <p>September 10 | 9:00 AM Eastern Time</p>
    `,
    image: 'https://via.placeholder.com/800x400/2e7d32/ffffff?text=Cornell+Presentation',
    category: 'Event'
  },
  {
    id: 'field-days-biochar',
    title: 'Field Days: Biochar, Cover Crops, and Urban Agriculture',
    date: '2025-09-05',
    excerpt: 'Learn in the field at New York Soil Health Field Days featuring biochar, cover crops, and urban agriculture.',
    content: `
      <p>Learn in the field with us at New York Soil Health Field Days! Join us on September 9th to hear from presenters and learn all about biochar, cover crops, urban agriculture, and much more!</p>
      
      <p>The event will take place from 1:00 p.m. to 5:00 p.m. at Spruce Haven Farm. We would appreciate it if all participants could pre-register for the event. However, walk-ins are welcome. Attendance is free.</p>
      
      <p>Please join us to learn more about biochar and its application on your farm. See you there!</p>
      
      <p><strong>When:</strong> September 9, 1:00 p.m. to 5:00 p.m.</p>
      <p><strong>Where:</strong> Spruce Haven Farm, 5004 Route 414, Burdett, NY 14818</p>
    `,
    image: 'https://via.placeholder.com/800x400/43a047/ffffff?text=Field+Days',
    category: 'Event'
  },
  {
    id: 'rick-villnave-camf',
    title: 'Dairy CAMF Success Stories: Rick Villnave',
    date: '2025-08-04',
    excerpt: 'Dairy Climate Adaptation Fellow Rick Villnave uses cover crops and tile drainage to protect soil and improve health.',
    content: `
      <p>Dairy Climate Adaptation and Mitigation Fellow Rick Villnave uses cover crops and tile drainage to protect his soil from erosion and improve the soil's health.</p>
      
      <p>As a fellow for the Dairy Climate Adaptation and Mitigation Fellowship (Dairy CAMF), Rick Villnave focuses on using cover crops to improve his farm's soil health and productivity. Rick owns and operates Villnave Family Farm in Cortland County, NY.</p>
      
      <p>His farm consists of field and vegetable crops, including oats, corn, hay, sweet corn, pumpkins, cabbage, and winter squash. The 250-acre farm has a unique history. Once part of a ski slope, Villnave Family Farm now serves as a model for soil health practices in the region.</p>
    `,
    image: 'https://via.placeholder.com/800x400/66bb6a/ffffff?text=Villnave+Farm',
    category: 'Dairy CAMF'
  },
  {
    id: 'tim-terry-camf',
    title: 'Dairy CAMF Success Stories: Tim Terry',
    date: '2025-08-04',
    excerpt: 'Dairy Climate Adaptation Fellow Tim Terry collaborates with dairy farmers to help design farms for greater resilience and efficiency.',
    content: `
      <p>Dairy Climate Adaptation and Mitigation Fellow Tim Terry collaborates with dairy farmers to help design their farms for greater resilience and efficiency in the face of climate change.</p>
      
      <p>As an advisor in the Dairy Climate Adaptation and Mitigation Fellowship (Dairy CAMF), Tim Terry worked with dairy farmer Julia Olmstead as she reduced risk on her farm. As the Farmstead Strategic Planning Specialist with Cornell's PRO-DAIRY, Tim combines his background in dairy management with his engineering expertise to help dairy farmers design sustainable and productive facilities.</p>
      
      <p>Tim decided to participate in Dairy CAMF as a professional development opportunity. His goal was to expand his knowledge of climate adaptation strategies that he could share with the dairy farmers he works with across New York State.</p>
    `,
    image: 'https://via.placeholder.com/800x400/2e7d32/ffffff?text=Tim+Terry',
    category: 'Dairy CAMF'
  },
  {
    id: 'julia-olmstead-camf',
    title: 'Dairy CAMF Success Stories: Julia Olmstead',
    date: '2025-08-01',
    excerpt: 'Dairy Climate Adaptation Fellow Julia Olmstead shares the importance of sitting down and making adaptation plans for your farm.',
    content: `
      <p>Dairy Climate Adaptation and Mitigation Fellow Julia Olmstead shares the importance of sitting down and making adaptation and mitigation plans for your farm.</p>
      
      <p>During the Dairy Climate Adaptation and Mitigation Fellowship (Dairy CAMF), Julia Olmstead worked to improve her farm's manure management and silage storage. Julia is a co-owner and operator of Mid-Knight Dairy, LLC, a 300-acre dairy farm in Jamestown, New York.</p>
      
      <p>Her dairy milks 140 Holstein cows and raises 130 heifers. Her focus is on milk production and quality. In recent years, Mid-Knight Diary has been utilizing technology such as robotics to achieve that goal. Through CAMF, Julia developed concrete plans for improving climate resilience on her operation.</p>
    `,
    image: 'https://via.placeholder.com/800x400/43a047/ffffff?text=Julia+Olmstead',
    category: 'Dairy CAMF'
  },
  {
    id: 'urban-camp-announcement-june',
    title: 'NYC Urban Climate Adaptation and Mitigation Program',
    date: '2025-06-11',
    excerpt: 'Cornell\'s Climate Smart Farming team launches Urban CAMP program in New York City for urban farmers.',
    content: `
      <p>Over the winter to early spring of 2025, members of Cornell's Climate Smart Farming team (Allison Chatrchyan, Yolanda Gonzalez, and Savanna Shelnutt) began working with the USDA Northeast Climate Hub (Kristin Benson) to run an Urban Climate Adaptation & Mitigation Program in New York City.</p>
      
      <p>The Urban Climate Adaptation and Mitigation Program (Urban CAMP) is a peer-to-peer-based learning and training opportunity for urban farmers and technical service providers who are interested in climate change adaptation and mitigation.</p>
      
      <p>This program is for urban producers who are thinking about climate change, are interested in learning about climate impacts, and are motivated to develop adaptation and mitigation strategies for their urban farming operations.</p>
    `,
    image: 'https://via.placeholder.com/800x400/66bb6a/ffffff?text=Urban+CAMP',
    category: 'Urban Agriculture'
  },
  {
    id: 'interlace-commons-field-days',
    title: 'Interlace Commons Field Days',
    date: '2024-08-09',
    excerpt: 'Interlace Commons promotes agroforestry practices through farmer-driven field projects and education throughout the Northeast.',
    content: `
      <p>Interlace Commons's mission is to promote the adoption of agroforestry land-use practices that address climate change and land degradation and move towards resilient, biodiverse landscapes that enhance livelihoods.</p>
      
      <p>Their mission is achieved through farmer-driven field projects, education, and research initiatives throughout the Northeastern United States.</p>
      
      <p>Interlace Commons will be holding free field day events in the Northeast this summer and fall. Visit their Eventbrite page to learn more about field day events and register!</p>
    `,
    image: 'https://via.placeholder.com/800x400/2e7d32/ffffff?text=Agroforestry',
    category: 'Event'
  },
  {
    id: 'urban-ag-climate-field-days',
    title: 'Urban Ag Climate Field Days',
    date: '2024-07-08',
    excerpt: 'Join Cornell Cooperative Extension to learn about climate resilience, adaptation planning and soil health for urban farms.',
    content: `
      <p>Join Cornell Cooperative Extension's Ag Climate Resiliency Program, Cornell Climate Smart Farming and Cornell Soil Health, and Harvest NY to learn all about the basics of climate resilience, adaptation planning and soil health.</p>
      
      <p>Whether you're a seasoned farmer or just getting started, this event is perfect for anyone interested in learning about best practices for building climate resilience on urban farms. Look forward to seeing you there, light refreshments will be served.</p>
      
      <p><strong>July 11th, 2024</strong> - Brooklyn Grange Navy Yard (4-6pm)</p>
      <p><strong>July 12th, 2024</strong> - Governor's Island Teaching Garden (3-5pm)</p>
      
      <p>Please Note: These are two separate events, please choose the date that works best for you.</p>
    `,
    image: 'https://via.placeholder.com/800x400/43a047/ffffff?text=Urban+Field+Days',
    category: 'Event'
  },
  {
    id: 'aurora-farm-field-day-2024',
    title: '2024 Aurora Farm Field Day',
    date: '2024-06-21',
    excerpt: 'Annual Cornell Research Field Day at Musgrave Research Farm features walking tours, speakers, and latest research.',
    content: `
      <p>The annual Cornell Research Field Day will be held August 1st at Musgrave Research Farm in Aurora N.Y from 9:00 am to 3:00 pm.</p>
      
      <p>This event will include walking and hay wagon tours with multiple different tour stops and speakers. The program is free and open to the public. A light breakfast and lunch will also be provided.</p>
      
      <p><strong>Tour Stops and Speakers:</strong></p>
      <ul>
        <li>Vipan Kumar: Herbicide programs for weed control in corn and soybean</li>
        <li>Mike Hunter & Lynn Sosnoskie: Weed seed movement and equipment cleaning</li>
        <li>Louis Longchamps: On-farm experimentation, robotic interseeding</li>
        <li>Ginny Moore and Erika Everest: Dry-bean production</li>
      </ul>
    `,
    image: 'https://via.placeholder.com/800x400/66bb6a/ffffff?text=Field+Day',
    category: 'Event'
  },
  {
    id: 'soil-health-field-days-2024',
    title: 'Soil Health and Climate Resiliency Field Days',
    date: '2024-06-12',
    excerpt: 'NY Soil Health team holds 11 field days across New York State covering vineyard, urban, and pasture soil health.',
    content: `
      <p>The NY Soil Health team will hold 11 soil health and climate resiliency field days across New York State during the months of June – September 2024.</p>
      
      <p>These field days are designed to help farmers by providing practical information and demonstrations. Field days cover a variety of different topics including vineyard soil health, soil biology, urban soil health, biochar, cover crops, orchard soil health, organic field crops, and pasture and silvopasture soil health.</p>
      
      <p>To register and learn more about NY Soil Health and Climate Resiliency Field Days, visit the official registration page.</p>
    `,
    image: 'https://via.placeholder.com/800x400/2e7d32/ffffff?text=Soil+Health',
    category: 'Event'
  },
  {
    id: 'ny-climate-impacts-assessment',
    title: 'New York Climate Impacts Assessment Just Released',
    date: '2024-02-08',
    excerpt: 'New York farmers facing more extreme weather caused by climate change and learning to adapt, according to new assessment.',
    content: `
      <p>New York's farmers are facing more extreme weather caused by climate change and they are learning to adapt, according to the agriculture chapter of the new statewide climate impacts assessment, led and written by two Cornell researchers.</p>
      
      <p>The comprehensive assessment provides detailed analysis of climate change impacts on agriculture in New York State and outlines adaptation strategies that farmers are already implementing.</p>
      
      <p>Read the full Cornell Chronicle article for more details on this important research.</p>
    `,
    image: 'https://via.placeholder.com/800x400/43a047/ffffff?text=Climate+Assessment',
    category: 'Research'
  },
  {
    id: 'dairy-camf-2024-applications',
    title: 'Applications are open for the 2024 Dairy CAMF Training Program',
    date: '2023-11-17',
    excerpt: 'Dairy Climate Adaptation Fellowship program begins Winter 2024 for farmers and advisors in Northeast.',
    content: `
      <p>The Dairy Climate Adaptation Fellowship program will begin in Winter 2024. This cohort-based learning opportunity is for farmers and agricultural advisors in the Northeast who are interested in climate change adaptation and mitigation strategies and planning, as well as peer-to-peer networking and support.</p>
      
      <p>Dairy farmers and agricultural advisors who work with dairy farmers in New York, Vermont, and Maine are eligible to apply!</p>
      
      <p><strong>Applications are due by 11:59 PM on December 10, 2023.</strong></p>
      
      <p>For more information and a description of the program, please visit our website. If you have questions related to this application, please do not hesitate to reach out.</p>
    `,
    image: 'https://via.placeholder.com/800x400/66bb6a/ffffff?text=Dairy+CAMF',
    category: 'Dairy CAMF'
  },
  {
    id: 'usda-plant-hardiness-zone-map',
    title: 'CSF will link to USDA\'s newly released Plant Hardiness Zone Map',
    date: '2023-11-15',
    excerpt: 'USDA releases updated Plant Hardiness Zone Map for the first time since 2012, valuable tool for farmers and gardeners.',
    content: `
      <p>Farmers, gardeners, and researchers take note! On November 15th, the U.S. Department of Agriculture (USDA) released a new version of its Plant Hardiness Zone Map (PHZM), updating this valuable tool for gardeners and researchers for the first time since 2012.</p>
      
      <p>Cornell's Climate Smart Farming Program will link to this new map and use it in Climate Smart Farming Programming with ag producers.</p>
      
      <p>USDA's Plant Hardiness Zone Map is the standard by which gardeners and growers can determine which plants are most likely to thrive at a location. The new map—jointly developed by USDA's Agricultural Research Service and Oregon State University's PRISM Climate Group—uses temperature data from 1991-2020.</p>
    `,
    image: 'https://via.placeholder.com/800x400/2e7d32/ffffff?text=Hardiness+Zones',
    category: 'Tools'
  },
  {
    id: 'managing-too-little-water',
    title: 'Tips for Managing Too Little Water',
    date: '2022-07-25',
    excerpt: 'Practical advice for farmers dealing with drought conditions and water scarcity in the Northeast.',
    content: `
      <p>By Elizabeth Buck, Cornell Cooperative Extension, Cornell Vegetable Program</p>
      
      <p>As of last Thursday, U.S. Drought Monitor officially designated almost all of the Cornell Vegetable Program area as "abnormally dry", which is their first stage of drought. It's not hard to spot the corn rolling as you drive, particularly in the later plantings, and the ground cracks developing.</p>
      
      <p>Streams are running low and ponds are getting drawn down. The depletion of those surface water resources is quickly demanding a question be answered: How do I make the most impactful use of the water I do have?</p>
      
      <p><strong>Watering Efficiency:</strong> Look for and repair leaks, use drip irrigation where possible, and water during cooler parts of the day to minimize evaporation.</p>
    `,
    author: 'Elizabeth Buck',
    image: 'https://via.placeholder.com/800x400/43a047/ffffff?text=Drought+Management',
    category: 'Best Practices'
  },
  {
    id: 'draft-scoping-plan-comments',
    title: 'Submit Public Comments on Draft Scoping Plan Ag Chapter',
    date: '2022-03-28',
    excerpt: 'NYS Climate Action Council releases Draft Scoping Plan for public comment, including comprehensive Agriculture chapter.',
    content: `
      <p>On December 20, the NYS Climate Action Council voted to release the Draft Scoping Plan for public comment. January 1, 2022, marks the beginning of a comment period to receive feedback from the public as the Council works to develop and release a final scoping plan by the end of 2022.</p>
      
      <p>The deadline to provide comments was recently extended to June 10, 2022. The Council will hold ten public hearings around NYS on the plan.</p>
      
      <p>The document includes a comprehensive Chapter (15) on Agriculture and Forestry. The NYS Climate Leadership and Community Protection Act (Climate Act) was signed into law in 2019 as one of the most ambitious climate laws in the nation.</p>
    `,
    image: 'https://via.placeholder.com/800x400/66bb6a/ffffff?text=Scoping+Plan',
    category: 'Policy'
  },
  {
    id: 'csf-winter-training-2022',
    title: 'Cornell\'s CSF Team Winter Training Sessions',
    date: '2022-03-15',
    excerpt: 'Cornell Climate Smart Farming Team organizes educational sessions to help farmers understand climate change impacts.',
    content: `
      <p>Members of Cornell's Climate Smart Farming Team organized multiple educational sessions this winter to help farmers and consultants understand the impacts of climate change on NYS farms, how to adapt and mitigate emissions.</p>
      
      <p>In Ulster County, Jim O'Connell worked to organize several sessions related to climate change for their New and Beginning Farmer Series, including an Intro to Regenerative Agriculture & the Regenerative Organic Certification (March 17); Climate Change & Agriculture (March 24th).</p>
      
      <p>Three upcoming sessions will cover Seriously Soil (March 31); Intro to Agroforestry (April 14); and Intro to Climate Resilience (April 21).</p>
    `,
    image: 'https://via.placeholder.com/800x400/2e7d32/ffffff?text=Training+Sessions',
    category: 'Education'
  },
  {
    id: 'cce-climate-resiliency-specialists',
    title: 'CCE Appoints Two Ag Climate Resiliency Specialists',
    date: '2022-03-09',
    excerpt: 'Cornell Cooperative Extension appoints Zach Spangler and Jenna Walczak as full-time Ag Climate Resiliency Specialists.',
    content: `
      <p>Farmers in New York State will now have access to two full-time Cornell Cooperative Extension (CCE) Ag Climate Resiliency Specialists to provide input on how they can adapt to climate change and reduce their greenhouse gas emissions on the farm.</p>
      
      <p>CCE recently appointed Zach Spangler and Jenna Walczak to the CCE Harvest NY Team. Both will also collaborate with Cornell's statewide Climate Smart Farming team and program, which has been working together with farmers since 2015.</p>
      
      <p>Both Zach and Jenna will be based in the Hudson Valley and will support farmers' efforts to mitigate climate change, improve their ability to adapt to extreme weather, and build long-term resilience.</p>
    `,
    image: 'https://via.placeholder.com/800x400/43a047/ffffff?text=CCE+Specialists',
    category: 'Team News'
  },
  {
    id: 'nys-ag-climate-assessment-2021',
    title: 'Cornell CSF Team Members Lead NYS Ag & Climate Impacts Assessment',
    date: '2021-11-15',
    excerpt: 'Dr. Deborah Aller and Dr. Allison Chatrchyan lead Agriculture Chapter of new Climate Impacts Assessment for NYS.',
    content: `
      <p>Two members of Cornell's Climate Smart Farming Team, Dr. Deborah Aller and Dr. Allison Chatrchyan, were tapped to lead the Agriculture Chapter of the new Climate Impacts Assessment project for New York State.</p>
      
      <p>To explore how the warming environment will affect New York's communities, ecosystems, and economy, Gov. Kathy Hochul named several Cornellians to the state's Climate Impacts Assessment project.</p>
      
      <p>The group will conduct research and then suggest how the state can best prepare for climate change and adapt for the future. The research effort will be led by Cornell faculty and will provide crucial insights into agricultural adaptation strategies.</p>
    `,
    image: 'https://via.placeholder.com/800x400/66bb6a/ffffff?text=Climate+Assessment',
    category: 'Research'
  },
  {
    id: 'winter-webinar-series-2021',
    title: 'CSF Team Winter Webinar Series',
    date: '2021-02-09',
    excerpt: 'Cornell Climate Smart Farming Program hosts five winter webinars for farmers, Extension specialists, and consultants.',
    content: `
      <p>The Cornell Climate Smart Farming Program is pleased to host five winter webinars for farmers, Extension specialists, and agriculture consultants. Registration is required, but events are free and open to the public.</p>
      
      <p><strong>Upcoming Topics:</strong></p>
      <ul>
        <li>Implications of Large Solar Installations and Leasing on Farmland (February 12, 2021)</li>
        <li>Understanding Climate Change and its Impacts on Local Agriculture</li>
        <li>Climate-Smart Agricultural Practices</li>
        <li>Water Management in a Changing Climate</li>
        <li>Building Farm Resilience</li>
      </ul>
      
      <p>If you missed one of the programs, contact the host listed in the description for links to view recorded session.</p>
    `,
    image: 'https://via.placeholder.com/800x400/2e7d32/ffffff?text=Webinar+Series',
    category: 'Education'
  },
  {
    id: 'gacsa-scaling-up-2021',
    title: 'Scaling-Up Climate-Smart Agriculture Globally through GACSA',
    date: '2021-01-22',
    excerpt: 'Global Alliance for Climate-Smart Agriculture and Cornell present survey results on scaling up climate-smart agriculture.',
    content: `
      <p>The Global Alliance for Climate-Smart Agriculture and students from Cornell University will present the results of a GACSA member survey, on "Scaling-Up Climate-Smart Agriculture Globally through GACSA", in a Live Webinar Discussion.</p>
      
      <p>Learn about the results of a Cornell survey of GACSA members that analyzed climate change impacts to agriculture, the challenges and barriers facing farmers globally, and the need for knowledge sharing and improvements to the enabling environment and investments for CSA.</p>
      
      <p>GACSA is an inclusive, voluntary, and action-oriented multi-stakeholder platform on Climate-Smart Agriculture (CSA), hosted by the United Nations Food and Agriculture Organization (FAO). Cornell is a member of GACSA and co-facilitates the Knowledge Action Group.</p>
    `,
    image: 'https://via.placeholder.com/800x400/43a047/ffffff?text=GACSA',
    category: 'Conference'
  },
  {
    id: 'climate-change-tracking-report-2020',
    title: 'Report fosters ag industry climate-change tracking',
    date: '2020-08-03',
    excerpt: 'Cornell professor Art DeGaetano co-authors USDA report to help farmers reduce risk in face of climate change.',
    content: `
      <p>By Blaine Friedlander | August 3, 2020</p>
      
      <p>Art DeGaetano, professor of earth and atmospheric sciences, is one of nine scientists who have co-authored a report to help the nation's farmers, producers and commercial agricultural managers reduce risk in the face of climate change.</p>
      
      <p>"We present a foundational report on how to keep the pulse on climate change in agriculture, what climate change indicators to watch, and how the indicators may change," said DeGaetano, who is also a fellow in the Cornell Atkinson Center for Sustainability.</p>
      
      <p>The report, "Climate Indicators for Agriculture," was released July 29 by the U.S. Department of Agriculture (USDA).</p>
    `,
    author: 'Blaine Friedlander',
    image: 'https://via.placeholder.com/800x400/66bb6a/ffffff?text=USDA+Report',
    category: 'Research'
  },
  {
    id: 'climate-change-dairy-farmers-2019',
    title: 'Climate Change and Dairy Farmers',
    date: '2019-07-13',
    excerpt: 'Research explores how dairy farmers and advisors interpret and respond to climate impacts, risks, and opportunities.',
    content: `
      <p>CICSS Director Allison Chatrchyan co-authored a recently published paper titled "Climate Change and Dairy in New York and Wisconsin: Risk Perceptions, Vulnerability, and Adaptation among Farmers and Advisors."</p>
      
      <p>The research presented explores how dairy farmers and their advisors are interpreting and responding to climate impacts, risks, and opportunities. It was found that dairy farmers articulated climate impact concerns, but business pressures were often the more critical issues that affected their decision making.</p>
      
      <p>Personal experiences with extreme weather and seasonal changes also had an impact on their choices.</p>
    `,
    image: 'https://via.placeholder.com/800x400/2e7d32/ffffff?text=Dairy+Research',
    category: 'Research'
  },
  {
    id: 'grape-hardiness-tool-v2-2018',
    title: 'Version 2.0 of CSF Grape Hardiness Tool Launched at NYS Ag Society',
    date: '2018-01-03',
    excerpt: 'Updated CSF Grape Hardiness and Freeze Risk Tool launched with improved features and faster graphical output.',
    content: `
      <p>The CICSS Team will be showcasing an updated and improved Version 2.0 of the CSF Grape Hardiness and Freeze Risk Tool on January 4th at the 2018 NYS Ag Society Forum.</p>
      
      <p>The new version of the tool includes updated 2018 weather and forecast data, and a faster graphical output to improve the users' experience with the tool.</p>
      
      <p>The Northeast is currently experiencing an extreme cold snap, and the tool is predicting temperatures that could damage grapes and other perennial crops in parts of the Northeast region. Armed with more precise forecast information related to their crops, farmers can put in place protective measures.</p>
    `,
    image: 'https://via.placeholder.com/800x400/43a047/ffffff?text=Grape+Tool',
    category: 'Tools'
  },
  {
    id: 'csf-tools-cop23-2017',
    title: 'CSF Tools Presented at COP 23',
    date: '2017-11-09',
    excerpt: 'Cornell researchers present Climate Smart Farming tools and winter cover crop timing tool at COP 23 in Bonn, Germany.',
    content: `
      <p>A team of researchers from the Cornell Institute for Climate Smart Solutions and CALS International Programs, including Drs. Allison Chatrchyan, Danielle Eiseman, and Maricelis Acevedo presented a Cornell research update at an official Press conference at COP 23 in Bonn, Germany on November 9, 2017.</p>
      
      <p>Chatrchyan and Eiseman presented on the "Cornell Climate Smart Farming Program, Website and Decision support tools for farmers," including announcing the launch of the new CSF winter cover crop timing tool.</p>
      
      <p>Acevedo presented on "Delivering Genetic Gain in Wheat Project & Possibilities for Climate Resilient Agriculture Programs."</p>
    `,
    image: 'https://via.placeholder.com/800x400/66bb6a/ffffff?text=COP23',
    category: 'Conference'
  },
  {
    id: 'usda-grants-2017',
    title: 'USDA grants awarded for those addressing the impacts environmental shifts',
    date: '2017-07-20',
    excerpt: 'Cornell Climate Smart Farming program among nine research centers awarded USDA grants totaling $8 million.',
    content: `
      <p>The United States Department of Agriculture's (USDA) National Institute of Food and Agriculture (NIFA), announced on Wednesday nine grants, with a total of over $8 million dollars.</p>
      
      <p>These grants were awarded to research centers focused on the study and development of new approaches to the agricultural sector. Among these awardees is the Cornell Institute for Climate Smart Solutions Climate Smart Farming program.</p>
      
      <p>The funding will support continued development of decision support tools and outreach programs to help farmers adapt to climate change.</p>
    `,
    image: 'https://via.placeholder.com/800x400/2e7d32/ffffff?text=USDA+Grant',
    category: 'Funding'
  },
  {
    id: 'cornell-chronicle-case-study-2017',
    title: 'Cornell Chronicle Reports on the CSF Case Study',
    date: '2017-07-19',
    excerpt: 'Cornell Chronicle highlights UN examination of regional programs supporting farmers adapt to climate change.',
    content: `
      <p>The Cornell Chronicle reported on the recent case study on Cornell's Climate Smart Farming program. The article highlights the UN's overall effort to examine regional programs that support farmers adapt to climate change.</p>
      
      <p>Programs such as the Climate Smart Farming program support the UN's goal to ensure global food security by helping farmers build resilience to climate variability and change.</p>
      
      <p>The case study demonstrates the value of two-way feedback between researchers, extension staff, and farmers in developing effective adaptation strategies.</p>
    `,
    image: 'https://via.placeholder.com/800x400/43a047/ffffff?text=Chronicle',
    category: 'Media'
  },
  {
    id: 'drought-newsletter-ecrl-2017',
    title: 'Latest Drought Newsletter from the Emergent Climate Risk Lab',
    date: '2017-07-19',
    excerpt: 'Cornell\'s Emergent Climate Risk Lab releases second issue of drought newsletter with visualization tool.',
    content: `
      <p>Read the second Drought Newsletter from Cornell's Emergent Climate Risk Lab (ECRL) headed up by Dr. Toby R. Ault.</p>
      
      <p>This is the second issue in this newsletter series and highlights include an overview of current drought conditions in the Northeastern United States, predicted changes in drought conditions and an introduction to the CICSS and ECRL newly launched drought visualization tool.</p>
    `,
    image: 'https://via.placeholder.com/800x400/66bb6a/ffffff?text=Drought+Newsletter',
    category: 'Research'
  },
  {
    id: 'csf-case-study-2017',
    title: 'Case Study of Cornell\'s Climate Smart Farming Program',
    date: '2017-07-18',
    excerpt: 'GACSA and Cornell create case study highlighting resources and decision support tools for Northeast farmers.',
    content: `
      <p>Together with the Global Alliance for Climate-Smart Agriculture (GACSA), Cornell's Climate Smart Farming Program created a case study highlighting the resources, training and decision support tools for farmers in the Northeastern United States.</p>
      
      <p>The present case study explores a new research and extension outreach program that is providing these support tools for farmers in the NE USA. The program is built on trusted two-way feedback between researchers, extension staff and farmers.</p>
    `,
    image: 'https://via.placeholder.com/800x400/2e7d32/ffffff?text=Case+Study',
    category: 'Research'
  },
  {
    id: 'fresh-market-field-day-2017',
    title: 'Fresh Market Vegetable Field Day - Batavia, NY',
    date: '2017-06-27',
    excerpt: 'Cornell CSF team presents climate adaptation strategies at fresh market vegetable field day in Batavia.',
    content: `
      <p>On June 26th, our Director Allison Chatrchyan and Research Assistant Jake Pero went to Batavia, NY for Extension Specialist Darcy Telenko's fresh market vegetable field day event.</p>
      
      <p>On top of learning about new strategies for weed management, farmers heard about resources for climate mitigation and adaptation available through CSF. Our team set up a table to teach farmers about climate smart practices, and Allison spoke to inform attendees about our Climate Smart Farming Decision Tools.</p>
      
      <p>Thanks to our Cornell Cooperative Extension offices across the state, we can share information and strategies that keep farmers profitable, resilient, and sustainable in a shifting climate.</p>
    `,
    image: 'https://via.placeholder.com/800x400/43a047/ffffff?text=Field+Day',
    category: 'Event'
  },
  {
    id: 'csf-newa-webinar-2017',
    title: 'Ag Decision Tools Webinar: CSF and NEWA',
    date: '2017-05-04',
    excerpt: 'Cornell CSF and NEWA lead joint webinar for extension professionals on agricultural decision tools.',
    content: `
      <p>Cornell CSF and the Network for Environment and Weather Applications (NEWA) led a joint webinar hosted by the USDA Northeast Climate Hub on Thursday, May 4th to educate extension professionals, government employees, and other stakeholders on their agricultural decision tools for the Northeast.</p>
      
      <p>View this informative webinar at the Conservation Webinar Portal.</p>
    `,
    image: 'https://via.placeholder.com/800x400/66bb6a/ffffff?text=Webinar',
    category: 'Education'
  },
  {
    id: 'drought-survey-2016',
    title: 'The 2016 Drought: An In-Depth Survey',
    date: '2017-03-23',
    excerpt: 'Cornell researchers conduct New York State Drought Survey to determine impacts on farmers.',
    content: `
      <p>Drs. Shannan Sweet and David Wolfe conducted a New York State Drought Survey in 2016 in order to determine the impacts of the drought on farmers in New York. The survey aimed to elucidate impacts by commodity and also based on whether farmers irrigated or not.</p>
      
      <p>Read about this survey, the results, and the recommendations based on this research in the third edition of the Cornell Institute for Climate Smart Solutions (CICSS) Research and Policy Brief Series, entitled "Anatomy of a Rare Drought: Insights from New York Farmers" on the CICSS Publications page.</p>
    `,
    image: 'https://via.placeholder.com/800x400/2e7d32/ffffff?text=Drought+Survey',
    category: 'Research'
  },
  {
    id: 'gacsa-newsletter-2017',
    title: 'Global Alliance for Climate Smart Agriculture Features Cornell CSF Program',
    date: '2017-02-27',
    excerpt: 'Cornell Climate Smart Farming Program featured in GACSA February Newsletter.',
    content: `
      <p>The Cornell Climate Smart Farming (CSF) Program was featured in the Global Alliance for Climate Smart Agriculture's (GACSA) February Newsletter.</p>
      
      <p>CICSS Director, and spearheader of the Cornell CSF Program, Allison Chatrchyan, is very involved with GACSA, participating in their annual meetings each year, and developing case studies of climate smart agriculture from the Northeast to contribute to their worldwide assessments.</p>
    `,
    image: 'https://via.placeholder.com/800x400/43a047/ffffff?text=GACSA',
    category: 'Media'
  },
  {
    id: 'climate-central-interview-2017',
    title: 'CICSS Directors Interviewed by Climate Central',
    date: '2017-02-08',
    excerpt: 'Cornell CICSS Directors discuss impact of government transitions on climate change and agricultural work.',
    content: `
      <p>With transitions in government leadership in the new presidential administration, websites such as Climate Central are working to get perspectives on how this will impact agencies such as the USDA and work they are doing in the climate change and agricultural sphere.</p>
      
      <p>Cornell Institute for Climate Smart Solutions Directors Mike Hoffmann and Allison Chatrchyan were recently interviewed by Climate Central, and their perspectives on the direction of these organizations can be found in the following article.</p>
    `,
    image: 'https://via.placeholder.com/800x400/66bb6a/ffffff?text=Interview',
    category: 'Media'
  },
  {
    id: 'csf-online-course-2016',
    title: 'Climate Smart Farming Online Course',
    date: '2016-11-21',
    excerpt: 'Cornell Small Farms Program offers BF 107 course on Climate Smart Farming for beginning farmers.',
    content: `
      <p>As part of the Cornell Small Farms Program, Beginning Farmers Project, the CSF Program (within the Cornell Institute for Climate Smart Solutions) will be offering a course entitled BF 107: "Climate Smart Farming, Being Prepared can Keep You in Business" from Jan 17th to Feb 21st in 2017.</p>
      
      <p>The course will equip farmers with the knowledge to understand their risk to climate change and extreme weather, empowering them to implement measures that not only respond to climate change, but also maintain their bottom line by promoting sustainability, preparedness, and best management practices.</p>
    `,
    image: 'https://via.placeholder.com/800x400/2e7d32/ffffff?text=Online+Course',
    category: 'Education'
  },
  {
    id: 'ipm-online-conference-2016',
    title: 'Second Annual Integrated Pest Management Online Conference',
    date: '2016-11-18',
    excerpt: 'Northeast IPM Center hosts second annual IPM Online Conference featuring rapid-style presentations.',
    content: `
      <p>Integrated Pest Management (IPM) is an integral part of the Climate Smart Farming (CSF) mission, and the CSF Program collaborates with the New York State IPM Center and Northeast IPM Center.</p>
      
      <p>The Northeast IPM Center recently hosted its second annual IPM Online Conference, which featured IPM updates in rapid-style 5-minute presentations in which the speakers discussed one or two highlights from their projects. The purpose of the conference was to learn about IPM-related research, education, and extension currently taking place in and around the Northeast.</p>
    `,
    image: 'https://via.placeholder.com/800x400/43a047/ffffff?text=IPM+Conference',
    category: 'Conference'
  },
  {
    id: 'nys-ipm-conference-2016',
    title: 'NYS IPM Conference',
    date: '2016-09-01',
    excerpt: 'CSF team presents at one-day NYS IPM Climate and Weather Conference in Albany.',
    content: `
      <p>On August 15th, the entire CSF team traveled to Albany, NY for the one-day NYS IPM Climate and Weather Conference.</p>
      
      <p>CICSS Executive Director, Mike Hoffmann, presented on the links between climate change and our food system, and CICSS Director, Allison Chatrchyan presented on the unique Climate Smart Farming Program Decision Tools.</p>
      
      <p>Other organizations presenting included: the USDA NE Climate Hub, Northeast IPM Center, Cooperative Extension, the NYS Dept of Health, NYS Mesonet, and the Network for Environment and Weather Applications.</p>
    `,
    image: 'https://via.placeholder.com/800x400/66bb6a/ffffff?text=IPM+Conference',
    category: 'Conference'
  },
  {
    id: 'empire-farm-days-2016',
    title: 'Empire Farm Days',
    date: '2016-08-15',
    excerpt: 'Cornell CSF Team showcases decision tools on interactive touch-screen at Empire Farm Days.',
    content: `
      <p>Each year, the Cornell Climate Smart Farming (CSF) Team participates in the annual Empire Farm Days in Seneca Falls, NY. This year's event was from August 9th to the 11th, and was attended by farmers, extension professionals, and gardeners from New York State and beyond.</p>
      
      <p>The CSF Team displayed its new CSF Decision Tools on an interactive, touch-screen computer. Farmers were able to enter their farm's location and see outputs on tools such as the GDD Calculator, Irrigation/Water Deficit Calculator, and Frost/Freeze Risk Tool, which can help them make informed, climate-smart decisions.</p>
    `,
    image: 'https://via.placeholder.com/800x400/2e7d32/ffffff?text=Empire+Farm+Days',
    category: 'Event'
  },
  {
    id: 'farmers-in-own-words-2016',
    title: 'Climate Smart Farming Event: NYS Farmers in Their Own Words',
    date: '2016-04-27',
    excerpt: 'Mann Library hosts exhibit opening featuring CSF farmers and multimedia content.',
    content: `
      <p>Please join us for the opening reception of this exhibit on Thursday, May 5, from 4:00 – 5:30 PM on the Second floor of Mann Library on Cornell's campus.</p>
      
      <p>In attendance will be: Dale Stein (Stein Farms), Paul King (Six Mile Creek Vineyards), Glenn Evans (Cornell Agricultural Experiment Station) and Allison Chatrchyan of the Cornell Institute for Climate Change and Agriculture (CICCA).</p>
      
      <p>This is a multimedia exhibit, with both photos and video footage from our new Cornell climate smart farming program: climatesmartfarming.org</p>
    `,
    image: 'https://via.placeholder.com/800x400/43a047/ffffff?text=Exhibit',
    category: 'Event'
  },
  {
    id: 'climate-seminar-ag-impacts-2016',
    title: 'Cornell Climate Change Seminar Highlights Ag Impacts',
    date: '2016-04-08',
    excerpt: 'Cornell Climate Change Seminar features series of talks on climate change and agriculture.',
    content: `
      <p>On Monday, April 11th, the Cornell University Climate Change Seminar will enter into a series of weekly talks that are particularly related to the connection between climate change and agriculture.</p>
      
      <p>These agriculture-related talks include:</p>
      <ul>
        <li>April 11th: Christine Goodale discusses "Climate Change and Terrestrial Ecosystems"</li>
        <li>April 18th: David Wolfe speaks about "Climate Change and the Future of Food"</li>
        <li>May 2nd: Linda Mearns takes "A look at the Evolution of Determining the Impacts of Climate Change through the IPCC"</li>
      </ul>
    `,
    image: 'https://via.placeholder.com/800x400/66bb6a/ffffff?text=Seminar',
    category: 'Education'
  },
  {
    id: 'pasa-conference-2016',
    title: 'CSF at the Largest Sustainable Ag Conference in the East',
    date: '2016-02-04',
    excerpt: 'Climate Smart Farming team presents at PASA\'s 25th Annual Farming for the Future Conference.',
    content: `
      <p>The Climate Smart Farming (CSF) team will be presenting at PASA's (Pennsylvania Action for Sustainable Agriculture) 25th Annual Farming for the Future Conference at the end of this week.</p>
      
      <p>The 2016 conference runs from February 3rd to 6th and will be held at the Penn Stater Conference Center in State College, PA. This is the largest sustainable agriculture conference in the East, and convenes over 2,000 farmers, processors, consumers, students, environmentalists, and business and community leaders every year.</p>
      
      <p>The theme of "Farming in a Changing Climate" this year reflects the ever-increasing impact of climate change on agricultural systems.</p>
    `,
    image: 'https://via.placeholder.com/800x400/2e7d32/ffffff?text=PASA+Conference',
    category: 'Conference'
  },
  {
    id: 'fruit-veg-expo-2016',
    title: 'Climate Smart Farming at Fruit and Veg Expo & NOFA-NY',
    date: '2016-01-16',
    excerpt: 'CSF Program presents at Empire State Producers Expo and NOFA-NY Winter Conference.',
    content: `
      <p>The Climate Smart Farming Program will be at two large agricultural events in January 2016: the 2016 Empire State Producers Expo and the 2016 NOFA-NY Winter Conference.</p>
      
      <p>The 2016 Empire State Producers Expo runs January 19-21 at the Oncenter Convention Center in Syracuse, NY. It combines the major fruit, flower, vegetable, and direct marketing associations of New York State in order to provide a comprehensive trade show and educational conference.</p>
      
      <p>The CSF Program is organizing a session on Thursday, January 21st, on "Climate Smart Farming: New Practices and Decision Tools."</p>
    `,
    image: 'https://via.placeholder.com/800x400/43a047/ffffff?text=Expo',
    category: 'Event'
  },
  {
    id: 'nys-ag-society-forum-2016',
    title: 'Climate Change Focus of 2016 NYS Ag Society Forum',
    date: '2016-01-06',
    excerpt: 'Cornell\'s Climate Smart Farming Program featured at 184th Annual NYS Ag Society Forum.',
    content: `
      <p>Cornell's Climate Smart Farming Program was well represented at the 184th Annual NYS Ag Society Forum, held in Syracuse/Liverpool, NY on January 7, 2016.</p>
      
      <p>The NYS Agricultural Society's Annual Forum is the largest statewide agricultural meeting bringing together all sectors of the food system to explore topics critical to the future of New York Agriculture. This year's program theme was focused on "Climate Smart Farming: Changes & Opportunities."</p>
      
      <p>On January 6th, the College of Agriculture and Life Sciences Reception and Panel focused on the work that Cornell is doing to "Help Farmers Respond to Climate Change."</p>
    `,
    image: 'https://via.placeholder.com/800x400/66bb6a/ffffff?text=Forum',
    category: 'Conference'
  },
  {
    id: 'cop21-exhibit-2015',
    title: 'Climate Smart Farming featured at COP21',
    date: '2015-12-06',
    excerpt: 'Cornell exhibits climate change research including CSF Program poster at COP21 in Paris.',
    content: `
      <p>Cornell University organized an exhibit of its climate change research, teaching, and outreach capacity, including a poster on the Climate Smart Farming Program, at the 21st Climate Change Conference of the Parties (COP21) from November 29th to December 5th in Paris, France.</p>
      
      <p>Agriculture was an important issue discussed at the global conference, with many universities, country delegations, and non-governmental organizations hosting side events highlighting the importance of climate change adaptation for farmers and communities, as well as options for mitigation of greenhouse gas (GHG) emissions from the agricultural sector.</p>
    `,
    image: 'https://via.placeholder.com/800x400/2e7d32/ffffff?text=COP21',
    category: 'Conference'
  },
  {
    id: 'campus-county-webinar-2015',
    title: 'Climate Smart Farming Program: Campus County Connections Webinar',
    date: '2015-11-13',
    excerpt: 'Register to learn about Cornell\'s Climate Smart Farming Program and Extension Team.',
    content: `
      <p>Register here to learn more about Cornell's Climate Smart Farming Program and Extension Team on November 12th, 2015 at 2:30pm.</p>
      
      <p>Cornell's Climate Smart Farming Extension Team gives New York farmers access to top extension specialists with the particular expertise to help manage the risks posed by increasing extreme weather, climate variability and long-term change.</p>
      
      <p>Working in partnership with Cornell Cooperative Extension and climate change and agriculture specialists at Cornell, the team draws on the latest science to answer growers' questions about changes they can make to their management practices that will help increase resiliency and farm sustainability.</p>
    `,
    image: 'https://via.placeholder.com/800x400/43a047/ffffff?text=Webinar',
    category: 'Education'
  },
  {
    id: 'north-country-farmers-adapting-2015',
    title: 'North Country Farmers are Already Adapting to Climate Change',
    date: '2015-10-19',
    excerpt: 'North Country Public Radio explores how NY farmers are adapting to climate change.',
    content: `
      <p>By David Sommerstein, North Country Public Radio</p>
      
      <p>Listen to this Story: Agriculture is one of the major causes of climate change. Soil erosion, methane from livestock, and exhaust from tractors are major sources of greenhouse gases.</p>
      
      <p>Last week, Governor Cuomo announced a $1.4 million grant program to help farmers in New York reduce their greenhouse emissions. Farmers can apply for projects to help them better manage water, soil, and waste.</p>
      
      <p>Allison Chatrchyan, director of the Institute for Climate Change and Agriculture at Cornell University, said programs like these are critical to help farmers conserve more energy through by installing solar panels and other renewable energy systems.</p>
    `,
    author: 'David Sommerstein',
    image: 'https://via.placeholder.com/800x400/66bb6a/ffffff?text=North+Country',
    category: 'Media'
  }
];