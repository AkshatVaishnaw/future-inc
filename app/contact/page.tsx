"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ContactForm from "@/components/ContactForm";

const contactDetails = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    label: "Email",
    value: "hello@futureinc.agency",
    href: "mailto:hello@futureinc.agency",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    label: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    label: "Office",
    value: "123 Innovation Drive, San Francisco, CA 94105",
    href: "#",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "Response Time",
    value: "Within 24 hours",
    href: null,
  },
];

const faqs = [
  {
    q: "How quickly can you start?",
    a: "Once we've aligned on strategy and signed the contract, most campaigns and projects kick off within 5-7 business days.",
  },
  {
    q: "What's the minimum engagement?",
    a: "We typically work on 3-month initial engagements to give strategies enough time to prove themselves. After that, we move to month-to-month.",
  },
  {
    q: "Do you work with businesses outside the US?",
    a: "Absolutely. We serve clients in 20+ countries and have experience running campaigns in multiple languages and markets.",
  },
  {
    q: "How do you report results?",
    a: "Every client gets a live dashboard, weekly performance snapshots, and a monthly strategy call to review results and plan next steps.",
  },
];

export default function ContactPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
      <main className="pt-16 flex-1">
        {/* Hero */}
        <section className="py-24 px-6 text-center relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-violet-600/8 blur-[120px]" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative z-10"
          >
            <span className="inline-block px-3 py-1 rounded-full border border-white/10 text-zinc-400 text-sm mb-6">
              Get In Touch
            </span>
            <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-6">
              Let's Build Something{" "}
              <span className="gradient-text">Great Together</span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-xl mx-auto">
              Book a free strategy call or send us a message. We'll get back to
              you within 24 hours with a tailored plan.
            </p>
          </motion.div>
        </section>

        {/* Main Content */}
        <section ref={ref} className="pb-32 px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-12">
            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="glass rounded-2xl p-6">
                <h2 className="text-lg font-semibold text-white mb-5">
                  Contact Details
                </h2>
                <div className="space-y-4">
                  {contactDetails.map((item) => (
                    <div key={item.label} className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-white/[0.06] flex items-center justify-center text-zinc-400 flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <div className="text-xs text-zinc-500 mb-0.5">
                          {item.label}
                        </div>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-sm text-zinc-300 hover:text-white transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <span className="text-sm text-zinc-300">
                            {item.value}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="glass rounded-2xl overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-zinc-900 to-zinc-800 flex items-center justify-center relative">
                  <div className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                      backgroundSize: "20px 20px",
                    }}
                  />
                  <div className="text-center relative z-10">
                    <div className="w-8 h-8 rounded-full bg-violet-500 mx-auto mb-2 flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-xs text-zinc-400">San Francisco, CA</p>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div className="glass rounded-2xl p-6">
                <h2 className="text-lg font-semibold text-white mb-5">
                  Quick Answers
                </h2>
                <div className="space-y-4">
                  {faqs.map((faq) => (
                    <div key={faq.q}>
                      <h3 className="text-sm font-medium text-zinc-300 mb-1.5">
                        {faq.q}
                      </h3>
                      <p className="text-xs text-zinc-500 leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="lg:col-span-3"
            >
              <div className="glass rounded-2xl p-8">
                <h2 className="text-xl font-semibold text-white mb-2">
                  Send Us a Message
                </h2>
                <p className="text-sm text-zinc-500 mb-8">
                  Fill in the form below and we'll respond within 24 hours with
                  a customized growth proposal.
                </p>
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </section>
      </main>
  );
}
