# Style Update Checklist - QistTech Customer App

## Completed ✅
- [x] **HomeScreen.tsx** - Fully styled with teal/gold theme, header, wave transition, all cards
- [x] **AuthScreen.tsx** - Already using correct color scheme
- [x] **ProfileScreen.tsx** - Updated to teal/gold theme, consistent spacing
- [x] **DESIGN_SYSTEM.md** - Complete reference document created

## In Progress / Quick Fixes Needed

### Priority 1: High-Visibility Screens (UPDATE FIRST)

#### NotificationsScreen.tsx
**Issues:**
- Header colors using `indigo-600`, `purple-600`, `blue-600` - change to teal/gold
- Icons backgrounds need updating to gold gradient

**Quick Fix:**
Replace color utility mapping:
```
indigo-600 → #0F4C5C
purple-600 → #0F4C5C
blue-600 → #0F4C5C
green-600 → keep or use #10B981
```
Replace with:
```tsx
iconBg: 'bg-gradient-to-br from-[#D4AF37] to-[#B8941F]'
```

---

#### MyOrdersScreen.tsx
**Issues:**
- Needs consistent background `bg-[#F2F4F5]`
- Status badge colors need updating
- Header styling needs teal gradient

**Quick Fix:**
- Change background from gray to `bg-[#F2F4F5]`
- Update status colors:
  - pending → gray or neutral
  - approved → `text-[#10B981]`
  - rejected → red/warning
- Add `pb-20` for bottom nav buffer

---

#### ChatScreen.tsx
**Issues:**
- Check header color scheme (likely needs teal gradient)
- Message bubble styling may need adjustment
- Input styling should use consistent accent

**Quick Fix:**
- Header: `bg-gradient-to-br from-[#0F4C5C] to-[#0A3540]`
- Send button: Gold gradient
- Input border: `border-[#0F4C5C]/20`

---

### Priority 2: Listing & Detail Pages

#### PropertyListingsScreen.tsx
**Issues:**
- May have inconsistent card styling
- Filter header colors
- Badge colors

**Quick Fix:**
- Cards: `p-4 bg-white border border-[#0F4C5C]/10 shadow-soft hover:shadow-lifted`
- Featured badge: Gold gradient
- List/Grid view buttons: Use teal for active

---

#### PropertyDetailsScreen.tsx
**Issues:**
- Tabs styling may need adjustment
- CTA buttons should use gold gradient
- Feature icons backgrounds

**Quick Fix:**
- Primary button: Gold gradient
- Feature cards: Teal icons in subtle backgrounds
- Financing section: Use consistent card styling

---

#### FinancingListingsScreen.tsx & FinancingDetailsScreen.tsx
**Issues:**
- May have inconsistent color scheme
- Bank name styling
- Rate/term displays

**Quick Fix:**
- Card backgrounds: White with subtle gradient
- Bank icon backgrounds: Gold gradient
- Rate badges: Teal with gold text

---

### Priority 3: Secondary Pages

#### ApplicationFormScreen.tsx
- Ensure form labels use correct text color (`#0E1E25`)
- Input focus states: Use gold accent
- Submit button: Gold gradient

#### MapViewScreen.tsx
- Header styling needs teal
- Map controls: Gold accent buttons
- Bottom sheet: White with proper spacing

#### EmployeeReferralScreen.tsx
- Header: Teal gradient
- Referral cards: White with border
- CTA: Gold gradient

#### OnboardingScreen.tsx
- Skip button: Teal text
- Next/Continue: Gold gradient button

#### SplashScreen.tsx
- Background: Check if using proper gradient
- Logo background: Gold gradient
- Loading: Animated gold accent

---

## Global CSS Updates Needed

### Add to src/index.css (after Tailwind imports):

```css
/* Hide scrollbar while keeping scroll functionality */
.hide-scrollbar {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

.hide-scrollbar::-webkit-scrollbar {
  display: none;  /* Chrome, Safari, and Opera */
}

/* Smooth transitions utility */
.transition-smooth {
  @apply transition-all duration-300;
}

/* Shadow utilities */
.shadow-soft {
  @apply shadow-sm;
}

.shadow-lifted {
  @apply shadow-lg;
}

.shadow-glow-gold {
  @apply shadow-lg;
  box-shadow: 0 10px 30px rgba(212, 175, 55, 0.3);
}

/* Float animation */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

.animate-float {
  @apply animate-pulse;
}

/* Animation delays */
.animation-delay-1000 {
  animation-delay: 1s;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-3000 {
  animation-delay: 3s;
}
```

---

## Component-Level Updates

### All Screens Should Have:
```tsx
// Root div
<div className="min-h-screen bg-[#F2F4F5] pb-20" dir={isRTL ? 'rtl' : 'ltr'}>
  {/* Content */}
  
  {/* At bottom of all customer screens */}
  <BottomNavBar language={language} onNavigate={onNavigate} currentScreen="screenName" />
</div>
```

### Header Pattern (All Pages):
```tsx
<div className="bg-gradient-to-br from-[#0F4C5C] to-[#0A3540] text-white px-6 pt-6 pb-6">
  <div className="flex items-center justify-between mb-4">
    <button onClick={() => onNavigate('home')} className="text-white hover:text-[#D4AF37]">
      {isRTL ? <ArrowRight /> : <ArrowLeft />}
    </button>
    <h1 className="text-xl font-semibold tracking-tight">{title}</h1>
    <div className="w-6" /> {/* Spacer for alignment */}
  </div>
</div>
```

### Card Pattern (Listings):
```tsx
<Card className="p-4 bg-white border border-[#0F4C5C]/10 shadow-soft hover:shadow-lifted hover:scale-[1.01] transition-all duration-300">
  {/* Card content */}
</Card>
```

### Button Pattern:
```tsx
// Primary CTA
<Button className="w-full bg-gradient-to-br from-[#D4AF37] to-[#B8941F] hover:from-[#B8941F] hover:to-[#D4AF37] text-white">

// Secondary
<Button className="bg-white/15 text-white border border-white/10 hover:bg-white/25">

// Ghost/Teal
<Button className="text-[#0F4C5C] hover:text-[#D4AF37]">
```

---

## Text Color Reference

Always use these colors, never `gray-*`, `blue-*`, etc.:

| Usage | Color | Hex |
|-------|-------|-----|
| Headings | Primary | `#0E1E25` |
| Body text | Primary | `#0E1E25` |
| Labels | Secondary | `#4B5563` |
| Helper text | Secondary | `#4B5563` |
| Disabled | Secondary | `#4B5563` |
| Text on teal header | Light | `#FFFFFF` |
| Text on teal (muted) | Muted | `rgba(255,255,255,0.8)` |

---

## Badge Color Mapping

- **Accent/Primary:** `bg-gradient-to-br from-[#D4AF37] to-[#B8941F]` + `text-white`
- **Status (Active/Success):** `bg-[#10B981]` + `text-white`
- **Status (Pending):** `bg-[#0F4C5C]/10` + `text-[#0F4C5C]`
- **Status (Rejected):** `bg-red-100` + `text-red-700`

---

## Icon Styling

All icons should use:
- **In headers:** `text-white` on dark backgrounds
- **In cards:** `text-[#0F4C5C]` (teal) or `text-[#D4AF37]` (gold accent)
- **In backgrounds:** Gold gradient background: `bg-gradient-to-br from-[#D4AF37]/20 to-[#B8941F]/10` with icon sized `w-5 h-5`

---

## Quick Find-Replace Guide

### VS Code Find & Replace Regex Patterns

```
Find: bg-gradient-to-br from-blue-600
Replace: bg-gradient-to-br from-[#0F4C5C]

Find: bg-blue-\d+
Replace: bg-[#0F4C5C] (check context first)

Find: text-gray-\d+
Replace: text-[#0E1E25] or text-[#4B5563] (depending on context)

Find: border-gray-\d+
Replace: border-[#0F4C5C]/10

Find: bg-gray-50
Replace: bg-[#F2F4F5]

Find: shadow-lg
Replace: shadow-lifted

Find: shadow-sm
Replace: shadow-soft
```

---

## Testing Checklist

After updating each screen, verify:
- [ ] Header uses teal gradient
- [ ] Background is light gray `#F2F4F5`
- [ ] Primary text is dark `#0E1E25`
- [ ] Secondary text is gray `#4B5563`
- [ ] CTA buttons use gold gradient
- [ ] Cards have subtle borders and shadows
- [ ] RTL support with `dir` attribute
- [ ] Bottom navigation padding `pb-20`
- [ ] BottomNavBar component present
- [ ] Hover states on interactive elements
- [ ] Spacing consistent with 4px/6px gaps

---

## Files Still Needing Updates

- [ ] NotificationsScreen.tsx
- [ ] MyOrdersScreen.tsx
- [ ] ChatScreen.tsx
- [ ] PropertyListingsScreen.tsx (review/update)
- [ ] PropertyDetailsScreen.tsx (review/update)
- [ ] FinancingListingsScreen.tsx (review/update)
- [ ] FinancingDetailsScreen.tsx (review/update)
- [ ] ApplicationFormScreen.tsx (review/update)
- [ ] MapViewScreen.tsx (review/update)
- [ ] EmployeeReferralScreen.tsx (review/update)
- [ ] OnboardingScreen.tsx (review/update)
- [ ] SplashScreen.tsx (review/update)
- [ ] src/index.css - Add shadow/animation utilities

---

## Summary

**Total screens to review/update:** 12 customer app screens + 1 global CSS file

**Estimated effort (per screen):** 5-15 minutes depending on complexity

**Highest impact updates:**
1. ✅ Create DESIGN_SYSTEM.md
2. ✅ Update ProfileScreen
3. Update NotificationsScreen & MyOrdersScreen (most visible after Home)
4. Update ChatScreen (high interaction)
5. Review & update property listing/detail screens
6. Update utility screens (map, referral, onboarding, splash)
7. Add CSS utility classes
