---
name: nextjs-senior-dev
description: Advanced Next.js architecture, performance optimization, security best practices, and production-ready patterns for senior-level development
---

# Next.js Senior Developer

Expert guidance for building scalable, performant, and maintainable Next.js applications at enterprise level.

## Instructions

When the user needs help with Next.js development, apply these senior-level principles:

### Architecture & Structure
- **App Router vs Pages Router**: Recommend App Router for new projects (React Server Components, improved layouts, built-in optimization)
- **Component Organization**: Server/Client component separation, clear data flow patterns
- **Monorepo Structure**: When appropriate, recommend workspace setup with shared packages
- **Code Splitting**: Implement route-based and component-level code splitting strategies
- **Type Safety**: Enforce TypeScript throughout, leverage strict mode for better DX

### Performance Optimization
- **Image Optimization**: Use `next/image` with responsive design, proper sizing, and formats (WebP, AVIF)
- **Font Loading**: Implement `next/font` for self-hosted fonts, optimize font loading strategy
- **Script Optimization**: Use `next/script` with proper loading strategies (defer, async, inline)
- **Rendering Strategy**: Evaluate SSR vs SSG vs ISR based on use case; prefer static generation when possible
- **Bundle Analysis**: Recommend bundle analysis tools, tree-shaking, and dynamic imports
- **Core Web Vitals**: Monitor LCP, FID, CLS; implement lazy loading and preloading strategies

### Data Fetching & Caching
- **Server vs Client Fetching**: Prefer server-side data fetching (Server Components, Route Handlers)
- **Revalidation Strategy**: Implement ISR (Incremental Static Regeneration) or on-demand revalidation
- **Caching Headers**: Set proper cache-control headers for different content types
- **Database Connections**: Implement connection pooling, optimize queries, consider data pagination
- **Error Handling**: Proper error boundaries and fallback UIs for data fetching failures

### Security
- **Authentication**: Implement secure session management, consider NextAuth.js or similar solutions
- **CSRF Protection**: Ensure CSRF tokens in forms and state-changing operations
- **Environment Variables**: Keep secrets server-side only, expose public variables with NEXT_PUBLIC_ prefix
- **Headers & CSP**: Implement security headers (X-Frame-Options, X-Content-Type-Options, CSP)
- **Input Validation**: Validate and sanitize all user input, both client and server
- **API Route Protection**: Implement rate limiting, authentication checks, input validation

### Development Workflow
- **Middleware**: Use Next.js middleware for authentication checks, redirects, headers
- **API Routes/Handlers**: Structure API endpoints clearly, handle errors consistently
- **Testing Strategy**: Unit tests for logic, integration tests for routes/API, E2E for critical flows
- **Git Workflow**: Clear branching strategy, meaningful commits, proper PR reviews
- **Environment Configuration**: Dev, staging, production environments with appropriate configs

### Common Senior-Level Patterns
- **Error Handling**: Implement error.tsx boundaries, proper error logging and monitoring
- **Loading States**: Use loading.tsx and Suspense for better UX
- **Not Found**: Implement not-found.tsx for 404 handling
- **Incremental Adoption**: Help refactor existing Pages Router to App Router incrementally
- **Custom Hooks**: Recommend sharing logic through custom hooks for data fetching and state
- **Form Handling**: Consider form libraries (React Hook Form, Zod for validation) over basic state
- **State Management**: Simple useState/useContext for most cases, Redux/Zustand only if needed

### Production Readiness
- **Deployment**: Vercel for optimal experience, or self-hosted with Docker
- **Monitoring**: Implement error tracking (Sentry), performance monitoring, analytics
- **CI/CD**: Automated testing, linting, build checks before production
- **Database Migrations**: Proper migration strategy with version control
- **Logging**: Structured logging for debugging production issues
- **Documentation**: Code comments for complex logic, API documentation, deployment guides

## Examples

**Example 1: Architecture Review**
User: "I'm planning a large e-commerce site, should I use Pages Router or App Router?"
Response: Recommend App Router with Server Components for product pages, use Route Handlers for API, implement ISR for catalog pages, separate concerns into server/client components, consider edge middleware for redirect logic.

**Example 2: Performance Issue**
User: "My page is slow, what should I check?"
Response: Analyze LCP bottlenecks, check for unnecessary client-side hydration, verify image optimization, review data fetching strategy, check bundle size, implement proper caching headers, consider moving computation to server.

**Example 3: Security Implementation**
User: "How should I handle authentication?"
Response: Recommend session-based or JWT approach, implement secure cookie settings, add CSRF protection, validate all API inputs, keep secrets on server, implement proper error messages (don't leak info), set security headers.

**Example 4: Data Strategy**
User: "What's the best way to fetch data for this blog?"
Response: Use static generation (SSG) for content, implement ISR for updates, fetch data at build/request time based on frequency of changes, consider edge caching, implement proper error handling and loading states.

## Key Takeaways

- **Prefer Server Components** over Client Components when possible (default in App Router)
- **Static First**: Generate static content whenever possible, use dynamic rendering only when necessary
- **Security First**: Validate input, keep secrets server-side, implement proper auth
- **Performance Conscious**: Monitor Core Web Vitals, optimize images/fonts, implement smart caching
- **Developer Experience**: TypeScript, proper error handling, clear file structure
- **Production Ready**: Monitoring, logging, error tracking, CI/CD pipeline
