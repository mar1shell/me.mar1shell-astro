import { AlertCircleIcon, CheckCircleIcon } from "../../icons";

function Toast({
  submitStatus,
}: {
  submitStatus: "idle" | "success" | "error";
}) {
  return (
    <>
      {submitStatus === "success" && (
        <div className="flex items-start gap-2 rounded-lg bg-green-100 p-3 text-green-800 sm:rounded-xl sm:p-4 dark:bg-green-900/30 dark:text-green-400">
          <CheckCircleIcon />
          <span className="text-xs sm:text-sm">
            Message sent successfully! I'll get back to you soon.
          </span>
        </div>
      )}
      {submitStatus === "error" && (
        <div className="flex items-start gap-2 rounded-lg bg-red-100 p-3 text-red-800 sm:rounded-xl sm:p-4 dark:bg-red-900/30 dark:text-red-400">
          <AlertCircleIcon />
          <span className="text-xs sm:text-sm">
            Failed to send message. Please try again or contact me directly.
          </span>
        </div>
      )}{" "}
    </>
  );
}

export default Toast;
