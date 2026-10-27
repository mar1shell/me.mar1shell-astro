import { useRef, useState } from "react";
import type { PortfolioProject } from "../../types/portfolio";

/** A native stretched link makes the whole card clickable without nesting links.
 * Cards without a public link open their existing description instead.
 */
export default function ProjectCard({
  project,
  index,
}: {
  project: PortfolioProject;
  index: number;
}) {
  const details = useRef<HTMLDetailsElement>(null);
  const [expanded, setExpanded] = useState(false);
  const primaryLink = project.links[0];
  return (
    <article
      className={`project-card ${project.featured ? "project-featured" : ""}`}
      key={project.id}
    >
      <div
        className={`project-visual ${!project.image ? "project-diagram" : ""}`}
      >
        {project.image ? (
          <div className="project-image">
            <img
              src={project.image}
              alt={project.imageAlt || project.title}
              loading="lazy"
              width="1200"
              height="750"
            />
          </div>
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
        <span className="project-open-icon" aria-hidden="true">
          {primaryLink ? "↗" : "+"}
        </span>
        <span className="project-index mono">
          {String(index + 1).padStart(2, "0")} / {project.category}
        </span>
        {project.status && (
          <span className="project-status mono">{project.status}</span>
        )}
      </div>
      <div className="project-copy">
        <p className="project-category eyebrow">{project.category}</p>
        <h3>
          {primaryLink ? (
            <a
              className="project-card-action"
              href={primaryLink.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.title}`}
            >
              {project.title}
            </a>
          ) : (
            <button
              className="project-card-action"
              type="button"
              onClick={() => {
                if (details.current)
                  details.current.open = !details.current.open;
              }}
              aria-expanded={expanded}
              aria-controls={`project-details-${project.id}`}
            >
              {project.title}
            </button>
          )}
        </h3>
        <p className="project-summary">{project.summary}</p>
        <details
          className="project-details"
          id={`project-details-${project.id}`}
          ref={details}
          onToggle={() => setExpanded(Boolean(details.current?.open))}
        >
          <summary>
            Behind the build{" "}
            <span className="details-toggle-icon" aria-hidden="true">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 5v14M5 12h14" />
              </svg>
            </span>
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
  );
}
