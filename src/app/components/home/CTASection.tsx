import { Link } from "react-router";
import { motion } from "motion/react";

const smoothEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function CTASection() {
  return (
    <section className="py-24 bg-gold-dark relative overflow-hidden">
      {/* Ambient animation */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.12, 0.05],
          transition: { duration: 6, repeat: Infinity, ease: "easeInOut" as const },
        }}
        className="absolute top-0 left-0 w-[500px] h-[500px] bg-sage rounded-full blur-[140px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: smoothEase }}
        className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10"
      >
        <h3 className="text-3xl md:text-5xl font-bold text-sage-dark font-serif max-w-xl text-center lg:text-left leading-tight">
          Your first 20 minutes are on us. Ready to start?
        </h3>
        <div className="flex flex-col sm:flex-row gap-4 shrink-0">
          <Link
            to="/book"
            className="relative overflow-hidden px-12 py-5 bg-sage text-white rounded-full font-black text-xs uppercase tracking-widest hover:scale-110 active:scale-[0.98] transition-all shadow-2xl shadow-black/30 group"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <span className="relative z-10">Book Discovery Call</span>
          </Link>
          <Link
            to="/contact"
            className="px-12 py-5 bg-white/20 backdrop-blur-md border border-sage/10 text-sage-dark rounded-full font-black text-xs uppercase tracking-widest hover:bg-white/40 transition-all"
          >
            Chat with Us
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
