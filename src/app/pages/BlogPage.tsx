import { useState } from "react";
import { Search, Filter, ArrowRight, Book, Clock, Person, HeartFill } from "react-bootstrap-icons";
import { Link } from "react-router";

export function BlogPage() {
  const [category, setCategory] = useState("All");

  const posts = [
    { id: 1, title: "The Stoic Approach to Modern Anxiety", excerpt: "How ancient wisdom can help us navigate the digital chaos of the 21st century.", author: "Coach Sharma", date: "April 12, 2026", readTime: "5 min", category: "Mindfulness", img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=60" },
    { id: 2, title: "Rewiring Your Morning Protocol", excerpt: "The science of circadian rhythms and why your first hour defines your entire day.", author: "Elena Rodriguez", date: "April 08, 2026", readTime: "8 min", category: "Wellness", img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&auto=format&fit=crop&q=60" },
    { id: 3, title: "The Career Pivot Sanctuary", excerpt: "Identifying when it's time to transition and how to do it without losing your peace.", author: "John Doe", date: "April 02, 2026", readTime: "6 min", category: "Career", img: "https://images.unsplash.com/photo-1493612276216-ee3925520721?w=800&auto=format&fit=crop&q=60" },
  ];

  const filteredPosts = category === "All" ? posts : posts.filter(p => p.category === category);

  return (
    <div className="animate-in fade-in duration-1000 pb-20">
      {/* Hero Section */}
      <div className="bg-sage pt-24 pb-32 px-6 relative overflow-hidden">
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-[120px] pointer-events-none" />
         <div className="max-w-7xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-8 border border-white/10">
               <Book size={14} /> The Sanctuary Insights
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-tight font-serif mb-6">
               Wisdom for the <br className="hidden md:block" /> Modern Soul
            </h1>
            <p className="max-w-2xl mx-auto text-white/60 text-sm md:text-base font-medium leading-relaxed">
               Explore curated articles, expert perspectives, and actionable protocols designed to elevate your mental and emotional wellbeing.
            </p>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-12 relative z-20">
         {/* Filter Bar */}
         <div className="bg-white rounded-[32px] p-4 shadow-premium border border-sage/5 flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-16">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-hide px-2">
               {["All", "Mindfulness", "Wellness", "Career", "Relationships"].map((cat) => (
                  <button 
                     key={cat}
                     onClick={() => setCategory(cat)}
                     className={`px-8 py-3.5 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${category === cat ? 'bg-sage-dark text-white shadow-xl' : 'text-sage-dark/40 hover:bg-sage/10 hover:text-sage-dark'}`}
                  >
                     {cat}
                  </button>
               ))}
            </div>
            
            <div className="relative flex-1 lg:max-w-md px-2">
               <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-sage-dark/30" size={18} />
               <input 
                  type="text" 
                  placeholder="Search insights..." 
                  className="w-full bg-cream/30 border border-sage/5 pl-14 pr-6 py-4 rounded-2xl text-[11px] font-bold uppercase tracking-widest outline-none focus:bg-white focus:border-sage transition-all shadow-inner"
               />
            </div>
         </div>

         {/* Blog Grid */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredPosts.map((post) => (
               <article key={post.id} className="group cursor-pointer">
                  <div className="relative aspect-[4/3] rounded-[40px] overflow-hidden mb-8 shadow-premium">
                     <img 
                        src={post.img} 
                        alt={post.title} 
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                     />
                     <div className="absolute top-6 left-6">
                        <span className="px-4 py-2 bg-white/90 backdrop-blur-md rounded-xl text-[9px] font-black uppercase tracking-widest text-sage-dark">
                           {post.category}
                        </span>
                     </div>
                  </div>
                  
                  <div className="px-2">
                     <div className="flex items-center gap-4 text-[10px] font-black text-sage-dark/30 uppercase tracking-widest mb-4">
                        <span className="flex items-center gap-1.5"><Clock size={12} /> {post.readTime}</span>
                        <span className="w-1 h-1 bg-gold rounded-full" />
                        <span>{post.date}</span>
                     </div>
                     <h2 className="text-2xl font-bold text-sage-dark font-serif mb-4 group-hover:text-sage transition-colors leading-snug">
                        {post.title}
                     </h2>
                     <p className="text-sm text-sage-dark/60 font-medium leading-relaxed mb-8 line-clamp-2">
                        {post.excerpt}
                     </p>
                     
                     <div className="flex items-center justify-between pt-6 border-t border-sage/5">
                        <div className="flex items-center gap-3">
                           <div className="w-8 h-8 bg-cream rounded-full flex items-center justify-center text-sage-dark font-bold text-[10px]">
                              {post.author.split(' ').map(n => n[0]).join('')}
                           </div>
                           <span className="text-[10px] font-bold text-sage-dark/60 uppercase tracking-widest">{post.author}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sage group-hover:translate-x-2 transition-transform">
                           <span className="text-[10px] font-black uppercase tracking-widest">Read More</span>
                           <ArrowRight size={14} />
                        </div>
                     </div>
                  </div>
               </article>
            ))}
         </div>

         {/* Newsletter CTA */}
         <div className="mt-32 bg-sage-dark rounded-[60px] p-12 lg:p-20 text-white relative overflow-hidden text-center shadow-premium">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-50" />
            <div className="max-w-xl mx-auto relative z-10">
               <HeartFill size={40} className="text-gold mx-auto mb-8 animate-pulse" />
               <h2 className="text-3xl lg:text-4xl font-bold font-serif mb-6">Stay Centered</h2>
               <p className="text-white/60 text-sm font-medium mb-10 leading-relaxed">
                  Join 5,000+ others receiving our weekly "Sanctuary Sunday" protocols for mental clarity and emotional resilience.
               </p>
               <div className="flex flex-col md:flex-row gap-4">
                  <input 
                     type="email" 
                     placeholder="Enter your email" 
                     className="flex-1 bg-white/10 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:bg-white/20 transition-all text-sm"
                  />
                  <button className="bg-white text-sage-dark px-10 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-xl hover:bg-gold transition-all">
                     Subscribe
                  </button>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}
