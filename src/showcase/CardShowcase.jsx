import Card from '../components/ui/Card'
import Button from '../components/ui/Buttons'
import Badge from '../components/ui/Badge'

function Section({ title, children }) {
  return (
    <div className="mb-12">
      <p className="text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-5">{title}</p>
      <div className="flex flex-wrap items-start gap-5">{children}</div>
    </div>
  )
}

export default function CardShowcase() {
  return (
    <div className="min-h-screen bg-neutral-50 px-8 py-16 font-sans dark:text-neutral-100 dark:bg-neutral-700">
      <div className="max-w-3xl mx-auto">
        <div className="mb-14">
          <span className="text-xs font-medium text-brand-600 uppercase tracking-widest">Basekit / Card</span>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-neutral-900  dark:text-neutral-100">Card</h1>
          <p className="mt-3 text-neutral-500">4 variants · 4 padding sizes · hoverable · composable sub-components.</p>
        </div>

        <Section title="Variants">
          {['default', 'outlined', 'filled', 'elevated'].map((v) => (
            <Card key={v} variant={v} className="w-48">
              <Card.Title>{v.charAt(0).toUpperCase() + v.slice(1)}</Card.Title>
              <Card.Description>A {v} card.</Card.Description>
            </Card>
          ))}
        </Section>

        <Section title="Composed card">
          <Card className="w-72">
            <Card.Header>
              <div>
                <Card.Title>Project Alpha</Card.Title>
                <Card.Description>Last updated 2 hours ago</Card.Description>
              </div>
              <Badge variant="success" dot>Active</Badge>
            </Card.Header>
            <Card.Content>
              <p>Everything is on track. The deployment is scheduled for Friday and the team is aligned.</p>
            </Card.Content>
            <Card.Footer>
              <Button size="sm" variant="secondary">View</Button>
              <Button size="sm">Open</Button>
            </Card.Footer>
          </Card>
        </Section>

        <Section title="Hoverable">
          {[1, 2, 3].map((n) => (
            <Card key={n} hoverable className="w-48 cursor-pointer">
              <Card.Title>Card {n}</Card.Title>
              <Card.Description>Hover me</Card.Description>
            </Card>
          ))}
        </Section>

        <Section title="Padding sizes">
          {['none', 'sm', 'md', 'lg'].map((p) => (
            <Card key={p} padding={p} className="w-40 border border-dashed border-neutral-300">
              <p className="text-xs text-neutral-500">padding="{p}"</p>
            </Card>
          ))}
        </Section>
      </div>
    </div>
  )
}