import { Link } from "react-router";
import { Lock, ShieldCheck, Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#1C1A1E] pt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 grid lg:grid-cols-4 gap-16 lg:gap-8 pb-20">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-4 mb-8">
             <div className="w-10 h-10 bg-transparent flex items-center justify-center">
                <img src="/img/logo.svg" alt="L&Y" className="w-full h-full object-contain brightness-0 invert" />
             </div>
             <span className="text-2xl font-black text-white tracking-tight">Life & You</span>
          </div>
          <p className="text-sm text-white/40 leading-relaxed font-medium mb-10 opacity-70">
            The professional choice for cognitive transformation. Anonymous coaching built for the modern soul. Certified NLP & ICF expertise.
          </p>
          <div className="flex gap-4">
             <SocialIcon icon={Linkedin} />
             <SocialIcon icon={Instagram} />
             <SocialIcon icon={Twitter} />
          </div>
        </div>

        {[
          {
            title: "Services",
            links: [
              { label: "Book Breakthrough", path: "/app/book" },
              { label: "Secure Portal", path: "/app/dashboard" },
              { label: "Growth Vault", path: "/app/resources" },
              { label: "Pricing System", path: "/pricing" },
            ],
          },
          {
            title: "Philosophy",
            links: [
              { label: "Our Story", path: "/about" },
              { label: "NLP Science", path: "/about" },
              { label: "Privacy Protocol", path: "/contact" },
              { label: "Verified Coaches", path: "/about" },
            ],
          },
          {
            title: "Concierge",
            links: [
              { label: "Contact Hub", path: "/contact" },
              { label: "Secure FAQ", path: "/pricing" },
              { label: "Terms of Anonymity", path: "#" },
              { label: "Identity Policy", path: "#" },
            ],
          },
        ].map((col) => (
          <div key={col.title}>
            <h4 className="text-[10px] font-black text-[#8B9A71] uppercase tracking-[0.3em] mb-10">
              {col.title}
            </h4>
            <ul className="space-y-4">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-xs font-black text-white/30 hover:text-[#8B9A71] transition-all uppercase tracking-widest"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/5 py-10 mx-6 md:mx-12 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3 text-[9px] font-extrabold text-white/20 uppercase tracking-[0.2em]">
          <Lock size={12} className="text-[#8B9A71]" />
          © 2026 Life & You Coaching & Consulting.
        </div>
        <div className="flex gap-8">
           <LegalLink label="End-to-End Encryption" />
           <LegalLink label="Anonymity Protocol" />
           <LegalLink label="Portal Terms" />
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ icon: Icon }: { icon: any }) {
  return (
    <div className="w-10 h-10 border border-white/10 rounded-xl flex items-center justify-center text-white/30 hover:bg-[#8B9A71] hover:text-white hover:-translate-y-1 transition-all cursor-pointer">
       <Icon size={18} />
    </div>
  );
}

function LegalLink({ label }: { label: string }) {
  return (
    <span className="text-[9px] font-black text-white/20 uppercase tracking-widest hover:text-white transition-all cursor-pointer">
       {label}
    </span>
  );
}
