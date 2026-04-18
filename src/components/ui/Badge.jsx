import clsx from 'clsx'

// ─── Variant styles ────────────────────────────────────────────────────────────

const variants = {
  neutral: 'bg-neutral-100  text-neutral-700  border border-neutral-200',
  brand:   'bg-brand-50     text-brand-700    border border-brand-200',
  success: 'bg-success-50   text-success-700  border border-success-200',
  warning: 'bg-warning-50   text-warning-700  border border-warning-200',
  danger:  'bg-danger-50    text-danger-700   border border-danger-200',
  info:    'bg-sky-50       text-sky-700      border border-sky-200',
}

// ─── Size styles ───────────────────────────────────────────────────────────────

const sizes = {
  sm: 'text-xs  px-2   py-0.5 gap-1   rounded-md',
  md: 'text-xs  px-2.5 py-1   gap-1   rounded-lg',
  lg: 'text-sm  px-3   py-1   gap-1.5 rounded-lg',
}

const dotSizes = {
  sm: 'w-1.5 h-1.5',
  md: 'w-1.5 h-1.5',
  lg: 'w-2   h-2',
}

/**
 * @param {'neutral'|'brand'|'success'|'warning'|'danger'|'info'} variant
 * @param {'sm'|'md'|'lg'} size
 * @param {boolean} dot       — show a leading status dot
 * @param {ReactNode} leftIcon  — icon before label
 * @param {ReactNode} rightIcon — icon / dismiss button after label
 */
export default function Badge({
  variant   = 'neutral',
  size      = 'md',
  dot       = false,
  leftIcon,
  rightIcon,
  children,
  className,
  ...props
}) {
  return (
    <span
      className={clsx(
        'inline-flex items-center font-medium select-none',
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      {/* Status dot */}
      {dot && (
        <span
          className={clsx('rounded-full bg-current opacity-70 shrink-0', dotSizes[size])}
          aria-hidden
        />
      )}

      {/* Left icon */}
      {!dot && leftIcon && (
        <span className={clsx('shrink-0', dotSizes[size])} aria-hidden>
          {leftIcon}
        </span>
      )}

      {children}

      {/* Right icon / dismiss */}
      {rightIcon && (
        <span className={clsx('shrink-0', dotSizes[size])} aria-hidden>
          {rightIcon}
        </span>
      )}
    </span>
  )
}