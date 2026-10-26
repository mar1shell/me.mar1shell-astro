import { useEffect, useState } from "react";
import type { PortfolioProject } from "../../types/portfolio";
import ProjectCard from "../ProjectCard/ProjectCard";

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
          <ProjectCard
            project={project}
            index={projects.indexOf(project)}
            key={project.id}
          />
        ))}
      </div>
    </div>
  );
}
