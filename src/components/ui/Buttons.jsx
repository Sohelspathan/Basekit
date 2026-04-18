import clsx from 'clsx'

// ─── Variant styles ────────────────────────────────────────────────────────────
// Each variant is an object so you can read intent at a glance.
// Base styles that apply to ALL variants live in the `base` string below.

const variants = {
  primary: clsx(
    'bg-brand-500 text-white border border-transparent',
    'hover:bg-brand-600',
    'active:bg-brand-700 active:scale-[0.98]',
    'disabled:bg-brand-200 disabled:text-brand-400',
  ),

  secondary: clsx(
    'bg-brand-50 text-brand-700 border border-brand-200',
    'hover:bg-brand-100 hover:border-brand-300',
    'active:bg-brand-200 active:scale-[0.98]',
    'disabled:bg-neutral-100 disabled:text-neutral-400 disabled:border-neutral-200',
  ),

  ghost: clsx(
    'bg-transparent text-neutral-700 border border-neutral-200',
    'hover:bg-neutral-100 hover:border-neutral-300',
    'active:bg-neutral-200 active:scale-[0.98]',
    'disabled:text-neutral-300 disabled:border-neutral-200 disabled:bg-transparent',
  ),

  danger: clsx(
    'bg-danger-500 text-white border border-transparent',
    'hover:bg-danger-600',
    'active:bg-danger-700 active:scale-[0.98]',
    'disabled:bg-danger-200 disabled:text-danger-400',
    'focus-visible:ring-danger-500',
  ),

  'danger-ghost': clsx(
    'bg-transparent text-danger-600 border border-danger-200',
    'hover:bg-danger-50 hover:border-danger-300',
    'active:bg-danger-100 active:scale-[0.98]',
    'disabled:text-danger-300 disabled:border-danger-100',
  ),

  link: clsx(
    'bg-transparent text-brand-600 border border-transparent underline-offset-4',
    'hover:underline hover:text-brand-700',
    'active:text-brand-800',
    'disabled:text-neutral-400',
    'px-0 h-auto', // overrides padding + height
  ),
}

// ─── Size styles ───────────────────────────────────────────────────────────────

const sizes = {
  xs: 'h-7  px-3   text-xs  gap-1.5 rounded-md',
  sm: 'h-8  px-3.5 text-sm  gap-1.5 rounded-lg',
  md: 'h-10 px-4   text-sm  gap-2   rounded-xl',
  lg: 'h-11 px-5   text-base gap-2  rounded-xl',
  xl: 'h-13 px-7   text-base gap-2.5 rounded-2xl',
}

// ─── Icon size matching the text size ─────────────────────────────────────────

const iconSizes = {
  xs: 'w-3 h-3',
  sm: 'w-3.5 h-3.5',
  md: 'w-4 h-4',
  lg: 'w-4 h-4',
  xl: 'w-5 h-5',
}

// ─── Spinner ───────────────────────────────────────────────────────────────────

function Spinner({ size }) {
  return (
    <svg
      className={clsx('animate-spin-slow shrink-0', iconSizes[size])}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
    >
      <circle
        cx="8" cy="8" r="6"
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

// ─── Button ────────────────────────────────────────────────────────────────────

/**
 * @param {'primary'|'secondary'|'ghost'|'danger'|'danger-ghost'|'link'} variant
 * @param {'xs'|'sm'|'md'|'lg'|'xl'} size
 * @param {boolean} loading   — shows spinner, disables interaction
 * @param {boolean} fullWidth — stretches to container width
 * @param {ReactNode} leftIcon  — icon rendered before label
 * @param {ReactNode} rightIcon — icon rendered after label
 * @param {boolean} iconOnly  — square button for icon-only use, removes x-padding
 */
export default function Button({
  variant    = 'primary',
  size       = 'md',
  loading    = false,
  fullWidth  = false,
  leftIcon,
  rightIcon,
  iconOnly   = false,
  children,
  className,
  disabled,
  ...props
}) {
  const isDisabled = disabled || loading

  return (
    <button
      disabled={isDisabled}
      aria-busy={loading}
      className={clsx(
        // Base — applies to every button
        'inline-flex items-center justify-center font-medium',
        'transition-all duration-150',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2',
        'disabled:cursor-not-allowed disabled:pointer-events-none',
        'select-none whitespace-nowrap',

        // Variant
        variants[variant],

        // Size (skip x-padding override for 'link')
        variant !== 'link' && sizes[size],

        // Icon-only: make it square
        iconOnly && {
          xs: 'w-7  px-0',
          sm: 'w-8  px-0',
          md: 'w-10 px-0',
          lg: 'w-11 px-0',
          xl: 'w-13 px-0',
        }[size],

        // Full width
        fullWidth && 'w-full',

        // Consumer overrides
        className,
      )}
      {...props}
    >
      {/* Leading spinner (loading state) or left icon */}
      {loading
        ? <Spinner size={size} />
        : leftIcon && (
            <span className={clsx('shrink-0', iconSizes[size])} aria-hidden>
              {leftIcon}
            </span>
          )
      }

      {/* Label — hidden visually when iconOnly (keep for a11y) */}
      {children && (
        <span className={clsx(iconOnly && 'sr-only')}>
          {loading ? 'Loading…' : children}
        </span>
      )}

      {/* Trailing icon — hidden when loading */}
      {!loading && rightIcon && (
        <span className={clsx('shrink-0', iconSizes[size])} aria-hidden>
          {rightIcon}
        </span>
      )}
    </button>
  )
}