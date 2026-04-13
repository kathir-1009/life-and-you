# Life & You - Mental Wellness Platform

A comprehensive, responsive mental wellness platform that combines mobile app and website UI patterns into a unified experience.

## 🌟 Features

### Pages & Screens

1. **Splash Page** (`/splash`)
   - Welcome screen with branding
   - Social login options
   - Quick access to onboarding

2. **Onboarding** (`/onboarding`)
   - Multi-step goal selection
   - Personalized wellness path
   - Progress indicators

3. **Home** (`/`)
   - Hero section with CTA
   - Program overview
   - Trust indicators
   - Quick stats

4. **Programs** (`/programs`)
   - Browse all therapy programs
   - Detailed program cards
   - Pricing and session info
   - Quick booking access

5. **Book Session** (`/book`)
   - Interactive calendar
   - Time slot selection
   - Anonymous session option
   - Concern selection
   - Form validation

6. **Confirmation** (`/confirmation`)
   - Booking success message
   - Session details summary
   - Calendar integration prompt
   - Quick navigation options

7. **Dashboard** (`/dashboard`)
   - Client portal with sidebar navigation
   - Next session banner
   - Progress stats
   - Upcoming sessions list
   - Quick actions

8. **Progress Tracking** (`/progress`)
   - Weekly mood chart
   - Progress areas with percentages
   - Milestone achievements
   - Visual progress indicators

9. **Messaging** (`/messages`)
   - Real-time chat interface
   - End-to-end encryption indicator
   - Online status
   - Message history

10. **Resources** (`/resources`)
    - Filterable resource library
    - Articles, videos, audio, worksheets
    - Featured content
    - Lock/unlock system

11. **Profile** (`/profile`)
    - User information
    - Stats overview
    - Account settings
    - Billing options
    - Logout

12. **About** (`/about`)
    - Company values
    - Team certifications
    - Service highlights
    - CTA section

## 📱 Responsive Design

- **Mobile-first approach**: Optimized for mobile devices with bottom navigation
- **Desktop enhancement**: Full navigation bar and enhanced layouts
- **Tablet support**: Adaptive grid systems
- **Touch-friendly**: Large tap targets and gestures

## 🎨 Design System

### Colors
- **Sage**: `#3D5247` - Primary brand color
- **Gold**: `#C4A35A` - Accent color
- **Cream**: `#F5EFE6` - Background
- **Charcoal**: `#1C2320` - Text

### Typography
- **Serif**: Cormorant Garamond (headings)
- **Sans-serif**: Nunito (body text)
- **DM Sans**: Alternative sans (website sections)

### Components
- Navigation bar (desktop)
- Bottom navigation (mobile)
- Cards with gradients
- Progress bars
- Calendar widgets
- Chat bubbles
- Stat displays

## 🚀 Navigation

### Desktop
- Sticky top navigation with logo
- Full menu with links
- Profile avatar
- CTA buttons

### Mobile
- Bottom navigation bar with 5 main items:
  - Home
  - Book
  - Messages
  - Resources
  - Profile
- Hamburger menu for secondary items

## 🔐 Key Features

1. **Anonymous Sessions**: Privacy-focused booking option
2. **Progress Tracking**: Visual charts and statistics
3. **Resource Library**: Categorized learning materials
4. **Secure Messaging**: Encrypted communication
5. **Multi-step Booking**: Intuitive scheduling flow
6. **Responsive Calendar**: Touch-friendly date picker
7. **Dashboard Analytics**: Personal wellness metrics

## 🎯 User Flows

### New User
1. Splash → Onboarding → Home → Book Session → Confirmation

### Returning User
1. Home → Dashboard → Messages/Progress/Resources

### Booking Flow
1. Programs → Book Session → Select Date → Fill Details → Confirmation

## 📦 Tech Stack

- React 18
- React Router 7
- Tailwind CSS 4
- Lucide Icons
- TypeScript

## 🎨 Responsive Breakpoints

- Mobile: `< 768px`
- Tablet: `768px - 1024px`
- Desktop: `> 1024px`

## 🌐 Routes

All routes are defined in `/src/app/routes.tsx`:
- `/` - Home
- `/splash` - Splash screen
- `/onboarding` - Onboarding flow
- `/programs` - Programs listing
- `/book` - Book session
- `/confirmation` - Booking confirmation
- `/dashboard` - Client dashboard
- `/progress` - Progress tracking
- `/messages` - Messaging
- `/resources` - Resource library
- `/profile` - User profile
- `/about` - About page

## 💡 Best Practices

- Semantic HTML
- Accessible components
- Performance optimized
- Mobile-first CSS
- Component reusability
- Clean code structure

---

Built with ❤️ by Figma Make
