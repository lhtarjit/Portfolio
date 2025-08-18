import React, { useState } from "react";
import { motion } from "framer-motion";
import { resumeData } from "../data";
import { leftVariants, rightVariants, isValidEmail } from "../utils";
import emailjs from "emailjs-com";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    number: "",
    reason: "Freelance Work",
    customReason: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState(false);
  const [loading, setLoading] = useState(false);
  const [shake, setShake] = useState(false); // 👈 for button jump

  // Validation logic
  const validate = (fieldValues = form) => {
    let temp = { ...errors };

    if ("name" in fieldValues)
      temp.name = fieldValues.name.trim() ? "" : "Name is required.";

    if ("email" in fieldValues)
      temp.email = isValidEmail(fieldValues.email)
        ? ""
        : "Please enter a valid email address.";

    if ("number" in fieldValues) {
      if (!fieldValues.number.trim()) {
        temp.number = "Phone number is required.";
      } else if (!/^[0-9]{10,15}$/.test(fieldValues.number)) {
        temp.number = "Enter a valid phone number (10–15 digits).";
      } else {
        temp.number = "";
      }
    }

    if ("message" in fieldValues)
      temp.message = fieldValues.message.trim()
        ? ""
        : "Message cannot be empty.";

    if ("reason" in fieldValues && fieldValues.reason === "Custom") {
      temp.customReason = fieldValues.customReason.trim()
        ? ""
        : "Please provide a custom reason.";
    }

    setErrors({ ...temp });
    return Object.values(temp).every((x) => x === "");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    if (touched) validate({ [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched(true);

    if (!validate()) {
      // 👇 trigger jump if invalid
      setShake(true);
      setTimeout(() => setShake(false), 400); // reset after animation
      return;
    }

    setLoading(true);

    const finalReason =
      form.reason === "Custom" ? form.customReason : form.reason;

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          phone: form.number,
          reason: finalReason,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          setForm({
            name: "",
            email: "",
            number: "",
            reason: "Freelance Work",
            customReason: "",
            message: "",
          });
          setErrors({});
          setTouched(false);
        },
        (error) => {
          alert("❌ Failed to send. Please try again later.");
          console.error(error);
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <section className="mx-auto max-w-5xl px-6 sm:px-8 py-16">
      <h2 className="text-3xl font-bold mb-6 text-zinc-900 dark:text-zinc-50">
        Contact
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Side */}
        <motion.div
          variants={leftVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.3 }}
        >
          <div className="rounded-2xl bg-white dark:bg-zinc-900 p-6 shadow-md ring-1 ring-zinc-200/60 dark:ring-zinc-800/60">
            <h3 className="font-semibold text-lg">Get in touch</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-300 mt-2">
              Fill out the form and it’ll send me an email directly. Or you can
              email me at:
            </p>
            <div className="mt-4">
              <a
                href={`mailto:${resumeData.contacts.email}`}
                className="text-accent hover:underline"
              >
                {resumeData.contacts.email}
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Side (Form) */}
        <motion.div
          variants={rightVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.3 }}
        >
          <div className="rounded-2xl bg-white dark:bg-zinc-900 p-6 shadow-md ring-1 ring-zinc-200/60 dark:ring-zinc-800/60">
            <form className="grid gap-3" onSubmit={handleSubmit}>
              {/* Name */}
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className={`rounded-lg border px-3 py-2 bg-transparent outline-none ${
                  errors.name
                    ? "border-red-500 focus:ring-red-500"
                    : "border-zinc-200 dark:border-zinc-800 focus:ring-2 focus:ring-accent"
                }`}
              />
              {errors.name && (
                <p className="text-sm text-red-500">{errors.name}</p>
              )}

              {/* Email */}
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                className={`rounded-lg border px-3 py-2 bg-transparent outline-none ${
                  errors.email
                    ? "border-red-500 focus:ring-red-500"
                    : "border-zinc-200 dark:border-zinc-800 focus:ring-2 focus:ring-accent"
                }`}
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email}</p>
              )}

              {/* Phone */}
              <input
                name="number"
                value={form.number}
                onChange={handleChange}
                placeholder="Phone number"
                className={`rounded-lg border px-3 py-2 bg-transparent outline-none ${
                  errors.number
                    ? "border-red-500 focus:ring-red-500"
                    : "border-zinc-200 dark:border-zinc-800 focus:ring-2 focus:ring-accent"
                }`}
              />
              {errors.number && (
                <p className="text-sm text-red-500">{errors.number}</p>
              )}

              {/* Reason Dropdown */}
              <select
                name="reason"
                value={form.reason}
                onChange={handleChange}
                className="rounded-lg border border-zinc-200 dark:border-zinc-800 px-3 py-2 bg-transparent outline-none focus:ring-2 focus:ring-accent"
              >
                <option value="Hiring">Looking to Hire</option>
                <option value="Freelance Work">Freelance Work</option>
                <option value="Custom">Custom</option>
              </select>

              {/* Custom Reason Input */}
              {form.reason === "Custom" && (
                <>
                  <input
                    name="customReason"
                    value={form.customReason}
                    onChange={handleChange}
                    placeholder="Enter custom reason"
                    className={`rounded-lg border px-3 py-2 bg-transparent outline-none ${
                      errors.customReason
                        ? "border-red-500 focus:ring-red-500"
                        : "border-zinc-200 dark:border-zinc-800 focus:ring-2 focus:ring-accent"
                    }`}
                  />
                  {errors.customReason && (
                    <p className="text-sm text-red-500">
                      {errors.customReason}
                    </p>
                  )}
                </>
              )}

              {/* Message */}
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Message"
                className={`rounded-lg border px-3 py-2 bg-transparent min-h-[140px] outline-none ${
                  errors.message
                    ? "border-red-500 focus:ring-red-500"
                    : "border-zinc-200 dark:border-zinc-800 focus:ring-2 focus:ring-accent"
                }`}
              ></textarea>
              {errors.message && (
                <p className="text-sm text-red-500">{errors.message}</p>
              )}

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={loading}
                animate={
                  shake
                    ? {
                        x: [0, -20, 20, -15, 15, -10, 10, 0], // 👈 playful jump
                        y: [0, -5, 5, -3, 3, 0], // small vertical bounce
                      }
                    : { x: 0, y: 0 }
                }
                transition={{ duration: 0.4 }}
                className="inline-flex justify-center items-center gap-2 px-5 py-3 rounded-full bg-accent text-white w-[120px] hover:bg-blue-600 transition disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send"}
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
