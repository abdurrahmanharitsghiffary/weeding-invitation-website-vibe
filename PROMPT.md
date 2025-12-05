**PROMPT FOR KIRO:**

Create a beautiful wedding invitation website MVP for a vibe code competition. Time constraint: 1 hour. **CRITICAL: Prioritize MVP first, avoid overengineering.**

## Tech Stack (REQUIRED)

- Next.js 15 with App Router
- shadcn/ui + Magic UI components
- Zustand for state management
- localStorage for ALL data persistence (attendance, guest messages, etc.)
- Tailwind CSS with customized globals.css for wedding theme

## Core Features (MVP Priority)

### 1. Hero Section ⭐ PRIORITY

- Elegant couple names with beautiful typography
- Wedding date, time, venue
- Live countdown timer to wedding date
- Stunning background (gradient or subtle pattern)

### 2. RSVP/Attendance System ⭐ REQUIRED MVP

- Guest name input
- Attendance selection (Attending / Not Attending / Maybe)
- Number of guests (+1, family, etc.)
- Optional: Dietary restrictions/notes
- **Save to localStorage immediately**
- Show confirmation message after submission
- Display total attendance count

### 3. Event Details

- Ceremony & reception schedule
- Venue with embedded Google Maps iframe
- Dress code
- Simple, scannable format

### 4. Photo Gallery

- 4-6 couple photos in elegant grid
- Hover effects or simple lightbox
- Use placeholder images (Unsplash wedding photos)

### 5. Guest Messages/Wishes Board

- Simple form: name + message
- Store in localStorage as array
- Display all messages in beautiful cards
- Real-time updates (no refresh needed with Zustand)

### 6. Gift Registry (Optional - if time permits)

- Bank details or QR code placeholder
- Elegant card design

## Design Requirements 🎨

### globals.css Customization

```css
/* Wedding color palette - customize these */
:root {
  --wedding-primary: #d4af37; /* Gold */
  --wedding-secondary: #f8f5f0; /* Cream */
  --wedding-accent: #8b7355; /* Warm brown */
  --wedding-dark: #2c2c2c;

  /* Beautiful font pairing */
  --font-heading: "Playfair Display", serif; /* or similar elegant serif */
  --font-body: "Inter", sans-serif;
}
```

- Use romantic color palette (soft golds, creams, blush pinks, sage green)
- Elegant serif fonts for headings (Playfair Display, Cormorant, etc.)
- Smooth animations and transitions
- Glassmorphism or soft shadows for cards
- Responsive design (mobile-first)

## Zustand Store Structure

```typescript
interface WeddingStore {
  // Attendance
  attendances: Attendance[];
  addAttendance: (data) => void;

  // Guest messages
  messages: Message[];
  addMessage: (data) => void;

  // Load from localStorage on init
  // Save to localStorage on every update
}
```

## Critical Instructions ⚠️

1. **MVP FIRST**: Get attendance system working PERFECTLY before adding extras
2. **localStorage persistence**: Wrap all Zustand updates with localStorage sync
3. **Single page application**: No routing needed, use smooth scroll to sections
4. **Placeholder content**: Use fake couple names, dates, photos (Unsplash)
5. **Mobile responsive**: Must work perfectly on mobile
6. **No authentication**: Public site, anyone can RSVP/leave messages
7. **Simple validation**: Just check required fields, no complex logic
8. **Performance**: Keep it fast, minimal dependencies

## File Structure

```
/app
  /page.tsx (main landing page)
  /layout.tsx
  /globals.css (customized)
/components
  /Hero.tsx
  /AttendanceForm.tsx
  /EventDetails.tsx
  /Gallery.tsx
  /GuestMessages.tsx
  /ui/ (shadcn components)
/store
  /wedding-store.ts (Zustand)
/lib
  /utils.ts
```

## Success Criteria

- [ ] Site loads and looks beautiful
- [ ] Attendance form works and persists to localStorage
- [ ] Data persists after page refresh
- [ ] Mobile responsive
- [ ] Smooth animations
- [ ] All sections complete and polished

**REMEMBER: Beautiful > Feature-rich. Better to have 5 perfect features than 10 half-done ones. You can add more features after MVP is complete!**
