type Props = {
  title: string;
};

export default function TopBar({ title }: Props) {
  return (
    <header className="topbar">
      <div className="topbar__left">
        <h1 className="topbar__title">{title}</h1>
        <span className="topbar__phase">Phase 1 · Local Only</span>
      </div>
      <div className="topbar__right">
        <span className="topbar__pill topbar__pill--ok">No backend</span>
        <span className="topbar__pill topbar__pill--ok">No auto-apply</span>
        <span className="topbar__pill">Single user</span>
      </div>
    </header>
  );
}
