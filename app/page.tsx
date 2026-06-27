import { createClient } from "next-sanity";
import { projectId, dataset, apiVersion } from "@/sanity/env";
import ClientPage from "./ClientPage";

// 1. KONFIGURASI CLIENT SANITY
const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
});

// 2. FUNGSI AMBIL DATA (SERVER SIDE)
async function getProjects() {
  const query = `*[_type == "project"]{
    "id": _id,
    title,
    category,
    "img": image.asset->url,
    link
  }`;
  return await client.fetch(query);
}

// 3. KOMPONEN UTAMA (SERVER COMPONENT)
export default async function Home() {
  const projectsFromSanity = await getProjects();

  // Data Layanan & Proses tetap statis (bisa dipindah ke Sanity nanti)
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

  return (
    <ClientPage 
      projects={projectsFromSanity} 
      services={SERVICES} 
      testimonials={TESTIMONIALS} 
      process={PROCESS} 
    />
  );
}
