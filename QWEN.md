# Project Context: Pradosh Chand's Portfolio Website

## Project Overview

This is a personal portfolio website built with Next.js 15, featuring a modern design with responsive layouts, animations, and a clean UI. The portfolio showcases the developer's skills, experience, and projects in a professional manner.

### Key Technologies
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Custom component library with Framer Motion for animations
- **Data Management**: JSON-based static data files
- **Fonts**: Plus Jakarta Sans from Google Fonts

### Project Structure
```
src/
├── app/                 # Next.js app directory with pages
├── components/          # Reusable UI components
├── constants/           # Application constants
├── data/                # Static JSON data files
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
└── models/              # Data models
```

## Key Features

1. **Responsive Design**: Mobile-first approach with different layouts for mobile and desktop
2. **Animated Transitions**: Smooth page transitions using Framer Motion
3. **Project Showcase**: Featured projects with detailed descriptions
4. **Experience Timeline**: Professional work history presentation
5. **Skills Display**: Categorized technical skills with proficiency ratings
6. **Contact Form**: Functional contact form with nodemailer integration
7. **Social Integration**: Links to LinkedIn, GitHub, and other platforms

## Development Workflow

### Building and Running
```bash
# Development server
npm run dev

# Production build
npm run build

# Production server
npm run start

# Linting
npm run lint
```

### Development Conventions
- TypeScript for type safety
- Component-based architecture
- Reusable UI components in `src/components/`
- Static data in JSON format in `src/data/`
- Tailwind CSS for styling with a custom color palette
- Responsive design with mobile-first approach

### File Structure Details
- **Page Routes**: Defined in `src/app/` directory following Next.js App Router conventions
- **Components**: Reusable components in `src/components/` with clear separation of concerns
- **Data**: Static JSON files in `src/data/` for projects, experience, and skills
- **Constants**: Application constants in `src/constants/`
- **Styles**: Global styles in `src/app/globals.css` with Tailwind CSS v4

### Key Components
- `Home.tsx`: Main landing page component
- `AboutMe.tsx`: Sidebar component with personal information
- `ProjectsGrid.tsx`: Project showcase grid
- `ExperienceSection.tsx`: Work experience timeline
- `ContactForm.tsx`: Contact form with validation
- `SideMenu.tsx`: Mobile navigation menu

### Data Structure
- `projects.json`: Project portfolio with descriptions, images, and links
- `experience.json`: Professional experience timeline
- `skills.json`: Technical skills categorized by domain
- `constants/index.ts`: Social links and navigation menu options

## Deployment
The portfolio is configured for deployment on Vercel, taking advantage of Next.js's optimized hosting platform. The build process generates static files that can be served efficiently.

## Development Notes
- The project uses Next.js 15 with the App Router
- Tailwind CSS v4 is configured with a custom theme
- Framer Motion provides smooth animations and transitions
- Responsive design implemented with mobile-first approach
- Static JSON data is used for content management
- TypeScript provides type safety throughout the application