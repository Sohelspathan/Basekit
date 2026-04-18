# Basekit

> React + Tailwind component library — design system showcase

**Live demo:** https://basekit-eosin.vercel.app/

---

## What it is

A reusable UI component library built with React and Tailwind CSS. Includes 8 production-ready components with consistent variant APIs, full dark mode support, and accessibility built in.

The showcase page renders every component with every variant — serves as both documentation and a live portfolio demo.

---

## Tech stack

| Tool | Purpose |
|---|---|
| React 18 | Component framework |
| Tailwind CSS | Styling  |
| clsx | Conditional class composition |
| Vite | Build tool |
| Vercel | Deployment |

---

## Components

| Component | Variants | Notes |
|---|---|---|
| `Button` | primary, secondary, ghost, danger, danger-ghost, link | 5 sizes, loading state, icon support, iconOnly |
| `Input` | default, error | Label, helper text, error state |
| `Badge` | info, success, warning, danger | Pill shape |
| `Card` | default | Header/footer slots |
| `Alert` | info, success, warning, danger | Dismissible |
| `Modal` | — | Controlled via isOpen + onClose |
| `Tabs` | — | Animated underline indicator |
| `Spinner` | — | Matches button sizes |

---

## Project structure

```
src/
├── components/
│   └── layout/
│   │   └── Sidebar.jsx.js 
│   └── ui/
│   │   ├── Button.jsx
│   │   ├── Input.jsx
│   │   ├── Badge.jsx
│   │   ├── Card.jsx
│   │   ├── Alert.jsx
│   │   ├── Modal.jsx
│   │   ├── Tabs.jsx
│   │   ├── Spinner.jsx
│   │   └── index.js    
│   │   └── ToggleTheme.jsx
│   └── config/
│        └── components.js        
├── showcase/
│   └── AlertShowcase.jsx
│   └── BadgeShowcase.jsx
│   └── ButtonShowcase.jsx
│   └── CardShowcase.jsx
│   └── InputShowcase.jsx
│   └── ModalShowcase.jsx
│   └── SpinnerShowcase.jsx
│   └── TabsShowcase.jsx
├── App.jsx
├── main.jsx
└── index.css              
```

---

## Getting started

```bash
git clone https://github.com/Sohelspathan/Basekit.git
cd basekit
npm install
npm run dev
```

No environment variables required.

---

## Using a component

All components are exported from `src/components/ui/index.js`:

```jsx
import { Button, Badge, Alert } from '../components/ui'

// Primary button
<Button variant="primary" size="md">Save changes</Button>

// Loading state
<Button variant="primary" loading>Saving...</Button>

// With icons
<Button variant="ghost" leftIcon={<PlusIcon />}>Add item</Button>

// Danger with confirmation
<Button variant="danger" size="sm">Delete</Button>
```

---


## Button API

```jsx
<Button
  variant="primary"      // primary | secondary | ghost | danger | danger-ghost | link
  size="md"              // xs | sm | md | lg | xl
  loading={false}        // shows spinner, disables interaction
  fullWidth={false}      // stretches to container width
  leftIcon={<Icon />}    // icon rendered before label
  rightIcon={<Icon />}   // icon rendered after label
  iconOnly={false}       // square button, label becomes sr-only
  disabled={false}       // native disabled
  onClick={handler}      // any native button prop works via ...props
>
  Label
</Button>
```

---

## Key decisions

**Variant pattern** — each component has a `variants` object mapping variant names to Tailwind class strings. `clsx` picks the right one based on the `variant` prop. Adding a new variant is one object key.

**Spreading props** — `{...props}` at the end of every component passes through any native HTML attribute — `onClick`, `aria-label`, `data-testid`. Consumers are never blocked from attaching handlers.

**iconOnly accessibility** — when `iconOnly={true}` the text label is kept in the DOM with `className="sr-only"` so screen readers still announce the button purpose. Never remove the label entirely.

**Barrel exports** — `index.js` re-exports every component. Consumers write `import { Button } from '../ui'` instead of individual file paths. Refactoring a file path means updating one import.

---

## Deployment

```bash
npx vercel --prod
```