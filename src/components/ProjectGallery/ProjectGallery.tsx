import { useEffect, useState } from "react";
import type { PortfolioProject } from "../../types/portfolio";

export default function ProjectGallery({
  projects,
}: {
  projects: PortfolioProject[];
}) {
  const [category, setCategory] = useState("All work");
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);
  const categories = [
    "All work",
    ...new Set(projects.map((project) => project.category)),
  ];
  const visible =
    category === "All work"
      ? projects
      : projects.filter((project) => project.category === category);

  return (
    <div>
      <div className="project-toolbar">
        <div
          className="project-filters"
          role="group"
          aria-label="Filter projects"
        >
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              disabled={!ready}
              aria-pressed={category === item}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <p className="mono project-count" role="status" aria-live="polite">
          {String(visible.length).padStart(2, "0")} projects
        </p>
      </div>
      <div className="project-grid">
        {visible.map((project) => (
          <article
            className={`project-card ${project.featured ? "project-featured" : ""}`}
            key={project.id}
          >
            <div
              className={`project-visual ${!project.image ? "project-diagram" : ""}`}
            >
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.imageAlt || project.title}
                  loading="lazy"
                  width="1200"
                  height="750"
                />
              ) : project.preview ? (
                <div className="workflow-visual">
                  <span className="mono">{project.preview.label}</span>
                  <div>
                    {project.preview.steps.map((step, index) => (
                      <span key={step}>
                        {String(index + 1).padStart(2, "0")}
                        <br />
                        <strong>{step}</strong>
                      </span>
                    ))}
                  </div>
                  <span className="mono workflow-caption">
                    {project.preview.caption}
                  </span>
                </div>
              ) : (
                <div className="project-placeholder">
                  <span className="mono">{project.category}</span>
                  <strong>{project.title}</strong>
                </div>
              )}
              <span className="project-index mono">
                {String(projects.indexOf(project) + 1).padStart(2, "0")} /{" "}
                {project.category}
              </span>
              {project.status && (
                <span className="project-status mono">{project.status}</span>
              )}
            </div>
            <div className="project-copy">
              <p className="project-category eyebrow">{project.category}</p>
              <h3>{project.title}</h3>
              <p className="project-summary">{project.summary}</p>
              <details className="project-details">
                <summary>
                  Behind the build <span aria-hidden="true">＋</span>
                </summary>
                <p>{project.description}</p>
              </details>
              <ul className="tag-list" aria-label="Technologies">
                {project.technologies.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              <div className="project-links">
                {project.links.map((link) => (
                  <a
                    className="text-link"
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                    <span aria-hidden="true">↗</span>
                  </a>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
