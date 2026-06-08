"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import CTA from "@/components/CTA";

const team = [
  {
    name: "Alex Carter",
    role: "CEO & Founder",
    bio: "Former VP of Growth at two unicorn startups. 12+ years in digital marketing with a focus on AI-driven acquisition strategies.",
    avatar: "AC",
    gradient: "from-violet-500 to-blue-500",
  },
  {
    name: "Maya Patel",
    role: "Head of Performance Marketing",
    bio: "Ex-Google Ads specialist who has managed $50M+ in ad spend across 200+ brands. Obsessed with ROAS optimization.",
    avatar: "MP",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "Jordan Lee",
    role: "Chief AI Officer",
    bio: "Machine learning engineer turned growth hacker. Builds the automation systems that give our clients their unfair advantage.",
    avatar: "JL",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    name: "Sofia Reyes",
    role: "Head of SEO & Content",
    bio: "Built and scaled organic channels that generate millions of visitors monthly. Former senior SEO at Shopify.",
    avatar: "SR",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    name: "Marcus Webb",
    role: "Lead Developer",
    bio: "Full-stack engineer with a passion for performance. Builds lightning-fast, conversion-optimized websites and web apps.",
    avatar: "MW",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    name: "Priya Kapoor",
    role: "Client Success Director",
    bio: "Ensures every client gets extraordinary value. Manages relationships across our entire portfolio with meticulous care.",
    avatar: "PK",
    gradient: "from-indigo-500 to-violet-500",
  },
];

const values = [
  {
    number: "01",
    title: "Ownership Mentality",
    description:
      "We treat your business like our own. Your wins are our wins. Every decision we make is filtered through the lens of what drives maximum value for you.",
  },
  {
    number: "02",
    title: "Data Over Opinion",
    description:
      "We don't guess — we test. Every strategy is backed by data, every result is measured, and every dollar is accountable.",
  },
  {
    number: "03",
    title: "Long-Term Thinking",
    description:
      "We build systems that compound. Quick wins are great, but we're focused on sustainable growth engines that deliver value for years.",
  },
  {
    number: "04",
    title: "Continuous Innovation",
    description:
      "The marketing landscape changes daily. We're always ahead of the curve, testing new channels, tools, and strategies before they become mainstream.",
  },
];

const milestones = [
  { year: "2020", event: "Future Inc founded in San Francisco" },
  { year: "2021", event: "Reached 50 clients across 10 countries" },
  { year: "2022", event: "Launched AI Automation practice" },
  { year: "2023", event: "Expanded team to 35 specialists" },
  { year: "2024", event: "Crossed $100M in managed ad spend" },
  { year: "2025", event: "Serving 150+ clients in 20+ countries" },
];

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function AboutPage() {
  return (
    <main className="pt-16 flex-1">
        {/* Hero */}
        <section className="relative py-32 px-6 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-violet-600/8 blur-[120px]" />
          </div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block px-3 py-1 rounded-full border border-white/10 text-zinc-400 text-sm mb-6">
                About Us
              </span>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight mb-8">
                Built to Drive{" "}
                <span className="gradient-text">Extraordinary Growth</span>
              </h1>
              <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                Future Inc is a team of 35 growth specialists, engineers, and
                creatives united by a single obsession: generating measurable,
                compounding results for our clients.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story */}
        <section className="py-24 px-6 bg-zinc-950/50">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <Section>
              <h2 className="text-4xl font-bold text-white mb-6">Our Story</h2>
              <div className="space-y-4 text-zinc-400 leading-relaxed">
                <p>
                  Future Inc was born from frustration. Our founder Alex Carter
                  had spent years watching businesses waste enormous budgets on
                  agencies that prioritized beautiful decks over actual results.
                  He knew there had to be a better way.
                </p>
                <p>
                  In 2020, he assembled a team of performance-obsessed specialists
                  — people who'd built acquisition systems at the world's fastest-growing
                  companies — and set out to build the agency he always wished existed.
                </p>
                <p>
                  Today, Future Inc manages growth for 150+ companies across 20
                  countries, with a track record of delivering 3-8x returns on
                  marketing investment. We've crossed $100M in managed ad spend
                  and have never once compromised on our commitment to results.
                </p>
              </div>
            </Section>

            <Section className="space-y-4">
              {milestones.map((m) => (
                <div key={m.year} className="flex items-start gap-4">
                  <div className="w-16 text-sm font-mono text-violet-400 pt-0.5 flex-shrink-0">
                    {m.year}
                  </div>
                  <div className="flex-1 flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-violet-500 mt-2 flex-shrink-0" />
                    <p className="text-zinc-300 text-sm">{m.event}</p>
                  </div>
                </div>
              ))}
            </Section>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto grid sm:grid-cols-2 gap-6">
            {[
              {
                label: "Mission",
                title: "Democratize elite-level marketing",
                description:
                  "To make world-class, AI-powered marketing accessible to every ambitious business — not just Fortune 500 companies with unlimited budgets.",
              },
              {
                label: "Vision",
                title: "The future of marketing is intelligent",
                description:
                  "We envision a world where every business has access to marketing systems that think, adapt, and optimize autonomously — driving growth on autopilot.",
              },
            ].map((item) => (
              <Section key={item.label}>
                <div className="glass rounded-2xl p-8 h-full">
                  <span className="text-xs font-semibold text-violet-400 uppercase tracking-wider">
                    {item.label}
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-3 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed">{item.description}</p>
                </div>
              </Section>
            ))}
          </div>
        </section>

        {/* Values */}
        <section className="py-24 px-6 bg-zinc-950/50">
          <div className="max-w-7xl mx-auto">
            <Section className="text-center mb-16">
              <span className="inline-block px-3 py-1 rounded-full border border-white/10 text-zinc-400 text-sm mb-4">
                Our Values
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold text-white">
                Principles We Live By
              </h2>
            </Section>
            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((v, i) => (
                <Section key={v.number}>
                  <div className="glass rounded-2xl p-8 hover:bg-white/[0.06] transition-colors">
                    <div className="text-4xl font-bold text-white/10 mb-4">
                      {v.number}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {v.title}
                    </h3>
                    <p className="text-zinc-400 leading-relaxed">
                      {v.description}
                    </p>
                  </div>
                </Section>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <Section className="text-center mb-16">
              <span className="inline-block px-3 py-1 rounded-full border border-white/10 text-zinc-400 text-sm mb-4">
                The Team
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                Meet the Specialists
              </h2>
              <p className="text-zinc-400 max-w-xl mx-auto">
                Every person on our team is a specialist — not a generalist.
                You get experts, not account managers.
              </p>
            </Section>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {team.map((member, i) => (
                <Section key={member.name}>
                  <div className="glass rounded-2xl p-6 hover:bg-white/[0.05] transition-colors">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center text-white font-bold text-lg mb-4`}
                    >
                      {member.avatar}
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-0.5">
                      {member.name}
                    </h3>
                    <p className="text-sm text-violet-400 mb-3">{member.role}</p>
                    <p className="text-sm text-zinc-500 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </Section>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 px-6 bg-zinc-950/50">
          <div className="max-w-7xl mx-auto">
            <Section className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                Why Choose Future Inc?
              </h2>
            </Section>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: "📊",
                  title: "Full Transparency",
                  desc: "Live dashboards, weekly reports, monthly strategy calls. You always know exactly what's happening.",
                },
                {
                  icon: "🧠",
                  title: "AI-First Approach",
                  desc: "We leverage the latest AI tools to outpace competitors and deliver results faster than traditional agencies.",
                },
                {
                  icon: "🎯",
                  title: "Specialist Teams",
                  desc: "Each channel is managed by a dedicated specialist, not a junior generalist juggling 20 accounts.",
                },
                {
                  icon: "📈",
                  title: "Proven Track Record",
                  desc: "500+ projects delivered, $100M+ in managed ad spend, and a 98% client retention rate.",
                },
                {
                  icon: "⚡",
                  title: "Speed of Execution",
                  desc: "We move fast. Campaigns launch in days, not weeks. Results appear in weeks, not quarters.",
                },
                {
                  icon: "🔄",
                  title: "Agile & Adaptive",
                  desc: "Markets change. We adapt instantly. Our strategies evolve based on real-time data and market conditions.",
                },
              ].map((item) => (
                <Section key={item.title}>
                  <div className="glass rounded-2xl p-6 hover:bg-white/[0.05] transition-colors">
                    <div className="text-2xl mb-3">{item.icon}</div>
                    <h3 className="text-base font-semibold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-zinc-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </Section>
              ))}
            </div>
          </div>
        </section>

        <CTA
          title="Ready to Join Our Growing Family?"
          subtitle="150+ businesses trust Future Inc with their growth. Join them and discover what's possible when you work with a team that's truly invested in your success."
        />
    </main>
  );
}
