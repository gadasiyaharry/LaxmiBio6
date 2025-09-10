# Overview

This is a full-stack web application for Laxmi Biomedicals, a laboratory equipment wholesaler and distributor. The application serves as a corporate website showcasing their product catalog including laboratory chemicals, diagnostic test kits, gas analyzers, spectrometers, refractometers, digital polarimeters, and microtomes. The site features a modern, professional design with comprehensive product listings, company information, and integrated WhatsApp ordering functionality for seamless customer engagement.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The client uses a React-based Single Page Application (SPA) built with Vite as the build tool. The architecture follows modern React patterns:

- **Component Library**: Utilizes shadcn/ui components built on Radix UI primitives for consistent, accessible UI components
- **Styling**: Tailwind CSS with custom design system variables for theming and responsive design
- **Routing**: Wouter for lightweight client-side routing with pages for Home, About, Services, and Contact
- **State Management**: TanStack Query (React Query) for server state management and API data fetching
- **Form Handling**: React Hook Form with Zod validation for type-safe form management
- **SEO**: React Helmet for dynamic meta tags and social media optimization

## Backend Architecture
The server follows a REST API design pattern using Express.js:

- **API Layer**: Express.js with structured route handling in `/server/routes.ts`
- **Data Storage**: In-memory storage implementation with interface-based design for easy database migration
- **Type Safety**: Shared TypeScript schemas between client and server using Zod validation
- **Development Setup**: Vite integration for hot module replacement in development mode

## Data Storage Solutions
Currently implements in-memory storage with a well-defined interface:

- **Storage Interface**: `IStorage` interface defines contracts for user, product, and contact operations
- **Memory Implementation**: `MemStorage` class provides immediate functionality with sample data
- **Database Ready**: Drizzle ORM configuration with PostgreSQL schema definitions prepared for production database integration
- **Schema Management**: Shared schema definitions in `/shared/schema.ts` using Drizzle with Zod integration

## Authentication and Authorization
Basic user schema is defined but authentication is not currently implemented. The foundation exists for future authentication integration with user management capabilities.

# External Dependencies

## Database Integration
- **Drizzle ORM**: Configured for PostgreSQL with migration support
- **Neon Database**: Serverless PostgreSQL connection ready for deployment
- **Schema Management**: Automated migrations through `drizzle-kit`

## UI Framework and Components
- **React**: Core frontend framework with TypeScript support
- **shadcn/ui**: Complete component library built on Radix UI primitives
- **Radix UI**: Accessible component primitives for complex UI elements
- **Tailwind CSS**: Utility-first CSS framework with custom design system

## Communication Services
- **WhatsApp Integration**: Direct messaging functionality with pre-filled order templates
- **Contact Forms**: Email integration ready for SMTP service connection

## Development and Build Tools
- **Vite**: Modern build tool with hot module replacement
- **TypeScript**: Type safety across the entire application
- **ESBuild**: Fast bundling for production builds
- **Replit Integration**: Development environment optimization with error overlays

## Design and Assets
- **Google Fonts**: Typography integration for professional appearance
- **Unsplash**: Placeholder images for product showcases
- **Lucide React**: Icon system for consistent visual elements
- **React Icons**: Additional icon sets including social media icons

## Form and Data Validation
- **Zod**: Runtime type validation and schema definition
- **React Hook Form**: Performant form management with validation integration
- **TanStack Query**: Server state synchronization and caching