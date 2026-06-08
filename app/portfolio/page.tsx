"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import CTA from "@/components/CTA";
import Link from "next/link";

const categories = ["All", "Meta Ads", "Google Ads", "SEO", "AI Automation", "Web Dev"];

const projects = [
  {
    id: 1,
    title: "NovaTech SaaS Platform",
    category: "Meta Ads",
    tags: ["Meta Ads", "SEO", "SaaS"],
    image: "/portfolio-1.jpg",
    result: "+340% Revenue in 8 Months",
    industry: "B2B SaaS",
    description:
      "NovaTech was struggling to find product-market fit and scale their MRR beyond $50K. We built a full-funnel Meta Ads system targeting decision-makers with precise behavioral signals, paired with a content moat strategy that drove 200K+ monthly visitors within 8 months.",
    metrics: [
      { label: "Revenue Growth", value: "+340%" },
      { label: "Cost Per Trial", value: "-58%" },
      { label: "Monthly Visitors", value: "200K+" },
      { label: "Trial to Paid", value: "34%" },
    ],
    color: "from-violet-900/50 to-purple-900/30",
  },
  {
    id: 2,
    title: "UrbanEats Delivery App",
    category: "Google Ads",
    tags: ["Google Ads", "CRM", "E-commerce"],
    image: "/portfolio-2.jpg",
    result: "-62% CPA, 3x Order Volume",
    industry: "Food & Delivery",
    description:
      "UrbanEats was burning through their ad budget with a $28 CPA that made unit economics unviable. We rebuilt their entire Google Ads account structure, implemented smart bidding strategies, and launched a CRM automation system that turned one-time customers into repeat buyers.",
    metrics: [
      { label: "CPA Reduction", value: "-62%" },
      { label: "Order Volume", value: "3x" },
      { label: "Customer LTV", value: "+180%" },
      { label: "Repeat Rate", value: "68%" },
    ],
    color: "from-blue-900/50 to-indigo-900/30",
  },
  {
    id: 3,
    title: "LuxeLiving Interior Design",
    category: "Web Dev",
    tags: ["Web Dev", "Content", "SEO"],
    image: "/portfolio-3.jpg",
    result: "+280% Inbound Leads in 90 Days",
    industry: "Interior Design",
    description:
      "LuxeLiving had a beautiful portfolio but a website that was invisible in search and failed to convert visitors. We redesigned their site with conversion optimization principles, launched a targeted SEO content strategy, and built a lead generation funnel that turned browsers into bookings.",
    metrics: [
      { label: "Lead Growth", value: "+280%" },
      { label: "Organic Traffic", value: "+420%" },
      { label: "Page Speed Score", value: "98/100" },
      { label: "Booking Rate", value: "12%" },
    ],
    color: "from-emerald-900/50 to-teal-900/30",
  },
  {
    id: 4,
    title: "MedFlow Clinic Network",
    category: "AI Automation",
    tags: ["AI Automation", "WhatsApp", "CRM"],
    image: "/portfolio-1.jpg",
    result: "30+ hrs/week saved, 40% more bookings",
    industry: "Healthcare",
    description:
      "MedFlow's clinic staff was spending 30+ hours per week on manual patient booking, reminders, and follow-up. We built a comprehensive AI automation system using WhatsApp and email that handles the entire patient journey — from initial inquiry to post-appointment review collection.",
    metrics: [
      { label: "Hours Saved/Week", value: "30+" },
      { label: "Booking Increase", value: "+40%" },
      { label: "No-Show Rate", value: "-65%" },
      { label: "Review Score", value: "4.9/5" },
    ],
    color: "from-amber-900/50 to-orange-900/30",
  },
  {
    id: 5,
    title: "PureVita Supplements",
    category: "Meta Ads",
    tags: ["Meta Ads", "Email", "E-commerce"],
    image: "/portfolio-2.jpg",
    result: "5.8x ROAS, $2M+ Revenue Generated",
    industry: "Health & Wellness",
    description:
      "PureVita wanted to scale from $200K to $2M in annual revenue. We built a systematic Meta Ads acquisition funnel paired with a high-converting email/SMS retention engine. The result: consistent 5.8x ROAS on cold traffic and an email list that generates $40K/month passively.",
    metrics: [
      { label: "ROAS", value: "5.8x" },
      { label: "Annual Revenue", value: "$2M+" },
      { label: "Email Revenue", value: "$40K/mo" },
      { label: "Subscriber LTV", value: "$180" },
    ],
    color: "from-pink-900/50 to-rose-900/30",
  },
  {
    id: 6,
    title: "FinEdge Financial Advisors",
    category: "SEO",
    tags: ["Google Ads", "SEO", "Finance"],
    image: "/portfolio-3.jpg",
    result: "400+ Qualified Leads/Month from Organic",
    industry: "Financial Services",
    description:
      "FinEdge was entirely dependent on referrals with zero digital presence. We built a comprehensive SEO and Google Ads strategy targeting high-net-worth individuals seeking financial planning services. Within 6 months, organic leads surpassed paid, creating a self-sustaining growth engine.",
    metrics: [
      { label: "Organic Leads/Mo", value: "400+" },
      { label: "Keyword Rankings", value: "Top 3" },
      { label: "Organic Traffic", value: "+680%" },
      { label: "Lead Quality Score", value: "9.2/10" },
    ],
    color: "from-cyan-900/50 to-teal-900/30",
  },
];

function ProjectModal({
  project,
  onClose,
}: {
  project: (typeof projects)[0];
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 25 }}
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/10 bg-zinc-900"
        onClick={(e) => e.stopPropagation()}
      >
        <div className={`h-48 bg-gradient-to-br ${project.color} relative`}>
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover opacity-30"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/60 flex items-center justify-center text-white hover:bg-black/80 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-8">
          <div className="flex flex-wrap gap-2 mb-3">
            {project.tags.map((tag) => (
              <span key={tag} className="px-2 py-0.5 rounded text-xs text-zinc-400 bg-white/[0.06] border border-white/[0.06]">
                {tag}
              </span>
            ))}
          </div>
          <h2 className="text-2xl font-bold text-white mb-1">{project.title}</h2>
          <p className="text-sm text-zinc-500 mb-6">{project.industry}</p>
          <p className="text-zinc-400 leading-relaxed mb-8">{project.description}</p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {project.metrics.map((m) => (
              <div key={m.label} className="glass rounded-xl p-4 text-center">
                <div className="text-xl font-bold text-white">{m.value}</div>
                <div className="text-xs text-zinc-500 mt-1">{m.label}</div>
              </div>
            ))}
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-xl hover:bg-zinc-100 transition-colors text-sm"
          >
            Get Similar Results
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.tags.some((t) => t === activeCategory));

  return (
    <>
      <main className="pt-16 flex-1">
        <section className="py-32 px-6 text-center relative overflow-hidden">
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
              Portfolio
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight mb-6">
              Real Results for{" "}
              <span className="gradient-text">Real Businesses</span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Every case study here represents a real business that trusted us
              to drive their growth. The numbers speak for themselves.
            </p>
          </motion.div>
        </section>

        <section ref={ref} className="pb-32 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap justify-center gap-2 mb-12"
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeCategory === cat
                      ? "bg-white text-black"
                      : "border border-white/10 text-zinc-400 hover:text-white hover:border-white/20"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </motion.div>

            <motion.div
              layout
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <AnimatePresence mode="popLayout">
                {filtered.map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ y: -6 }}
                    onClick={() => setSelectedProject(project)}
                    className="group relative rounded-2xl overflow-hidden border border-white/[0.06] cursor-pointer"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color}`} />
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover opacity-40 group-hover:opacity-55 transition-all duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm text-white text-xs font-semibold border border-white/10">
                        {project.result}
                      </div>
                    </div>

                    <div className="relative p-6">
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {project.tags.map((tag) => (
                          <span key={tag} className="px-2 py-0.5 rounded text-xs text-zinc-400 bg-white/[0.06] border border-white/[0.06]">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-1">{project.title}</h3>
                      <p className="text-xs text-zinc-500 mb-3">{project.industry}</p>
                      <p className="text-sm text-zinc-400 leading-relaxed line-clamp-2">
                        {project.description}
                      </p>
                      <div className="mt-4 flex items-center gap-1 text-xs text-zinc-500 group-hover:text-violet-400 transition-colors">
                        View Case Study
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* Case Study Banner */}
        <section className="py-20 px-6 border-y border-white/[0.06] bg-zinc-950/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid sm:grid-cols-4 gap-8 text-center">
              {[
                { value: "$100M+", label: "Managed Ad Spend" },
                { value: "3-8x", label: "Average ROAS" },
                { value: "150+", label: "Success Stories" },
                { value: "20+", label: "Industries Served" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-3xl font-bold text-white mb-1">{s.value}</div>
                  <div className="text-sm text-zinc-500">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTA
          title="Want Results Like These?"
          subtitle="Every business you've seen here started with a free strategy call. Your success story could be next."
        />
      </main>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
