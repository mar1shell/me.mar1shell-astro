import type { TerminalTemplateProps } from "../../types";

function TerminalTemplate({ username, command, bio }: TerminalTemplateProps) {
  return (
    <div
      data-aos="fade-up"
      className="interactive mx-auto overflow-hidden rounded-lg bg-gray-800 font-mono shadow-2xl dark:bg-gray-200"
    >
      {/* Terminal Header */}
      <div className="flex items-center space-x-2 bg-gray-600 px-4 py-3 dark:bg-gray-400">
        <div className="h-3 w-3 rounded-full bg-red-500"></div>
        <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
        <div className="h-3 w-3 rounded-full bg-green-500"></div>
      </div>

      {/* Terminal Content */}
      <div className="bg-gray-800 p-6 font-mono leading-relaxed text-green-400 dark:bg-gray-300 dark:text-gray-700">
        {/* Command Line */}
        <div className="mb-4">
          <span className="font-semibold text-cyan-400 dark:text-blue-600">
            {username} ${" "}
          </span>
          <span className="text-sm text-white md:text-base dark:text-gray-800">
            {command}
          </span>
        </div>

        {/* Bio Content */}
        <div className="text-green-400 dark:text-gray-800">
          <span className="font-semibold text-cyan-400 dark:text-blue-600">
            {command} (main) ${" "}
          </span>

          <span className="text-sm text-white md:text-base dark:text-gray-800">
            {bio}
          </span>
        </div>
      </div>
    </div>
  );
}

export default TerminalTemplate;
