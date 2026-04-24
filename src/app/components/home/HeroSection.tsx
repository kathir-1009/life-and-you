import { Link } from "react-router";
import { ArrowRight, ShieldLock, Lock } from "react-bootstrap-icons";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import type { Variants, Transition } from "motion/react";

/* ── Shared easing ── */
const smoothEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

/* ── Stagger container & child variants ── */
const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: smoothEase } },
};

const fadeScale: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  show: { opacity: 1, scale: 1, transition: { duration: 1, ease: smoothEase } },
};

const slideRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.9, ease: smoothEase } },
};

const slideLeft: Variants = {
  hidden: { opacity: 0, x: -60, y: 40 },
  show: { opacity: 1, x: 0, y: 0, transition: { duration: 0.9, ease: smoothEase } },
};

/* ── Breathing orb keyframes ── */
const breathe = {
  scale: [1, 1.15, 1],
  opacity: [0.06, 0.12, 0.06],
  transition: { duration: 6, repeat: Infinity, ease: "easeInOut" as const },
};

const breatheSlow = {
  scale: [1, 1.1, 1],
  opacity: [0.04, 0.09, 0.04],
  transition: { duration: 8, repeat: Infinity, ease: "easeInOut" as const, delay: 2 },
};

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  /* Parallax transforms driven by scroll */
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const floatCardY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[94vh] flex items-center pt-20 overflow-hidden"
    >
      {/* ── Animated Background Orbs ── */}
      <motion.div
        animate={breathe}
        className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-sage/5 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/2 pointer-events-none"
      />
      <motion.div
        animate={breatheSlow}
        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none"
      />
      {/* Extra ambient glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.02, 0.06, 0.02],
          transition: { duration: 10, repeat: Infinity, ease: "easeInOut" as const, delay: 4 },
        }}
        className="absolute top-1/3 left-1/3 w-[800px] h-[800px] bg-gold-dark/5 rounded-full blur-[180px] pointer-events-none"
      />

      <motion.div
        style={{ opacity: heroOpacity, y: heroY }}
        className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-12 gap-16 items-center relative z-10"
      >
        {/* ── Left Column — Text Content ── */}
        <motion.div
          className="lg:col-span-7"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          {/* Badge */}
          <motion.div variants={fadeUp}>
            <div className="inline-flex items-center gap-3 bg-white/60 backdrop-blur-md border border-sage/10 px-5 py-2.5 rounded-full mb-10 shadow-sm hover:shadow-md transition-shadow">
              <motion.div
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" as const }}
              >
                <ShieldLock size={16} className="text-gold-dark" />
              </motion.div>
              <span className="text-[10px] font-black text-sage-dark uppercase tracking-[0.3em]">
                ICF Certified Sanctuary · 100% Private
              </span>
            </div>
          </motion.div>

          {/* Headline — Each line staggered */}
          <motion.h1
            className="text-6xl md:text-8xl lg:text-[110px] font-bold text-sage-dark font-serif leading-[0.9] mb-12 tracking-tighter"
          >
            <motion.span variants={fadeUp} className="block">
              Be{" "}
              <span className="text-gold-dark relative inline-block">
                Heard.
                <motion.svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-gold-dark/20"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.2, delay: 0.8, ease: "easeInOut" as const }}
                >
                  <motion.path
                    d="M0 5 Q 50 10 100 5"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="transparent"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.2, delay: 0.8, ease: "easeInOut" as const }}
                  />
                </motion.svg>
              </span>
            </motion.span>
            <motion.span variants={fadeUp} className="block">
              Heal Anonymously.
            </motion.span>
            <motion.span variants={fadeUp} className="block">
              Live Better.
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            className="text-xl lg:text-3xl text-sage-dark/80 font-medium mb-14 max-w-2xl leading-[1.4]"
          >
            Premium wellness coaching that respects your identity. Experience
            life-changing breakthroughs through our zero-trace anonymous world.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-6 mb-20">
            <Link
              to="/book"
              className="relative overflow-hidden px-12 py-6 bg-sage text-white rounded-full font-bold text-xs uppercase tracking-[0.2em] shadow-2xl hover:scale-105 active:scale-[0.98] transition-all text-center group"
            >
              {/* Shimmer sweep on hover */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
              <span className="relative z-10">Launch Your First Session</span>
            </Link>
            <Link
              to="/programs"
              className="px-12 py-6 bg-white border border-sage/10 text-sage-dark rounded-full font-bold text-xs uppercase tracking-[0.2em] hover:bg-sage-light hover:border-sage/20 transition-all flex items-center justify-center gap-3 group"
            >
              Explore Programs{" "}
              <ArrowRight
                size={18}
                className="group-hover:translate-x-2 transition-transform duration-300"
              />
            </Link>
          </motion.div>

          {/* Trust stats — subtle entrance */}
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-8 flex-wrap"
          >
            {[
              { value: "2,400+", label: "Sessions Delivered" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "100%", label: "Privacy Guaranteed" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="text-2xl font-black text-sage-dark font-serif tracking-tight">
                  {stat.value}
                </span>
                <span className="text-[9px] font-bold text-sage-dark/40 uppercase tracking-[0.2em] mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* ── Right Column — Hero Visual ── */}
        <motion.div
          className="lg:col-span-5 relative hidden lg:block"
          variants={fadeScale}
          initial="hidden"
          animate="show"
          style={{ y: imageY }}
        >
          {/* Ambient glow */}
          <motion.div
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.2, 0.35, 0.2],
              transition: { duration: 5, repeat: Infinity, ease: "easeInOut" as const },
            }}
            className="absolute inset-0 bg-gradient-to-br from-sage/20 to-transparent rounded-[80px] blur-3xl -z-10 scale-110"
          />

          <div className="relative z-10">
            <motion.div
              className="bg-sage rounded-[60px] p-2 shadow-2xl overflow-hidden aspect-[4/5] relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.6, ease: smoothEase }}
            >
              <img
                src="/img/banner/banner-img-111.png"
                alt="Sanctuary Session"
                className="w-full h-full object-cover rounded-[54px] opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sage-dark/30 to-transparent pointer-events-none" />
            </motion.div>
          </div>

          {/* ── Floating Card: Privacy Quote ── */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            animate="show"
            style={{ y: floatCardY }}
            className="absolute -bottom-12 -left-12 z-20"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" as const }}
              className="bg-white/80 backdrop-blur-2xl p-8 rounded-[40px] shadow-2xl border border-white max-w-xs"
            >
              <div className="flex items-center gap-4 mb-4">
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" as const }}
                  className="w-14 h-14 bg-sage rounded-2xl flex items-center justify-center text-gold-dark shadow-lg"
                >
                  <Lock size={28} />
                </motion.div>
                <div>
                  <h4 className="font-black text-sage-dark text-sm uppercase tracking-tight">
                    Pure Privacy
                  </h4>
                  <p className="text-[10px] font-black text-gold-dark uppercase tracking-widest">
                    Identity Shield Active
                  </p>
                </div>
              </div>
              <p className="text-xs text-sage-dark/70 font-bold leading-relaxed italic">
                "The first platform where I felt safe being truly honest."
              </p>
            </motion.div>
          </motion.div>

          {/* ── Floating Card: Active Sessions ── */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            animate="show"
            className="absolute top-1/4 -right-12 z-20"
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" as const, delay: 1 }}
              className="bg-gold text-sage-dark p-6 rounded-[32px] shadow-2xl border border-white/20"
            >
              <div className="flex items-center gap-3">
                <motion.div
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" as const }}
                  className="w-3 h-3 bg-sage-dark rounded-full"
                />
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">
                  124 Active Sessions
                </span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20"
      >
        <span className="text-[9px] font-bold text-sage-dark/30 uppercase tracking-[0.3em]">
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" as const }}
          className="w-6 h-10 border-2 border-sage-dark/15 rounded-full flex justify-center pt-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-sage-dark/30 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
