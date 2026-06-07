"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

interface CTAProps {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function CTA({
  title = "Ready to Scale Your Business?",
  subtitle = "Join 150+ companies that trust Future Inc to drive their growth. Book a free strategy call and discover what's possible.",
  primaryLabel = "Book Free Strategy Call",
  primaryHref = "/contact",
  secondaryLabel = "View Our Work",
  secondaryHref = "/portfolio",
}: CTAProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-950/20 via-transparent to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-violet-600/10 blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-sm mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
            Limited Slots Available
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            {title}
          </h2>

          <p className="text-lg text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={primaryHref}
              className="w-full sm:w-auto px-8 py-4 bg-white text-black font-semibold rounded-xl hover:bg-zinc-100 transition-colors duration-200 text-sm"
            >
              {primaryLabel}
            </Link>
            <Link
              href={secondaryHref}
              className="w-full sm:w-auto px-8 py-4 border border-white/10 text-white font-medium rounded-xl hover:bg-white/[0.06] transition-colors duration-200 text-sm"
            >
              {secondaryLabel}
            </Link>
          </div>

          <div className="mt-10 flex items-center justify-center gap-8 text-sm text-zinc-500">
            {["No commitment required", "Response within 24 hours", "Free audit included"].map(
              (item) => (
                <div key={item} className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-emerald-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {item}
                </div>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
