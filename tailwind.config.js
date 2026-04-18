/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {

      colors: {
        // Brand — violet ramp (9 stops, hand-tuned for WCAG contrast)
        brand: {
          50:  '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6', // primary action
          600: '#7c3aed', // hover
          700: '#6d28d9', // active / pressed
          800: '#5b21b6', // dark surfaces
          900: '#4c1d95', // darkest text on light bg
        },

        // Neutral — slightly warm gray (pairs well with violet)
        neutral: {
          50:  '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          900: '#1c1917',
        },

        // Semantic — danger (red), success (green), warning (amber)
        danger: {
          50:  '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
        },
        success: {
          50:  '#f0fdf4',
          100: '#dcfce7',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
        },
        warning: {
          50:  '#fffbeb',
          100: '#fef3c7',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
        },
      },

      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },

      fontSize: {
        xs:   ['0.75rem',  { lineHeight: '1rem'    }],
        sm:   ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem',     { lineHeight: '1.5rem'  }],
        lg:   ['1.125rem', { lineHeight: '1.75rem' }],
        xl:   ['1.25rem',  { lineHeight: '1.75rem' }],
        '2xl':['1.5rem',   { lineHeight: '2rem'    }],
        '3xl':['1.875rem', { lineHeight: '2.25rem' }],
        '4xl':['2.25rem',  { lineHeight: '2.5rem'  }],
      },

      borderRadius: {
        none: '0',
        sm:   '0.25rem',
        md:   '0.5rem',
        lg:   '0.75rem',
        xl:   '1rem',
        '2xl':'1.25rem',
        full: '9999px',
      },

      spacing: {
        // Extends default — adds a few useful named steps
        18: '4.5rem',
        22: '5.5rem',
        72: '18rem',
        80: '20rem',
      },

      boxShadow: {
        // Only functional shadows — no decorative glows
        sm:    '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        md:    '0 4px 6px -1px rgb(0 0 0 / 0.07), 0 2px 4px -2px rgb(0 0 0 / 0.05)',
        focus: '0 0 0 3px rgb(139 92 246 / 0.35)', // brand-500 at 35% opacity
        'focus-danger': '0 0 0 3px rgb(239 68 68 / 0.3)',
      },

      transitionDuration: {
        fast:   '100ms',
        normal: '150ms',
        slow:   '300ms',
      },

      keyframes: {
        'fade-in': {
          from: { opacity: '0', transform: 'translateY(6px)' },
          to:   { opacity: '1', transform: 'translateY(0)'   },
        },
        'spin-slow': {
          to: { transform: 'rotate(360deg)' },
        },
      },

      animation: {
        'fade-in':  'fade-in 0.2s ease forwards',
        'spin-slow':'spin-slow 1s linear infinite',
      },
    },
  },
  plugins: [],
}