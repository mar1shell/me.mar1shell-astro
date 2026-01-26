import {
  AwardIcon,
  CalendarIcon,
  ChevronRightIcon,
  ExternalLinkIcon,
  MapPinIcon,
  UsersIcon,
} from "../../icons";
import type { ExperienceCardProps } from "../../types";
import FloatingTechnologiesBadge from "../FloatingTechnologiesBadge/FloatingTechnologiesBadge";
import ActionButton from "../ActionButton/ActionButton";
import TechnologiesModal from "../TechnologiesModal/TechnologiesModal";
import { useState } from "react";
import useNoScrollEffect from "../../hooks/useNoScrollEffect/useNoScrollEffect";

function ExperienceCard({ experience, index }: ExperienceCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  useNoScrollEffect(isModalOpen);

  return (
    <>
      <div
        key={index}
        className={`group relative items-center gap-16 lg:grid lg:grid-cols-2 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
      >
        {/* Experience Visual */}
        <div
          className={`relative mb-8 lg:mb-0 ${index % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}
          data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
        >
          <div className="relative transition-transform duration-500 group-hover:scale-105">
            {/* Main Card */}
            <div className="relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-2xl dark:border-slate-700 dark:bg-slate-900">
              <div className="p-8">
                {/* Company Logo & Header */}
                <div className="mb-6 flex items-center gap-4">
                  <div className="relative">
                    <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl bg-gray-100 p-1 dark:bg-slate-800">
                      <img
                        src={experience.logo}
                        alt={`${experience.company} logo`}
                        width="40"
                        height="40"
                        className="object-contain"
                      />
                    </div>
                    {experience.current && (
                      <div className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-green-500">
                        <div className="h-2 w-2 animate-pulse rounded-full bg-white"></div>
                      </div>
                    )}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                      {experience.company}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {experience.type}
                    </p>
                  </div>
                </div>

                {/* Duration & Location */}
                <div className="mb-4 flex flex-col gap-2 text-xs text-gray-600 md:text-sm dark:text-gray-400">
                  <div className="flex items-center gap-1">
                    <CalendarIcon />
                    <span>{experience.period}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPinIcon />
                    <span>{experience.location}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Technologies Badge */}
            <FloatingTechnologiesBadge
              technologies={experience.skills}
              setIsModalOpen={setIsModalOpen}
            />

            {/* Glow Effect */}
            <div className="absolute inset-0 -z-10 rounded-xl bg-linear-to-r from-blue-400/20 to-cyan-500/20 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100 dark:from-green-400/20 dark:to-emerald-500/20"></div>

            {/* Outline Effect */}
            <div className="absolute inset-0 -z-10 rounded-xl border-2 border-blue-400/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:border-green-400/30"></div>
          </div>
        </div>

        {/* Experience Details */}
        <div
          className={`space-y-6 ${index % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}
          data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
        >
          {/* Badges */}
          <div className="flex flex-wrap gap-3">
            {experience.featured && (
              <span className="inline-block rounded-full border border-cyan-800/20 bg-blue-400/10 px-3 py-1 text-sm font-medium text-cyan-800 dark:border-green-400/20 dark:bg-green-400/10 dark:text-green-400">
                Featured Experience
              </span>
            )}
            {experience.current && (
              <span className="inline-flex items-center gap-2 rounded-full border border-green-800/30 bg-green-500/10 px-3 py-1 text-sm font-medium text-green-800 dark:border-green-400/30 dark:bg-green-500/10 dark:text-green-400">
                <div className="h-2 w-2 animate-pulse rounded-full bg-green-500"></div>
                Current
              </span>
            )}
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-blue-700 md:text-3xl dark:text-white dark:group-hover:text-green-400">
            {experience.title}
          </h3>

          {/* Description */}
          <p className="text-sm leading-relaxed text-gray-800 md:text-base dark:text-gray-300">
            {experience.description}
          </p>

          {/* All Achievements */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <AwardIcon />
              <span className="font-semibold text-gray-900 dark:text-white">
                Key Achievements
              </span>
            </div>
            <ul className="space-y-3">
              {experience.achievements.map((achievement, achIndex) => (
                <li key={achIndex} className="flex items-start gap-3">
                  <ChevronRightIcon />
                  <span className="text-sm text-gray-800 md:text-base dark:text-gray-300">
                    {achievement}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center pt-4 md:gap-4 lg:justify-start">
            {experience.detailsLink !== "" && (
              <ActionButton
                filled
                label="View Details"
                icon={<ExternalLinkIcon />}
                link={experience.detailsLink}
              />
            )}
            {experience.connectLink !== "" && (
              <ActionButton
                filled={false}
                icon={UsersIcon()}
                label="connect"
                link={experience.connectLink}
              />
            )}
          </div>
        </div>
      </div>

      <TechnologiesModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        technologies={experience.skills}
        companyName={experience.company}
      />
    </>
  );
}

export default ExperienceCard;
