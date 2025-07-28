# 🏗️ Mono-repo Setup - React 18 + Vite + TypeScript

This document describes the modern mono-repo setup that has been added to the Restaurant QR System project.

## ✅ Completed Setup

### 🎯 Tech Stack Upgrade

#### Frontend (New Vite Setup)

- ✅ **React 18** - Latest React with concurrent features
- ✅ **Vite** - Lightning-fast build tool and dev server
- ✅ **TypeScript** - Type-safe development
- ✅ **Tailwind CSS** - Utility-first CSS framework with JIT compilation
- ✅ **twin.macro** - CSS-in-JS with Tailwind CSS utilities
- ✅ **Framer Motion** - Production-ready motion library
- ✅ **React Spring** - Spring-physics animations
- ✅ **Vitest** - Fast unit testing framework
- ✅ **Apollo Client** - GraphQL client

#### Backend (Existing NestJS)

- ✅ **NestJS** - Progressive Node.js framework
- ✅ **GraphQL** - Query language and runtime
- ✅ **Prisma** - Next-generation ORM
- ✅ **TypeScript** - Type-safe development

#### Development Workflow

- ✅ **ESLint** - Code linting with TypeScript support
- ✅ **Prettier** - Code formatting
- ✅ **Husky** - Git hooks for quality enforcement
- ✅ **Commitlint** - Conventional commit messages
- ✅ **Lint-staged** - Pre-commit code quality checks

## 📦 Project Structure (Updated)

```
restaurant-qr-system/
├── packages/
│   └── frontend/          # NEW: React 18 + Vite frontend
│       ├── src/
│       │   ├── App.tsx           # Main app with glassmorphism demo
│       │   ├── main.tsx          # React 18 entry point
│       │   ├── index.css         # Tailwind + glassmorphism utilities
│       │   ├── twin.d.ts         # twin.macro type definitions
│       │   └── test/
│       │       └── setup.ts      # Vitest setup
│       ├── vite.config.ts        # Vite configuration
│       ├── vitest.config.ts      # Vitest configuration
│       ├── tailwind.config.js    # Tailwind with glassmorphism
│       ├── postcss.config.js     # PostCSS configuration
│       ├── tsconfig.json         # TypeScript config
│       ├── tsconfig.node.json    # Node tooling config
│       ├── index.html            # HTML entry point
│       └── package.json          # Frontend dependencies
├── backend/               # EXISTING: NestJS backend
│   ├── src/
│   ├── prisma/
│   ├── frontend/         # OLD: Next.js frontend (can be migrated)
│   └── package.json
├── .husky/               # NEW: Git hooks
│   ├── pre-commit        # Lint-staged hook
│   └── commit-msg        # Commitlint hook
├── package.json          # NEW: Root mono-repo config
├── .eslintrc.js         # NEW: ESLint configuration
├── .prettierrc          # NEW: Prettier configuration
├── commitlint.config.js # NEW: Commit message linting
└── .gitignore           # NEW: Root gitignore
```

## 🚀 Quick Start (Mono-repo)

### Install Dependencies

```bash
npm install
```

### Start Development Servers

```bash
# Start both frontend and backend
npm run dev

# Or start individually
npm run dev:frontend    # Vite frontend on port 3001
npm run dev:backend     # NestJS backend on port 4000
```

## 📋 Available Scripts

### Root Level Commands

```bash
npm run dev          # Start both frontend and backend
npm run build        # Build all packages
npm run test         # Run tests in all packages
npm run lint         # Lint all packages
npm run lint:fix     # Fix linting issues
npm run format       # Format code with Prettier
npm run type-check   # TypeScript type checking
```

### Frontend Commands (New Vite Setup)

```bash
npm run dev:frontend          # Start Vite dev server (port 3001)
npm run build:frontend        # Build for production
npm run test:frontend         # Run Vitest tests
npm run test:coverage         # Run tests with coverage
npm run test:ui              # Open Vitest UI
```

### Backend Commands (Existing)

```bash
npm run dev:backend      # Start NestJS in watch mode
npm run build:backend    # Build NestJS application
npm run test:backend     # Run Jest tests
```

## 🎨 Glassmorphism Design System

The new frontend includes a complete glassmorphism design system:

### Pre-built CSS Classes

```css
.glass              /* Basic glass effect */
.glass-dark         /* Dark mode glass */
.glass-card         /* Glass card with border radius */
.glass-button       /* Interactive glass button */
.glass-input        /* Glass input field */
.glass-panel        /* Glass card with padding */
```

### Animations

```css
.animate-glass-float    /* Floating animation */
.animate-glass-pulse    /* Pulsing effect */
```

### Usage Example

```tsx
import { motion } from 'framer-motion'
import { useSpring, animated } from '@react-spring/web'
import tw from 'twin.macro'
import styled from '@emotion/styled'

const GlassCard = styled(animated.div)`
  ${tw`glass-panel max-w-md w-full text-white text-center`}
`

const Button = styled(motion.button)`
  ${tw`glass-button text-white font-semibold`}
`

function MyComponent() {
  const springProps = useSpring({
    from: { opacity: 0, transform: 'scale(0.8)' },
    to: { opacity: 1, transform: 'scale(1)' },
  })

  return (
    <GlassCard style={springProps}>
      <Button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        Click Me
      </Button>
    </GlassCard>
  )
}
```

## 🧪 Testing Setup

### Frontend Testing (Vitest)

```bash
npm run test:frontend        # Run unit tests
npm run test:coverage        # Run with coverage
npm run test:ui             # Open Vitest UI
```

### Test Configuration

- **Vitest** for fast unit testing
- **Testing Library** for React component testing
- **JSdom** for browser environment simulation
- **Coverage reporting** with v8

## 🔧 Code Quality & Git Hooks

### Pre-commit Hooks

- **Lint-staged**: Automatically lints and formats staged files
- **ESLint**: TypeScript-aware linting
- **Prettier**: Code formatting

### Commit Message Format

```
type(scope): description

Examples:
feat: add glassmorphism button component
fix: resolve animation performance issue
docs: update README with setup instructions
test: add unit tests for glass utilities
style: format code with prettier
refactor: improve component structure
```

### Supported Commit Types

- `feat`: New features
- `fix`: Bug fixes
- `docs`: Documentation
- `style`: Code style changes
- `refactor`: Code refactoring
- `test`: Adding tests
- `build`: Build system changes
- `ci`: CI/CD changes
- `chore`: Maintenance tasks

## 🔄 Migration Path

### Current Status

- ✅ New Vite frontend is set up and working
- ✅ Existing NestJS backend remains functional
- ✅ Mono-repo tooling is configured
- ⏳ Old Next.js frontend still exists in `backend/frontend/`

### Next Steps

1. **Migrate Components**: Move components from Next.js to new Vite setup
2. **GraphQL Integration**: Set up Apollo Client in new frontend
3. **State Management**: Integrate Zustand for state management
4. **Routing**: Set up React Router (if needed)
5. **Testing**: Add comprehensive test coverage
6. **Cleanup**: Remove old Next.js frontend after migration

## 🚀 Demo

The new Vite frontend includes a glassmorphism demo at:

```
http://localhost:3001/
```

Features demonstrated:

- ✨ Framer Motion animations
- 🌊 React Spring physics
- 🎨 Glassmorphism design system
- ⚡ Lightning-fast Vite HMR
- 📱 Responsive design

## 🔧 Troubleshooting

### Port Conflicts

If port 3000 is busy, Vite will automatically use 3001.

### Dependencies

If you encounter dependency issues:

```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
```

### Git Hooks

If git hooks aren't working:

```bash
npx husky install
```

## 📚 Documentation Links

- [Vite Documentation](https://vitejs.dev/)
- [React 18 Documentation](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [twin.macro](https://github.com/ben-rogerson/twin.macro)
- [Framer Motion](https://www.framer.com/motion/)
- [Vitest](https://vitest.dev/)
- [Husky](https://typicode.github.io/husky/)

---

This completes the modern mono-repo setup with React 18 + Vite + TypeScript! 🎉
