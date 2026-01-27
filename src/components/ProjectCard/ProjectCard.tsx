import type { ProjectCardProps } from "../../types";
import { personalInfo } from "../../data";
import { ExternalLinkIcon, GithubActionButtonIcon } from "../../icons";
import ActionButton from "../ActionButton/ActionButton";

function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <div className="group relative flex flex-col items-center gap-8 lg:grid lg:grid-cols-2 lg:gap-16">
      {/* Project Mockup */}
      <div
        className={`relative mb-8 lg:mb-0 ${index % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}
        data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
        suppressHydrationWarning
      >
        <div className="relative transition-transform duration-500 group-hover:scale-105">
          <a
            href={
              project.liveDemo ||
              project.sourceCode ||
              personalInfo.socialMedia.github
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* Laptop Mockup */}
            <div className="relative rounded-t-xl bg-gray-800 p-2 shadow-2xl">
              {/* Laptop Header */}
              <div className="mb-2 flex items-center space-x-2">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
              </div>

              {/* Laptop Screen */}
              <div className="aspect-video overflow-hidden rounded-lg bg-white dark:bg-slate-900">
                <img
                  src={project.imageDesktop || "/placeholder.svg"}
                  alt={project.title}
                  className="h-full w-full object-contain"
                />
              </div>
            </div>

            {/* Laptop Base */}
            <div className="h-4 rounded-b-xl bg-gray-700 shadow-lg"></div>

            {/* Mobile Mockup */}
            {project.hasMobileImage && (
              <div
                key={index}
                className={`absolute ${index % 2 === 1 ? "-left-6 lg:-left-12" : "-right-6 lg:-right-12"} -bottom-6 w-20 lg:w-24`}
              >
                <div className="rounded-2xl bg-gray-800 p-1 shadow-xl">
                  <div className="aspect-9/16 overflow-hidden rounded-xl bg-white dark:bg-slate-900">
                    <img
                      src={project.imageMobile}
                      alt={`${project.title} mobile`}
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>
              </div>
            )}
          </a>

          {/* Glow Effect */}
          <div className="absolute inset-0 -z-10 rounded-xl bg-linear-to-r from-blue-400/20 to-cyan-500/20 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"></div>
        </div>
      </div>

      {/* Project Info */}
      <div
        className={`space-y-6 ${index % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}
        data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
        suppressHydrationWarning
      >
        {/* Project Tags */}
        <div className="flex items-center justify-center gap-2">
          {project.featured && (
            <span className="inline-block scale-90 rounded-full border border-cyan-800/20 bg-blue-400/10 px-3 py-1 text-sm font-semibold text-cyan-900 md:scale-100 dark:border-green-400/20 dark:bg-green-400/10 dark:text-green-400">
              Featured Project
            </span>
          )}

          {project.unfinished && (
            <span className="inline-flex scale-90 items-center gap-2 rounded-full border border-amber-400/30 bg-amber-500/10 px-3 py-1 text-sm font-semibold text-amber-700 md:scale-100 dark:border-yellow-400/30 dark:bg-yellow-500/10 dark:text-yellow-300">
              Under Construction
            </span>
          )}
        </div>

        <h3 className="text-2xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-blue-700 md:text-3xl dark:text-white dark:group-hover:text-green-400">
          {project.title}
        </h3>

        <p className="text-sm leading-relaxed text-gray-800 md:text-base dark:text-gray-300">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-gray-400 bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700 transition-colors duration-300 hover:border-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-gray-300 dark:hover:border-green-400"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center md:gap-4 lg:justify-start">
          {project.liveDemo && (
            <ActionButton
              link={project.liveDemo}
              label="Live Demo"
              filled
              icon={<ExternalLinkIcon />}
            />
          )}

          {project.sourceCode && (
            <ActionButton
              link={project.sourceCode}
              filled={false}
              label="Source Code"
              icon={<GithubActionButtonIcon />}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
