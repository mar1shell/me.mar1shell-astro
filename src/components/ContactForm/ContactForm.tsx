import { AlertCircleIcon, SendIcon } from "../../icons";
import { useState } from "react";
import { validateForm } from "../../utils";
import Toast from "../../components/Toast/Toast";

const emailjs = await import("@emailjs/browser");

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm(formData, setErrors)) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      await emailjs.send(
        import.meta.env.PUBLIC_EMAILJS_SERVICE_ID,
        import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          time: new Date().toLocaleString(),
        },
        import.meta.env.PUBLIC_EMAILJS_PUBLIC_KEY,
      );
      setSubmitStatus("success");
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    } catch (error) {
      setSubmitStatus("error");
      console.log("EmailJS: Failed to send message.", error);
    } finally {
      setIsSubmitting(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <div data-aos="fade-up ">
      {/* Form Card */}
      <div className="w-full min-w-xs overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-xl sm:min-w-sm sm:shadow-2xl lg:p-8 dark:border-slate-700 dark:bg-slate-900">
        <div className="pb-6">
          <h3 className="pb-2 text-xl font-bold text-gray-900 sm:text-2xl dark:text-white">
            Send me a message
          </h3>
          <p className="text-sm text-gray-600 sm:text-base dark:text-gray-400">
            I'll get back to you within 24 hours
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 sm:space-y-6"
          autoComplete=""
        >
          {/* Name & Email Row */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-semibold text-gray-900 dark:text-white"
              >
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={`w-full rounded-lg border-2 bg-gray-50 px-3 py-2.5 text-sm text-gray-900 placeholder-gray-500 transition-all duration-300 focus:ring-2 focus:outline-none sm:rounded-xl sm:px-4 sm:py-3 sm:text-base dark:bg-slate-800 dark:text-white dark:placeholder-gray-400 ${
                  errors.name
                    ? "border-red-400 focus:border-red-500 focus:ring-red-500/20"
                    : "border-gray-300 focus:border-blue-400 focus:ring-blue-400/20 dark:border-slate-600 dark:focus:border-green-400 dark:focus:ring-green-400/20"
                }`}
                placeholder="Your full name"
              />
              {errors.name && (
                <p className="mt-1 flex items-center gap-1 text-xs text-red-500 sm:text-sm">
                  <AlertCircleIcon />
                  <span>{errors.name}</span>
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-gray-900 dark:text-white"
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full rounded-lg border-2 bg-gray-50 px-3 py-2.5 text-sm text-gray-900 placeholder-gray-500 transition-all duration-300 focus:ring-2 focus:outline-none sm:rounded-xl sm:px-4 sm:py-3 sm:text-base dark:bg-slate-800 dark:text-white dark:placeholder-gray-400 ${
                  errors.email
                    ? "border-red-400 focus:border-red-500 focus:ring-red-500/20"
                    : "border-gray-300 focus:border-blue-400 focus:ring-blue-400/20 dark:border-slate-600 dark:focus:border-green-400 dark:focus:ring-green-400/20"
                }`}
                placeholder="your.email@example.com"
              />
              {errors.email && (
                <p className="mt-1 flex items-center gap-1 text-xs text-red-500 sm:text-sm">
                  <AlertCircleIcon />
                  <span>{errors.email}</span>
                </p>
              )}
            </div>
          </div>

          {/* Subject */}
          <div>
            <label
              htmlFor="subject"
              className="mb-2 block text-sm font-semibold text-gray-900 dark:text-white"
            >
              Subject *
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              className={`w-full rounded-lg border-2 bg-gray-50 px-3 py-2.5 text-sm text-gray-900 placeholder-gray-500 transition-all duration-300 focus:ring-2 focus:outline-none sm:rounded-xl sm:px-4 sm:py-3 sm:text-base dark:bg-slate-800 dark:text-white dark:placeholder-gray-400 ${
                errors.subject
                  ? "border-red-400 focus:border-red-500 focus:ring-red-500/20"
                  : "border-gray-300 focus:border-blue-400 focus:ring-blue-400/20 dark:border-slate-600 dark:focus:border-green-400 dark:focus:ring-green-400/20"
              }`}
              placeholder="What's this about?"
            />
            {errors.subject && (
              <p className="mt-1 flex items-center gap-1 text-xs text-red-500 sm:text-sm">
                <AlertCircleIcon />
                <span>{errors.subject}</span>
              </p>
            )}
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-semibold text-gray-900 dark:text-white"
            >
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleInputChange}
              className={`w-full resize-none rounded-lg border-2 bg-gray-50 px-3 py-2.5 text-sm text-gray-900 placeholder-gray-500 transition-all duration-300 focus:ring-2 focus:outline-none sm:rounded-xl sm:px-4 sm:py-3 sm:text-base dark:bg-slate-800 dark:text-white dark:placeholder-gray-400 ${
                errors.message
                  ? "border-red-400 focus:border-red-500 focus:ring-red-500/20"
                  : "border-gray-300 focus:border-blue-400 focus:ring-blue-400/20 dark:border-slate-600 dark:focus:border-green-400 dark:focus:ring-green-400/20"
              }`}
              placeholder="Tell me about your project or just say hello..."
            />
            {errors.message && (
              <p className="mt-1 flex items-center gap-1 text-xs text-red-500 sm:text-sm">
                <AlertCircleIcon />
                <span>{errors.message}</span>
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="group/btn inline-flex w-full cursor-pointer items-center justify-center rounded-full bg-blue-400 px-6 py-3 text-sm font-semibold text-gray-900 transition-all duration-300 hover:scale-105 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-400/25 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100 sm:px-8 sm:py-4 sm:text-base dark:bg-green-400 dark:hover:bg-green-500"
          >
            {isSubmitting ? (
              <>
                <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-gray-900 border-t-transparent sm:h-5 sm:w-5"></div>
                Sending...
              </>
            ) : (
              <>
                <SendIcon />
                Send Message
              </>
            )}
          </button>

          {/* Status Messages */}
          <Toast submitStatus={submitStatus} />
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
