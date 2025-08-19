export type ResourceType = 'guide' | 'publication' | 'video' | 'webinar' | 'tool' | 'dataset';

export interface Resource {
  id: string;
  title: string;
  description: string;
  content: string;
  type: ResourceType;
  link: string;
  publishDate: string;
  author?: string;
  tags: string[];
  featured?: boolean;
}

export const resources: Resource[] = [
  {
    id: 'climate-change-guide',
    title: 'Climate Change Adaptation Guide for NY Farmers',
    description: 'Comprehensive guide covering climate adaptation strategies, risk assessment, and best practices for resilient farming.',
    content: 'A detailed resource helping farmers understand climate risks and implement adaptation strategies specific to New York agricultural regions.',
    type: 'guide',
    link: '/resources/climate-adaptation-guide',
    publishDate: '2024-01-15',
    author: 'Cornell Climate Smart Farming Team',
    tags: ['climate adaptation', 'risk management', 'best practices'],
    featured: true
  },
  {
    id: 'soil-health-toolkit',
    title: 'Soil Health Assessment Toolkit',
    description: 'Tools and techniques for evaluating soil health, improving soil quality, and building resilient agricultural systems.',
    content: 'Step-by-step methods for soil assessment, interpretation guidelines, and improvement recommendations.',
    type: 'tool',
    link: '/resources/soil-health-toolkit',
    publishDate: '2024-02-10',
    author: 'Sarah Taylor',
    tags: ['soil health', 'assessment', 'toolkit'],
    featured: true
  },
  {
    id: 'weather-data-best-practices',
    title: 'Using Weather Data for Farm Decisions',
    description: 'Learn how to effectively interpret and apply weather data and forecasts for improved farm management decisions.',
    content: 'Practical guidance on selecting appropriate weather data sources and interpreting meteorological information.',
    type: 'publication',
    link: '/resources/weather-data-guide',
    publishDate: '2024-03-05',
    author: 'Keith Waldron',
    tags: ['weather data', 'decision making', 'forecasting'],
    featured: true
  },
  {
    id: 'pest-management-webinar',
    title: 'Climate-Smart Pest Management Webinar Series',
    description: 'Video series covering integrated pest management strategies adapted for changing climate conditions.',
    content: 'Monthly webinar series featuring expert presentations on pest management in a changing climate.',
    type: 'webinar',
    link: '/resources/pest-management-webinars',
    publishDate: '2024-04-12',
    author: 'Dan Brown',
    tags: ['pest management', 'webinar', 'climate adaptation'],
    featured: true
  },
  {
    id: 'water-management-strategies',
    title: 'Water Conservation and Management Strategies',
    description: 'Evidence-based approaches to water conservation, irrigation efficiency, and drought preparation for farms.',
    content: 'Research-backed strategies for optimizing water use and preparing for water scarcity challenges.',
    type: 'guide',
    link: '/resources/water-management',
    publishDate: '2024-05-20',
    author: 'Sarah Taylor',
    tags: ['water management', 'conservation', 'irrigation'],
    featured: true
  },
  {
    id: 'crop-variety-selection',
    title: 'Climate-Resilient Crop Variety Selection',
    description: 'Guidelines for selecting crop varieties that perform well under changing temperature and precipitation patterns.',
    content: 'Comprehensive database and selection criteria for climate-adapted crop varieties.',
    type: 'dataset',
    link: '/resources/crop-varieties',
    publishDate: '2024-06-08',
    author: 'Michael Hoffman',
    tags: ['crop selection', 'varieties', 'climate resilience'],
    featured: true
  }
];

export const getFeaturedResources = (): Resource[] => {
  return resources.filter(resource => resource.featured);
};

export const getResourcesByType = (type: ResourceType): Resource[] => {
  return resources.filter(resource => resource.type === type);
};

export const getResourceById = (id: string): Resource | undefined => {
  return resources.find(resource => resource.id === id);
};

export const getResourcesByTag = (tag: string): Resource[] => {
  return resources.filter(resource => 
    resource.tags.some(resourceTag => 
      resourceTag.toLowerCase().includes(tag.toLowerCase())
    )
  );
};