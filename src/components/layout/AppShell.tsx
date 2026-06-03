import type { ReactNode } from "react";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import type { ModuleDef, ModuleId } from "../../app/modules";

type Props = {
  modules: ModuleDef[];
  activeId: ModuleId;
  onSelect: (id: ModuleId) => void;
  children: ReactNode;
};

export default function AppShell({ modules, activeId, onSelect, children }: Props) {
  const active = modules.find((m) => m.id === activeId);
  return (
    <div className="app-shell">
      <Sidebar modules={modules} activeId={activeId} onSelect={onSelect} />
      <div className="app-shell__main">
        <TopBar title={active?.label ?? "Career Ops Dashboard"} />
        <main className="app-shell__content">{children}</main>
      </div>
    </div>
  );
}
