export type ToolCategory = 'weather' | 'crop' | 'soil' | 'climate';

export interface Tool {
  id: string;
  title: string;
  description: string;
  icon: string;
  link: string;
  category: ToolCategory;
}

export const featuredTools: Tool[] = [
  {
    id: 'gdd-calculator',
    title: 'Growing Degree Day Calculator',
    description: 'Track GDD accumulation to predict plant development stages and optimize timing for pest management strategies.',
    icon: '🌡️',
    link: '/tools/gdd-calculator',
    category: 'weather'
  },
  {
    id: 'water-deficit',
    title: 'Water Deficit Calculator',
    description: 'Monitor soil water deficit levels to make informed irrigation scheduling decisions and conserve water resources.',
    icon: '💧',
    link: '/tools/water-deficit',
    category: 'soil'
  },
  {
    id: 'frost-advisor',
    title: 'Frost Risk Advisor',
    description: 'Get real-time frost risk assessments and early warning alerts to protect sensitive crops and minimize losses.',
    icon: '❄️',
    link: '/tools/frost-advisor',
    category: 'weather'
  },
  {
    id: 'crop-calendar',
    title: 'Crop Planning Calendar',
    description: 'Plan optimal planting and harvesting schedules based on historical climate data and projected weather patterns.',
    icon: '📅',
    link: '/tools/crop-calendar',
    category: 'crop'
  },
  {
    id: 'climate-scenarios',
    title: 'Climate Change Scenarios',
    description: 'Explore future climate projections and assess potential impacts on crop yields and farming practices.',
    icon: '🌍',
    link: '/tools/climate-scenarios',
    category: 'climate'
  },
  {
    id: 'pest-tracker',
    title: 'Pest Development Tracker',
    description: 'Monitor pest life cycles and emergence patterns using temperature-based development models.',
    icon: '🐛',
    link: '/tools/pest-tracker',
    category: 'crop'
  },
  {
    id: 'weather-station',
    title: 'Weather Station Network',
    description: 'Access real-time weather data from local monitoring stations across New York State agricultural regions.',
    icon: '🌦️',
    link: '/tools/weather-station',
    category: 'weather'
  },
  {
    id: 'soil-health',
    title: 'Soil Health Assessment',
    description: 'Evaluate soil health indicators and receive recommendations for improving soil quality and productivity.',
    icon: '🌱',
    link: '/tools/soil-health',
    category: 'soil'
  }
];

export const getToolsByCategory = (category: ToolCategory): Tool[] => {
  return featuredTools.filter(tool => tool.category === category);
};

export const getToolById = (id: string): Tool | undefined => {
  return featuredTools.find(tool => tool.id === id);
};