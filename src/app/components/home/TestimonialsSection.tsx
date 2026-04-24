import { StarFill } from "react-bootstrap-icons";
import { motion } from "motion/react";
import type { Variants } from "motion/react";

const smoothEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: smoothEase } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

export function TestimonialsSection() {
  return (
    <section className="py-40 bg-sage relative overflow-hidden">
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.1, 0.18, 0.1],
          transition: { duration: 8, repeat: Infinity, ease: "easeInOut" as const },
        }}
        className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold-dark rounded-full blur-[160px] translate-x-1/2 -translate-y-1/2 pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: smoothEase }}
          className="max-w-3xl mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white font-serif leading-tight">
            Shared Truths from the <span className="text-gold-dark">Sanctuary.</span>
          </h2>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-12"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          <BigTestimonial
            quote="The coaching was life-changing. I felt safe and heard for the first time in a decade. Being able to remain anonymous was the barrier that finally broke down for me."
            author="CEO, Dubai Tech Firm"
          />
          <motion.div variants={stagger} className="space-y-8">
            <SmallTestimonial quote="Total anonymity allowed me to be vulnerable without any fear of reputation." />
            <SmallTestimonial quote="Coach Sharma helped me navigate my career transition with total clarity and focus." />
            <SmallTestimonial quote="A first-class experience from onboarding to the final breakthrough session." />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function BigTestimonial({ quote, author }: { quote: string; author: string }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
      className="p-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[60px] hover:bg-white/8 transition-colors"
    >
      <div className="flex gap-1 mb-10">
        {[1, 2, 3, 4, 5].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.1, type: "spring", stiffness: 400 }}
          >
            <StarFill size={18} className="text-gold-dark" />
          </motion.div>
        ))}
      </div>
      <p className="text-3xl text-white font-serif italic mb-12 leading-tight">
        "{quote}"
      </p>
      <div className="flex items-center gap-4">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 48 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="h-1 bg-gold-dark rounded-full"
        />
        <span className="text-xs font-black text-gold-dark uppercase tracking-widest">
          {author}
        </span>
      </div>
    </motion.div>
  );
}

function SmallTestimonial({ quote }: { quote: string }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{
        x: 8,
        backgroundColor: "rgba(255,255,255,0.1)",
        transition: { duration: 0.3 },
      }}
      className="p-8 bg-white/5 border border-white/10 rounded-[40px] transition-colors cursor-default"
    >
      <p className="text-lg text-white/80 font-medium italic">"{quote}"</p>
    </motion.div>
  );
}
