---
description: Fix text heights and heading sizes for responsive design on specified component/page
argument-hint: [file-path]
allowed-tools: Read(*), Edit(*), Grep(*)
model: claude-3-5-haiku-20241022
---

# Fix Text Heights and Headings

Fix heading hierarchy and text size consistency on the specified file: **$1**

## CLAUDE.md Rules to Enforce

### Heading Elements (H1-H6)
- ❌ **DON'T** add text-size classes like `text-h5`, `text-small`, `text-[20px]` to heading tags
- ✅ **DO** use the correct semantic heading tag (`<h1>` through `<h6>`)
- Each heading tag has predefined styles in `globals.css`:
  - `<h1>` → 48px (--font-size-h1)
  - `<h2>` → 36px (--font-size-h2)
  - `<h3>` → 30px (--font-size-h3)
  - `<h4>` → 24px (--font-size-h4)
  - `<h5>` → 20px (--font-size-h5)
  - `<h6>` → 16px (--font-size-h6)
- All include: `font-weight-bold`, `line-height`, and `letter-spacing`

**Examples:**
```tsx
// ❌ BAD - Adding text-size class to heading
<h2 className="font-bold text-dose-dark text-h5 tracking-[-0.4px]">Payment</h2>

// ✅ GOOD - Use correct heading level
<h5 className="font-bold text-dose-dark">Payment</h5>
```

### Non-Heading Text Elements
- Use predefined text-size classes instead of arbitrary values:
  - `text-h6` → 16px (for body text)
  - `text-p-small` → 18px (for larger body)
  - `text-p-regular` → 20px (for regular paragraphs)
  - `text-small` → 14px (for labels, secondary text)
  - `text-extra-small` → 12px (for captions, small labels)
- Remove `tracking-[-0.24px]`, `tracking-[-0.28px]`, etc. — they're included in the classes

**Examples:**
```tsx
// ❌ BAD - Arbitrary font size
<label className="text-dose-mid text-[14px] tracking-[-0.28px]">Full name</label>

// ✅ GOOD - Predefined class
<label className="text-dose-mid text-extra-small">Full name</label>
```

## Execution Steps

1. **Read the file** to understand current structure
2. **Find all heading tags** (`<h1>` through `<h6>`)
   - Check if they have `text-h*`, `text-p-*`, `text-[*px]`, or `tracking-[-*px]` classes
   - If yes, remove those classes (keep other styling like `font-bold`, color classes)
3. **Find all non-heading text elements** (labels, spans, paragraphs)
   - Check for arbitrary font sizes like `text-[14px]`, `text-[12px]`, `text-[20px]`
   - Check for arbitrary tracking like `tracking-[-0.28px]`, `tracking-[-0.24px]`
   - Replace with predefined classes: `text-small`, `text-extra-small`, etc.
4. **Verify responsive design**
   - Check for mobile-first approach (`sm:`, `md:`, `lg:` prefixes)
   - Ensure touch targets are 44x44px+ on mobile
   - No horizontal scrolling
5. **Generate a summary** of all changes made

## Output Format

After making changes, provide a summary:

```
## Summary of Changes for $1

### Headings Fixed
- Line X: Changed `<h2 className="... text-h5">` to `<h5 className="...">`
- [List all heading fixes]

### Text Elements Updated
- Line Y: `text-[14px]` → `text-small`
- Line Z: `text-[12px] tracking-[-0.24px]` → `text-extra-small`
- [List all text size fixes]

### Responsive Design
- ✅ Mobile-first approach verified
- [Any warnings about responsive issues]

### Files Modified
- $1
```

## Important Notes

- **Preserve all other classes** — only remove/replace font-size and tracking utilities
- **Preserve color classes** — `text-dose-dark`, `text-dose-mid`, etc. should stay
- **Don't change structure** — only styling updates
- **Be conservative** — if unsure about a change, ask first
- **Reference globals.css** for predefined sizes when in doubt
