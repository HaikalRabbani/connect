"use client";

import { motion, useAnimationFrame } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

export default function ClientPage({ projects, services, testimonials, process }: any) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Animasi Looping Marquee untuk Katalog
    useAnimationFrame(() => {
    if (!containerRef.current || isPaused || projects.length === 0) return;

    // Kecepatan jalan (0.5 pixel per frame)
    containerRef.current.scrollLeft += 0.5;

    // Logika Reset: 
    // Jika scroll sudah melewati 1/3 dari total lebar (karena kita melipatgandakan data), 
    // kita kembalikan ke awal secara instan.
    const scrollThreshold = containerRef.current.scrollWidth / 4; 
    if (containerRef.current.scrollLeft >= scrollThreshold * 2) {
      containerRef.current.scrollLeft = 0;
    }
  });


  const LOOP_PROJECTS = [...projects, ...projects, ...projects, ...projects];

  return (
    <main className="min-h-screen bg-offwhite dark:bg-midnight selection:bg-champagne selection:text-white">
      
      {/* 0. NAVBAR */}
      <nav className="fixed top-0 w-full z-50 px-6 py-6 backdrop-blur-md bg-offwhite/80 dark:bg-midnight/80 border-b border-champagne/10 transition-all">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-xl font-bold tracking-tighter dark:text-offwhite font-poppins">
            Harn<span className="text-champagne">.</span>
          </div>
          <div className="hidden md:flex gap-10 items-center font-poppins">
            <a href="#hero" className="text-[10px] font-bold tracking-[0.2em] uppercase hover:text-champagne transition-colors dark:text-offwhite">Home</a>
            <a href="#katalog" className="text-[10px] font-bold tracking-[0.2em] uppercase hover:text-champagne transition-colors dark:text-offwhite">Katalog</a>
            <a href="#investasi" className="text-[10px] font-bold tracking-[0.2em] uppercase hover:text-champagne transition-colors dark:text-offwhite">Investasi</a>
            <a href="https://wa.me/62895327052665" className="px-5 py-2 border border-champagne text-champagne text-[10px] font-bold rounded hover:bg-champagne hover:text-white transition-all uppercase tracking-widest">Kontak</a>
          </div>
        </div>
      </nav>

      {/* 1. HERO SECTION */}
      <section id="hero" className="flex flex-col items-center justify-center text-center pt-56 pb-32 px-6">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-7xl font-poppins font-medium leading-tight dark:text-offwhite">
          Saatnya bisnis Anda <br /> punya <span className="font-playfair italic text-champagne">rumah yang layak.</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-8 opacity-60 max-w-lg text-lg dark:text-offwhite font-poppins font-light leading-relaxed">
          Membangun kehadiran digital yang merepresentasikan nilai eksklusif bisnis Anda.
        </motion.p>
        <div className="mt-12">
          <a href="https://wa.me/62895327052665" className="px-10 py-5 bg-champagne text-white font-poppins font-bold rounded-full tracking-widest text-xs uppercase hover:scale-105 transition-transform inline-block shadow-lg shadow-champagne/20">
            Mulai Diskusi Proyek
          </a>
        </div>
      </section>

      {/* 2. KATALOG SECTION */}
      <section id="katalog" className="py-24 overflow-hidden">
        <div className="px-6 mb-16 max-w-7xl mx-auto">
          <span className="text-champagne text-xs font-poppins font-semibold tracking-[0.3em] uppercase">Katalog Karya</span>
          <h2 className="text-3xl md:text-4xl font-poppins font-medium mt-3 dark:text-offwhite">Arsitektur Digital</h2>
        </div>

        <div className="relative mask-edge" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
          <div ref={containerRef} className="flex overflow-x-auto gap-10 px-6 py-4 scrollbar-hide cursor-grab active:cursor-grabbing select-none">
            {LOOP_PROJECTS.map((project: any, index: number) => (
              <a key={index} href={project.link || "#"} target="_blank" className="flex-none w-[320px] md:w-[500px] group block">
                <div className="relative aspect-[16/10] bg-white dark:bg-neutral-900 border border-champagne/10 rounded-2xl p-3.5 overflow-hidden transition-all duration-700 group-hover:border-champagne/50 shadow-md">
                  <div className="flex gap-2 mb-4 px-1">
                    <div className="w-2 h-2 rounded-full bg-champagne shadow-[0_0_8px_rgba(197,160,89,0.4)]" />
                    <div className="w-2 h-2 rounded-full bg-champagne/60" />
                    <div className="w-2 h-2 rounded-full bg-champagne/40" />
                  </div>
                  <div className="w-full h-full bg-cover bg-center rounded-lg grayscale sepia-[0.1] brightness-[0.9] transition-all duration-1000 group-hover:grayscale-0 group-hover:sepia-0 group-hover:brightness-100 group-hover:scale-105" style={{ backgroundImage: `url(${project.img})`, pointerEvents: 'none' }} />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-midnight/30 backdrop-blur-[2px]">
                    <span className="bg-white text-midnight text-[10px] font-poppins font-bold px-6 py-2.5 rounded-full tracking-widest uppercase flex items-center gap-2 shadow-lg">
                      Visit Site <ArrowRight size={12}/>
                    </span>
                  </div>
                </div>
                <div className="mt-8 px-2 font-poppins">
                  <span className="text-[10px] text-champagne font-bold tracking-[0.2em] uppercase">{project.category}</span>
                  <h3 className="text-2xl font-medium mt-2 dark:text-offwhite">{project.title}</h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 3. INVESTASI SECTION */}
      <section id="investasi" className="py-32 px-6 bg-[#EBE7E0] dark:bg-neutral-900/40 transition-colors duration-500">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <span className="text-champagne text-xs font-poppins font-semibold tracking-[0.3em] uppercase">Investasi</span>
          <h2 className="text-4xl font-poppins font-medium mt-4 dark:text-offwhite">Layanan & Penawaran</h2>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service: any, i: number) => (
            <motion.div key={i} whileHover={{ y: -12 }} className="bg-white dark:bg-neutral-900 p-10 rounded-3xl border border-neutral-100 dark:border-neutral-800 hover:border-champagne/50 transition-all shadow-sm">
              <h3 className="text-xl font-poppins font-bold text-champagne">{service.title}</h3>
              <div className="text-3xl font-poppins font-bold mt-4 dark:text-offwhite">{service.price}</div>
              <ul className="mt-8 space-y-5">
                {service.features.map((f: string, j: number) => (
                  <li key={j} className="text-sm opacity-60 flex items-center gap-3 dark:text-offwhite font-light"><div className="w-1 h-1 rounded-full bg-champagne" /> {f}</li>
                ))}
              </ul>
              <a href="https://wa.me/62895327052665" className="block text-center mt-12 py-4 border border-champagne/30 text-champagne font-bold rounded-xl hover:bg-champagne hover:text-white transition-all text-xs tracking-widest uppercase">Pilih Layanan</a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. TESTIMONIAL SECTION (COMMENT) */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            {testimonials.map((testi: any, i: number) => (
              <div key={i} className="group flex items-start gap-8">
                <div className="w-1 h-32 bg-gradient-to-b from-champagne to-transparent opacity-30 group-hover:opacity-100 transition-opacity" />
                <div className="flex-1">
                  <p className="font-playfair italic text-2xl md:text-3xl leading-relaxed text-midnight dark:text-offwhite opacity-80">"{testi.text}"</p>
                  <div className="mt-12 font-poppins">
                    <div className="font-bold text-sm tracking-[0.2em] uppercase dark:text-offwhite">{testi.author}</div>
                    <div className="text-[10px] text-champagne mt-1.5 uppercase tracking-[0.2em] font-semibold">{testi.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PROCESS SECTION (KUNCI WARNA SOLID) */}
      <section className="py-32 px-6 border-t border-neutral-100 dark:border-neutral-800">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24">
            <span className="text-champagne text-xs font-poppins font-semibold tracking-[0.3em] uppercase">Membangun Rumah</span>
            <h2 className="text-4xl font-poppins font-medium mt-4 dark:text-white">Langkah Kerja Kami</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 font-poppins">
            {process.map((item: any, i: number) => (
              <div key={i} className="group">
                {/* ANGKA SOLID: Tidak pakai opacity rendah lagi */}
                <div className="text-7xl font-bold text-midnight dark:text-white mb-8 group-hover:text-champagne transition-colors duration-500">
                  {item.step}
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-champagne tracking-tight">{item.title}</h3>
                <p className="text-sm leading-relaxed text-midnight/60 dark:text-white/60 font-light">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* 6. FINAL CTA & FOOTER */}
      <section className="py-40 px-6 text-center bg-[#EBE7E0] dark:bg-midnight transition-colors duration-500">
        <h2 className="text-4xl md:text-6xl font-poppins font-medium dark:text-white text-midnight">Siap Memiliki <span className="font-playfair italic text-champagne">Rumah Digital</span> Anda?</h2>
        <a href="https://wa.me/62895327052665" className="mt-14 inline-block px-12 py-6 bg-champagne text-white font-bold rounded-full tracking-[0.2em] text-xs uppercase shadow-2xl shadow-champagne/20 hover:scale-105 transition-transform">Hubungi Harn Sekarang</a>
      </section>
      
      <footer className="py-12 text-center bg-[#EBE7E0] dark:bg-midnight border-t border-midnight/5 dark:border-white/5 font-poppins">
        <p className="text-[10px] tracking-[0.3em] opacity-30 dark:text-white text-midnight uppercase font-medium">connect.harn.web.id © 2026 | Crafted with Precision</p>
      </footer>
    </main>
  );
}
