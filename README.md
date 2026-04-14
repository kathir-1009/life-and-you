# Life & You - Mental Wellness Platform

A comprehensive, responsive mental wellness platform that combines mobile app and website UI patterns into a unified experience.

## 🛠 Getting Started

### Prerequisites

- **Node.js**: Version 18.x or higher
- **npm**: Version 9.x or higher

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd life-and-you
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:
```bash
npm run dev
```
The application will be available at `http://localhost:5173`.

### Build

Create a production-ready bundle:
```bash
npm run build
```
The output will be in the `dist/` directory.

## 📁 Project Structure

- `src/app/pages/`: All page components (HomePage, Dashboard, etc.)
- `src/app/components/`: Reusable UI components and layouts
- `src/app/routes.tsx`: Route definitions and lazy loading configuration
- `src/app/context/`: React context providers (UserContext)
- `src/styles/`: Tailwind CSS and global styles
- `public/img/`: Static assets and images

## 🌟 Features

### Pages & Screens

1. **Splash Page** (`/splash`) - Welcome screen with branding
2. **Onboarding** (`/onboarding`) - Multi-step goal selection
3. **Home** (`/`) - Hero section and program overview
4. **Programs** (`/programs`) - Browse therapy programs
5. **Book Session** (`/book`) - Interactive scheduling flow
6. **Dashboard** (`/dashboard`) - Personal wellness portal
7. **Progress Tracking** (`/progress`) - Visual mood and milestone charts
8. **Messaging** (`/messages`) - Secure chat interface
9. **Resources** (`/resources`) - Filterable learning library

## 📱 Responsive Design

- **Mobile-first approach**: Optimized for mobile devices with bottom navigation
- **Desktop enhancement**: Full navigation bar and enhanced layouts
- **Tablet support**: Adaptive grid systems

## 🎨 Design System

### Colors
- **Sage**: `#3D5247` - Primary brand color
- **Gold**: `#C4A35A` - Accent color
- **Cream**: `#F5EFE6` - Background
- **Charcoal**: `#1C2320` - Text

## 📦 Tech Stack

- **Framework**: React 18
- **Routing**: React Router 7
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide Icons
- **Language**: TypeScript

## 💡 Best Practices Implemented

- **Code Splitting**: Routes are lazy-loaded to optimize initial load time.
- **Path Aliases**: Uses `@/` for cleaner absolute imports.
- **Responsive Layouts**: Unified experience across Mobile, Tablet, and Desktop.

---

Built with ❤️ by Figma Make
