// src/data/climateTools.ts

export interface ClimateTool {
  id: string;
  title: string;
  description: string;
  icon: string;
  link: string;
  externalLink?: string;
  category?: string;
}

export const climateTools: ClimateTool[] = [
  {
    id: 'gdd-calculator',
    title: 'CSF Growing Degree Day Calculator',
    description: 'Plots Growing Degree Days (GDD) to help predict plant development and pest/disease outbreaks, and provides a climatological context.',
    icon: '🌡️',
    link: '/tools/gdd-calculator',
    externalLink: 'https://climatesmartfarming.org/tools/csf-growing-degree-day-calculator/',
    category: 'Temperature Monitoring'
  },
  {
    id: 'climate-change',
    title: 'Visualizing Climate Change in the Northeast',
    description: 'Find out how the climate has changed in your county since 1950, and what is projected over the next century.',
    icon: '📊',
    link: '/tools/climate-change',
    externalLink: 'https://climatesmartfarming.org/tools/csf-county-climate-change/',
    category: 'Climate Trends'
  },
  {
    id: 'hardiness-zones',
    title: 'USDA Plant Hardiness Zone Map 2023',
    description: 'Plant hardiness zone designations represent the average annual extreme minimum temperature at a given location during a particular time period.',
    icon: '🗺️',
    link: '/tools/hardiness-zones',
    externalLink: 'https://climatesmartfarming.org/tools/hardiness-map/',
    category: 'Climate Zones'
  },
  {
    id: 'climate-normals',
    title: 'Climate Normals - Northeast Regional Climate Center',
    description: 'Climate normals are an arithmetic average of a variable such as temperature over a prescribed 30-year period.',
    icon: '📈',
    link: '/tools/climate-normals',
    externalLink: 'https://climatesmartfarming.org/tools/nrcc/',
    category: 'Historical Data'
  },
  {
    id: 'drought-monitor',
    title: 'U.S. Drought Monitor',
    description: 'The map is based on measurements of climatic, hydrologic and soil conditions as well as reported impacts and observations from more than 350 contributors around the country.',
    icon: '🏜️',
    link: '/tools/drought-monitor',
    externalLink: 'https://climatesmartfarming.org/tools/us-drought-monitor/',
    category: 'Drought Monitoring'
  },
  {
    id: 'drought-outlook',
    title: 'U.S. Seasonal Drought Outlook',
    description: 'This map indicates how Drought Monitor intensity levels are expected to change in the U.S. over the next three months.',
    icon: '🌵',
    link: '/tools/drought-outlook',
    externalLink: 'https://climatesmartfarming.org/tools/us-seasonal-drought-outlook/',
    category: 'Drought Forecasting'
  }
];