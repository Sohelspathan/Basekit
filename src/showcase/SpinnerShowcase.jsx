import Spinner from '../components/ui/Spinner'

function Section({ title, children }) {
  return (
    <div className="mb-12">
      <p className="text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-5">{title}</p>
      <div className="flex flex-wrap items-center gap-6">{children}</div>
    </div>
  )
}

export default function SpinnerShowcase() {
  return (
    <div className="min-h-screen bg-neutral-50 px-8 py-16 font-sans dark:text-neutral-100 dark:bg-neutral-700">
      <div className="max-w-3xl mx-auto">
        <div className="mb-14">
          <span className="text-xs font-medium text-brand-600 uppercase tracking-widest">Basekit / Spinner</span>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-neutral-900  dark:text-neutral-100">Spinner</h1>
          <p className="mt-3 text-neutral-500">5 sizes · inherits color via currentColor · accessible role=status.</p>
        </div>

        <Section title="Sizes">
          <Spinner size="xs" />
          <Spinner size="sm" />
          <Spinner size="md" />
          <Spinner size="lg" />
          <Spinner size="xl" />
        </Section>

        <Section title="Colors (via className)">
          <Spinner className="text-brand-500" />
          <Spinner className="text-success-500" />
          <Spinner className="text-warning-500" />
          <Spinner className="text-danger-500" />
          <Spinner className="text-neutral-400" />
        </Section>
      </div>
    </div>
  )
}