"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "NovaTech SaaS",
    category: "Meta Ads + SEO",
    description: "Scaled a B2B SaaS from $0 to $500K ARR in 8 months through targeted Meta campaigns and SEO.",
    result: "+340% Revenue",
    image: "/portfolio-1.jpg",
    tags: ["Meta Ads", "SEO", "SaaS"],
    color: "from-violet-900/40 to-purple-900/20",
  },
  {
    id: 2,
    title: "UrbanEats Delivery",
    category: "Google Ads + CRM",
    description: "Reduced cost per acquisition by 62% while tripling order volume for a food delivery startup.",
    result: "-62% CPA",
    image: "/portfolio-2.jpg",
    tags: ["Google Ads", "CRM", "E-commerce"],
    color: "from-blue-900/40 to-indigo-900/20",
  },
  {
    id: 3,
    title: "LuxeLiving Interiors",
    category: "Website + Content",
    description: "Redesigned website and content strategy that increased inbound leads by 280% in 90 days.",
    result: "+280% Leads",
    image: "/portfolio-3.jpg",
    tags: ["Web Dev", "Content", "SEO"],
    color: "from-emerald-900/40 to-teal-900/20",
  },
  {
    id: 4,
    title: "MedFlow Clinics",
    category: "AI Automation + WhatsApp",
    description: "Automated patient booking and follow-up via WhatsApp AI, saving 30 hours/week in admin time.",
    result: "30hrs/week saved",
    image: "/portfolio-1.jpg",
    tags: ["AI", "WhatsApp", "Automation"],
    color: "from-amber-900/40 to-orange-900/20",
  },
  {
    id: 5,
    title: "PureVita Supplements",
    category: "Meta Ads + Email",
    description: "Built a full-funnel acquisition and retention system delivering 5.8x ROAS for an e-commerce brand.",
    result: "5.8x ROAS",
    image: "/portfolio-2.jpg",
    tags: ["Meta Ads", "Email", "E-commerce"],
    color: "from-pink-900/40 to-rose-900/20",
  },
  {
    id: 6,
    title: "FinEdge Advisors",
    category: "Google Ads + SEO",
    description: "Generated 400+ qualified financial planning leads per month through Search + Local SEO.",
    result: "400+ leads/mo",
    image: "/portfolio-3.jpg",
    tags: ["Google Ads", "SEO", "Finance"],
    color: "from-cyan-900/40 to-teal-900/20",
  },
];

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-32 px-6 bg-zinc-950/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 rounded-full border border-white/10 text-zinc-400 text-sm mb-4">
              Our Work
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Results That Speak for Themselves
            </h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              Real campaigns. Real numbers. Real growth for businesses like yours.
            </p>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl overflow-hidden border border-white/[0.06] cursor-pointer"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.color} transition-opacity duration-300 group-hover:opacity-80`}
              />

              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover opacity-40 group-hover:opacity-50 transition-all duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm text-white text-xs font-semibold border border-white/10">
                  {project.result}
                </div>
              </div>

              <div className="relative p-6">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-xs text-zinc-400 bg-white/[0.06] border border-white/[0.06]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">
                  {project.title}
                </h3>
                <p className="text-xs text-zinc-500 mb-3">{project.category}</p>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 text-white rounded-xl hover:bg-white/[0.06] transition-colors text-sm font-medium"
          >
            View All Case Studies
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
