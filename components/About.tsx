"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const values = [
  {
    icon: "⚡",
    title: "Results-First",
    description: "Every decision we make is driven by data and measurable outcomes. Vanity metrics don't pay bills — results do.",
  },
  {
    icon: "🔬",
    title: "Relentlessly Innovative",
    description: "We stay ahead of the curve by investing in AI, new channels, and emerging technologies before they become mainstream.",
  },
  {
    icon: "🤝",
    title: "Radical Transparency",
    description: "No hidden fees, no vague reports. You always know exactly what we're doing, why, and what it's generating for you.",
  },
  {
    icon: "🚀",
    title: "Speed to Market",
    description: "We move fast without breaking things. Campaigns live in days, not months. Websites launch in weeks, not quarters.",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-6 bg-zinc-950/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-3 py-1 rounded-full border border-white/10 text-zinc-400 text-sm mb-4">
              About Future Inc
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              We're Not Just an Agency — We're Your Growth Partner
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-6">
              Founded in 2020, Future Inc was built on a simple belief: businesses
              deserve marketing partners who are obsessed with results, not just
              activity. We've helped over 150 companies — from ambitious startups to
              established enterprises — build scalable growth engines.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-8">
              Our team combines deep expertise in AI, paid media, SEO, and
              technology to deliver integrated marketing systems that compound over
              time. We don't do fragmented campaigns — we build ecosystems that
              work together to maximize your revenue.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/about"
                className="px-6 py-3 bg-white text-black font-semibold rounded-xl hover:bg-zinc-100 transition-colors text-sm text-center"
              >
                Our Full Story
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 border border-white/10 text-white font-medium rounded-xl hover:bg-white/[0.06] transition-colors text-sm text-center"
              >
                Work With Us
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/[0.06] bg-gradient-to-br from-violet-950/30 to-blue-950/30 p-8 aspect-square flex flex-col justify-end">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-blue-600/10" />
              <div className="absolute top-8 left-8 right-8">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Founded", value: "2020" },
                    { label: "Team Size", value: "35+" },
                    { label: "Avg. Revenue Lift", value: "3.2x" },
                    { label: "NPS Score", value: "78" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="glass rounded-xl p-4"
                    >
                      <div className="text-2xl font-bold text-white">
                        {item.value}
                      </div>
                      <div className="text-xs text-zinc-500 mt-0.5">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative mt-auto pt-48">
                <p className="text-zinc-400 text-sm italic">
                  "Our mission is to be the last marketing agency you'll ever
                  need — because our results speak for themselves."
                </p>
                <div className="mt-3 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-blue-500" />
                  <div>
                    <div className="text-sm font-medium text-white">
                      Alex Carter
                    </div>
                    <div className="text-xs text-zinc-500">
                      CEO & Founder, Future Inc
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="glass rounded-2xl p-6 hover:bg-white/[0.06] transition-colors"
            >
              <div className="text-2xl mb-3">{v.icon}</div>
              <h3 className="text-base font-semibold text-white mb-2">
                {v.title}
              </h3>
              <p className="text-sm text-zinc-500 leading-relaxed">
                {v.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
