import { Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ 
  subsets: ["latin"], 
  weight: ["400", "500", "600"],
  variable: "--font-poppins" 
});

const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  style: ["italic"],
  variable: "--font-playfair" 
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${poppins.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
