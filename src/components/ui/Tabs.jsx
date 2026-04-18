import clsx from 'clsx'
import { createContext, useContext, useState } from 'react'

// ─── Context ───────────────────────────────────────────────────────────────────

const TabsCtx = createContext(null)

// ─── Variant styles ────────────────────────────────────────────────────────────

const listVariants = {
  underline: 'border-b border-neutral-200 gap-0',
  pills:     'bg-neutral-100 rounded-xl p-1 gap-1',
  bordered:  'border border-neutral-200 rounded-xl p-1 gap-1',
}

const triggerVariants = {
  underline: {
    base:    'px-3 py-2 text-sm font-medium text-neutral-500 border-b-2 border-transparent -mb-px',
    active:  'text-brand-600 border-brand-600',
    hover:   'hover:text-neutral-800',
    rounded: '',
  },
  pills: {
    base:    'px-3.5 py-1.5 text-sm font-medium text-neutral-600 rounded-lg',
    active:  'bg-white text-neutral-900 shadow-sm',
    hover:   'hover:text-neutral-900 hover:bg-white/60',
    rounded: 'rounded-lg',
  },
  bordered: {
    base:    'px-3.5 py-1.5 text-sm font-medium text-neutral-600 rounded-lg',
    active:  'bg-white text-neutral-900 shadow-sm border border-neutral-200',
    hover:   'hover:text-neutral-900',
    rounded: 'rounded-lg',
  },
}

// ─── Root ─────────────────────────────────────────────────────────────────────

/**
 * @param {string} defaultValue — value of the initially active tab
 * @param {'underline'|'pills'|'bordered'} variant
 * @param {function} onValueChange — called with new value on change
 */
export function Tabs({
  defaultValue,
  value: controlledValue,
  onValueChange,
  variant   = 'underline',
  children,
  className,
  ...props
}) {
  const [uncontrolled, setUncontrolled] = useState(defaultValue)
  const isControlled = controlledValue !== undefined
  const active = isControlled ? controlledValue : uncontrolled

  function select(val) {
    if (!isControlled) setUncontrolled(val)
    onValueChange?.(val)
  }

  return (
    <TabsCtx.Provider value={{ active, select, variant }}>
      <div className={clsx('flex flex-col', className)} {...props}>
        {children}
      </div>
    </TabsCtx.Provider>
  )
}

// ─── Tab list ─────────────────────────────────────────────────────────────────

export function TabList({ children, className, ...props }) {
  const { variant } = useContext(TabsCtx)
  return (
    <div
      role="tablist"
      className={clsx('flex items-center', listVariants[variant], className)}
      {...props}
    >
      {children}
    </div>
  )
}

// ─── Tab trigger ──────────────────────────────────────────────────────────────

export function TabTrigger({ value, disabled, children, className, ...props }) {
  const { active, select, variant } = useContext(TabsCtx)
  const isActive = active === value
  const styles   = triggerVariants[variant]

  return (
    <button
      role="tab"
      type="button"
      aria-selected={isActive}
      disabled={disabled}
      onClick={() => select(value)}
      className={clsx(
        'inline-flex items-center gap-1.5 select-none transition-all duration-150',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-1',
        'disabled:opacity-40 disabled:pointer-events-none',
        styles.base,
        isActive ? styles.active : styles.hover,
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}

// ─── Tab content ──────────────────────────────────────────────────────────────

export function TabContent({ value, children, className, ...props }) {
  const { active } = useContext(TabsCtx)
  if (active !== value) return null
  return (
    <div role="tabpanel" className={clsx('mt-4', className)} {...props}>
      {children}
    </div>
  )
}

// ─── Default export ────────────────────────────────────────────────────────────

export default Object.assign(Tabs, {
  List:    TabList,
  Trigger: TabTrigger,
  Content: TabContent,
})