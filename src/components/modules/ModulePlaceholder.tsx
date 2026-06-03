import type { ModuleDef } from "../../app/modules";

type Props = {
  module: ModuleDef;
};

export default function ModulePlaceholder({ module }: Props) {
  return (
    <section className="module" aria-labelledby="module-title">
      <div className="module__header">
        <h2 id="module-title" className="module__title">
          {module.label}
        </h2>
        <p className="module__summary">{module.summary}</p>
      </div>

      <div className="module__grid">
        <article className="card">
          <h3 className="card__title">What this module is for</h3>
          <p className="card__body">{module.description}</p>
        </article>

        <article className="card">
          <h3 className="card__title">Phase 1 status</h3>
          <ul className="card__list">
            <li>Placeholder screen — UI to be built in a later step.</li>
            <li>No data is stored yet (no persistence layer).</li>
            <li>No external integrations or APIs.</li>
          </ul>
        </article>

        <article className="card card--note">
          <h3 className="card__title">Truth Lock reminder</h3>
          <p className="card__body">
            Anything built into this module must respect the Truth Lock rule:
            no resume bullet, job match, or application note may imply
            something that is not supported by the Truth Lock Profile.
          </p>
        </article>
      </div>
    </section>
  );
}
