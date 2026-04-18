import clsx from 'clsx'

// ─── Variant styles ────────────────────────────────────────────────────────────

const variants = {
  info: {
    wrap:  'bg-sky-50    border border-sky-200   text-sky-800 dark:bg-sky-900/50 dark:border-sky-700/50 dark:text-sky-300',
    icon:  'text-sky-500',
    title: 'text-sky-900 dark:text-sky-100',
  },
  success: {
    wrap:  'bg-success-50  border border-success-200  text-success-600 dark:bg-success-700/50 dark:border-success-700/50 dark:text-success-300',
    icon:  'text-success-500 dark:text-success-400',
    title: 'text-success-700 dark:text-success-100',
  },
  warning: {
    wrap:  'bg-warning-50  border border-warning-200  text-warning-700 dark:bg-warning-700/50 dark:border-warning-700/50 dark:text-warning-300',
    icon:  'text-warning-500 dark:text-warning-400',
    title: 'text-warning-700 dark:text-warning-100',
  },
  danger: {
    wrap:  'bg-danger-50   border border-danger-200   text-danger-700 dark:bg-danger-700/50 dark:border-danger-700/50 dark:text-danger-300',
    icon:  'text-danger-500 dark:text-danger-400',
    title: 'text-danger-700 dark:text-red-100',
  },
  neutral: {
    wrap:  'bg-neutral-50  border border-neutral-200  text-neutral-700 dark:bg-neutral-700/50 dark:border-neutral-700/50 dark:text-neutral-300',
    icon:  'text-neutral-500 dark:text-neutral-400',
    title: 'text-neutral-700 dark:text-neutral-500',
  },
}

// ─── Default icons ─────────────────────────────────────────────────────────────

const defaultIcons = {
  info: (
    <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden>
      <path fillRule="evenodd" clipRule="evenodd"
        d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-3a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 8 5Zm0 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      />
    </svg>
  ),
  success: (
    <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden>
      <path fillRule="evenodd" clipRule="evenodd"
        d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm11.03-2.22a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l1.47 1.47 3.47-3.47a.75.75 0 0 1 1.06 0Z"
      />
    </svg>
  ),
  warning: (
    <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden>
      <path fillRule="evenodd" clipRule="evenodd"
        d="M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575L6.457 1.047ZM8 5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 8 5Zm0 7.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      />
    </svg>
  ),
  danger: (
    <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden>
      <path fillRule="evenodd" clipRule="evenodd"
        d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm4.97-2.03a.75.75 0 0 1 1.06 0L8 7.94l1.97-1.97a.75.75 0 1 1 1.06 1.06L9.06 9l1.97 1.97a.75.75 0 1 1-1.06 1.06L8 10.06l-1.97 1.97a.75.75 0 0 1-1.06-1.06L6.94 9 4.97 7.03a.75.75 0 0 1 0-1.06Z"
      />
    </svg>
  ),
  neutral: (
    <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden>
      <path fillRule="evenodd" clipRule="evenodd"
        d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-3a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 8 5Zm0 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      />
    </svg>
  ),
}

// ─── Alert ────────────────────────────────────────────────────────────────────

/**
 * @param {'info'|'success'|'warning'|'danger'|'neutral'} variant
 * @param {string} title         — bold heading line
 * @param {ReactNode} icon       — override default icon (pass false to hide)
 * @param {ReactNode} action     — optional action element (e.g. a Button)
 * @param {function} onDismiss   — renders an ✕ button when provided
 */
export default function Alert({
  variant    = 'info',
  title,
  icon,
  action,
  onDismiss,
  children,
  className,
  ...props
}) {
  const styles  = variants[variant]
  const iconEl  = icon === false ? null : (icon ?? defaultIcons[variant])

  return (
    <div
      role="alert"
      className={clsx('flex gap-3 rounded-xl p-4 text-sm', styles.wrap, className)}
      {...props}
    >
      {/* Icon */}
      {iconEl && (
        <span className={clsx('mt-0.5 w-4 h-4 shrink-0', styles.icon)}>
          {iconEl}
        </span>
      )}

      {/* Body */}
      <div className="flex-1 min-w-0">
        {title && (
          <p className={clsx('font-semibold mb-0.5', styles.title)}>{title}</p>
        )}
        {children && <div className="leading-relaxed">{children}</div>}
        {action && <div className="mt-3">{action}</div>}
      </div>

      {/* Dismiss */}
      {onDismiss && (
        <button
          type="button"
          onClick={onDismiss}
          aria-label="Dismiss"
          className={clsx(
            'ml-auto -mt-0.5 -mr-0.5 p-1 rounded-lg shrink-0',
            'opacity-60 hover:opacity-100 transition-opacity',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-current',
          )}
        >
          <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
            <path d="M4 4l8 8M12 4l-8 8"/>
          </svg>
        </button>
      )}
    </div>
  )
}