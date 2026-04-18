import clsx from 'clsx'
import { useEffect, useRef } from 'react'

// ─── Size styles ───────────────────────────────────────────────────────────────

const sizes = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  '2xl': 'max-w-2xl',
  full: 'max-w-full mx-4',
}

// ─── Modal ────────────────────────────────────────────────────────────────────

/**
 * Renders into a portal-like fixed overlay (no ReactDOM.createPortal dep).
 *
 * @param {boolean} open          — controls visibility
 * @param {function} onClose      — called on backdrop click or Escape
 * @param {'sm'|'md'|'lg'|'xl'|'2xl'|'full'} size
 * @param {boolean} closeOnBackdrop — default true
 * @param {string} title
 * @param {ReactNode} footer      — action buttons row
 */
export default function Modal({
  open,
  onClose,
  size             = 'md',
  closeOnBackdrop  = true,
  title,
  footer,
  children,
  className,
}) {
  const panelRef = useRef(null)

  // Escape key
  useEffect(() => {
    if (!open) return
    const handler = (e) => { if (e.key === 'Escape') onClose?.() }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [open, onClose])

  // Body scroll lock
  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden'
    else      document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  // Focus trap (simple: focus panel on open)
  useEffect(() => {
    if (open) panelRef.current?.focus()
  }, [open])

  if (!open) return null

  return (
    // Backdrop
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-900/40 backdrop-blur-sm"
      onClick={closeOnBackdrop ? onClose : undefined}
      aria-modal="true"
      role="dialog"
      aria-labelledby={title ? 'modal-title' : undefined}
    >
      {/* Panel */}
      <div
        ref={panelRef}
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
        className={clsx(
          'relative w-full bg-white rounded-2xl shadow-xl',
          'outline-none ring-0',
          'flex flex-col max-h-[90vh]',
          sizes[size],
          className,
        )}
      >
        {/* Header */}
        {(title || onClose) && (
          <div className="flex items-center justify-between gap-4 px-6 py-4 border-b border-neutral-100 shrink-0">
            {title && (
              <h2
                id="modal-title"
                className="text-base font-semibold text-neutral-900"
              >
                {title}
              </h2>
            )}
            {onClose && (
              <button
                type="button"
                onClick={onClose}
                aria-label="Close modal"
                className={clsx(
                  'ml-auto p-1.5 rounded-lg text-neutral-400',
                  'hover:text-neutral-700 hover:bg-neutral-100',
                  'transition-colors duration-150',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500',
                )}
              >
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
                  <path d="M4 4l8 8M12 4l-8 8"/>
                </svg>
              </button>
            )}
          </div>
        )}

        {/* Body (scrollable) */}
        <div className="flex-1 overflow-y-auto px-6 py-5 text-sm text-neutral-700 leading-relaxed">
          {children}
        </div>

        {/* Footer */}
        {footer && (
          <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-neutral-100 shrink-0">
            {footer}
          </div>
        )}
      </div>
    </div>
  )
}