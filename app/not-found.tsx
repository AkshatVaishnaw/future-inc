"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
      <main className="min-h-screen flex items-center justify-center px-6 pt-16 flex-1">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-violet-600/8 blur-[120px]" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center relative z-10 max-w-lg"
        >
          <div className="text-8xl font-bold gradient-text mb-4">404</div>
          <h1 className="text-3xl font-bold text-white mb-4">
            Page Not Found
          </h1>
          <p className="text-zinc-400 mb-10 leading-relaxed">
            Looks like this page went on vacation without telling us. Let's get
            you back to somewhere useful.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="w-full sm:w-auto px-8 py-4 bg-white text-black font-semibold rounded-xl hover:bg-zinc-100 transition-colors text-sm"
            >
              Back to Home
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 border border-white/10 text-white font-medium rounded-xl hover:bg-white/[0.06] transition-colors text-sm"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </main>
  );
}
