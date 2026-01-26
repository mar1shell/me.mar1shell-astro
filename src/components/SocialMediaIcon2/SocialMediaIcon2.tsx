import type { SocialLink } from "../../types";

function SocialMediaIcon2({
  social,
  index,
}: {
  social: SocialLink;
  index: number;
}) {
  return (
    <div data-aos="fade-up" data-aos-delay={index * 100} className="flex">
      <a
        href={social.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`group relative rounded-2xl border border-gray-200/50 bg-white/70 p-4 text-gray-600 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:rotate-3 active:scale-95 dark:border-slate-700/50 dark:bg-slate-800/70 dark:text-gray-400 ${social.color} ${social.bgColor}`}
      >
        <social.icon />
        <span className="sr-only">{social.label}</span>

        {/* Tooltip */}
        <div className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 transform rounded-lg bg-gray-900 px-3 py-1 text-xs text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:bg-white dark:text-gray-900">
          {social.label}
        </div>
      </a>
    </div>
  );
}

export default SocialMediaIcon2;
