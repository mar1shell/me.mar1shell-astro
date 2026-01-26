import type { ReactNode } from "react";

interface BentoItemProps {
  children: ReactNode;
  customClass?: string;
  title?: string;
}

function BentoItem({ children, customClass = "", title }: BentoItemProps) {
  return (
    <div
      className={`relative rounded-2xl border border-black/5 bg-white/5 p-6 shadow-lg backdrop-blur-md transition-all hover:bg-gray-100 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10 ${customClass} duration-300`}
      data-aos="fade-up"
    >
      {title && (
        <h3 className="mb-3 text-xs font-bold tracking-widest text-gray-500 uppercase dark:text-gray-400">
          {title}
        </h3>
      )}
      {children}
    </div>
  );
}

export default BentoItem;
