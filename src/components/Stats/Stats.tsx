import type { StatsProps } from "../../types";

function Stats({ stat, index }: StatsProps) {
  return (
    <div data-aos="fade-up" data-aos-delay={index * 100}>
      <div
        key={index}
        className="group rounded-2xl p-4 text-center backdrop-blur-sm transition-all duration-300"
      >
        <div
          className={`mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-blue-100 to-cyan-100 transition-transform duration-300 group-hover:scale-110 dark:from-green-900/30 dark:to-emerald-900/30`}
        >
          {stat.icon(`h-6 w-6 ${stat.color}`)}
        </div>
        <div className="mb-1 text-2xl font-bold text-gray-900 sm:text-3xl dark:text-white">
          {stat.value}
        </div>
        <div className="text-sm text-gray-600 dark:text-gray-400">
          {stat.label}
        </div>
      </div>
    </div>
  );
}

export default Stats;
