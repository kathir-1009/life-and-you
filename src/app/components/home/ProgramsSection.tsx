import { Link } from "react-router";
import { ArrowRight } from "react-bootstrap-icons";
import { motion } from "motion/react";
import type { Variants } from "motion/react";

const smoothEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: smoothEase } },
};

export function ProgramsSection() {
  return (
    <section className="py-32 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: smoothEase }}
          className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8"
        >
          <div className="max-w-2xl">
            <span className="text-[10px] font-black text-gold-dark uppercase tracking-[0.4em] mb-4 block">
              Our Offerings
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-sage-dark font-serif">
              Tailored Growth <span className="text-gold-dark">Programs.</span>
            </h2>
          </div>
          <Link
            to="/programs"
            className="px-8 py-4 bg-white border border-sage/10 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-sm hover:scale-105 hover:shadow-md transition-all"
          >
            View Full Catalog
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <ProgramCard
            index={0}
            title="Discovery Call"
            desc="Uncover the root of your barriers in a high-impact session."
            price="AED 399"
          />
          <ProgramCard
            index={1}
            title="The Moon Path"
            desc="4 structured sessions + WhatsApp support for deep habit shifts."
            price="AED 1,499"
            featured={true}
          />
          <ProgramCard
            index={2}
            title="Elite 3 Months"
            desc="Total life transformation package for high-stakes performers."
            price="AED 3,999"
          />
        </div>
      </div>
    </section>
  );
}

function ProgramCard({
  title,
  desc,
  price,
  featured = false,
  index = 0,
}: {
  title: string;
  desc: string;
  price: string;
  featured?: boolean;
  index?: number;
}) {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.15 }}
      whileHover={{ y: -16, transition: { duration: 0.4, ease: smoothEase } }}
      className={`p-10 lg:p-14 rounded-[48px] border transition-shadow cursor-pointer ${
        featured
          ? "bg-[#4A5D4E] border-transparent text-white shadow-[0_40px_80px_rgba(0,0,0,0.2)]"
          : "bg-white border-[#A3B18A]/10 text-[#A3B18A] shadow-sm hover:shadow-2xl"
      }`}
    >
      <h4 className="text-3xl lg:text-4xl font-bold mb-6 font-serif uppercase tracking-tight leading-tight">
        {title}
      </h4>
      <p
        className={`text-base lg:text-lg font-medium mb-16 leading-relaxed ${
          featured ? "text-white/60" : "text-[#4A5D4E]/60"
        }`}
      >
        {desc}
      </p>
      <div className="flex items-center justify-between pt-10 border-t border-current opacity-20 group-hover:opacity-100 transition-opacity">
        <span className="text-3xl font-black font-serif">{price}</span>
        <motion.div
          whileHover={{ x: 4, scale: 1.1 }}
          className="w-12 h-12 rounded-2xl bg-current/5 flex items-center justify-center"
        >
          <ArrowRight size={24} className={featured ? "text-gold-dark" : "text-sage-dark"} />
        </motion.div>
      </div>
    </motion.div>
  );
}
