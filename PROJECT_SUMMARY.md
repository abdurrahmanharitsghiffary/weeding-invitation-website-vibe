# Wedding Invitation Website - Project Summary

## 🎯 Project Overview

Beautiful wedding invitation website for **Nobita & Shizuka** built for Vibe Code competition.

## ✅ Completed Features

### 1. Hero Section ⭐

- Animated couple names with SparklesText (Magic UI)
- Live countdown timer to wedding date (August 15, 2025)
- Floating particles background effect
- Smooth scroll indicator
- BorderBeam effects on countdown card

### 2. RSVP/Attendance System ⭐

- Guest name input
- Attendance selection (Attending/Not Attending/Maybe)
- Number of guests selector
- Dietary restrictions field
- **localStorage persistence** - data survives page refresh
- Real-time attendance counter with AnimatedShinyText
- ShimmerButton for submit
- Success confirmation with BorderBeam effect

### 3. Event Details ⭐

- Ceremony schedule (4:00 PM - 5:00 PM)
- Reception schedule (6:00 PM - 11:00 PM)
- Venue information with embedded Google Maps
- Dress code information (Formal/Black Tie Optional)
- All cards with BorderBeam animations

### 4. Photo Gallery ⭐

- 6 beautiful wedding photos from Unsplash
- Responsive grid layout (2 cols mobile, 3 cols desktop)
- Hover effects with scale and overlay
- BlurFade animations on scroll

### 5. Guest Messages/Wishes Board ⭐

- Form to submit name + message
- **localStorage persistence**
- Real-time display of all messages
- Scrollable message list
- Beautiful card design with heart icons
- ShimmerButton for submit

### 6. Navigation ⭐

- Fixed navbar with smooth scroll
- Mobile responsive with hamburger menu
- Couple initials logo (N & S)
- Links to all sections

### 7. Footer

- Couple names and wedding date
- Thank you message
- Decorative elements

## 🎨 Design Features

### Magic UI Components Used

- ✨ **SparklesText** - Couple names with sparkle animation
- 🎆 **Particles** - Floating background particles
- 🌟 **BorderBeam** - Animated borders on cards
- 💫 **BlurFade** - Smooth fade-in on scroll
- ✨ **ShimmerButton** - Shimmering submit buttons
- 💎 **AnimatedShinyText** - Shiny text effects

### Custom Styling

- **Color Palette**: Gold (#d4af37), Cream (#f8f5f0), Warm Brown (#8b7355)
- **Typography**: Playfair Display (headings) + Inter (body)
- **Glassmorphism**: Glass cards with backdrop blur
- **Smooth Animations**: Fade-ins, hover effects, transitions

## 🛠️ Tech Stack

- **Next.js 16.0.7** with App Router
- **React 19.2.0**
- **TypeScript**
- **Tailwind CSS 4**
- **shadcn/ui** components
- **Magic UI** for animations
- **Zustand 5.0.9** for state management
- **localStorage** for data persistence
- **Lucide React** for icons

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Custom wedding theme
│   ├── layout.tsx
│   └── page.tsx             # Main page with all sections
├── components/
│   ├── ui/                  # shadcn + Magic UI components
│   ├── Hero.tsx             # Hero with countdown
│   ├── EventDetails.tsx     # Event information
│   ├── Gallery.tsx          # Photo gallery
│   ├── AttendanceForm.tsx   # RSVP form
│   ├── GuestMessages.tsx    # Wishes board
│   └── Navbar.tsx           # Navigation
├── store/
│   └── wedding-store.ts     # Zustand store with localStorage
└── lib/
    └── utils.ts             # Utility functions
```

## 💾 Data Persistence

All data stored in browser localStorage:

- `wedding-attendances` - RSVP responses
- `wedding-messages` - Guest wishes

Data persists across:

- Page refreshes
- Browser restarts
- Multiple sessions

## 🚀 Running the Project

```bash
npm install
npm run dev
```

Visit: http://localhost:3000

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm, md, lg
- Hamburger menu on mobile
- Optimized images with Next.js Image
- Touch-friendly interactions

## ⚡ Performance

- Fast page loads with Next.js 16
- Turbopack for fast dev builds
- Optimized images
- Lazy loading with BlurFade
- Minimal bundle size

## 🎯 MVP Focus

✅ All core features working perfectly
✅ Beautiful design with Magic UI
✅ Mobile responsive
✅ Data persistence
✅ Clean, maintainable code
✅ No overengineering

## 🌟 Highlights

1. **Beautiful animations** - Magic UI effects throughout
2. **Real-time updates** - Zustand state management
3. **Data persistence** - localStorage integration
4. **Responsive design** - Works on all devices
5. **Clean code** - TypeScript, proper component structure
6. **Fast performance** - Next.js 16 with Turbopack

---

**Wedding Date**: August 15, 2025  
**Venue**: The Grand Estate Gardens, Napa Valley  
**Couple**: Nobita & Shizuka ❤️
