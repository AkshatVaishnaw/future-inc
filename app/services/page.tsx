"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import Link from "next/link";

const services = [
  {
    id: "ai-automation",
    icon: "🤖",
    title: "AI Automation",
    tagline: "Work smarter. Scale faster. Grow without limits.",
    description:
      "Stop wasting human potential on repetitive tasks. Our AI automation systems handle everything from lead qualification and customer support to internal workflows and reporting — so your team can focus on what actually moves the needle.",
    benefits: [
      "Save 40+ hours per week on manual tasks",
      "24/7 automated customer engagement",
      "Zero errors in data processing and reporting",
      "Instant scalability without hiring overhead",
      "Custom workflows tailored to your business",
    ],
    process: [
      { step: "Audit", desc: "We map your current workflows and identify automation opportunities." },
      { step: "Design", desc: "We design custom AI workflows using tools like Make, Zapier, and custom APIs." },
      { step: "Build", desc: "Our engineers build and integrate the automation systems into your stack." },
      { step: "Train", desc: "We train your team and AI models with your business-specific data." },
      { step: "Optimize", desc: "Continuous monitoring and improvement based on performance data." },
    ],
    color: "from-violet-500/10 to-purple-500/5",
    border: "border-violet-500/20",
    accent: "text-violet-400",
  },
  {
    id: "meta-ads",
    icon: "📱",
    title: "Meta Ads",
    tagline: "Find your customers where they spend their time.",
    description:
      "Facebook and Instagram advertising at its highest level. We don't just run ads — we engineer complete acquisition systems with precision targeting, compelling creative, and conversion-optimized funnels that consistently deliver 3-8x ROAS.",
    benefits: [
      "Average 3-8x return on ad spend",
      "Hyper-targeted audience segmentation",
      "Systematic creative testing at scale",
      "Full-funnel conversion optimization",
      "Weekly performance reporting",
    ],
    process: [
      { step: "Research", desc: "Deep audience analysis and competitive intelligence gathering." },
      { step: "Strategy", desc: "Full-funnel campaign architecture designed for your specific goals." },
      { step: "Creative", desc: "Ad creatives, copy, and landing pages built to convert." },
      { step: "Launch", desc: "Campaigns go live with aggressive testing of audiences and creatives." },
      { step: "Scale", desc: "Winners get scaled, losers get cut. Continuous optimization for max ROAS." },
    ],
    color: "from-blue-500/10 to-indigo-500/5",
    border: "border-blue-500/20",
    accent: "text-blue-400",
  },
  {
    id: "google-ads",
    icon: "🎯",
    title: "Google Ads",
    tagline: "Capture high-intent buyers at the moment they're ready.",
    description:
      "Google Ads is the most powerful intent-based advertising platform on the planet. We help you dominate Search, Display, Shopping, and YouTube with data-driven campaigns that capture buyers when they're actively looking for what you sell.",
    benefits: [
      "Top placement for your highest-value keywords",
      "Industry-specific negative keyword lists",
      "Shopping campaign optimization for e-commerce",
      "YouTube pre-roll for brand awareness",
      "Local campaigns for brick-and-mortar businesses",
    ],
    process: [
      { step: "Audit", desc: "Complete analysis of your current account or competitive landscape." },
      { step: "Keywords", desc: "Comprehensive keyword research across all match types." },
      { step: "Build", desc: "Campaign and ad group structure built for maximum Quality Score." },
      { step: "Test", desc: "A/B testing of ad copy, landing pages, and bidding strategies." },
      { step: "Optimize", desc: "Regular bid optimization, quality score improvements, and expansion." },
    ],
    color: "from-emerald-500/10 to-green-500/5",
    border: "border-emerald-500/20",
    accent: "text-emerald-400",
  },
  {
    id: "seo",
    icon: "📈",
    title: "SEO",
    tagline: "Build the traffic asset that pays dividends forever.",
    description:
      "SEO is the highest-ROI marketing investment you can make. We combine technical excellence, strategic content, and authority link building to drive qualified organic traffic that compounds month over month — with zero ongoing ad spend.",
    benefits: [
      "First-page rankings for high-value keywords",
      "Technical SEO that maximizes crawlability",
      "Content strategy that attracts and converts",
      "Authority backlinks from relevant domains",
      "Local SEO for location-based businesses",
    ],
    process: [
      { step: "Audit", desc: "Comprehensive technical, content, and authority analysis." },
      { step: "Strategy", desc: "Keyword map and content roadmap aligned with business goals." },
      { step: "Technical", desc: "Fix all technical issues that prevent ranking." },
      { step: "Content", desc: "Create high-quality, search-optimized content at scale." },
      { step: "Links", desc: "Build authority through editorial backlinks and digital PR." },
    ],
    color: "from-amber-500/10 to-orange-500/5",
    border: "border-amber-500/20",
    accent: "text-amber-400",
  },
  {
    id: "web-development",
    icon: "💻",
    title: "Website Development",
    tagline: "Your website should be your best salesperson.",
    description:
      "We build high-converting, blazing-fast websites and landing pages using modern technology stacks. Every pixel is designed to guide visitors toward conversion, and every line of code is optimized for Core Web Vitals and SEO performance.",
    benefits: [
      "Conversion-optimized design and UX",
      "Lightning-fast loading (sub-2s LCP)",
      "Mobile-first responsive design",
      "Built-in SEO best practices",
      "CMS for easy content management",
    ],
    process: [
      { step: "Discovery", desc: "Understand your brand, goals, and target audience." },
      { step: "Design", desc: "Premium UI/UX design with conversion principles built in." },
      { step: "Develop", desc: "Clean, performant code using Next.js, React, and modern tools." },
      { step: "Test", desc: "Cross-device, cross-browser testing with performance audits." },
      { step: "Launch", desc: "SEO-ready launch with analytics and tracking configured." },
    ],
    color: "from-pink-500/10 to-rose-500/5",
    border: "border-pink-500/20",
    accent: "text-pink-400",
  },
  {
    id: "crm-automation",
    icon: "⚙️",
    title: "CRM Automation",
    tagline: "Never let a lead fall through the cracks again.",
    description:
      "Your CRM should be a growth machine, not a rolodex. We set up and automate your entire customer lifecycle — from first touch to closed deal to renewal — ensuring every lead is nurtured and every opportunity is captured.",
    benefits: [
      "Automated lead scoring and routing",
      "Multi-step nurture sequences",
      "Deal pipeline automation",
      "Renewal and upsell automation",
      "Revenue forecasting dashboards",
    ],
    process: [
      { step: "Assess", desc: "Audit your current CRM setup and identify gaps." },
      { step: "Configure", desc: "Set up or optimize your CRM (HubSpot, Salesforce, GoHighLevel, etc.)." },
      { step: "Automate", desc: "Build automated workflows for every stage of the customer journey." },
      { step: "Integrate", desc: "Connect your CRM to your marketing tools, website, and data sources." },
      { step: "Train", desc: "Team training and ongoing optimization." },
    ],
    color: "from-cyan-500/10 to-teal-500/5",
    border: "border-cyan-500/20",
    accent: "text-cyan-400",
  },
  {
    id: "whatsapp-automation",
    icon: "💬",
    title: "WhatsApp Automation",
    tagline: "98% open rates. 45% response rates. Game over.",
    description:
      "WhatsApp is the world's most personal communication channel. We help businesses leverage it with intelligent automation, broadcast campaigns, and AI-powered chatbots that engage customers at scale with human-like conversation quality.",
    benefits: [
      "98% message open rates",
      "Automated lead qualification",
      "Broadcast campaigns to warm audiences",
      "AI chatbot for 24/7 customer support",
      "Seamless CRM integration",
    ],
    process: [
      { step: "Setup", desc: "WhatsApp Business API setup and verification." },
      { step: "Map", desc: "Design conversation flows for every customer scenario." },
      { step: "Build", desc: "Build and test automated sequences and chatbot responses." },
      { step: "Integrate", desc: "Connect with your CRM and marketing stack." },
      { step: "Launch", desc: "Campaign launch with ongoing monitoring and optimization." },
    ],
    color: "from-green-500/10 to-emerald-500/5",
    border: "border-green-500/20",
    accent: "text-green-400",
  },
  {
    id: "content-marketing",
    icon: "✍️",
    title: "Content Marketing",
    tagline: "Build authority. Attract buyers. Dominate your niche.",
    description:
      "Content is the foundation of every organic growth strategy. We create strategic, high-quality content that positions you as the definitive authority in your market — attracting, educating, and converting your ideal customers.",
    benefits: [
      "Comprehensive content strategy and roadmap",
      "SEO-optimized blog and article creation",
      "Social media content calendars",
      "Video scripts and short-form content",
      "Email newsletters and nurture sequences",
    ],
    process: [
      { step: "Research", desc: "Audience research, keyword analysis, and competitive content audit." },
      { step: "Strategy", desc: "Content roadmap mapped to your buyer's journey." },
      { step: "Create", desc: "Expert content creation by industry-specific writers." },
      { step: "Distribute", desc: "Multi-channel distribution for maximum reach and engagement." },
      { step: "Measure", desc: "Track traffic, leads, and content ROI with monthly reporting." },
    ],
    color: "from-indigo-500/10 to-violet-500/5",
    border: "border-indigo-500/20",
    accent: "text-indigo-400",
  },
];

function ServiceCard({ service, index }: { service: (typeof services)[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      id={service.id}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
      className={`rounded-3xl border bg-gradient-to-br ${service.color} ${service.border} p-8 md:p-10`}
    >
      <div className="grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2">
          <div className="text-4xl mb-4">{service.icon}</div>
          <h2 className="text-3xl font-bold text-white mb-2">{service.title}</h2>
          <p className={`text-sm font-medium mb-4 ${service.accent}`}>{service.tagline}</p>
          <p className="text-zinc-400 leading-relaxed text-sm">{service.description}</p>

          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black text-sm font-semibold rounded-xl hover:bg-zinc-100 transition-colors"
          >
            Get Started
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        <div className="lg:col-span-3 grid sm:grid-cols-2 gap-6">
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Key Benefits
            </h3>
            <ul className="space-y-2.5">
              {service.benefits.map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-sm text-zinc-400">
                  <svg
                    className={`w-4 h-4 mt-0.5 flex-shrink-0 ${service.accent}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Our Process
            </h3>
            <ol className="space-y-3">
              {service.process.map((p, i) => (
                <li key={p.step} className="flex items-start gap-3">
                  <span className={`text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 bg-white/10 ${service.accent}`}>
                    {i + 1}
                  </span>
                  <div>
                    <span className="text-sm font-medium text-white">{p.step}: </span>
                    <span className="text-sm text-zinc-500">{p.desc}</span>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="py-32 px-6 text-center relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-violet-600/8 blur-[120px]" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative z-10 max-w-3xl mx-auto"
          >
            <span className="inline-block px-3 py-1 rounded-full border border-white/10 text-zinc-400 text-sm mb-6">
              Services
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight mb-6">
              Every Tool You Need to{" "}
              <span className="gradient-text">Dominate Your Market</span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Eight specialized services. One unified growth strategy. Infinite
              potential for your business.
            </p>
          </motion.div>
        </section>

        <section className="pb-32 px-6">
          <div className="max-w-7xl mx-auto space-y-8">
            {services.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
        </section>

        <CTA
          title="Ready to Get Started?"
          subtitle="Choose one service or build a full growth stack. Book a free strategy call and we'll recommend the right combination for your business goals."
        />
      </main>
      <Footer />
    </>
  );
}
