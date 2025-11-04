# WeTape - Sports Tape E-Commerce Platform

A Next.js application for selling premium sports tape to athletes and active individuals.

## Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Material-UI (MUI)** - React UI component library
- **CSS Modules** - Scoped styling with className
- **Emotion** - CSS-in-JS library for MUI

## Project Structure

```
wetape/
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── layout.tsx      # Root layout
│   │   ├── page.tsx        # Home page
│   │   ├── globals.css     # Global styles
│   │   └── page.module.css # Home page styles
│   └── components/          # Reusable React components
│       ├── ProductCard.tsx
│       └── ProductCard.module.css
├── public/                  # Static assets (images, fonts, etc.)
├── package.json
├── tsconfig.json
└── next.config.ts
```

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Using MUI Components

Material-UI components are available throughout the project. Example usage:

```tsx
"use client";

import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function MyComponent() {
  return (
    <Button variant="contained" startIcon={<ShoppingCartIcon />}>
      Add to Cart
    </Button>
  );
}
```

## CSS Styling

This project uses CSS Modules for component styling. Create a `.module.css` file alongside your component:

```tsx
import styles from './MyComponent.module.css';

export default function MyComponent() {
  return <div className={styles.container}>Content</div>;
}
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Material-UI Documentation](https://mui.com/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
