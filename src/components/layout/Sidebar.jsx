import ToggleTheme from "../ui/ToggleTheme";

export default function Sidebar({ components, active, setActive }) {
  return (
    <aside className="w-48 shrink-0 bg-white border-r border-neutral-200 flex flex-col py-6 px-3 sticky top-0 h-screen dark:bg-neutral-900 dark:text-neutral-100">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <p className="text-xs font-semibold text-neutral-400 uppercase tracking-widest px-3">
          Basekit
        </p>
        <ToggleTheme />
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-0.5">
        {components.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => setActive(id)}
            className={[
              "text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-100",
              active === id
                ? "bg-brand-50 text-brand-700"
                : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900",
            ].join(" ")}
          >
            {label}
          </button>
        ))}
      </nav>
    </aside>
  );
}