import clsx from 'clsx'

// ─── Size styles ───────────────────────────────────────────────────────────────

const sizes = {
  xs: 'w-3 h-3',
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
  xl: 'w-8 h-8',
}

/**
 * Standalone Spinner — also used internally by Button.
 *
 * @param {'xs'|'sm'|'md'|'lg'|'xl'} size
 * @param {string} className   — additional classes (e.g. text-brand-500)
 * @param {string} label       — sr-only label (defaults to "Loading")
 */
export default function Spinner({ size = 'md', className, label = 'Loading' }) {
  return (
    <svg
      className={clsx('animate-spin-slow shrink-0', sizes[size], className)}
      viewBox="0 0 16 16"
      fill="none"
      role="status"
      aria-label={label}
    >
      <circle
        cx="8"
        cy="8"
        r="6"
        stroke="currentColor"
        strokeOpacity="0.25"
        strokeWidth="2.5"
      />
      <path
        d="M8 2a6 6 0 0 1 6 6"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  )
}