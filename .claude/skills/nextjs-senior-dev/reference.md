# Next.js Senior Developer - Reference Guide

## App Router Architecture

### File Structure Best Practices
```
src/
├── app/
│   ├── layout.tsx (root layout)
│   ├── page.tsx (home page)
│   ├── (auth)/
│   │   ├── login/page.tsx
│   │   └── register/page.tsx
│   ├── dashboard/
│   │   ├── layout.tsx (dashboard layout)
│   │   ├── page.tsx
│   │   └── [id]/page.tsx
│   ├── api/
│   │   ├── auth/[...nextauth]/route.ts
│   │   └── products/route.ts
│   ├── error.tsx (error boundary)
│   ├── not-found.tsx (404)
│   └── loading.tsx (suspense fallback)
├── components/
│   ├── ui/ (reusable UI components)
│   ├── forms/ (form components)
│   └── layout/ (layout components)
├── lib/
│   ├── db.ts (database client)
│   ├── auth.ts (auth utilities)
│   ├── api-client.ts (API client)
│   └── utils.ts (general utilities)
├── hooks/
│   ├── useAuth.ts
│   └── useFetch.ts
└── types/
    └── index.ts (shared types)
```

## Server vs Client Components Decision Tree

**Use Server Component (default) when:**
- Accessing backend resources directly
- Keeping sensitive data server-side
- Reducing JavaScript bundle size
- Simplifying data fetching

**Use Client Component when:**
- Using hooks (useState, useEffect, useContext)
- Using browser APIs
- Need interactivity and event listeners
- Creating custom hooks

```typescript
// Server Component (default)
export default async function Page() {
  const data = await fetchFromDatabase()
  return <div>{data}</div>
}

// Client Component (when needed)
'use client'
export default function Counter() {
  const [count, setCount] = useState(0)
  return <button onClick={() => setCount(count + 1)}>{count}</button>
}
```

## Performance Optimization Checklist

- [ ] Image optimization with next/image
- [ ] Font loading with next/font
- [ ] Script loading strategy defined
- [ ] Route-based code splitting
- [ ] Bundle analysis run (npm run build)
- [ ] Core Web Vitals monitored
- [ ] Static generation where possible
- [ ] Caching headers configured
- [ ] Middleware for redirects/auth
- [ ] Database connection pooling

## Security Checklist

- [ ] Environment variables not exposed
- [ ] CSRF protection on forms
- [ ] Authentication implemented
- [ ] Input validation on all routes
- [ ] Rate limiting on API routes
- [ ] Security headers set
- [ ] Error messages don't leak info
- [ ] Secrets in .env.local (not committed)
- [ ] SQL injection prevention (use parameterized queries)
- [ ] XSS protection (sanitize user input)

## Common Patterns

### Data Fetching with Error Handling
```typescript
async function getData() {
  try {
    const res = await fetch('https://api.example.com/data', {
      next: { revalidate: 3600 } // ISR: revalidate every hour
    })
    if (!res.ok) throw new Error('Failed to fetch')
    return res.json()
  } catch (error) {
    console.error(error)
    throw error // Let error.tsx handle it
  }
}
```

### Protected API Route
```typescript
import { auth } from '@/lib/auth'

export async function POST(request: Request) {
  const session = await auth()
  if (!session?.user) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const data = await request.json()
  // Validate data
  // Process request
  return Response.json({ success: true })
}
```

### Middleware for Authentication
```typescript
import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('auth-token')?.value

  if (!token && request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*', '/api/protected/:path*']
}
```

## Deployment Considerations

### Vercel (Recommended)
- Zero-config deployment
- Automatic caching headers
- Edge middleware support
- Built-in monitoring

### Self-Hosted (Docker)
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

### Environment Variables
```env
# .env.local (dev only, not committed)
DATABASE_URL=postgres://...
NEXTAUTH_SECRET=...

# .env.production (production secrets)
DATABASE_URL=postgres://...
NEXTAUTH_SECRET=...

# .env (shared, committed)
NEXT_PUBLIC_API_URL=https://api.example.com
```
