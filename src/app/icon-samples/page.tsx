/*
  Icon Library Comparison — hand-drawn / sketch styles
  Shows the 4 feature icons (Patron, Catalog, Billing, Media) in each style
*/

const serif = "Georgia, 'Times New Roman', serif";

/* ── 1. Phosphor-style (Duotone) ── */
function PhosphorPatron() {
  return (
    <svg width="28" height="28" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path opacity="0.2" d="M128 24a56 56 0 1 0 0 112 56 56 0 0 0 0-112Z" fill="#4a8cc7"/>
      <circle cx="128" cy="80" r="56" stroke="#4a8cc7" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <path d="M35.7 218.4A96 96 0 0 1 128 160a96 96 0 0 1 92.3 58.4" stroke="#4a8cc7" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  );
}
function PhosphorBook() {
  return (
    <svg width="28" height="28" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path opacity="0.2" d="M128 88 40 48v152l88 40V88Z" fill="#8a8f6a"/>
      <path d="M128 88 40 48v152l88 40V88Zm0 0 88-40v152l-88 40V88Z" stroke="#8a8f6a" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  );
}
function PhosphorBilling() {
  return (
    <svg width="28" height="28" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path opacity="0.2" d="M24 80h208v128H24z" fill="#c2ad6e"/>
      <rect x="24" y="56" width="208" height="152" rx="8" stroke="#c2ad6e" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <line x1="168" y1="168" x2="200" y2="168" stroke="#c2ad6e" strokeWidth="12" strokeLinecap="round"/>
      <line x1="120" y1="168" x2="136" y2="168" stroke="#c2ad6e" strokeWidth="12" strokeLinecap="round"/>
      <line x1="24" y1="104" x2="232" y2="104" stroke="#c2ad6e" strokeWidth="12"/>
    </svg>
  );
}
function PhosphorMedia() {
  return (
    <svg width="28" height="28" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path opacity="0.2" d="M128 24a104 104 0 1 0 0 208 104 104 0 0 0 0-208Z" fill="#4a8cc7"/>
      <circle cx="128" cy="128" r="104" stroke="#4a8cc7" strokeWidth="12" fill="none"/>
      <circle cx="128" cy="128" r="40" stroke="#4a8cc7" strokeWidth="12" fill="none"/>
      <circle cx="128" cy="128" r="8" fill="#4a8cc7"/>
    </svg>
  );
}

/* ── 2. Lucide-style (clean strokes) ── */
function LucidePatron() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4a8cc7" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
      <circle cx="12" cy="7" r="4"/>
    </svg>
  );
}
function LucideBook() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#8a8f6a" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
    </svg>
  );
}
function LucideBilling() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#c2ad6e" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
    </svg>
  );
}
function LucideMedia() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4a8cc7" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/>
    </svg>
  );
}

/* ── 3. Tabler-style (1px strokes, sketch feel) ── */
function TablerPatron() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4a8cc7" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="7" r="4"/><path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/>
    </svg>
  );
}
function TablerBook() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#8a8f6a" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 19a9 9 0 0 1 9-9 9 9 0 0 1 9 9"/><path d="M3 6a9 9 0 0 1 9-3 9 9 0 0 1 9 3"/><path d="M12 3v16"/>
    </svg>
  );
}
function TablerBilling() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#c2ad6e" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2"/><line x1="3" y1="10" x2="21" y2="10"/><line x1="7" y1="15" x2="7.01" y2="15"/><line x1="11" y1="15" x2="13" y2="15"/>
    </svg>
  );
}
function TablerMedia() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4a8cc7" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="1"/><circle cx="12" cy="12" r="5"/>
    </svg>
  );
}

/* ── 4. Custom hand-drawn (wobbly strokes) ── */
function HandPatron() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="14" cy="9" r="5" stroke="#4a8cc7" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="0.5 0" style={{ filter: "url(#wobble)" }}/>
      <path d="M5 25c0-5 4-9 9-9s9 4 9 9" stroke="#4a8cc7" strokeWidth="1.5" strokeLinecap="round" style={{ filter: "url(#wobble)" }}/>
      <defs><filter id="wobble"><feTurbulence baseFrequency="0.04" numOctaves="3" seed="1" result="noise"/><feDisplacementMap in="SourceGraphic" in2="noise" scale="1.2" xChannelSelector="R" yChannelSelector="G"/></filter></defs>
    </svg>
  );
}
function HandBook() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 4c0 0 3-1 9-1s9 1 9 1v20s-3-1-9-1-9 1-9 1V4Z" stroke="#8a8f6a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ filter: "url(#wobble2)" }}/>
      <path d="M14 3v21" stroke="#8a8f6a" strokeWidth="1.5" strokeLinecap="round" style={{ filter: "url(#wobble2)" }}/>
      <defs><filter id="wobble2"><feTurbulence baseFrequency="0.05" numOctaves="2" seed="3" result="n"/><feDisplacementMap in="SourceGraphic" in2="n" scale="1" xChannelSelector="R" yChannelSelector="G"/></filter></defs>
    </svg>
  );
}
function HandBilling() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="6" width="20" height="16" rx="2" stroke="#c2ad6e" strokeWidth="1.5" strokeLinecap="round" style={{ filter: "url(#wobble3)" }}/>
      <line x1="4" y1="12" x2="24" y2="12" stroke="#c2ad6e" strokeWidth="1.5" style={{ filter: "url(#wobble3)" }}/>
      <line x1="17" y1="18" x2="21" y2="18" stroke="#c2ad6e" strokeWidth="1.5" strokeLinecap="round" style={{ filter: "url(#wobble3)" }}/>
      <defs><filter id="wobble3"><feTurbulence baseFrequency="0.04" numOctaves="3" seed="5" result="n"/><feDisplacementMap in="SourceGraphic" in2="n" scale="1.2" xChannelSelector="R" yChannelSelector="G"/></filter></defs>
    </svg>
  );
}
function HandMedia() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="14" cy="14" r="10" stroke="#4a8cc7" strokeWidth="1.5" style={{ filter: "url(#wobble4)" }}/>
      <circle cx="14" cy="14" r="4" stroke="#4a8cc7" strokeWidth="1.5" style={{ filter: "url(#wobble4)" }}/>
      <circle cx="14" cy="14" r="1.5" fill="#4a8cc7"/>
      <defs><filter id="wobble4"><feTurbulence baseFrequency="0.04" numOctaves="3" seed="7" result="n"/><feDisplacementMap in="SourceGraphic" in2="n" scale="1" xChannelSelector="R" yChannelSelector="G"/></filter></defs>
    </svg>
  );
}

const styles = [
  { name: "Phosphor (Duotone)", desc: "Filled + stroked. Warm, crafted feel.", icons: [PhosphorPatron, PhosphorBook, PhosphorBilling, PhosphorMedia] },
  { name: "Lucide (Clean)", desc: "Thin strokes. Pairs well with serif type.", icons: [LucidePatron, LucideBook, LucideBilling, LucideMedia] },
  { name: "Tabler (Light)", desc: "1px strokes. Sketch-like quality.", icons: [TablerPatron, TablerBook, TablerBilling, TablerMedia] },
  { name: "Custom Hand-drawn", desc: "Wobbly SVG strokes. Truly bespoke.", icons: [HandPatron, HandBook, HandBilling, HandMedia] },
];

const labels = ["Patron", "Catalog", "Billing", "Media"];

export default function IconSamples() {
  return (
    <div className="min-h-screen bg-[#f7f5f0] py-[55px] px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-[29px] text-[#3d3626] mb-[8px]" style={{ fontFamily: serif }}>Icon Library Comparison</h1>
        <p className="text-[14px] text-[#8a7e6b] mb-[55px]">Four styles shown with the feature icons from the homepage.</p>

        <div className="space-y-[34px]">
          {styles.map((style) => (
            <div key={style.name} className="p-[34px] bg-white/80 rounded-xl border border-[#e0d9c8]">
              <h2 className="text-[18px] font-medium text-[#3d3626] mb-[3px]" style={{ fontFamily: serif }}>{style.name}</h2>
              <p className="text-[13px] text-[#8a7e6b] mb-[21px]">{style.desc}</p>
              <div className="grid grid-cols-4 gap-[21px]">
                {style.icons.map((Icon, i) => (
                  <div key={i} className="flex flex-col items-center gap-[13px] p-[21px] bg-[#f7f5f0] rounded-lg border border-[#e8e2d4]">
                    <div className="w-[48px] h-[48px] rounded-lg bg-[#ede8dc] border border-[#e0d9c8] flex items-center justify-center">
                      <Icon />
                    </div>
                    <span className="text-[11px] uppercase tracking-[0.2em] text-[#a09279]">{labels[i]}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
