"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "NovaTech SaaS Platform",
    category: "Meta Ads + SEO",
    description:
      "Scaled a B2B SaaS from $50K to $500K MRR in 8 months through full-funnel Meta campaigns and a content moat strategy driving 200K+ monthly visitors.",
    result: "+340% Revenue",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
    tags: ["Meta Ads", "SEO", "SaaS"],
    color: "from-violet-900/50 to-purple-900/30",
  },
  {
    id: 2,
    title: "UrbanEats Delivery",
    category: "Google Ads + CRM",
    description:
      "Rebuilt Google Ads architecture and launched a CRM retention engine that tripled order volume while cutting cost per acquisition by 62%.",
    result: "-62% CPA",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&auto=format&fit=crop&q=80",
    tags: ["Google Ads", "CRM", "E-commerce"],
    color: "from-orange-900/50 to-red-900/30",
  },
  {
    id: 3,
    title: "LuxeLiving Interiors",
    category: "Web Dev + Content",
    description:
      "Redesigned their site and launched an SEO content strategy that drove +420% organic traffic and increased inbound design project leads by 280% in 90 days.",
    result: "+280% Leads",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop&q=80",
    tags: ["Web Dev", "Content", "SEO"],
    color: "from-emerald-900/50 to-teal-900/30",
  },
  {
    id: 4,
    title: "MedFlow Clinics",
    category: "AI Automation + WhatsApp",
    description:
      "Deployed AI-powered WhatsApp automation for patient booking and follow-up, saving 30+ admin hours weekly and increasing appointment fill rate by 40%.",
    result: "30hrs/week saved",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80",
    tags: ["AI Automation", "WhatsApp", "CRM"],
    color: "from-blue-900/50 to-cyan-900/30",
  },
  {
    id: 5,
    title: "PureVita Supplements",
    category: "Meta Ads + Email",
    description:
      "Built a systematic cold-traffic acquisition funnel paired with an email/SMS retention engine that consistently delivers 5.8x ROAS and $40K/mo in passive email revenue.",
    result: "5.8x ROAS",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&auto=format&fit=crop&q=80",
    tags: ["Meta Ads", "Email", "E-commerce"],
    color: "from-pink-900/50 to-rose-900/30",
  },
  {
    id: 6,
    title: "FinEdge Advisors",
    category: "Google Ads + SEO",
    description:
      "Built a dominant search presence for high-net-worth financial planning keywords, generating 400+ qualified organic leads monthly with a 9.2/10 lead quality score.",
    result: "400+ leads/mo",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format&fit=crop&q=80",
    tags: ["Google Ads", "SEO", "Finance"],
    color: "from-amber-900/50 to-yellow-900/30",
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
                className={`absolute inset-0 bg-gradient-to-br ${project.color} transition-opacity duration-300 group-hover:opacity-90`}
              />

              <div className="relative h-52 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover opacity-50 group-hover:opacity-65 transition-all duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-sm text-white text-xs font-semibold border border-white/10">
                  {project.result}
                </div>
              </div>

              <div className="relative p-6">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-xs text-zinc-300 bg-white/[0.08] border border-white/[0.08]"
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
