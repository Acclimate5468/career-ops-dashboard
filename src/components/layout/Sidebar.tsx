import type { ModuleDef, ModuleId } from "../../app/modules";

type Props = {
  modules: ModuleDef[];
  activeId: ModuleId;
  onSelect: (id: ModuleId) => void;
};

export default function Sidebar({ modules, activeId, onSelect }: Props) {
  return (
    <aside className="sidebar" aria-label="Module navigation">
      <div className="sidebar__brand">
        <div className="sidebar__brand-mark">CO</div>
        <div>
          <div className="sidebar__brand-title">Career Ops</div>
          <div className="sidebar__brand-sub">Private · Local · Phase 1</div>
        </div>
      </div>
      <nav className="sidebar__nav">
        {modules.map((m) => {
          const isActive = m.id === activeId;
          return (
            <button
              key={m.id}
              type="button"
              className={
                "sidebar__item" + (isActive ? " sidebar__item--active" : "")
              }
              aria-current={isActive ? "page" : undefined}
              onClick={() => onSelect(m.id)}
            >
              <span className="sidebar__item-label">{m.label}</span>
              <span className="sidebar__item-sub">{m.shortLabel}</span>
            </button>
          );
        })}
      </nav>
      <div className="sidebar__footer">
        <div className="sidebar__footer-title">Truth Lock</div>
        <p className="sidebar__footer-body">
          No resume bullet or job-match claim may imply experience that is not
          backed by a stored fact.
        </p>
      </div>
    </aside>
  );
}
