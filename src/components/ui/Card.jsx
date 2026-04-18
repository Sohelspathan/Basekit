import clsx from 'clsx'

// ─── Variant styles ────────────────────────────────────────────────────────────

const variants = {
  default:  'bg-white border border-neutral-200 shadow-sm',
  outlined: 'bg-white border border-neutral-200',
  filled:   'bg-neutral-50 border border-neutral-200',
  elevated: 'bg-white shadow-md border border-neutral-100',
}

// ─── Padding sizes ─────────────────────────────────────────────────────────────

const paddings = {
  none: '',
  sm:   'p-4',
  md:   'p-6',
  lg:   'p-8',
}

// ─── Card ─────────────────────────────────────────────────────────────────────

/**
 * @param {'default'|'outlined'|'filled'|'elevated'} variant
 * @param {'none'|'sm'|'md'|'lg'} padding
 * @param {boolean} hoverable — adds a lift-on-hover effect
 * @param {boolean} clickable — styles cursor:pointer (pair with onClick)
 */
export function Card({
  variant   = 'default',
  padding   = 'md',
  hoverable = false,
  clickable = false,
  children,
  className,
  ...props
}) {
  return (
    <div
      className={clsx(
        'rounded-2xl overflow-hidden transition-all duration-200',
        variants[variant],
        paddings[padding],
        hoverable && 'hover:shadow-md hover:-translate-y-0.5',
        clickable && 'cursor-pointer',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

// ─── Card sub-components ───────────────────────────────────────────────────────

export function CardHeader({ children, className, ...props }) {
  return (
    <div
      className={clsx(
        'flex items-start justify-between gap-4 pb-4 border-b border-neutral-100 mb-4',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export function CardTitle({ children, className, ...props }) {
  return (
    <h3
      className={clsx('text-base font-semibold text-neutral-900 leading-snug', className)}
      {...props}
    >
      {children}
    </h3>
  )
}

export function CardDescription({ children, className, ...props }) {
  return (
    <p className={clsx('text-sm text-neutral-500 mt-0.5', className)} {...props}>
      {children}
    </p>
  )
}

export function CardContent({ children, className, ...props }) {
  return (
    <div className={clsx('text-sm text-neutral-700', className)} {...props}>
      {children}
    </div>
  )
}

export function CardFooter({ children, className, ...props }) {
  return (
    <div
      className={clsx(
        'flex items-center gap-3 pt-4 border-t border-neutral-100 mt-4',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

// ─── Default export (convenience) ─────────────────────────────────────────────

export default Object.assign(Card, {
  Header:      CardHeader,
  Title:       CardTitle,
  Description: CardDescription,
  Content:     CardContent,
  Footer:      CardFooter,
})