# Dose Web Project - Development Guide

## Project Overview

Dose is a premium thermos brand website built with **Next.js 16, React 19, and Tailwind CSS 4**.

---

## ⚠️ CRITICAL REQUIREMENT: RESPONSIVE DESIGN

Website MUST be fully responsive on all devices:

- **Mobile**: 320px-767px
- **Tablet**: 768px-1439px
- **Desktop**: 1440px+

**Rules:**

- Use Tailwind responsive prefixes: `sm:`, `md:`, `lg:`, `xl:`
- Mobile-first approach
- Touch targets minimum 44x44px
- No horizontal scrolling
- Test on mobile (375px), tablet (768px), desktop (1440px)

---

## 📁 Project Structure

```
app/
├── (pages)/                    ⭐ Route group with Header + Footer wrapper
│   ├── layout.tsx             (Header, Footer, flexbox layout for all pages)
│   ├── page.tsx               (Re-exports home page - serves / route)
│   ├── home/
│   │   └── page.tsx           (HomePage - serves /home route)
│   ├── about-us/page.tsx      (AboutUsPage)
│   ├── shop/page.tsx          (ShopPage)
│   ├── shop/[id]/page.tsx     (Shop single product)
│   ├── blog/[slug]/page.tsx   (Blog single post)
│   ├── contact-us/page.tsx    (ContactUsPage)
│   ├── cart/page.tsx          (CartPage)
│   └── checkout/page.tsx      (CheckoutPage)
├── components/
│   ├── Header.tsx             (Fixed navigation header)
│   ├── Footer.tsx             (Persistent footer)
│   └── sections/              (Reusable page sections)
│       ├── Slider/            (Slider section with subcomponents)
│       │   ├── SliderSection.tsx      (Main section container)
│       │   ├── SliderText.tsx         (Text content subcomponent)
│       │   ├── SliderProduct/         (Product display with subcomponents)
│       │   │   ├── SliderProduct.tsx  (Main product component)
│       │   │   ├── ProductImage.tsx   (Product image display)
│       │   │   ├── FeatureBadge.tsx   (Individual feature badge)
│       │   │   ├── ColorSwatch.tsx    (Color options display)
│       │   │   ├── SlideIndicators.tsx (Slide navigation 01, 02, 03)
│       │   │   ├── TopBar.tsx         (Social icons & Shop button)
│       │   │   └── index.ts           (Barrel export)
│       │   └── index.ts               (Barrel export for Slider)
│       └── ... other sections
├── layout.tsx                 (Root HTML/body layout)
└── globals.css                (Global styles)
```

---

## 📂 Organizing Related Components in Sections

When a section component has multiple subcomponents (e.g., SliderSection with SliderText and SliderProduct), group them in a subfolder:

**Structure:**
```
app/components/sections/
├── Slider/
│   ├── SliderSection.tsx      (Main section component)
│   ├── SliderText.tsx         (Subcomponent - text/content)
│   ├── SliderProduct.tsx      (Subcomponent - product/image)
│   └── index.ts               (Barrel export)
└── OtherSection.tsx           (Standalone section)
```

**Import Usage:**
```tsx
// ✅ GOOD - Use barrel export for clean imports
import { SliderSection } from '@/components/sections/Slider';

// Also available:
import { SliderText, SliderProduct } from '@/components/sections/Slider';
```

**Benefits:**
- ✅ Logical grouping of related components
- ✅ Prevents `/sections` folder from becoming cluttered
- ✅ Clear parent-child relationships
- ✅ Easier to move/refactor entire feature
- ✅ Scalable as components grow

**Rule:** Use subfolders when a section has 2+ subcomponents. Standalone sections can stay in `/sections` root.

---

## 🎨 Design System

- **Colors**: `#6c2517` (dark), `#9c5243` (mid), `#a7253b` (accent), `#fef8f4` (light)
- **Typography**: Albert Sans (Bold, Medium)
- **Spacing**: 8px and 16px base units
- **Radius**: 14px, 20px, 32px, 99px
- **Shadows**: Consistent with rgba values

---

## 🛣️ Routes

| Page      | Route          | File                               |
| --------- | -------------- | ---------------------------------- |
| Home      | `/` or `/home` | `app/(pages)/home/page.tsx` (re-exported via `app/(pages)/page.tsx`) |
| About Us  | `/about-us`    | `app/(pages)/about-us/page.tsx`    |
| Shop      | `/shop`        | `app/(pages)/shop/page.tsx`        |
| Product   | `/shop/[id]`   | `app/(pages)/shop/[id]/page.tsx`   |
| Blog Post | `/blog/[slug]` | `app/(pages)/blog/[slug]/page.tsx` |
| Contact   | `/contact-us`  | `app/(pages)/contact-us/page.tsx`  |
| Cart      | `/cart`        | `app/(pages)/cart/page.tsx`        |
| Checkout  | `/checkout`    | `app/(pages)/checkout/page.tsx`    |

---

## 📝 Adding a New Page

**Step 1: Create directory**

```bash
mkdir -p app/(pages)/page-name
```

**Step 2: Create page.tsx**

```tsx
export default function PageNamePage() {
  return (
    <div className="max-w-[1440px] mx-auto px-[16px] sm:px-[32px] py-[64px] sm:py-[96px]">
      <h1>Page Title</h1>
      {/* Content */}
    </div>
  );
}
```

**That's it!** Page automatically gets Header (fixed) + Footer (sticky) from layout.

**Important:** Don't import Header/Footer in pages - they're provided by `app/(pages)/layout.tsx`

---

## 🏗️ Architecture Pattern

**Main Wrapper Layout** (`app/(pages)/layout.tsx`):

- Header mounted once (persistent)
- Footer mounted once (persistent)
- Flexbox ensures footer sticks to bottom
- All pages inherit this structure
- No duplication needed

**Benefits:**

- ✅ DRY - Define Header/Footer once
- ✅ Performance - No re-renders on navigation
- ✅ Consistency - Same navigation/footer everywhere
- ✅ Scalability - Easy to add pages

---

## 📋 Naming Conventions

### General Rules

| Type        | Example                               | Location                                                |
| ----------- | ------------------------------------- | ------------------------------------------------------- |
| Pages       | `HomePage`, `AboutUsPage`             | `app/(pages)/[name]/page.tsx` |
| Sections    | `SliderSection`, `ProductsSection`    | `app/components/sections/`                              |
| Components  | `Header`, `Footer`, `Badge`           | `app/components/`                                       |
| Subcomponents | `SliderText`, `SliderProduct`         | `app/components/sections/` (with parent section)       |
| Directories | `about-us`, `contact-us` (kebab-case) | -                                                       |

### Component Naming Details

**Page Components:**
- Always end with `Page` suffix: `HomePage`, `AboutUsPage`, `ShopPage`
- Use PascalCase
- Example: `app/(pages)/home/page.tsx` exports `HomePage`

**Section Components:**
- Always end with `Section` suffix: `SliderSection`, `ProductsSection`, `TestimonialsSection`
- Sections are container/wrapper components for page areas
- Can contain subcomponents or standalone content
- Example: `app/components/sections/SliderSection.tsx`

**Subcomponents (Parts of Sections):**
- Use descriptive names based on CONTENT, not POSITION
- ✅ `SliderText` (describes content: text/title/description)
- ✅ `SliderProduct` (describes content: product image)
- ❌ `SliderLeft` (position-based - bad)
- ❌ `SliderRight` (position-based - bad)
- Pattern: `[ParentSection][ContentType]` (remove "Section" suffix)
- Always keep parent section context in the name

**Layout Components:**
- Use simple, descriptive names: `Header`, `Footer`, `Sidebar`, `Container`
- No suffix needed for top-level layout components

**Utility/Feature Components:**
- Use descriptive names: `Badge`, `Button`, `Card`, `Modal`
- Based on functionality/appearance, not usage

### Examples of Good vs Bad Naming

```tsx
// ❌ BAD - Position-based naming
function SliderLeft() { ... }
function SliderRight() { ... }
function HeroLeft() { ... }
function HeroRight() { ... }

// ✅ GOOD - Content-based naming
function SliderText() { ... }
function SliderProduct() { ... }
function HeroTitle() { ... }
function HeroImage() { ... }

// ❌ BAD - Too generic
function Part1() { ... }
function Part2() { ... }
function Content() { ... }

// ✅ GOOD - Descriptive and contextual
function ProductCard() { ... }
function TestimonialItem() { ... }
function CategoryFilter() { ... }

// ❌ BAD - Missing section context
// In SliderSection folder:
export default function Text() { ... }
export default function Product() { ... }

// ✅ GOOD - Clear parent-child relationship
// In sections folder:
export default function SliderText() { ... }
export default function SliderProduct() { ... }
```

### Why Descriptive Naming?

1. **Clarity**: Code readers immediately understand component purpose
2. **Maintenance**: Easy to find and refactor
3. **Scalability**: As components grow, names remain accurate
4. **Consistency**: Follows single naming pattern across project
5. **Position Independence**: If layout changes (mobile vs desktop), name still makes sense

---

## 🔧 Quick Commands

```bash
npm run build    # Build & verify
npm run dev      # Dev server
npm run lint     # Lint check
```

---

## ✅ Before Committing

- [ ] Responsive design (test mobile, tablet, desktop)
- [ ] Header visible on all pages
- [ ] Footer visible on all pages
- [ ] No horizontal scrolling
- [ ] Build succeeds: `npm run build`
- [ ] No console errors
- [ ] Touch targets 44x44px+ on mobile

---

## 📚 Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- iOS Safari, Chrome Android

---

## 🎯 Key Points

1. **RESPONSIVE DESIGN IS MANDATORY** - Test on all sizes
2. **Pages are simple** - Just content, no Header/Footer imports
3. **Layout handles structure** - Provided by `app/(pages)/layout.tsx`
4. **Mobile-first approach** - Start mobile, enhance for desktop
5. **Design system consistency** - Use correct colors, spacing, fonts

---

## 🖼️ Image Handling - IMPORTANT

### ❌ DO NOT USE Figma Image Links in Production
**Current Issue:** SliderSection and other components use Figma asset URLs like:
```
https://www.figma.com/api/mcp/asset/66ea92ee-1af4-422e-ba74-bfa50c815049
```

**Problems:**
- Figma links expire after 7 days
- Not optimized for web
- Slow loading
- Unreliable in production

### ✅ PROPER WAY: Save Images Locally

**Step 1: Create images directory**
```bash
mkdir -p public/images/{slider,products,sections}
```

**Step 2: Save Figma images locally**
- Download images from Figma
- Save in appropriate folder: `public/images/slider/`, `public/images/products/`, etc.
- Use descriptive names: `thermos-main.jpg`, `feature-badge-1.svg`, etc.

**Step 3: Update imports**
```tsx
// ❌ Before (Figma link - DON'T USE)
const imgSubtract = "https://www.figma.com/api/mcp/asset/...";

// ✅ After (Local image)
import thermoImg from '@/public/images/slider/thermos-main.jpg';
// Or use static path:
const thermoImg = '/images/slider/thermos-main.jpg';
```

**Step 4: Use Next.js Image component**
```tsx
import Image from 'next/image';

<Image
  src="/images/slider/thermos-main.jpg"
  alt="Dose Thermos Product"
  width={676}
  height={700}
  priority
/>
```

### Benefits:
- ✅ Optimized by Next.js (auto compression, formats)
- ✅ Reliable (no expiry)
- ✅ Better performance
- ✅ CDN ready for production
- ✅ Version control friendly

### SliderSection Structure:
**Left Part:** Text, heading, description, CTA button
**Right Part:** Product image, feature badges, color swatches, slide indicators
- Figma design: https://www.figma.com/design/I7GYdab3FirpOg941b6wTL/Dose-Web-Project?node-id=95-3

**Action Required:**
Replace all Figma image URLs in:
- `app/components/sections/SliderSection.tsx`
- Other components using Figma assets
- Use local images instead

---

## 🚫 Documentation Rule

**DO NOT CREATE** any additional markdown documentation files like:

- ❌ `ARCHITECTURE.md`
- ❌ `NAMING_CONVENTIONS.md`
- ❌ `PAGE_STRUCTURE.md`
- ❌ Any similar `*.md` files in root directory

**WHY?**

- This file (`claude.md`) is the **single source of truth**
- Prevents documentation duplication and confusion
- Easier to maintain one file instead of many
- Always update THIS file instead

**ONLY EXCEPTION:**

- `README.md` (project setup/overview for GitHub)
- This file (`.claude/claude.md`)
