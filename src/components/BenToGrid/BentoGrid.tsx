import { aboutMeData } from "../../data";
import BentoItem from "../BenToItem/BentoItem.tsx";

function BenToGrid() {
  const { description, techStack, interests } = aboutMeData;
  return (
    <div className="grid h-full grid-cols-1 gap-4 md:grid-rows-2 lg:grid-cols-3">
      {/* 1. Bio (Large) */}
      <BentoItem
        customClass="flex flex-col items-center justify-center md:col-span-2 md:row-span-2"
        title="About Me"
      >
        <div className="prose dark:prose-invert">{description}</div>
      </BentoItem>

      {/* 2. Stack (Tall) */}
      <BentoItem customClass="md:col-span-1 md:row-span-1" title="Tech Stack">
        <div className="flex flex-wrap gap-3">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-600 dark:text-blue-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </BentoItem>

      {/* 3. Interests */}
      <BentoItem
        customClass="group relative overflow-hidden md:col-span-1 md:row-span-1"
        title="Interests"
      >
        <div className="absolute inset-0 bg-linear-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

        <div className="flex h-full w-full flex-col justify-center gap-4">
          {interests.map((interest) => (
            <div
              key={interest.title}
              className="flex items-center gap-3 text-gray-700 dark:text-gray-300"
            >
              {interest.icon}
              <span className="font-medium">{interest.title}</span>
            </div>
          ))}
        </div>
      </BentoItem>
    </div>
  );
}
export default BenToGrid;
