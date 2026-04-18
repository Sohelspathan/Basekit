import { useState } from 'react'
import Alert from '../components/ui/Alert'
import Button from '../components/ui/Buttons'

function Section({ title, children }) {
  return (
    <div className="mb-12">
      <p className="text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-5">{title}</p>
      <div className="flex flex-col gap-3">{children}</div>
    </div>
  )
}

export default function AlertShowcase() {
  const [dismissed, setDismissed] = useState({})

  function dismiss(key) {
    setDismissed((d) => ({ ...d, [key]: true }))
  }

  return (
    <div className="min-h-screen bg-neutral-50 px-8 py-16 font-sans dark:text-neutral-100 dark:bg-neutral-900">
      <div className="max-w-2xl mx-auto">
        <div className="mb-14">
          <span className="text-xs font-medium text-brand-600 uppercase tracking-widest">Basekit / Alert</span>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">Alert</h1>
          <p className="mt-3 text-neutral-500">5 variants · title · dismiss · action button · custom icon.</p>
        </div>

        <Section title="Variants">
          <Alert variant="info"    title="Update available">A new version is available. Refresh to get the latest features.</Alert>
          <Alert variant="success" title="Payment confirmed">Your invoice #1042 has been paid successfully.</Alert>
          <Alert variant="warning" title="Usage limit approaching">You've used 87% of your monthly quota.</Alert>
          <Alert variant="danger"  title="Deployment failed">Build step failed with exit code 1. Check the logs for details.</Alert>
          <Alert variant="neutral" title="Maintenance window">Scheduled downtime on Sunday 02:00–04:00 UTC.</Alert>
        </Section>

        <Section title="No title (message only)">
          <Alert variant="info">Your session will expire in 10 minutes.</Alert>
          <Alert variant="danger">You don't have permission to perform this action.</Alert>
        </Section>

        <Section title="With dismiss">
          {['info', 'success', 'warning'].map((v) =>
            dismissed[v] ? (
              <p key={v} className="text-xs text-neutral-400 italic">Alert dismissed — refresh to reset.</p>
            ) : (
              <Alert
                key={v}
                variant={v}
                title={`${v.charAt(0).toUpperCase() + v.slice(1)} alert`}
                onDismiss={() => dismiss(v)}
              >
                Click the ✕ to dismiss this alert.
              </Alert>
            ),
          )}
        </Section>

        <Section title="With action button">
          <Alert
            variant="warning"
            title="Card expiring soon"
            action={<Button size="sm" variant="secondary">Update payment method</Button>}
          >
            Your Visa ending in 4242 expires next month.
          </Alert>
          <Alert
            variant="info"
            title="Enable 2-factor authentication"
            action={<Button size="sm">Enable 2FA</Button>}
          >
            Protect your account with an extra layer of security.
          </Alert>
        </Section>

        <Section title="No icon">
          <Alert variant="neutral" icon={false} title="A quiet notice">
            This alert has no icon — pass <code>icon={'{false}'}</code> to suppress it.
          </Alert>
        </Section>
      </div>
    </div>
  )
}