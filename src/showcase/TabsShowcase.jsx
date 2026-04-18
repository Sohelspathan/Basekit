import Tabs from '../components/ui/Tabs'
import Badge from '../components/ui/Badge'

function Section({ title, children }) {
  return (
    <div className="mb-12">
      <p className="text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-5">{title}</p>
      {children}
    </div>
  )
}

const sampleContent = {
  overview: 'The overview gives you a bird\'s-eye view of the project, including key metrics and recent activity across all workstreams.',
  settings: 'Settings let you configure notifications, integrations, and permissions for all team members.',
  members:  'Manage who has access to this project. Invite collaborators or remove members who have left the team.',
  billing:  'View and manage your subscription, invoices, and payment methods.',
}

export default function TabsShowcase() {
  return (
    <div className="min-h-screen bg-neutral-50 px-8 py-16 font-sans dark:text-neutral-100 dark:bg-neutral-700">
      <div className="max-w-3xl mx-auto">
        <div className="mb-14">
          <span className="text-xs font-medium text-brand-600 uppercase tracking-widest">Basekit / Tabs</span>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-neutral-900  dark:text-neutral-100">Tabs</h1>
          <p className="mt-3 text-neutral-500">3 variants · controlled & uncontrolled · disabled tab · icon + badge support.</p>
        </div>

        <Section title="Underline (default)">
          <Tabs defaultValue="overview">
            <Tabs.List>
              <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
              <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
              <Tabs.Trigger value="members">Members</Tabs.Trigger>
              <Tabs.Trigger value="billing" disabled>Billing</Tabs.Trigger>
            </Tabs.List>
            {Object.entries(sampleContent).map(([k, v]) => (
              <Tabs.Content key={k} value={k}>
                <p className="text-sm text-neutral-600 leading-relaxed">{v}</p>
              </Tabs.Content>
            ))}
          </Tabs>
        </Section>

        <Section title="Pills">
          <Tabs defaultValue="overview" variant="pills">
            <Tabs.List>
              <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
              <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
              <Tabs.Trigger value="members">Members</Tabs.Trigger>
              <Tabs.Trigger value="billing" disabled>Billing</Tabs.Trigger>
            </Tabs.List>
            {Object.entries(sampleContent).map(([k, v]) => (
              <Tabs.Content key={k} value={k}>
                <p className="text-sm text-neutral-600 leading-relaxed">{v}</p>
              </Tabs.Content>
            ))}
          </Tabs>
        </Section>

        <Section title="Bordered">
          <Tabs defaultValue="overview" variant="bordered">
            <Tabs.List>
              <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
              <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
              <Tabs.Trigger value="members">
                Members&nbsp;
                <Badge size="sm" variant="brand">4</Badge>
              </Tabs.Trigger>
              <Tabs.Trigger value="billing" disabled>Billing</Tabs.Trigger>
            </Tabs.List>
            {Object.entries(sampleContent).map(([k, v]) => (
              <Tabs.Content key={k} value={k}>
                <p className="text-sm text-neutral-600 leading-relaxed">{v}</p>
              </Tabs.Content>
            ))}
          </Tabs>
        </Section>
      </div>
    </div>
  )
}