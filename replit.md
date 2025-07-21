# Capoeira Portfolio Application

## Overview

This is a full-stack web application designed as a digital portfolio for a Capoeira course. The application showcases class timelines, activities, seminars, and cultural elements related to Capoeira education. It features a modern React frontend with a Node.js/Express backend, using PostgreSQL for data storage and Drizzle ORM for database management.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom Capoeira-themed color variables
- **UI Components**: Radix UI primitives via shadcn/ui component library
- **State Management**: TanStack Query (React Query) for server state
- **Routing**: Wouter for lightweight client-side routing
- **Animations**: Framer Motion for smooth animations and transitions
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js for REST API
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: PostgreSQL session store with connect-pg-simple
- **Development**: Hot reload with tsx and custom middleware logging

### Project Structure
- **Monorepo Layout**: 
  - `client/` - React frontend application
  - `server/` - Express backend API
  - `shared/` - Shared TypeScript schemas and types
  - `migrations/` - Database migration files

## Key Components

### Database Schema (shared/schema.ts)
- **Classes Table**: Stores course class information with date, title, content, location, tags, and type
- **Activities Table**: Manages practical activities with descriptions, dates, images, and categories
- **Seminars Table**: Tracks student seminar groups with topics and member lists
- **Reflections Table**: Stores student reflections and thoughts

### API Layer (server/routes.ts)
- RESTful endpoints for each entity type (classes, activities, seminars, reflections)
- GET endpoints for listing and individual item retrieval
- Error handling with appropriate HTTP status codes
- JSON response format with consistent error messaging

### Storage Layer (server/storage.ts)
- Interface-based storage abstraction (IStorage)
- In-memory storage implementation (MemStorage) for development
- Sample data initialization based on provided course materials
- Ready for database storage implementation

### Frontend Components
- **Sidebar Navigation**: Fixed navigation with smooth scrolling to sections
- **Timeline Cards**: Expandable cards showing class details with color-coded tags
- **Image Modal**: Full-screen image viewer with keyboard navigation
- **Section Headers**: Consistent section styling with icons and animations

## Data Flow

1. **Frontend Data Fetching**: React Query handles API calls with caching and error states
2. **API Request Flow**: Express middleware logs requests and handles JSON parsing
3. **Storage Interaction**: Storage layer abstracts data access for easy database swapping
4. **Response Processing**: Consistent JSON responses with error handling
5. **UI Updates**: React Query automatically updates UI when data changes

## External Dependencies

### Core Dependencies
- **Database**: @neondatabase/serverless for PostgreSQL connectivity
- **ORM**: drizzle-orm and drizzle-kit for database operations and migrations
- **UI Library**: Complete Radix UI component ecosystem via shadcn/ui
- **Query Management**: @tanstack/react-query for server state management
- **Validation**: drizzle-zod for schema validation using Zod
- **Animations**: framer-motion for smooth UI transitions

### Development Tools
- **Build**: Vite with React plugin and TypeScript support
- **Styling**: Tailwind CSS with PostCSS processing
- **Development**: tsx for TypeScript execution, esbuild for production builds
- **Replit Integration**: Cartographer and runtime error overlay plugins

## Deployment Strategy

### Development Environment
- **Frontend**: Vite dev server with HMR and React Fast Refresh
- **Backend**: tsx with automatic restart on file changes
- **Database**: Development database via DATABASE_URL environment variable
- **Integration**: Vite proxy setup for seamless API communication

### Production Build
- **Frontend**: Vite builds optimized static assets to `dist/public`
- **Backend**: esbuild bundles server code to `dist/index.js`
- **Database**: Drizzle migrations applied via `db:push` command
- **Deployment**: Single command builds both frontend and backend for deployment

### Configuration Management
- **Environment Variables**: DATABASE_URL for database connection
- **TypeScript**: Shared configuration across client, server, and shared modules
- **Path Aliases**: Configured for clean imports (@/, @shared/, etc.)
- **Asset Handling**: Vite handles static assets with attached_assets directory support

The application is designed to be easily deployable on platforms like Replit, with environment-specific configurations and a clear separation between development and production builds.