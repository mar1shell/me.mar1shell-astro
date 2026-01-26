/**
 * Validates the contact form data.
 * @param formData - The form data to validate.
 * @param setErrors - The function to call to set validation errors.
 * @returns True if the form is valid, false otherwise.
 */

const validateForm = (
  formData: { name: string; email: string; subject: string; message: string },
  setErrors: React.Dispatch<React.SetStateAction<Record<string, string>>>,
) => {
  const newErrors: Record<string, string> = {};

  if (!formData.name.trim()) {
    newErrors.name = "Name is required";
  }

  if (!formData.email.trim()) {
    newErrors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    newErrors.email = "Please enter a valid email";
  }

  if (!formData.subject.trim()) {
    newErrors.subject = "Subject is required";
  }

  if (!formData.message.trim()) {
    newErrors.message = "Message is required";
  } else if (formData.message.trim().length < 10) {
    newErrors.message = "Message must be at least 10 characters";
  }

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};

export { validateForm };
