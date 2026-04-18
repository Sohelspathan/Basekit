import Badge from '../components/ui/Badge'

const Star = (
  <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden>
    <path d="M8 1l1.85 3.75L14 5.6l-3 2.92.71 4.13L8 10.75l-3.71 1.9.71-4.13L2 5.6l4.15-.85L8 1Z"/>
  </svg>
)

const X = (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
    <path d="M4 4l8 8M12 4l-8 8"/>
  </svg>
)

function Section({ title, children }) {
  return (
    <div className="mb-12">
      <p className="text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-5">{title}</p>
      <div className="flex flex-wrap items-center gap-3">{children}</div>
    </div>
  )
}

export default function BadgeShowcase() {
  return (
    <div className="min-h-screen bg-neutral-50 px-8 py-16 font-sans dark:text-neutral-100 dark:bg-neutral-700">
      <div className="max-w-3xl mx-auto">
        <div className="mb-14">
          <span className="text-xs font-medium text-brand-600 uppercase tracking-widest">Basekit / Badge</span>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-neutral-900   dark:text-neutral-100">Badge</h1>
          <p className="mt-3 text-neutral-500">6 variants · 3 sizes · dot · icon support.</p>
        </div>

        <Section title="Variants">
          <Badge variant="neutral">Neutral</Badge>
          <Badge variant="brand">Brand</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="danger">Danger</Badge>
          <Badge variant="info">Info</Badge>
        </Section>

        <Section title="Sizes">
          <Badge size="sm">Small</Badge>
          <Badge size="md">Medium</Badge>
          <Badge size="lg">Large</Badge>
        </Section>

        <Section title="With dot">
          <Badge dot variant="neutral">Offline</Badge>
          <Badge dot variant="success">Active</Badge>
          <Badge dot variant="warning">Pending</Badge>
          <Badge dot variant="danger">Blocked</Badge>
          <Badge dot variant="info">Syncing</Badge>
        </Section>

        <Section title="With icons">
          <Badge leftIcon={Star} variant="brand">Featured</Badge>
          <Badge leftIcon={Star} variant="warning">Pro</Badge>
          <Badge rightIcon={X} variant="neutral">Removable</Badge>
          <Badge leftIcon={Star} rightIcon={X} variant="success">Tag</Badge>
        </Section>

        <Section title="Realistic usage">
          <Badge variant="success" dot>Published</Badge>
          <Badge variant="warning" dot>In review</Badge>
          <Badge variant="neutral" dot>Draft</Badge>
          <Badge variant="danger">Deprecated</Badge>
          <Badge variant="brand" size="sm">New</Badge>
          <Badge variant="info" size="sm">Beta</Badge>
        </Section>
      </div>
    </div>
  )
}