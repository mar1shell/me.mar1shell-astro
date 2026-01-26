import { AnimatePresence, motion } from "motion/react";
import { CloseIcon, CodeIcon } from "../../icons";
import type { TechnologiesModalProps } from "../../types";

function TechnologiesModal({
  isOpen,
  onClose,
  technologies,
  companyName,
}: TechnologiesModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-2000 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative max-h-[80vh] w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl dark:bg-slate-900"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-gray-200 p-6 dark:border-slate-700">
              <div className="flex items-center gap-3">
                {CodeIcon()}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Technologies at {companyName}
                </h3>
              </div>
              <button
                onClick={onClose}
                className="cursor-pointer rounded-full p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-slate-800 dark:hover:text-gray-300"
              >
                <CloseIcon />
              </button>
            </div>

            {/* Content */}
            <div className="max-h-96 overflow-y-auto p-6">
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="group relative overflow-hidden rounded-lg border border-gray-200 bg-gray-50 p-4 transition-all duration-300 hover:border-blue-400 hover:shadow-md dark:border-slate-700 dark:bg-slate-800 dark:hover:border-green-400"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-gray-900 dark:text-white">
                        {tech}
                      </span>
                      <div className="h-2 w-2 rounded-full bg-blue-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:bg-green-400"></div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400/5 to-cyan-400/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-green-400/5 dark:to-emerald-400/5"></div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-gray-200 p-6 dark:border-slate-700">
              <div className="text-center text-sm text-gray-600 dark:text-gray-400">
                {technologies.length} technologies used
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default TechnologiesModal;
