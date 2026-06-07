"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}

interface Errors {
  [key: string]: string;
}

const services = [
  "AI Automation",
  "Meta Ads",
  "Google Ads",
  "SEO",
  "Website Development",
  "CRM Automation",
  "WhatsApp Automation",
  "Content Marketing",
  "Full Growth Package",
];

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle"
  );

  const validate = (): boolean => {
    const newErrors: Errors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    if (formData.message.trim().length < 20)
      newErrors.message = "Please provide more detail (min 20 characters)";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("submitting");
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("success");
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-16"
      >
        <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-8 h-8 text-emerald-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">
          Message Received!
        </h3>
        <p className="text-zinc-400 max-w-md mx-auto">
          Thanks for reaching out. Our team will review your message and get
          back to you within 24 hours with a tailored proposal.
        </p>
        <button
          onClick={() => {
            setStatus("idle");
            setFormData({
              name: "",
              email: "",
              phone: "",
              company: "",
              service: "",
              message: "",
            });
          }}
          className="mt-8 px-6 py-3 border border-white/10 text-white rounded-xl hover:bg-white/[0.06] transition-colors text-sm"
        >
          Send Another Message
        </button>
      </motion.div>
    );
  }

  const inputClass = (field: string) =>
    `w-full px-4 py-3 rounded-xl bg-white/[0.04] border text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:ring-1 transition-colors ${
      errors[field]
        ? "border-red-500/50 focus:ring-red-500/50"
        : "border-white/[0.08] focus:border-white/20 focus:ring-white/20"
    }`;

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-zinc-300 mb-1.5">
            Full Name <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Smith"
            className={inputClass("name")}
          />
          {errors.name && (
            <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-zinc-300 mb-1.5">
            Email Address <span className="text-red-400">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@company.com"
            className={inputClass("email")}
          />
          {errors.email && (
            <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>
          )}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-zinc-300 mb-1.5">
            Phone Number <span className="text-red-400">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+1 (555) 000-0000"
            className={inputClass("phone")}
          />
          {errors.phone && (
            <p className="mt-1.5 text-xs text-red-400">{errors.phone}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-zinc-300 mb-1.5">
            Company Name
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Acme Inc"
            className={inputClass("company")}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-zinc-300 mb-1.5">
          Service Interested In
        </label>
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          className={`${inputClass("service")} appearance-none cursor-pointer`}
        >
          <option value="" disabled>
            Select a service...
          </option>
          {services.map((s) => (
            <option key={s} value={s} className="bg-zinc-900">
              {s}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-zinc-300 mb-1.5">
          Tell Us About Your Goals <span className="text-red-400">*</span>
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Describe your business, current challenges, and what you're hoping to achieve..."
          rows={5}
          className={`${inputClass("message")} resize-none`}
        />
        {errors.message && (
          <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>
        )}
      </div>

      <motion.button
        type="submit"
        disabled={status === "submitting"}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full py-4 bg-white text-black font-semibold rounded-xl hover:bg-zinc-100 transition-colors text-sm disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {status === "submitting" ? (
          <>
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </motion.button>

      <p className="text-xs text-zinc-600 text-center">
        We respond within 24 hours. No spam, ever.
      </p>
    </form>
  );
}
