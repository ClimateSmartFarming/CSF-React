// src/data/decisionTools.ts

export interface DecisionTool {
  id: string;
  title: string;
  description: string;
  icon: string;
  link: string;
}

export const decisionTools: DecisionTool[] = [
  {
    id: 'planting-date',
    title: 'Planting Date Planner',
    description: 'Optimize planting dates based on climate data and crop requirements to maximize yields.',
    icon: '🌱',
    link: '/tools/planting-date-planner'
  },
  {
    id: 'crop-yield',
    title: 'Crop Yield Estimator',
    description: 'Predict potential crop yields based on weather patterns, soil conditions, and management practices.',
    icon: '📊',
    link: '/tools/crop-yield-estimator'
  },
  {
    id: 'risk-assessment',
    title: 'Climate Risk Assessment',
    description: 'Evaluate climate-related risks for your farm including drought, flooding, and extreme weather.',
    icon: '⚠️',
    link: '/tools/risk-assessment'
  },
  {
    id: 'irrigation-scheduler',
    title: 'Irrigation Scheduler',
    description: 'Plan irrigation schedules based on soil moisture, weather forecasts, and crop water needs.',
    icon: '💧',
    link: '/tools/irrigation-scheduler'
  },
  {
    id: 'pest-forecast',
    title: 'Pest & Disease Forecast',
    description: 'Predict pest and disease pressure based on weather conditions and historical patterns.',
    icon: '🐛',
    link: '/tools/pest-forecast'
  },
  {
    id: 'soil-health',
    title: 'Soil Health Tracker',
    description: 'Monitor and analyze soil health metrics to improve fertility and long-term productivity.',
    icon: '🌍',
    link: '/tools/soil-health'
  },
  {
    id: 'harvest-timing',
    title: 'Harvest Timing Advisor',
    description: 'Determine optimal harvest windows based on crop maturity and weather forecasts.',
    icon: '🌾',
    link: '/tools/harvest-timing'
  },
  {
    id: 'cover-crop',
    title: 'Cover Crop Selector',
    description: 'Choose the best cover crops for your soil type, climate zone, and farming goals.',
    icon: '🌿',
    link: '/tools/cover-crop'
  }
];