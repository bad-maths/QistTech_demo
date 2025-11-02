# QistTech Design System

## Color Palette

### Primary Colors
- **Primary Teal Dark:** `#0F4C5C` (headers, primary buttons, accents)
- **Primary Teal Darker:** `#0A3540` (gradients, deep backgrounds)
- **Accent Gold:** `#D4AF37` (highlights, secondary buttons, badges)
- **Accent Gold Darker:** `#B8941F` (hover states, gradients)

### Background Colors
- **Light Background:** `#F2F4F5` (page background)
- **White:** `#FFFFFF` (cards, modals)
- **Surface Alt:** `#F2F4F5/30` (subtle background variants)

### Text Colors
- **Text Primary (Dark):** `#0E1E25` (headers, main text)
- **Text Secondary:** `#4B5563` (descriptions, helper text)
- **Text Light:** `#FFFFFF` (text on dark backgrounds)
- **Text Muted:** `rgba(255, 255, 255, 0.8)` (secondary text on dark backgrounds)

### Status Colors
- **Success/Active:** `#10B981` (green, checkmarks, active states)
- **Available/Green:** `#10B981` (property status indicators)
- **Accent Badge:** Uses gold `#D4AF37`

## Badge & Status Indicators

### Badge Types & Colors (Properties)
- **Featured Badge:** 
  - Background: `#D4AF37` (gold)
  - Text: `#0E1E25` (dark)
  - Border: `#B8941F` (dark gold)
  - Font Weight: semibold
  - Usage: Premium/featured properties

- **Off-Plan Badge:**
  - Background: `#0F4C5C/80` (semi-transparent teal)
  - Text: white
  - Border: `#0F4C5C` (teal)
  - Font Weight: medium
  - Usage: Under construction/off-plan properties

- **NHC Badge:**
  - Background: `#10B981` (green)
  - Text: white
  - Border: `#059669` (dark green)
  - Font Weight: medium
  - Usage: National Housing Company properties

- **Available Status Badge:**
  - Background: `#10B981` (green)
  - Text: white
  - Border: none
  - Font Weight: medium
  - Usage: Property availability status

- **Recommended Badge (Financing):**
  - Background: `#D4AF37` (gold)
  - Text: `#0E1E25` (dark)
  - Border: `#B8941F` (dark gold)
  - Font Weight: semibold
  - Usage: Best financing offer indicator

## Typography

### Font Family
- **Primary Font:** `Inter, system-ui, sans-serif`
- **Arabic Font:** `Noto Sans Arabic`
- **Mono Font:** `ui-monospace, SFMono-Regular` (for code/numbers)

### Font Weights
- **Regular:** 400
- **Medium:** 500 (buttons, labels)
- **Semibold:** 600 (headings)
- **Bold:** 700 (large titles)

### Text Sizes & Styles
- **h1/Large Title:** text-3xl, font-bold, tracking-tight
- **h2/Page Title:** text-lg/text-2xl, font-semibold, tracking-tight
- **h3/Section Title:** text-base/text-lg, font-semibold
- **Body Text:** text-sm/text-base, font-normal
- **Small Text:** text-xs/text-sm, font-normal
- **Labels:** text-sm, font-medium

### Key Property: Tracking Tight
All headings use `tracking-tight` to reduce letter spacing for a modern, condensed look.

## Spacing System

### Page/Container Spacing
- **Page Padding:** `px-6` (horizontal padding)
- **Section Padding:** `p-6` (card padding) or `p-5` (compact cards)
- **Bottom Navigation Buffer:** `pb-20` (always on pages with BottomNavBar)

### Component Spacing
- **Between Sections:** `mb-6` (medium space)
- **Between Items in Grid:** `gap-4` (horizontal gap in grids/carousels)
- **Between Sub-items:** `gap-2` or `gap-1.5` (tight grouping)
- **Icon + Text Gap:** `gap-2` (standard), `gap-1.5` (compact)

### Header Section
- **Logo Area:** `w-10 h-10` with `rounded-xl`
- **Icon Button:** `p-2` for standard buttons, `p-3` for large buttons
- **Notification Badge:** `w-4.5 h-4.5` positioned at `-top-1 -right-1`

## Shadows & Effects

### Shadow Scales
- **Soft:** `shadow-soft` (subtle, for cards in background)
- **Lifted:** `shadow-lifted` (moderate, for prominent cards)
- **Glow Gold:** `shadow-glow-gold` (special for gold accents)
- **2xl:** `shadow-2xl` (for modal cards, special CTAs)

### Borders
- **Standard Border:** `border-[#0F4C5C]/10` (subtle, dark teal border)
- **Hover Border:** `border-[#0F4C5C]/20` (slightly more prominent on hover)
- **White Border:** `border-white/10`, `border-white/20` (on dark backgrounds)

## Buttons & CTAs

### Primary Button
- **Background:** `bg-gradient-to-br from-[#D4AF37] to-[#B8941F]`
- **Text:** `text-white`
- **Hover:** `hover:from-[#B8941F] hover:to-[#D4AF37]`
- **Padding:** `px-6 py-2.5` or `px-4 py-1.5` (compact)

### Secondary Button
- **Background:** `bg-white/15 backdrop-blur-xl` (on dark backgrounds)
- **Text:** `text-white`
- **Border:** `border border-white/10`
- **Hover:** `hover:bg-white/25` or `hover:border-white/20`

### Icon Button
- **Background:** `bg-gradient-to-br from-[#D4AF37] to-[#B8941F]` or `from-[#0F4C5C] to-[#0A3540]`
- **Text:** `text-white`
- **Size:** `w-12 h-12`, `w-10 h-10`, `w-8 h-8` (varies by context)
- **Border Radius:** `rounded-2xl` or `rounded-xl`

## Cards & Containers

### Standard Card
```tsx
className="p-6 bg-gradient-to-br from-white via-white to-[#F2F4F5]/30 border-[#0F4C5C]/5 rounded-2xl shadow-lifted"
```

### Compact Card
```tsx
className="p-4 bg-white rounded-2xl border border-[#0F4C5C]/10 shadow-soft hover:shadow-lifted"
```

### Dark Card (CTA/Featured)
```tsx
className="p-6 bg-gradient-to-br from-[#0F4C5C] via-[#0A3540] to-[#0F4C5C] text-white border-0 shadow-2xl rounded-2xl"
```

### Hover States
- **Scale:** `hover:scale-[1.01]` to `hover:scale-105`
- **Shadow:** `hover:shadow-lifted` or `hover:shadow-2xl`
- **Border:** Increase opacity on hover
- **Transition:** `transition-all duration-300` or `transition-smooth`

## Headers & Navigation

### Premium Header Layout
- **Background:** Image with multi-layer gradient overlay
- **Overlay Gradient 1:** `from-[#0F4C5C]/95 via-[#0A3540]/90 to-[#0F4C5C]/85`
- **Overlay Gradient 2:** `from-[#0F4C5C] via-transparent to-transparent`
- **Decorative Elements:** Floating blur orbs using `animate-pulse` with delays
- **Height:** Varies (220px for home, 180px for listing pages)

### Header Content Grid
- **Logo Section:** Left-aligned with icon and text
- **Action Icons:** Right-aligned (search, notifications, messages)
- **All Icons:** White text color
- **Notification Badges:** Gold gradient with `animate-pulse`

## Badge Styles

### Accent Badges (Gold)
- **Background:** `bg-gradient-to-br from-[#D4AF37] to-[#B8941F]`
- **Text:** `text-white`
- **Size:** `text-xs` or `text-sm`
- **Padding:** `px-3 py-1` or `px-2 py-0.5`

### Status Badges
- **Featured/New:** Gold with white text
- **Available:** Green text or subtle badge
- **Under Construction:** Gray or neutral badge

## Animations & Transitions

### Standard Transition
```tsx
transition-all duration-300  // or transition-smooth
```

### Animations Used
- **Pulse:** `animate-pulse` (for highlights, badges, floating elements)
- **Float:** `animate-float` (custom, for decorative elements)
- **Glow:** Shadow animations for emphasis
- **Wave:** SVG animations for wave transitions

### Animation Delays
- **Base:** No delay (0s)
- **Stagger 1:** `animation-delay: 1s`
- **Stagger 2:** `animation-delay: 1.5s`
- **Stagger 3:** `animation-delay: 2s`

## RTL Support

### Implementation
- **Always include:** `dir={isRTL ? 'rtl' : 'ltr'}` on root container
- **Arrow icons:** Use `{isRTL ? <ArrowLeft/> : <ArrowRight/>}` logic
- **Flex direction:** Reverse naturally with RTL (no need to specify)
- **Text alignment:** Use `text-center` or `text-start` for proper alignment
- **Padding/Margin:** Use logical properties or conditional classes:
  - `${isRTL ? 'pr-12' : 'pl-12'}` for input icons

## Layout Patterns

### Full-Width Container with Padding
```tsx
<div className="px-6">
  {/* Content with 6px horizontal padding */}
</div>
```

### Horizontal Scrolling (Carousel)
```tsx
<div className="flex gap-4 overflow-x-auto pb-2 hide-scrollbar -mx-6 px-6" dir={isRTL ? 'rtl' : 'ltr'}>
  {/* Items flex-shrink-0 w-[280px] */}
</div>
```

### Page with Bottom Navigation
```tsx
<div className="min-h-screen bg-[#F2F4F5] pb-20" dir={isRTL ? 'rtl' : 'ltr'}>
  {/* Content */}
  <BottomNavBar language={language} onNavigate={onNavigate} />
</div>
```

## Responsive Breakpoints

### Mobile-First Approach
- **Base:** Mobile (default)
- **Tablet:** `md:` (768px+)
- **Desktop:** `lg:` (1024px+)

### Typical Usage
```tsx
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* Stacks on mobile, 2-col on tablet, 3-col on desktop */}
</div>
```

## Component Imports & Organization

### Standard Imports for Pages
```tsx
import { IconName1, IconName2, ... } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { BottomNavBar } from './BottomNavBar';
```

## Consistency Checklist

### Every Page Must Have
- ✅ Consistent background: `bg-[#F2F4F5]`
- ✅ RTL support: `dir={isRTL ? 'rtl' : 'ltr'}`
- ✅ Proper padding: `px-6` for content
- ✅ Bottom navigation buffer: `pb-20`
- ✅ BottomNavBar component at bottom
- ✅ Header with teal gradient and icons
- ✅ Proper text colors (primary `#0E1E25`, secondary `#4B5563`)
- ✅ Proper button styles (gold gradient for CTAs)
- ✅ Proper card styles (white with subtle gradient to background)
- ✅ Proper badge colors (gold for accents)

### Transitions & Animations
- ✅ All interactive elements have hover states
- ✅ Use `transition-all duration-300` or `transition-smooth`
- ✅ Scale/shadow changes on hover
- ✅ Consistent animation timing (300ms standard)

### Spacing Consistency
- ✅ Section gaps: `gap-4` or `mb-6` between sections
- ✅ Icon spacing: `gap-2` standard, `gap-1.5` compact
- ✅ Padding: `p-6` standard, `p-4` compact
- ✅ Carousels: `-mx-6 px-6` for full-width flush

---

## Summary: Key Takeaways

1. **Colors:** Teal `#0F4C5C` primary, Gold `#D4AF37` accent, Light Gray `#F2F4F5` background
2. **Typography:** Tracking-tight on all headings, consistent sizes and weights
3. **Spacing:** 6px padding, 4px gaps, 20px bottom buffer for nav
4. **Shadows:** Use soft/lifted/glow classes, never bare shadow utilities
5. **Borders:** Subtle with teal opacity, increase on hover
6. **Buttons:** Gold gradient for primary, white transparent for secondary
7. **RTL:** Always support, use `dir` attribute and conditional icons
8. **Cards:** White with gradient underlay, never solid colors
9. **Animations:** Consistent 300ms transitions, use delays for stagger effects
10. **Bottom Nav:** Always include, always add `pb-20` to parent
