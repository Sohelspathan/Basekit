import Button from '../components/ui/Buttons'

// Simple icon examples (inline SVG — no icon lib dependency)
const ArrowRight = (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M3 8h10M9 4l4 4-4 4"/>
  </svg>
)

const Trash = (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
    <path d="M2.5 4.5h11M6 4.5V3h4v1.5M5 4.5l.75 8h4.5l.75-8"/>
  </svg>
)

const Plus = (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M8 2v12M2 8h12"/>
  </svg>
)

// ─── Section wrapper ───────────────────────────────────────────────────────────

function Section({ title, children }) {
  return (
    <div className="mb-12">
      <p className="text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-5">
        {title}
      </p>
      <div className="flex flex-wrap items-center gap-3">
        {children}
      </div>
    </div>
  )
}

// ─── Showcase ─────────────────────────────────────────────────────────────────

export default function ButtonShowcase() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 dark:text-neutral-100 px-8 py-16 font-sans">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="mb-14">
          <span className="text-xs font-medium text-brand-600 uppercase tracking-widest">
            Basekit / Button
          </span>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-neutral-900  dark:bg-neutral-900 dark:text-neutral-100">
            Button
          </h1>
          <p className="mt-3 text-neutral-500">
            6 variants · 5 sizes · loading state · icon support · fully accessible.
          </p>
        </div>

        {/* Variants */}
        <Section title="Variants">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="danger-ghost">Danger ghost</Button>
          <Button variant="link">Link</Button>
        </Section>

        {/* Sizes */}
        <Section title="Sizes">
          <Button size="xs">Extra small</Button>
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
          <Button size="xl">Extra large</Button>
        </Section>

        {/* With icons */}
        <Section title="With icons">
          <Button leftIcon={Plus}>New project</Button>
          <Button rightIcon={ArrowRight} variant="secondary">Continue</Button>
          <Button leftIcon={Trash} variant="danger-ghost">Delete</Button>
          <Button variant="ghost" rightIcon={ArrowRight}>Learn more</Button>
        </Section>

        {/* Icon only */}
        <Section title="Icon only">
          <Button iconOnly leftIcon={Plus} size="sm" aria-label="Add item" />
          <Button iconOnly leftIcon={Plus} aria-label="Add item" />
          <Button iconOnly leftIcon={Plus} size="lg" aria-label="Add item" />
          <Button iconOnly leftIcon={Trash} variant="danger-ghost" aria-label="Delete" />
        </Section>

        {/* Loading */}
        <Section title="Loading state">
          <Button loading>Saving…</Button>
          <Button loading variant="secondary">Loading</Button>
          <Button loading variant="ghost">Processing</Button>
          <Button loading variant="danger">Deleting</Button>
          <Button loading iconOnly aria-label="Loading" />
        </Section>

        {/* Disabled */}
        <Section title="Disabled">
          <Button disabled>Primary</Button>
          <Button disabled variant="secondary">Secondary</Button>
          <Button disabled variant="ghost">Ghost</Button>
          <Button disabled variant="danger">Danger</Button>
        </Section>

        {/* Full width */}
        <div className="mb-12">
          <p className="text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-5">
            Full width
          </p>
          <div className="flex flex-col gap-3 max-w-sm">
            <Button fullWidth>Full width primary</Button>
            <Button fullWidth variant="ghost" rightIcon={ArrowRight}>
              Full width ghost
            </Button>
          </div>
        </div>

      </div>
    </div>
  )
}