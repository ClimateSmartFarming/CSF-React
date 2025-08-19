# Climate Smart Farming - Homepage

A responsive React TypeScript homepage for Cornell Climate Smart Farming, showcasing tools, team, and resources for climate-adaptive agriculture.

## 🎯 Project Overview

This project implements a modern, responsive homepage for Cornell's Climate Smart Farming initiative. The site features:

- **Featured Tools**: Interactive grid showcasing agricultural tools and calculators
- **Team Section**: Cornell team members with contact information
- **Resources Section**: Educational materials and research publications
- **Responsive Design**: Mobile-first approach with tablet and desktop breakpoints
- **Modern Tech Stack**: React 18, TypeScript, Vite, CSS Modules

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd CSFSite

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The application will be available at `http://localhost:5173`

## 🚀 Deployment

### Railway Deployment (Recommended)

This project is configured for one-click deployment to Railway:

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template)

**Quick Deploy Steps:**
1. Push this repository to GitHub
2. Connect GitHub to Railway
3. Deploy automatically with zero configuration

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md)

**Live Demo:** [Coming Soon - Will be deployed to Railway]

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Header/                 # Fixed navigation header
│   │   │   ├── Header.tsx
│   │   │   ├── Header.module.css
│   │   │   ├── MobileMenu.tsx
│   │   │   └── MobileMenu.module.css
│   │   └── Footer/                 # Site footer with links
│   │       ├── Footer.tsx
│   │       └── Footer.module.css
│   ├── sections/
│   │   ├── HeroSection/            # Main hero with title/subtitle
│   │   │   ├── HeroSection.tsx
│   │   │   └── HeroSection.module.css
│   │   ├── FeaturedTools/          # Tools grid section
│   │   │   ├── FeaturedTools.tsx
│   │   │   ├── ToolCard.tsx
│   │   │   └── FeaturedTools.module.css
│   │   ├── TeamSection/            # Team member grid
│   │   │   ├── TeamSection.tsx
│   │   │   ├── TeamMember.tsx
│   │   │   └── TeamSection.module.css
│   │   └── ResourcesSection/       # Resources with left border
│   │       ├── ResourcesSection.tsx
│   │       ├── ResourceCard.tsx
│   │       └── ResourcesSection.module.css
│   └── common/
│       ├── Container/              # Responsive container wrapper
│       │   ├── Container.tsx
│       │   └── Container.module.css
│       └── SectionTitle/           # Reusable section headers
│           ├── SectionTitle.tsx
│           └── SectionTitle.module.css
├── pages/
│   └── HomePage/                   # Main page assembly
│       ├── HomePage.tsx
│       └── HomePage.module.css
├── styles/
│   ├── globals.css                 # Global styles and resets
│   └── variables.css               # CSS custom properties
├── data/
│   ├── tools.ts                    # Mock tool data and types
│   ├── team.ts                     # Team member data
│   └── resources.ts                # Resource data and types
├── App.tsx                         # Root application component
└── main.tsx                        # Application entry point
```

## 🎨 Design System

### Color Palette
```css
/* Primary Colors */
--color-primary-green: #2e7d32        /* Cornell green */
--color-primary-green-light: #43a047  /* Light green */
--color-primary-green-accent: #66bb6a /* Accent green */

/* Neutral Colors */
--color-neutral-white: #ffffff
--color-neutral-off-white: #fafafa
--color-neutral-light-gray: #f5f5f5
--color-neutral-gray: #e0e0e0
--color-neutral-dark-gray: #666666
--color-neutral-charcoal: #333333
--color-neutral-dark-charcoal: #2e3d2e
```

### Typography
- **Primary Font**: System font stack (-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto)
- **Heading Font**: Georgia, serif
- **Responsive Font Sizes**: Automatically scale on mobile devices

### Section Heights
- **Header**: 80px (fixed)
- **Hero**: 320px
- **Featured Tools**: ~500px
- **Team**: ~450px  
- **Resources**: ~400px
- **Footer**: 280px

## 📱 Responsive Design

### Breakpoints
- **Mobile**: <768px
- **Tablet**: 768px - 1200px  
- **Desktop**: >1200px

### Grid Layouts
| Section | Desktop | Tablet | Mobile |
|---------|---------|--------|--------|
| Tools | 4 columns | 2 columns | 1 column |
| Team | 6 columns | 3 columns | 2 columns |
| Resources | 3 columns | 2 columns | 1 column |

## 🔧 Technical Details

### Technologies Used
- **React 18**: UI library with functional components and hooks
- **TypeScript**: Type safety and enhanced developer experience  
- **Vite**: Fast build tool and dev server
- **CSS Modules**: Scoped styling with automatic class name generation
- **ESLint**: Code linting and formatting

### Key Features
- **Accessibility**: ARIA labels, keyboard navigation, focus management
- **Performance**: Optimized builds with code splitting
- **SEO**: Semantic HTML structure and proper heading hierarchy
- **Cross-browser**: Modern browser support with graceful degradation

### Data Management
Mock data is organized in TypeScript modules:
- `tools.ts`: Tool cards with categories and descriptions
- `team.ts`: Team member profiles with contact info
- `resources.ts`: Educational resources with metadata

## 🚀 Development

### Available Scripts
```bash
npm run dev      # Start development server
npm run build    # Build for production  
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

### Development Guidelines
1. **Components**: Use functional components with TypeScript
2. **Styling**: CSS Modules for component-scoped styles
3. **State**: React hooks for component state management
4. **Types**: Define interfaces for all props and data structures
5. **Accessibility**: Include ARIA attributes and keyboard navigation

### Adding New Content

#### Adding a New Tool
```typescript
// In src/data/tools.ts
{
  id: 'new-tool',
  title: 'New Tool Name',
  description: 'Tool description...',
  icon: '🔧',
  link: '/tools/new-tool',
  category: 'weather' // or 'crop', 'soil', 'climate'
}
```

#### Adding a Team Member
```typescript
// In src/data/team.ts
{
  id: 'member-id',
  name: 'Member Name',
  role: 'Position',
  specialty: 'Area of expertise',
  email: 'email@cornell.edu'
}
```

## 🎯 Implementation Notes

### Current Features
- ✅ Responsive homepage with all sections
- ✅ Interactive tool cards with hover effects
- ✅ Team member grid with contact functionality
- ✅ Resource cards with metadata and tags
- ✅ Mobile-responsive navigation with hamburger menu
- ✅ Fixed header with smooth scrolling
- ✅ Cornell branding and color scheme
- ✅ Accessibility features (ARIA, keyboard nav)
- ✅ TypeScript type safety throughout

### Future Enhancements
- [ ] Routing system for multi-page navigation
- [ ] Search and filtering for tools/resources
- [ ] Content management system integration
- [ ] User authentication and personalization
- [ ] Analytics and usage tracking
- [ ] Dark mode support
- [ ] Internationalization (i18n)

## 🧪 Testing

The application has been tested for:
- **Responsive behavior** across mobile, tablet, and desktop
- **Accessibility** with keyboard navigation and screen readers
- **Cross-browser compatibility** in modern browsers
- **Performance** with optimized builds and assets

## 🤝 Contributing

1. Follow the established code style and patterns
2. Use TypeScript for all new components
3. Add CSS Modules for component styling
4. Include accessibility attributes
5. Test responsive behavior across breakpoints
6. Update documentation for significant changes

## 📄 License

This project is part of Cornell University's Climate Smart Farming initiative.

---

**Built with ❤️ for sustainable agriculture and climate adaptation**
