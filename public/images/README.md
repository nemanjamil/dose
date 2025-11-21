# Images Directory

This directory stores all static images used in the Dose website.

## Directory Structure

```
public/images/
├── slider/           # Slider/Hero section images
│   ├── thermos-main.jpg
│   ├── feature-icons/
│   └── ...
├── products/         # Product images
│   ├── product-*.jpg
│   └── ...
├── sections/         # Other section images
│   ├── section-name.jpg
│   └── ...
└── icons/           # SVG icons and small graphics
    ├── feature-badge.svg
    └── ...
```

## Guidelines

### Image Naming
- Use kebab-case: `thermos-main.jpg`, `feature-badge-1.svg`
- Be descriptive: `hero-slider-product.jpg` ✅ not `image1.jpg` ❌
- Include location/section: `slider-thermos-main.jpg`

### Image Formats
- **Photos/product images**: `.jpg` (compressed)
- **Icons/logos**: `.svg` (scalable)
- **Graphics with transparency**: `.png`
- Optimize before adding (use tools like TinyPNG, ImageOptim)

### Adding Images

1. **Download from Figma**
   - Right-click image → Export → Download
   - Or use Figma's export feature

2. **Optimize the image**
   - Use online tools: TinyPNG, Squoosh, ImageOptim
   - Reduce file size without losing quality

3. **Save to correct folder**
   - Slider images → `slider/`
   - Product images → `products/`
   - Section images → `sections/`
   - Icons → `icons/`

4. **Use in component**
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

### Next.js Image Component

Always use Next.js Image component for optimization:
```tsx
import Image from 'next/image';

<Image
  src="/images/slider/thermos-main.jpg"
  alt="Description"
  width={number}     // Required
  height={number}    // Required
  priority={true}    // For above-the-fold images
  quality={90}       // 75-90 recommended
/>
```

### Never Use Figma Asset URLs

❌ **WRONG:**
```tsx
const imgSubtract = "https://www.figma.com/api/mcp/asset/...";
```

✅ **CORRECT:**
```tsx
const imgSubtract = "/images/slider/thermos-main.jpg";
```

Figma URLs expire after 7 days!

## Local Images (Migrated from Figma)

All Figma asset URLs have been successfully migrated to local images.
- `app/components/sections/SliderSection.tsx`
- `app/components/sections/DesignPhilosophySection.tsx`
- `app/components/Header.tsx` (logo)
- Other components

## Image Optimization Tips

1. **Resize before export**: Export at actual size needed (not larger)
2. **Compress**: Use TinyPNG or similar (target: 50-200KB for product images)
3. **Use modern formats**: WebP for better compression (Next.js handles conversion)
4. **Use srcSet**: Next.js Image component handles automatically
5. **Lazy load**: Use `loading="lazy"` for below-the-fold images

## Resources

- [Next.js Image Optimization](https://nextjs.org/docs/basic-features/image-optimization)
- [TinyPNG](https://tinypng.com/) - Image compression
- [Squoosh](https://squoosh.app/) - Online image optimizer
- [ImageOptim](https://imageoptim.com/) - Mac app for optimization
