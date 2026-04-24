import { Phone, CameraVideo, LightningCharge } from "react-bootstrap-icons";
import { motion } from "motion/react";
import type { Variants } from "motion/react";

const smoothEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: smoothEase } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
};

export function ProcessSection() {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: smoothEase }}
          className="text-4xl md:text-6xl font-bold text-sage-dark font-serif mb-24"
        >
          Simple Path to <span className="text-gold-dark">Peace.</span>
        </motion.h2>

        <motion.div
          className="grid lg:grid-cols-3 gap-16 relative"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {/* Connecting Line (Desktop) */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.5, ease: smoothEase }}
            className="absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-sage/10 to-transparent -translate-y-1/2 hidden lg:block origin-left"
          />

          <ProcessStep
            num="01"
            icon={Phone}
            title="Choose Partner"
            desc="Select from our ICF-certified experts based on your specific life goals and energy."
          />
          <ProcessStep
            num="02"
            icon={CameraVideo}
            title="Secure Stream"
            desc="Enter your one-click sanctuary room. No downloads, no records, just a safe stream."
          />
          <ProcessStep
            num="03"
            icon={LightningCharge}
            title="Transform"
            desc="Experience breakthroughs using world-class NLP and coaching methodologies."
          />
        </motion.div>
      </div>
    </section>
  );
}

function ProcessStep({
  num,
  icon: Icon,
  title,
  desc,
}: {
  num: string;
  icon: any;
  title: string;
  desc: string;
}) {
  return (
    <motion.div variants={fadeUp} className="relative z-10 group">
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="w-24 h-24 bg-cream rounded-[32px] mx-auto mb-10 flex items-center justify-center text-sage-dark shadow-xl group-hover:bg-sage group-hover:text-white transition-colors duration-500"
      >
        <Icon size={32} />
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", delay: 0.6, stiffness: 400 }}
          className="absolute -top-4 right-0 w-10 h-10 bg-gold-dark rounded-full flex items-center justify-center text-sage-dark text-xs font-black shadow-lg"
        >
          {num}
        </motion.div>
      </motion.div>
      <h4 className="text-2xl font-bold text-sage-dark font-serif mb-4 uppercase tracking-tight">
        {title}
      </h4>
      <p className="text-sm font-medium text-sage-dark/60 leading-relaxed max-w-xs mx-auto">
        {desc}
      </p>
    </motion.div>
  );
}
