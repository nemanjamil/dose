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
import { SliderSection } from "@/components/sections/Slider";

// Also available:
import { SliderText, SliderProduct } from "@/components/sections/Slider";
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

- **Colors**: Defined in Tailwind theme (see below)
- **Typography**: Albert Sans with 500 (Medium) and 700 (Bold) weights - set globally in `app/layout.tsx`
- **Spacing**: 8px, 12px, 16px, 24px, 32px, 64px, 128px, 164px (defined in theme)
- **Radius**: 14px, 20px, 32px, 99px
- **Shadows**: Consistent with rgba values

All theme values are defined in `app/globals.css` using Tailwind's `@theme inline` directive.

### Color Palette (Tailwind Theme)

All brand colors are defined in `app/globals.css` using Tailwind's `@theme` directive:

| Color Name | Hex Value | Usage                        | Tailwind Class                       |
| ---------- | --------- | ---------------------------- | ------------------------------------ |
| Dark       | `#6C2517` | Headings, primary text       | `bg-dose-dark`, `text-dose-dark`     |
| Mid        | `#9C5243` | Secondary text, descriptions | `bg-dose-mid`, `text-dose-mid`       |
| Accent     | `#A7253B` | CTAs, highlights             | `bg-dose-accent`, `text-dose-accent` |
| Light      | `#FEF8F4` | Page backgrounds             | `bg-dose-light`, `text-dose-light`   |
| Peach      | `#FFE3D3` | Buttons, accents             | `bg-dose-peach`, `text-dose-peach`   |
| White      | `#FFFFFF` | Component backgrounds        | `bg-white`, `text-white`             |

**Also available as primary/secondary/tertiary aliases:**

- `--color-primary` → Dark (#6C2517)
- `--color-secondary` → Mid (#9C5243)
- `--color-tertiary` → Accent (#A7253B)

**Usage in components:**

```tsx
// ✅ GOOD - Use Tailwind color classes
<div className="bg-dose-dark text-white">Heading</div>
<button className="bg-dose-peach hover:bg-dose-mid">Button</button>

// ❌ BAD - Hardcoded colors (avoid)
<div className="bg-[#6c2517] text-white">Heading</div>
```

### Typography Implementation

**Albert Sans is configured globally** in `app/layout.tsx`:

```tsx
import { Albert_Sans } from "next/font/google";

const albertSans = Albert_Sans({
  variable: "--font-albert-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});
```

**Don't repeat font-family in components.** Use Tailwind font weight classes instead:

- ❌ `className="font-['Albert_Sans:Bold',sans-serif]"` - WRONG, redundant
- ✅ `className="font-bold"` - CORRECT, uses global font with bold weight

### Font Weights

| Weight | Value | Tailwind Class | Usage                                       |
| ------ | ----- | -------------- | ------------------------------------------- |
| Medium | 500   | `font-medium`  | Body text, descriptions, secondary elements |
| Bold   | 700   | `font-bold`    | Headings, titles, important text            |

### Spacing Scale

All spacing values are defined in the theme and can be used with any Tailwind spacing utility:

| Value       | Pixels | Tailwind CSS Examples                                |
| ----------- | ------ | ---------------------------------------------------- |
| spacing-8   | 8px    | `p-[var(--spacing-8)]`, `gap-[var(--spacing-8)]`     |
| spacing-12  | 12px   | `p-[var(--spacing-12)]`, `gap-[var(--spacing-12)]`   |
| spacing-16  | 16px   | `p-[var(--spacing-16)]`, `gap-[var(--spacing-16)]`   |
| spacing-24  | 24px   | `p-[var(--spacing-24)]`, `gap-[var(--spacing-24)]`   |
| spacing-32  | 32px   | `p-[var(--spacing-32)]`, `gap-[var(--spacing-32)]`   |
| spacing-64  | 64px   | `p-[var(--spacing-64)]`, `gap-[var(--spacing-64)]`   |
| spacing-128 | 128px  | `p-[var(--spacing-128)]`, `gap-[var(--spacing-128)]` |
| spacing-164 | 164px  | `p-[var(--spacing-164)]`, `gap-[var(--spacing-164)]` |

**Usage example:**

```tsx
// Padding
<div className="p-[var(--spacing-32)]">Content with 32px padding</div>

// Gap between flex items
<div className="flex gap-[var(--spacing-16)]">Items</div>

// Margin
<div className="mb-[var(--spacing-24)]">Heading</div>
```

---

## ⚠️ Code Quality Guidelines

### Avoid Duplicate CSS Classes

**Problem:** Duplicate classes waste space and confuse the codebase.

**Examples:**

```tsx
// ❌ BAD - Duplicate classes
<p className="font-bold font-bold text-[#a7253b]">Text</p>
<div className="flex flex-col flex flex-col gap-4">Content</div>

// ✅ GOOD - Single instance of each class
<p className="font-bold text-[#a7253b]">Text</p>
<div className="flex flex-col gap-4">Content</div>
```

**When editing components:**

1. Check for duplicate utility classes
2. Remove inline font-family declarations (use global Albert Sans)
3. Keep class lists clean and readable

### Section Components - No Background Colors

**Rule:** Section components (`app/components/sections/*`) should NOT have background colors applied to the `<section>` element.

**Why?**

- Allows for flexible page layouts
- Enables background colors/images to be applied at the page level if needed
- Keeps sections reusable and composable

**Example:**

```tsx
// ❌ BAD - Section with background color
<section className="py-[var(--spacing-64)] px-[16px] w-full bg-dose-light">
  {/* content */}
</section>

// ✅ GOOD - Section without background color
<section className="py-[var(--spacing-64)] px-[16px] w-full">
  {/* content */}
</section>
```

**Exception:** Background colors can be applied to inner containers (divs) for specific components like feature boxes, cards, or badges.

### HTML Heading Elements - Don't Override Font Sizes

**Rule:** Use the correct semantic HTML heading tag (`<h1>` through `<h6>`) and let the design system styles apply automatically. Do NOT add text-sizing classes like `text-h5`, `text-small`, etc. to heading elements.

**Why?**

- Each heading tag (`<h1>`, `<h2>`, etc.) has predefined styles in `globals.css`
- Adding font size classes creates visual/semantic mismatches
- Breaks document outline and accessibility
- Results in redundant/conflicting CSS

**Examples:**

```tsx
// ❌ BAD - Adding text size class to heading
<h2 className="font-bold text-dose-dark text-h5">Delivery</h2>
// Problem: Says h2 semantically, but looks like h5 visually

// ✅ GOOD - Use correct heading level
<h5 className="font-bold text-dose-dark">Delivery</h5>
// The h5 styles from globals.css apply automatically

// ✅ ALSO GOOD - Use div if not a real heading
<div className="font-bold text-dose-dark text-h5">Label</div>
```

**Heading Styles in globals.css:**

- `<h1>` → 48px (--font-size-h1)
- `<h2>` → 36px (--font-size-h2)
- `<h3>` → 30px (--font-size-h3)
- `<h4>` → 24px (--font-size-h4)
- `<h5>` → 20px (--font-size-h5)
- `<h6>` → 16px (--font-size-h6)

All include: font-weight-bold, line-height, and letter-spacing. Never override with text size classes.

---

## 🛣️ Routes

| Page      | Route          | File                                                                 |
| --------- | -------------- | -------------------------------------------------------------------- |
| Home      | `/` or `/home` | `app/(pages)/home/page.tsx` (re-exported via `app/(pages)/page.tsx`) |
| About Us  | `/about-us`    | `app/(pages)/about-us/page.tsx`                                      |
| Shop      | `/shop`        | `app/(pages)/shop/page.tsx`                                          |
| Product   | `/shop/[id]`   | `app/(pages)/shop/[id]/page.tsx`                                     |
| Blog Post | `/blog/[slug]` | `app/(pages)/blog/[slug]/page.tsx`                                   |
| Contact   | `/contact-us`  | `app/(pages)/contact-us/page.tsx`                                    |
| Cart      | `/cart`        | `app/(pages)/cart/page.tsx`                                          |
| Checkout  | `/checkout`    | `app/(pages)/checkout/page.tsx`                                      |

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

| Type          | Example                               | Location                                         |
| ------------- | ------------------------------------- | ------------------------------------------------ |
| Pages         | `HomePage`, `AboutUsPage`             | `app/(pages)/[name]/page.tsx`                    |
| Sections      | `SliderSection`, `ProductsSection`    | `app/components/sections/`                       |
| Components    | `Header`, `Footer`, `Badge`           | `app/components/`                                |
| Subcomponents | `SliderText`, `SliderProduct`         | `app/components/sections/` (with parent section) |
| Directories   | `about-us`, `contact-us` (kebab-case) | -                                                |

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

## 🏗️ Build Process Rule

**DO NOT run `npm run build` automatically after every code fix.**

**Rule:**

- ✅ Ask the user first before running a build
- ✅ Run builds only when explicitly requested
- ✅ Run builds at the end of a multi-step task if user hasn't mentioned it
- ✅ Run builds if the user says "build" or "verify"
- ❌ Don't run builds after each individual fix
- ❌ Don't assume a build is needed

**When to Build:**

1. When user explicitly requests: "build the project", "verify", "run build"
2. When committing changes to git
3. At the end of a complete feature implementation
4. When troubleshooting build-related issues

**Why?**

- Faster iteration during development
- Reduced unnecessary build times
- Cleaner terminal output
- Builds happen when meaningful changes are complete

---

## 🔄 Git Commit Rule

**DO NOT commit automatically.** User will commit manually.

**Rule:**

- ✅ Stage files with `git add`
- ✅ Prepare commit messages when asked
- ❌ Do NOT run `git commit` automatically
- ❌ User handles all commits manually
- ❌ Wait for explicit user confirmation before committing

**Benefits:**

- User maintains control over commit history
- Allows for grouping related changes
- Cleaner commits with user oversight
- User decides commit timing and messages

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

## 🗄️ SUPABASE DATABASE

### Schema Management

**Database Schema File:** `utils/supabase/schema.ts`

⚠️ **CRITICAL RULE: Database Schema is Read-Only**

The `schema.ts` file defines the TypeScript interfaces that match your Supabase database structure. This file **MUST NOT be auto-generated or modified by code**.

**Important:**

- ✅ You can manually update this file when database schema changes
- ✅ Make schema changes directly in Supabase first
- ✅ Then update `schema.ts` to reflect those changes
- ❌ Never use automatic code generation to update schema
- ❌ Never let tools modify this file without explicit user confirmation
- ❌ This file is the source of truth for database types in the application

**Current Database Tables:**

**Products Table:**

```sql
- id: string (primary key)
- created_at: timestamp (optional)
- name: string
- color: string
- price: number
- rating: string
- volume: string
- folder: string (Supabase storage folder for product images, e.g., "product-1")
```

### Supabase Integration Files

- `utils/supabase/server.ts` - Server-side client and product queries
- `utils/supabase/schema.ts` - Database schema interfaces (DO NOT AUTO-MODIFY)
- `utils/supabase/storage.ts` - Storage helpers for product images

## 🎯 Key Points

1. **RESPONSIVE DESIGN IS MANDATORY** - Test on all sizes
2. **Pages are simple** - Just content, no Header/Footer imports
3. **Layout handles structure** - Provided by `app/(pages)/layout.tsx`
4. **Mobile-first approach** - Start mobile, enhance for desktop
5. **Design system consistency** - Use correct colors, spacing, fonts

---

## 🖼️ Image Handling - IMPORTANT

### ❌ NEVER USE Figma Image Links — Always Download and Store Locally

**CRITICAL RULE:** Never use Figma asset URLs (`https://www.figma.com/api/mcp/asset/...`) directly in code. Always download images from Figma first and save them to `public/images/` before referencing them in components.

**Problems with Figma links:**

- Figma links expire after 7 days
- Not optimized for web
- Slow loading
- Unreliable in production
- Will break in deployed builds

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
import thermoImg from "@/public/images/slider/thermos-main.jpg";
// Or use static path:
const thermoImg = "/images/slider/thermos-main.jpg";
```

**Step 4: Use Next.js Image component**

```tsx
import Image from "next/image";

<Image
  src="/images/slider/thermos-main.jpg"
  alt="Dose Thermos Product"
  width={676}
  height={700}
  priority
/>;
```

### ✅ SUPABASE STORAGE: Pull Product Images from Database

**For product images stored in Supabase Storage:**

**Pattern:**

```
https://uhizkbechdhzugjcokym.supabase.co/storage/v1/object/public/{folder}/main.jpg
```

**Where `{folder}` is the value from the Supabase `products` table `Folder` column.**

**Database Schema:**

```sql
-- products table
- id: string (primary key)
- name: string
- price: number
- description: string
- folder: string  ← Product folder name (e.g., "product-1", "product-2") - REQUIRED for images
- category: string
- colorway: string
- label: string
- created_at: timestamp
```

**Usage in Components:**

```tsx
// ✅ Build image URL from database folder
const product = await getProductById(id);
const imageUrl = `https://uhizkbechdhzugjcokym.supabase.co/storage/v1/object/public/${product.folder}/main.jpg`;

<Image src={imageUrl} alt={product.name} width={400} height={500} priority />;
```

**Or use a helper function in `utils/supabase/storage.ts`:**

```tsx
export function getProductImageUrl(folder: string): string {
  const baseUrl =
    "https://uhizkbechdhzugjcokym.supabase.co/storage/v1/object/public";
  return `${baseUrl}/${folder}/main.jpg`;
}

// Usage:
const imageUrl = getProductImageUrl(product.folder);
```

**Benefits of Supabase Storage:**

- ✅ Centralized asset management
- ✅ Easy to update product images
- ✅ No need for manual file commits
- ✅ Scalable for many products
- ✅ CDN optimized by Supabase

### Benefits of Local Images:

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

## 📏 Spacing Rule - Use Native Tailwind Only

**ALWAYS USE NATIVE TAILWIND SPACING** - No custom CSS variables for padding/margin

**Rule:**

- ✅ Use Tailwind's native spacing scale: `p-4`, `p-6`, `p-8`, `m-4`, `gap-4`, etc.
- ✅ Common sizes: `4`, `6`, `8`, `12`, `16`, `24`, `32`, `48`, `64` (all in 4px increments)
- ❌ Don't use custom CSS variables like `var(--spacing-32)`
- ❌ Don't create custom spacing values

**Examples:**

```tsx
// ✅ GOOD - Use native Tailwind spacing
<div className="p-8 gap-4 mb-6">Content</div>
<div className="px-6 py-4 rounded-lg">Card</div>
<div className="flex gap-8 items-center">Items</div>

// ❌ BAD - Using custom CSS variables
<div className="p-[var(--spacing-32)]">Content</div>
<div className="gap-[var(--spacing-24)]">Items</div>
```

**Tailwind Spacing Reference:**

- `1` = 4px
- `2` = 8px
- `3` = 12px
- `4` = 16px
- `6` = 24px
- `8` = 32px
- `12` = 48px
- `16` = 64px

**Benefits:**

- Consistent spacing across the project
- Better performance (no custom CSS)
- Easier to maintain and scale
- Works seamlessly with Tailwind's responsive utilities

---

## 🔄 Component Reusability Rule

**ALWAYS USE PREDEFINED COMPONENTS** - Never duplicate component functionality

**Rule:**

- ✅ Use existing components like `CTAButton`, `ColorSwatch`, `Badge`, etc.
- ✅ Import and reuse components across sections
- ❌ Don't create new components if a similar one already exists
- ❌ Don't inline component logic multiple times

**Examples:**

```tsx
// ✅ GOOD - Reuse CTAButton component
import CTAButton from "../CTAButton";

<CTAButton onClick={handleClick} label="Izaberi svoj termos" />
<CTAButton onClick={onShopClick} />

// ❌ BAD - Duplicating button logic
<button onClick={handleClick} className="...">Izaberi svoj termos</button>
<button onClick={onShopClick} className="...">Shop</button>
```

**Benefits:**

- Single source of truth for components
- Consistency across the project
- Easier maintenance and updates
- Reduced code duplication

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
