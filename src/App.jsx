import { useState } from "react";
import { components } from "./config/components";
import Sidebar from "./components/layout/Sidebar";

export default function App() {
  const [active, setActive] = useState("button");

  const Active =
    components.find((c) => c.id === active)?.component ||
    components[0].component;

  return (
    <div className="flex min-h-screen font-sans dark:bg-neutral-700 dark:text-neutral-100">
      
      <Sidebar
        components={components}
        active={active}
        setActive={setActive}
      />

      <main className="flex-1 overflow-auto text-neutral-900 dark:text-neutral-100">
        <Active />
      </main>

    </div>
  );
}