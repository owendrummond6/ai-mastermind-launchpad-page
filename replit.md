# Overview

This is a full-stack web application for an AI Agency landing page built with a modern tech stack. The application features a React frontend with TypeScript, Express.js backend, and uses Drizzle ORM with PostgreSQL for data management. The project is configured as a monorepo with shared TypeScript definitions and follows a component-based architecture using shadcn/ui components.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite as the build tool
- **UI Library**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design system and CSS variables
- **State Management**: TanStack Query for server state management
- **Routing**: React Router for client-side navigation
- **Form Handling**: React Hook Form with Zod validation

## Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with ESM modules
- **Development**: tsx for TypeScript execution in development
- **Production Build**: esbuild for backend bundling

## Data Storage
- **Database**: PostgreSQL (configured for Neon Database)
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Session Storage**: PostgreSQL sessions with connect-pg-simple

# Key Components

## Frontend Components
- **Landing Page**: AI Agency marketing page with call-to-action buttons
- **UI Components**: Complete shadcn/ui component library including forms, dialogs, navigation, and data display components
- **Responsive Design**: Mobile-first approach with breakpoint-based styling
- **Toast Notifications**: Dual toast system using Radix UI Toast and Sonner

## Backend Components
- **Route Registration**: Centralized route management in `server/routes.ts`
- **Storage Interface**: Abstracted storage layer with in-memory implementation for development
- **Request Logging**: Comprehensive API request logging with response capture
- **Error Handling**: Global error handler with status code management

## Shared Components
- **Database Schema**: User table with username/password authentication
- **Type Definitions**: Shared TypeScript types between frontend and backend
- **Validation Schemas**: Zod schemas for data validation

# Data Flow

1. **Client Requests**: React frontend makes API calls using TanStack Query
2. **Server Processing**: Express.js handles requests through registered routes
3. **Data Layer**: Storage interface abstracts database operations
4. **Response Handling**: Structured JSON responses with error handling
5. **State Management**: TanStack Query manages caching and synchronization

# External Dependencies

## Core Dependencies
- **@neondatabase/serverless**: Neon Database PostgreSQL driver
- **@tanstack/react-query**: Server state management
- **drizzle-orm**: Type-safe ORM for PostgreSQL
- **react-hook-form**: Form handling and validation
- **@hookform/resolvers**: Zod integration for form validation

## UI Dependencies
- **@radix-ui/***: Primitive UI components for accessibility
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Type-safe CSS variant management
- **lucide-react**: Icon library

## Development Dependencies
- **vite**: Frontend build tool and development server
- **tsx**: TypeScript execution for development
- **esbuild**: Fast JavaScript bundler for production

# Deployment Strategy

## Development
- **Frontend**: Vite development server with HMR
- **Backend**: tsx for live TypeScript execution
- **Database**: Drizzle Kit for schema management
- **Environment**: NODE_ENV=development with development-specific features

## Production Build
- **Frontend**: Vite builds static assets to `dist/public`
- **Backend**: esbuild bundles server code to `dist/index.js`
- **Database**: Production PostgreSQL with environment-based configuration
- **Serving**: Express serves both API routes and static frontend assets

## Environment Configuration
- **DATABASE_URL**: PostgreSQL connection string (required)
- **NODE_ENV**: Environment flag for development/production behavior
- **Replit Integration**: Special handling for Replit development environment

# Changelog

- July 03, 2025. Initial setup
- July 03, 2025. Successfully migrated from Lovable to Replit environment
  - Migrated routing from react-router-dom to wouter for Replit compatibility
  - Added custom theme provider replacing next-themes dependency
  - Set up proper query client configuration for TanStack Query
  - Installed missing dependencies (sonner, react-router-dom)
  - Added custom animations (fade-in, spin-slow) for landing page effects
  - Fixed Inter font configuration in Tailwind CSS
  - Removed console error logging from NotFound component

# User Preferences

Preferred communication style: Simple, everyday language.