const fs = require('fs');
const glob = require('glob');

const files = glob.sync('src/app/pages/**/*.tsx');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  const markerStart = '{/* Cinematic Header - Mobile Only */}';
  
  if (content.includes(markerStart)) {
    const parts = content.split(markerStart);
    let modified = false;
    
    for (let i = 1; i < parts.length; i++) {
      const block = parts[i];
      // Find the end of this block by finding the first {/* or Desktop Only marker, or looking for the closing div
      
      // We know the block starts with:
      // <div className="lg:hidden relative">
      // and ends with </div></div></div>
      
      // We can extract h1 and p
      const h1Match = block.match(/<h1.*?>([\s\S]*?)<\/h1>/);
      const pMatch = block.match(/<p.*?>([\s\S]*?)<\/p>/);
      
      if (h1Match && pMatch) {
        const h1Text = h1Match[1].replace(/style=\{\{.*?\}\}/g, '').trim();
        const pText = pMatch[1].replace(/!text-\[.*?\]/g, '').trim();
        
        // Find the index where this block ends. A simple heuristic is finding the next <div or <section that is at the root level of the return, or just find the end of the div.
        // It's easier to find the </div>\n      </div>
        const endRegex = /<\/div>\s*<\/div>\s*<\/div>/;
        const endMatch = endRegex.exec(block);
        
        if (endMatch) {
          const endIndex = endMatch.index + endMatch[0].length;
          const remaining = block.substring(endIndex);
          
          const newHeader = `
      {/* Compact Header - Mobile Only */}
      <div className="lg:hidden bg-[#2D3324] text-white px-6 py-6 rounded-b-[40px] relative overflow-hidden flex items-center gap-4 shadow-xl z-20">
         <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFFFFF]/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-50 pointer-events-none" />
         <button 
            onClick={() => navigate(-1)}
            className="relative z-20 w-10 h-10 bg-[#FFFFFF]/10 backdrop-blur-md rounded-xl flex items-center justify-center text-white border border-[#FFFFFF]/10 active:scale-95 transition-all shrink-0"
         >
            <ChevronLeft size={20} />
         </button>
         <div className="relative z-10 flex-1">
            <h1 className="text-xl font-black tracking-tight leading-none text-[#FFFFFF]">${h1Text}</h1>
            <p className="text-[#8B9A71] text-[9px] font-black uppercase tracking-[0.2em] mt-1">${pText}</p>
         </div>
      </div>
          `;
          
          parts[i] = newHeader + remaining;
          modified = true;
        }
      }
    }
    
    if (modified) {
      fs.writeFileSync(file, parts.join(''));
      console.log(`Updated ${file}`);
    }
  }
});
