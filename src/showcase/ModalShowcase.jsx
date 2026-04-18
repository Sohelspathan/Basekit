import { useState } from 'react'
import Modal from '../components/ui/Modal'
import Button from '../components/ui/Buttons'

function Section({ title, children }) {
  return (
    <div className="mb-12">
      <p className="text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-5">{title}</p>
      <div className="flex flex-wrap items-center gap-3">{children}</div>
    </div>
  )
}

export default function ModalShowcase() {
  const [active, setActive] = useState(null)
  const open  = (key) => setActive(key)
  const close = ()    => setActive(null)

  return (
    <div className="min-h-screen bg-neutral-50 px-8 py-16 font-sans dark:text-neutral-100 dark:bg-neutral-900">
      <div className="max-w-3xl mx-auto">
        <div className="mb-14">
          <span className="text-xs font-medium text-brand-600 uppercase tracking-widest  ">Basekit / Modal</span>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-neutral-900  dark:text-neutral-100">Modal</h1>
          <p className="mt-3 text-neutral-500">5 sizes · title · footer · Escape key · backdrop dismiss · scroll lock.</p>
        </div>

        <Section title="Sizes">
          {['sm', 'md', 'lg', 'xl', '2xl'].map((s) => (
            <Button key={s} variant="secondary" size="sm" onClick={() => open(s)}>
              Open {s}
            </Button>
          ))}
        </Section>

        <Section title="With footer actions">
          <Button onClick={() => open('confirm')} variant="danger-ghost">Confirm delete</Button>
          <Button onClick={() => open('form')} variant="secondary">Form modal</Button>
        </Section>

        {/* ── Modals ── */}

        {/* Size modals */}
        {['sm', 'md', 'lg', 'xl', '2xl'].map((s) => (
          <Modal
            key={s}
            open={active === s}
            onClose={close}
            size={s}
            title={`Modal — size "${s}"`}
            footer={
              <>
                <Button variant="ghost" onClick={close}>Cancel</Button>
                <Button onClick={close}>Confirm</Button>
              </>
            }
          >
            <p>
              This is a <strong>{s}</strong> modal. It closes on Escape, on the ✕ button, or on
              backdrop click. The body scrolls independently when content overflows.
            </p>
          </Modal>
        ))}

        {/* Confirm / danger */}
        <Modal
          open={active === 'confirm'}
          onClose={close}
          size="sm"
          title="Delete workspace"
          footer={
            <>
              <Button variant="ghost" onClick={close}>Cancel</Button>
              <Button variant="danger" onClick={close}>Delete</Button>
            </>
          }
        >
          <p>
            Are you sure you want to delete <strong>Acme Corp</strong>? This action cannot be
            undone and all data will be permanently removed.
          </p>
        </Modal>

        {/* Form modal */}
        <Modal
          open={active === 'form'}
          onClose={close}
          size="md"
          title="Invite team member"
          footer={
            <>
              <Button variant="ghost" onClick={close}>Cancel</Button>
              <Button onClick={close}>Send invite</Button>
            </>
          }
        >
          <div className="flex flex-col gap-4">
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1.5">Email address</label>
              <input
                type="email"
                placeholder="colleague@example.com"
                className="w-full h-10 px-3.5 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1.5">Role</label>
              <select className="w-full h-10 px-3.5 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 bg-white">
                <option>Member</option>
                <option>Admin</option>
                <option>Viewer</option>
              </select>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  )
}