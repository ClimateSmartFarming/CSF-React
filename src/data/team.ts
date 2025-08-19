export interface TeamMember {
  id: string;
  name: string;
  role: string;
  specialty: string;
  photo?: string;
  email?: string;
  phone?: string;
  bio?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 'arthur-degaetano',
    name: 'Arthur DeGaetano',
    role: 'Director',
    specialty: 'Climate Science & Agricultural Meteorology',
    email: 'atd2@cornell.edu',
    bio: 'Leading climate science research and agricultural weather applications for over 25 years.'
  },
  {
    id: 'dan-brown',
    name: 'Dan Brown',
    role: 'Extension Associate',
    specialty: 'Crop Production & Pest Management',
    email: 'djb23@cornell.edu',
    bio: 'Specializing in integrated pest management and sustainable crop production systems.'
  },
  {
    id: 'keith-waldron',
    name: 'Keith Waldron',
    role: 'Research Scientist',
    specialty: 'Weather Data & Modeling',
    email: 'krw24@cornell.edu',
    bio: 'Expert in weather station networks and agricultural weather forecasting models.'
  },
  {
    id: 'sarah-taylor',
    name: 'Sarah Taylor',
    role: 'Extension Educator',
    specialty: 'Soil Health & Water Management',
    email: 'st42@cornell.edu',
    bio: 'Focused on soil health assessment and water conservation strategies for farmers.'
  },
  {
    id: 'michael-hoffman',
    name: 'Michael Hoffman',
    role: 'Research Associate',
    specialty: 'Fruit & Vegetable Production',
    email: 'mh47@cornell.edu',
    bio: 'Researching climate adaptation strategies for specialty crop production.'
  },
  {
    id: 'jane-wilson',
    name: 'Jane Wilson',
    role: 'Outreach Coordinator',
    specialty: 'Farmer Education & Technology Transfer',
    email: 'jw89@cornell.edu',
    bio: 'Connecting research with farmers through educational programs and technology tools.'
  }
];

export const getTeamMemberById = (id: string): TeamMember | undefined => {
  return teamMembers.find(member => member.id === id);
};

export const getTeamMembersByRole = (role: string): TeamMember[] => {
  return teamMembers.filter(member => member.role.toLowerCase().includes(role.toLowerCase()));
};