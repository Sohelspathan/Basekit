import Input from '../components/ui/Input'

// Simple icon examples (inline SVG)
const Search = (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
    <circle cx="6.5" cy="6.5" r="4.5"/>
    <path d="M10 10l3 3"/>
  </svg>
)

const Mail = (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1.5" y="3.5" width="13" height="9" rx="1.5"/>
    <path d="M1.5 5.5l6.5 4.5 6.5-4.5"/>
  </svg>
)

const Lock = (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="7" width="10" height="7" rx="1.5"/>
    <path d="M5 7V5a3 3 0 0 1 6 0v2"/>
  </svg>
)

const Eye = (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
    <path d="M1 8s2.5-5 7-5 7 5 7 5-2.5 5-7 5-7-5-7-5Z"/>
    <circle cx="8" cy="8" r="2"/>
  </svg>
)

function Section({ title, children }) {
  return (
    <div className="mb-12">
      <p className="text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-5">
        {title}
      </p>
      <div className="flex flex-wrap items-start gap-4">
        {children}
      </div>
    </div>
  )
}

export default function InputShowcase() {
  return (
    <div className="min-h-screen bg-neutral-50 px-8 py-16 font-sans   dark:text-neutral-100 dark:bg-neutral-900">
      <div className="max-w-3xl mx-auto">
        <div className="mb-14">
          <span className="text-xs font-medium text-brand-600 uppercase tracking-widest">Basekit / Input</span>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-neutral-900   dark:text-neutral-100">Input</h1>
          <p className="mt-3 text-neutral-500">3 sizes · error state · icon support · label & hint · fully accessible.</p>
        </div>

        <Section title="Sizes">
          <Input size="sm" placeholder="Small" />
          <Input size="md" placeholder="Medium" />
          <Input size="lg" placeholder="Large" />
        </Section>

        <Section title="With label & hint">
          <Input label="Email address" hint="We'll never share your email." placeholder="you@example.com" />
          <Input label="Password" hint="Minimum 8 characters." placeholder="••••••••" type="password" />
        </Section>

        <Section title="With icons">
          <Input leftIcon={Search}  placeholder="Search…" />
          <Input leftIcon={Mail}    placeholder="Email" />
          <Input leftIcon={Lock} rightIcon={Eye} placeholder="Password" type="password" />
        </Section>

        <Section title="Error state">
          <Input
            label="Email"
            error
            errorMessage="Please enter a valid email address."
            defaultValue="not-an-email"
          />
          <Input
            label="Username"
            error
            errorMessage="Username is already taken."
            defaultValue="cooluser99"
          />
        </Section>

        <Section title="Disabled">
          <Input disabled placeholder="Disabled input" />
          <Input disabled defaultValue="Prefilled disabled" />
        </Section>

        <div className="mb-12">
          <p className="text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-5">Full width</p>
          <div className="flex flex-col gap-3 max-w-sm">
            <Input fullWidth label="Full name" placeholder="Jane Smith" />
            <Input fullWidth label="Search" leftIcon={Search} placeholder="Search anything…" />
          </div>
        </div>
      </div>
    </div>
  )
}