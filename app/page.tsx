"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import ServiceCarousel from "@/components/ServiceCarousel";

const services = [
  {
    title: "Custom Sheds",
    description: "Hand-crafted, durable sheds designed for utility and style. Built to your exact specifications.",
    image: "/CustomShed1.jpg",
  },
  {
    title: "Tiny Homes",
    description: "Modern, sustainable, and fully functional tiny home builds.",
    image: "/TinyHouse4.jpg",
  },
  {
    title: "Modern Fencing",
    description: "Sleek horizontal wood slats and secure fencing solutions.",
    media: [
      { type: "image", src: "/Screenshot 2026-03-29 at 2.31.58 PM.png" },
      { type: "image", src: "/Screenshot 2026-03-29 at 2.32.07 PM.png" },
      { type: "image", src: "/Screenshot 2026-03-29 at 2.32.16 PM.png" },
    ],
  },
  {
    title: "Kitchen Remodeling",
    description: "Transform your culinary space with high-end industrial finishes.",
    image: "/TinyHouse.avif",
  },
  {
    title: "Home Remodeling",
    description: "Comprehensive interior and exterior renovation services.",
    image: "/TinyHouse2.avif",
  },
  {
    title: "Modern Living Spaces",
    description: "Thoughtfully designed interiors that maximize comfort and style in any footprint.",
    media: [
      { type: "image", src: "/TinyHouse1.webp" },
      { type: "image", src: "/TinyHouse2.webp" },
    ],
  },
];

const galleryImages = [
  "/CustomShed1.jpg",
  "/TinyHouse4.jpg",
  "/Screenshot 2026-03-29 at 2.31.58 PM.png",
  "/TinyHouse.avif",
  "/TinyHouse2.avif",
  "/Screenshot 2026-03-29 at 2.32.07 PM.png",
];

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center">
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-3 group"
            >
              <div className="relative w-10 h-10 overflow-hidden rounded-lg bg-white p-1 shadow-sm border border-stone-100 group-hover:border-amber-200 transition-colors">
                <Image 
                  src="/favicon.ico" 
                  alt="DIY Projects Logo" 
                  fill 
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-serif font-bold tracking-tight text-stone-900 leading-none group-hover:text-amber-600 transition-colors">
                DIY PROJECTS
              </span>
            </a>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600 uppercase tracking-widest">
            <a href="https://www.facebook.com/diyprojectstacoma" target="_blank" className="hover:text-amber-600 transition-colors">Facebook</a>
            <a href="https://www.instagram.com/diy_projects2023" target="_blank" className="hover:text-amber-600 transition-colors">Instagram</a>
            <a href="#services" className="hover:text-amber-600 transition-colors">Services</a>
            <a href="#contact" className="bg-stone-900 text-white px-6 py-3 rounded-full hover:bg-amber-600 transition-all hover:shadow-lg">Call Us Today</a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative h-[85vh] flex items-center overflow-hidden bg-stone-900">
          <div className="absolute inset-0 z-0">
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover brightness-[0.4]"
            >
              <source src="/TinyHouse1Vid.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
            <div className="max-w-2xl">
              <h1 className="text-6xl md:text-7xl font-serif text-white mb-8 leading-[1.1]">
                You <span className="text-amber-500 italic">Nailed</span> It
              </h1>
              <p className="text-xl text-stone-200 mb-10 leading-relaxed font-light">
                Specializing in high-quality sheds, tiny homes, and complete home transformations. We build with integrity and precision.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="bg-amber-600 text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-amber-500 transition-all text-center shadow-xl hover:-translate-y-1">
                  Start Your Project
                </a>
                
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-32 bg-stone-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-20">
              <span className="text-amber-600 font-bold tracking-[0.3em] uppercase text-sm">Expertise</span>
              <h2 className="text-4xl md:text-5xl font-serif mt-4 text-stone-900">Some Ideas</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {services.map((service, index) => (
                <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-stone-100">
                  <div className="relative h-64 overflow-hidden">
                    {"media" in service ? (
                      <ServiceCarousel items={service.media as any} />
                    ) : (
                      <Image
                        src={(service as any).image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-serif mb-4 text-stone-900">{service.title}</h3>
                    <p className="text-stone-600 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <a href="#contact" className="text-amber-600 font-bold uppercase tracking-widest text-xs flex items-center gap-2 hover:gap-4 transition-all">
                      Inquire Now <span>&rarr;</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>



        {/* Contact Section */}
        <ContactForm />
      </main>

      {/* Footer */}
      <footer className="bg-stone-950 text-stone-500 py-12 border-t border-stone-800"> 
            <p className="text-xs text-center">
            © {new Date().getFullYear()} DIY Projects. All rights reserved.
            </p>
      </footer>
    </div>
  );
}
