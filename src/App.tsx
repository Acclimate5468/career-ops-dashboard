import { useState } from "react";
import AppShell from "./components/layout/AppShell";
import ModulePlaceholder from "./components/modules/ModulePlaceholder";
import { MODULES, type ModuleId } from "./app/modules";

export default function App() {
  const [activeId, setActiveId] = useState<ModuleId>(MODULES[0].id);
  const active = MODULES.find((m) => m.id === activeId) ?? MODULES[0];

  return (
    <AppShell
      modules={MODULES}
      activeId={active.id}
      onSelect={setActiveId}
    >
      <ModulePlaceholder module={active} />
    </AppShell>
  );
}
