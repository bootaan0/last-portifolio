import About from "@/components/About";
import Experience from "@/components/Experience";
import Expert from "@/components/expert";
import Footer from "@/components/Footer";
import FooterOne from "@/components/footerOne";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Technology from "@/components/Technology";
import Image from "next/image";

export default function Home() {
  return (
   <main className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-900
    selection:text-cyan-900 ">

    <div className="fixed top-0 -z-10 h-full w-full">
    <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
  
    </div>
   
    <div className="container mx-auto px-8">
    <Navbar />
    <Hero />
    <Experience />
    <Technology />
    <FooterOne />
    </div>

   </main>
  );
}
