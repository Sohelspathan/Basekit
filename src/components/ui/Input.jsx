import clsx from 'clsx'
import { forwardRef } from 'react'

// ─── Size styles ───────────────────────────────────────────────────────────────

const sizes = {
  sm: 'h-8  px-3   text-sm  rounded-lg',
  md: 'h-10 px-3.5 text-sm  rounded-xl',
  lg: 'h-11 px-4   text-base rounded-xl',
}

const iconSizes = {
  sm: 'w-3.5 h-3.5',
  md: 'w-4   h-4',
  lg: 'w-4   h-4',
}

const iconPadLeft  = { sm: 'pl-8',  md: 'pl-9',   lg: 'pl-10' }
const iconPadRight = { sm: 'pr-8',  md: 'pr-9',   lg: 'pr-10' }

// ─── Input ────────────────────────────────────────────────────────────────────

/**
 * @param {'sm'|'md'|'lg'} size
 * @param {boolean} error       — red border + ring
 * @param {boolean} fullWidth   — stretches to container width
 * @param {ReactNode} leftIcon  — icon pinned to left edge
 * @param {ReactNode} rightIcon — icon pinned to right edge (e.g. clear btn)
 * @param {string} label        — renders a <label> above the input
 * @param {string} hint         — small helper text below the input
 * @param {string} errorMessage — shown below when error=true
 */
const Input = forwardRef(function Input(
  {
    size         = 'md',
    error        = false,
    fullWidth    = false,
    leftIcon,
    rightIcon,
    label,
    hint,
    errorMessage,
    id,
    className,
    disabled,
    ...props
  },
  ref,
) {
  const inputId = id ?? (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined)

  return (
    <div className={clsx('flex flex-col gap-1.5', fullWidth ? 'w-full' : 'w-fit')}>
      {/* Label */}
      {label && (
        <label
          htmlFor={inputId}
          className="text-sm font-medium text-neutral-700 select-none"
        >
          {label}
        </label>
      )}

      {/* Input wrapper */}
      <div className="relative flex items-center">
        {/* Left icon */}
        {leftIcon && (
          <span
            className={clsx(
              'pointer-events-none absolute left-3 text-neutral-400',
              iconSizes[size],
            )}
            aria-hidden
          >
            {leftIcon}
          </span>
        )}

        <input
          ref={ref}
          id={inputId}
          disabled={disabled}
          className={clsx(
            // Base
            'w-full bg-white text-neutral-900 placeholder:text-neutral-400',
            'border outline-none transition-all duration-150',
            'disabled:bg-neutral-50 disabled:text-neutral-400 disabled:cursor-not-allowed',

            // Size
            sizes[size],

            // Icon padding
            leftIcon  && iconPadLeft[size],
            rightIcon && iconPadRight[size],

            // State — error vs normal
            error
              ? [
                  'border-danger-400',
                  'focus:ring-2 focus:ring-danger-400/30 focus:border-danger-500',
                ]
              : [
                  'border-neutral-200',
                  'hover:border-neutral-300',
                  'focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500',
                ],

            className,
          )}
          {...props}
        />

        {/* Right icon */}
        {rightIcon && (
          <span
            className={clsx(
              'absolute right-3 text-neutral-400',
              iconSizes[size],
            )}
            aria-hidden
          >
            {rightIcon}
          </span>
        )}
      </div>

      {/* Hint / error message */}
      {(hint || (error && errorMessage)) && (
        <p
          className={clsx(
            'text-xs',
            error && errorMessage ? 'text-danger-600' : 'text-neutral-500',
          )}
        >
          {error && errorMessage ? errorMessage : hint}
        </p>
      )}
    </div>
  )
})

export default Input