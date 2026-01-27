function ActionButton({
  link,
  filled,
  icon,
  label,
}: {
  link: string;
  filled: boolean;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="cursor-pointer"
    >
      <button
        className={` ${filled ? "interactive cursor-pointer bg-blue-400 hover:shadow-blue-400/25 dark:bg-green-400" : "gap-2 border-2 border-blue-700 bg-white/80 text-blue-700 backdrop-blur-sm hover:bg-blue-600 hover:text-white dark:border-green-400 dark:bg-transparent dark:text-green-400"} group/btn inline-flex scale-90 items-center rounded-full p-4 font-semibold transition-all duration-300 hover:scale-105 hover:bg-blue-600 hover:shadow-lg md:scale-100 dark:hover:bg-green-500`}
      >
        {icon}
        <span className="text-xm cursor-pointer">{label}</span>
      </button>
    </a>
  );
}

export default ActionButton;
