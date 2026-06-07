"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    quote:
      "Future Inc completely transformed our lead generation. Within 90 days of starting with them, we were generating 3x the qualified leads at half the cost. Their Meta Ads team is genuinely world-class.",
    name: "Sarah Mitchell",
    role: "CEO, NovaTech Solutions",
    avatar: "SM",
    rating: 5,
    metric: "3x leads in 90 days",
  },
  {
    quote:
      "The AI automation systems they built for us saved us over 40 hours of manual work every single week. That's time we reinvested into product development. ROI was clear within the first month.",
    name: "James Rodriguez",
    role: "COO, MedFlow Clinics",
    avatar: "JR",
    rating: 5,
    metric: "40hrs/week saved",
  },
  {
    quote:
      "We'd worked with three agencies before Future Inc. None of them came close to the transparency and results these guys deliver. Our Google Ads CPA dropped by 62% in the first quarter.",
    name: "Emma Chen",
    role: "Marketing Director, UrbanEats",
    avatar: "EC",
    rating: 5,
    metric: "-62% CPA",
  },
  {
    quote:
      "The website they built for us is not just beautiful — it converts. Our inbound leads increased 280% in the first three months after launch. The content strategy they developed has been game-changing.",
    name: "David Okonkwo",
    role: "Founder, LuxeLiving Interiors",
    avatar: "DO",
    rating: 5,
    metric: "+280% leads",
  },
  {
    quote:
      "Future Inc's SEO team got us to page one for our most competitive keywords in under six months. We're now getting 400+ organic inquiries per month. The compounding effect is incredible.",
    name: "Priya Sharma",
    role: "Director, FinEdge Advisors",
    avatar: "PS",
    rating: 5,
    metric: "400+ organic leads/mo",
  },
  {
    quote:
      "The WhatsApp automation campaign they ran for our product launch generated more revenue in 48 hours than we'd made in the entire previous month. These guys know how to execute.",
    name: "Marcus Thompson",
    role: "Founder, PureVita Supplements",
    avatar: "MT",
    rating: 5,
    metric: "Best launch ever",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 rounded-full border border-white/10 text-zinc-400 text-sm mb-4">
              Client Love
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Don't Take Our Word for It
            </h2>
            <p className="text-lg text-zinc-400 max-w-xl mx-auto">
              Real words from real clients who've experienced the Future Inc difference.
            </p>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass rounded-2xl p-6 hover:bg-white/[0.05] transition-colors flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <Stars count={t.rating} />
                <span className="text-xs text-emerald-400 font-medium px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                  {t.metric}
                </span>
              </div>
              <p className="text-zinc-300 text-sm leading-relaxed flex-1 mb-6">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{t.name}</div>
                  <div className="text-xs text-zinc-500">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
