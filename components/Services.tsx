"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const services = [
  {
    icon: "🤖",
    title: "AI Automation",
    description:
      "Eliminate repetitive tasks and streamline operations with intelligent AI workflows, chatbots, and automation pipelines tailored to your business.",
    benefits: ["Save 40+ hours/week", "24/7 operation", "Error-free processes"],
    color: "from-violet-500/10 to-purple-500/5",
    border: "border-violet-500/20",
  },
  {
    icon: "📱",
    title: "Meta Ads",
    description:
      "Data-driven Facebook and Instagram advertising campaigns that target your ideal customers and convert them into paying clients at scale.",
    benefits: ["3-8x ROAS average", "Precise targeting", "Creative testing"],
    color: "from-blue-500/10 to-indigo-500/5",
    border: "border-blue-500/20",
  },
  {
    icon: "🎯",
    title: "Google Ads",
    description:
      "Capture high-intent buyers at the exact moment they search for your products or services with expertly managed Search, Display, and Shopping campaigns.",
    benefits: ["Top SERP placement", "Intent-based targeting", "Negative KW management"],
    color: "from-emerald-500/10 to-green-500/5",
    border: "border-emerald-500/20",
  },
  {
    icon: "📈",
    title: "SEO",
    description:
      "Build lasting organic growth with technical SEO, strategic content creation, and authority link building that drives qualified traffic to your site.",
    benefits: ["Long-term traffic", "Brand authority", "Zero ad spend"],
    color: "from-amber-500/10 to-orange-500/5",
    border: "border-amber-500/20",
  },
  {
    icon: "💻",
    title: "Website Development",
    description:
      "High-converting, blazing-fast websites and landing pages built with modern technology that turn visitors into customers.",
    benefits: ["Conversion optimized", "Mobile-first", "Lightning fast"],
    color: "from-pink-500/10 to-rose-500/5",
    border: "border-pink-500/20",
  },
  {
    icon: "⚙️",
    title: "CRM Automation",
    description:
      "Set up and automate your customer relationship management to nurture leads, close deals faster, and retain clients with zero manual effort.",
    benefits: ["Lead nurture flows", "Pipeline automation", "Revenue tracking"],
    color: "from-cyan-500/10 to-teal-500/5",
    border: "border-cyan-500/20",
  },
  {
    icon: "💬",
    title: "WhatsApp Automation",
    description:
      "Engage customers on the world's most popular messaging platform with automated sequences, broadcast campaigns, and AI-powered chatbots.",
    benefits: ["98% open rates", "Instant engagement", "Global reach"],
    color: "from-green-500/10 to-emerald-500/5",
    border: "border-green-500/20",
  },
  {
    icon: "✍️",
    title: "Content Marketing",
    description:
      "Strategic content that builds authority, educates your audience, and drives organic growth across every channel your customers use.",
    benefits: ["Brand positioning", "Inbound leads", "Multi-channel"],
    color: "from-indigo-500/10 to-violet-500/5",
    border: "border-indigo-500/20",
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 rounded-full border border-white/10 text-zinc-400 text-sm mb-4">
              What We Do
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Services Built for Growth
            </h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              Every service we offer is engineered to generate measurable ROI.
              We don't just run campaigns — we build growth systems.
            </p>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ y: -4 }}
              className={`group relative p-6 rounded-2xl border bg-gradient-to-br ${service.color} ${service.border} transition-all duration-300 cursor-pointer`}
            >
              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                {service.description}
              </p>
              <ul className="space-y-1.5">
                {service.benefits.map((b) => (
                  <li
                    key={b}
                    className="flex items-center gap-2 text-xs text-zinc-500"
                  >
                    <span className="w-1 h-1 rounded-full bg-zinc-500" />
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
          >
            Explore all services in detail
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
