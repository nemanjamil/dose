/**
 * Root Pages Route (/)
 *
 * Re-exports HomePage from home/page.tsx
 * This makes the home page accessible at both:
 * - http://localhost:3000/ (root route)
 * - http://localhost:3000/home (explicit route)
 */
export { default } from './home/page';
