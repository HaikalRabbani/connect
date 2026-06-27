"use client";

import { motion, useAnimationFrame } from "framer-motion";
import { useRef, useState } from "react";

const PROJECTS = [
  { id: 1, title: "The Silk Road", category: "E-commerce", img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=800", link: "https://example.com" },
  { id: 2, title: "Visi Studio", category: "Creative Agency", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800", link: "https://example.com" },
  { id: 3, title: "Harn Capital", category: "Corporate", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800", link: "https://example.com" },
  { id: 4, title: "Luxury Living", category: "Real Estate", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800", link: "https://example.com" },
];

const SERVICES = [
  { title: "Landing Page", price: "1.5jt ~ 3jt", features: ["Single Page Design", "Mobile Responsive", "Fast Loading", "WhatsApp Integration"] },
  { title: "Company Profile", price: "3.5jt ~ 7jt", features: ["Multi-page (5-10 Hal)", "CMS Integration", "Professional Branding", "SEO Optimized"] },
  { title: "Web App / System", price: "10jt+", features: ["Custom Architecture", "Complex Database", "API Integration", "Full Maintenance"] },
];

const TESTIMONIALS = [
  { text: "Harn tidak hanya membangun website, dia membangun identitas digital yang selama ini kami cari. Prosesnya sangat personal.", author: "Andra Pratama", title: "Founder of Visi Studio" },
  { text: "Website yang dibangun sangat kencang dan rapi. Benar-benar aset digital yang bisa kami banggakan di depan klien.", author: "Siti Rahma", title: "Marketing Director, Silk Road" },
];

const PROCESS = [
  { step: "01", title: "Discovery", desc: "Diskusi mendalam untuk memahami pondasi dan visi bisnis Anda." },
  { step: "02", title: "Architecture", desc: "Perancangan struktur dan estetika visual yang eksklusif." },
  { step: "03", title: "Construction", desc: "Proses koding menggunakan teknologi terbaru untuk performa maksimal." },
  { step: "04", title: "Celebration", desc: "Penyerahan kunci rumah digital Anda dan panduan pengelolaan." },
];

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Hybrid Scroll Logic
  useAnimationFrame(() => {
    if (!containerRef.current || isPaused) return;
    containerRef.current.scrollLeft += 0.5;
    if (containerRef.current.scrollLeft >= containerRef.current.scrollWidth / 2) {
      containerRef.current.scrollLeft = 0;
    }
  });

  const LOOP_PROJECTS = [...PROJECTS, ...PROJECTS];

  return (
    <main className="min-h-screen bg-offwhite dark:bg-midnight selection:bg-champagne selection:text-white">
      
      {/* 0. FLOATING NAVBAR */}
      <nav className="fixed top-0 w-full z-50 px-6 py-6 transition-all duration-300 backdrop-blur-sm bg-offwhite/80 dark:bg-midnight/80 border-b border-champagne/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-xl font-bold tracking-tighter dark:text-offwhite">
            Harn<span className="text-champagne">.</span>
          </div>
          <div className="hidden md:flex gap-10 items-center">
            <a href="#hero" className="text-[10px] font-bold tracking-[0.2em] uppercase hover:text-champagne transition-colors dark:text-offwhite">Home</a>
            <a href="#katalog" className="text-[10px] font-bold tracking-[0.2em] uppercase hover:text-champagne transition-colors dark:text-offwhite">Katalog</a>
            <a href="#investasi" className="text-[10px] font-bold tracking-[0.2em] uppercase hover:text-champagne transition-colors dark:text-offwhite">Investasi</a>
            <a href="https://wa.me/62895327052665" className="px-5 py-2 border border-champagne text-champagne text-[10px] font-bold rounded hover:bg-champagne hover:text-white transition-all uppercase tracking-widest">Kontak</a>
          </div>
          <div className="md:hidden text-champagne">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
          </div>
        </div>
      </nav>

      {/* 1. HERO SECTION */}
      <section id="hero" className="flex flex-col items-center justify-center text-center pt-48 pb-32 px-6">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-7xl font-medium leading-tight dark:text-offwhite"
        >
          Saatnya bisnis Anda <br />
          punya <span className="font-playfair italic text-champagne">rumah yang layak.</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-6 opacity-70 max-w-lg text-lg text-midnight dark:text-offwhite"
        >
          Membangun kehadiran digital yang merepresentasikan nilai eksklusif bisnis Anda.
        </motion.p>
        <motion.a 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="https://wa.me/62895327052665" 
          className="mt-10 px-8 py-4 bg-champagne text-white font-semibold rounded-md tracking-widest text-xs uppercase"
        >
          MULAI DISKUSI
        </motion.a>
      </section>

      {/* 2. KATALOG SECTION */}
      <section id="katalog" className="py-20 overflow-hidden">
        <div className="px-6 mb-12 max-w-7xl mx-auto">
          <span className="text-champagne text-xs font-semibold tracking-[0.2em] uppercase">Katalog Karya</span>
          <h2 className="text-3xl font-medium mt-2 dark:text-offwhite">Rumah Digital yang Telah Dibangun</h2>
        </div>
        <div 
          className="relative mask-edge"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <div 
            ref={containerRef}
            className="flex overflow-x-auto gap-8 px-6 py-4 scrollbar-hide cursor-grab active:cursor-grabbing select-none"
          >
            {LOOP_PROJECTS.map((project, index) => (
              <a key={`${project.id}-${index}`} href={project.link} target="_blank" rel="noopener noreferrer" className="flex-none w-[300px] md:w-[450px] group block">
                <div className="relative aspect-[16/10] bg-white dark:bg-neutral-900 border border-champagne/20 rounded-xl p-2 overflow-hidden transition-all duration-500 group-hover:border-champagne">
                  <div className="flex gap-1.5 mb-2.5 px-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-champagne/40" />
                    <div className="w-1.5 h-1.5 rounded-full bg-champagne/40" />
                    <div className="w-1.5 h-1.5 rounded-full bg-champagne/40" />
                  </div>
                  <div className="w-full h-full bg-cover bg-center rounded-md grayscale sepia-[0.2] brightness-[0.8] transition-all duration-700 group-hover:grayscale-0 group-hover:sepia-0 group-hover:brightness-100 group-hover:scale-105" style={{ backgroundImage: `url(${project.img})`, pointerEvents: 'none' }} />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-midnight/20">
                    <span className="bg-champagne text-white text-[10px] font-bold px-4 py-2 rounded tracking-widest uppercase">Visit Website</span>
                  </div>
                </div>
                <div className="mt-6 px-2">
                  <span className="text-[10px] text-champagne font-semibold tracking-widest uppercase">{project.category}</span>
                  <h3 className="text-xl font-medium mt-1 dark:text-offwhite">{project.title}</h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PRICING SECTION */}
      <section id="investasi" className="py-24 px-6 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-champagne text-xs font-semibold tracking-[0.2em] uppercase">Investasi</span>
            <h2 className="text-3xl font-medium mt-2 dark:text-offwhite">Layanan & Penawaran</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map((service, i) => (
              <motion.div key={i} whileHover={{ y: -10 }} className="bg-white dark:bg-neutral-900 p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 hover:border-champagne transition-colors">
                <h3 className="text-xl font-semibold text-champagne">{service.title}</h3>
                <div className="text-2xl font-bold mt-4 dark:text-offwhite">{service.price}</div>
                <ul className="mt-8 space-y-4">
                  {service.features.map((feature, j) => (
                    <li key={j} className="text-sm opacity-70 flex items-center gap-3 dark:text-offwhite"><span className="text-champagne">→</span> {feature}</li>
                  ))}
                </ul>
                <a href="https://wa.me/62895327052665" className="block text-center mt-10 py-3 border border-champagne text-champagne font-semibold rounded-md hover:bg-champagne hover:text-white transition-all text-sm">KONSULTASI PROYEK</a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* 4. TESTIMONIAL SECTION */}
      <section className="py-32 px-6 bg-offwhite dark:bg-midnight relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
            {TESTIMONIALS.map((testi, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.2 }} viewport={{ once: true }} className="group p-8 md:p-12 bg-white/50 dark:bg-neutral-900/30 backdrop-blur-sm rounded-2xl border border-champagne/10 hover:border-champagne/40 transition-all duration-500 gold-shadow">
                <div className="flex items-start gap-6">
                  <div className="w-1 h-24 bg-gradient-to-b from-champagne to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
                  <div className="flex-1">
                    <p className="font-playfair italic text-xl md:text-2xl leading-relaxed text-midnight dark:text-offwhite opacity-90 group-hover:opacity-100 transition-opacity">"{testi.text}"</p>
                    <div className="mt-10 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-champagne/10 border border-champagne/20 flex items-center justify-center text-champagne font-bold text-xs tracking-tighter">{testi.author.split(' ').map(n => n[0]).join('')}</div>
                      <div>
                        <div className="font-semibold text-sm tracking-[0.2em] uppercase text-midnight dark:text-offwhite">{testi.author}</div>
                        <div className="text-[10px] text-champagne mt-1 uppercase tracking-[0.15em] font-medium">{testi.title}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PROCESS SECTION (Solid Number Style) */}
      <section className="py-24 px-6 bg-offwhite dark:bg-midnight border-t border-neutral-100 dark:border-neutral-800">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <span className="text-champagne text-xs font-semibold tracking-[0.2em] uppercase">Membangun Rumah</span>
            <h2 className="text-4xl font-medium mt-2 text-midnight dark:text-white">Langkah Kerja Kami</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {PROCESS.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }} className="group">
                <div className="text-7xl font-bold text-midnight dark:text-white mb-6 group-hover:text-champagne transition-colors duration-500">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-champagne">{item.title}</h3>
                <p className="text-sm leading-relaxed text-midnight/60 dark:text-white/60">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FINAL CTA SECTION */}
      <section className="py-32 px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-medium dark:text-offwhite">Siap Memiliki <span className="font-playfair italic text-champagne">Rumah Digital</span> Anda?</h2>
        <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="https://wa.me/62895327052665" className="mt-12 inline-block px-10 py-5 bg-champagne text-white font-bold rounded-md tracking-[0.2em] text-xs uppercase">Hubungi Harn Sekarang</motion.a>
      </section>

      {/* 7. FOOTER */}
      <footer className="py-12 text-center border-t border-neutral-200 dark:border-neutral-800">
        <p className="text-xs tracking-widest opacity-40 dark:text-offwhite uppercase">connect.harn.web.id © 2026 | Crafted with Precision</p>
      </footer>
    </main>
  );
}
