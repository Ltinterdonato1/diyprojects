"use client";

import { useState, useRef, useEffect } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function ContactForm() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await addDoc(collection(db, "inquiries"), {
        ...formData,
        timestamp: serverTimestamp(),
      });
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Error adding document: ", error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover brightness-[0.3]"
        >
          <source src="/TinyHouse2Vid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-serif mb-6 text-amber-500">Let's Build Something Great</h2>
          <p className="text-stone-300 text-lg mb-8 leading-relaxed">
            Ready to start your next project? Whether it's a custom shed, a tiny home, or a full kitchen remodel, we're here to help. Reach out for a free consultation and quote.
          </p>
          <div className="space-y-4 text-stone-300">
            <div className="flex items-center gap-4">
              <span className="text-amber-500 font-bold w-12">CALL</span>
              <a href="tel:2066668062" className="hover:text-white transition-colors">206-666-8062</a>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-amber-500 font-bold w-12">EMAIL</span>
              <a href="mailto:newlauren.94@gmail.com" className="hover:text-white transition-colors">newlauren.94@gmail.com</a>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-amber-500 font-bold w-12">AREA</span>
              <span>Kennewick, WA & Surrounding Areas</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-stone-900/80 backdrop-blur-md p-8 rounded-lg shadow-2xl border border-white/10">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2 text-stone-400">Name</label>
              <input
                type="text"
                required
                className="w-full bg-stone-800 border-stone-700 rounded-md p-3 text-white focus:ring-2 focus:ring-amber-500 outline-none transition-all"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-stone-400">Phone</label>
              <input
                type="tel"
                required
                className="w-full bg-stone-800 border-stone-700 rounded-md p-3 text-white focus:ring-2 focus:ring-amber-500 outline-none transition-all"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-stone-400">Email</label>
            <input
              type="email"
              required
              className="w-full bg-stone-800 border-stone-700 rounded-md p-3 text-white focus:ring-2 focus:ring-amber-500 outline-none transition-all"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-stone-400">Project Description</label>
            <textarea
              required
              rows={4}
              className="w-full bg-stone-800 border-stone-700 rounded-md p-3 text-white focus:ring-2 focus:ring-amber-500 outline-none transition-all"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full bg-amber-600 hover:bg-amber-500 text-white font-bold py-4 rounded-md transition-colors disabled:opacity-50"
          >
            {status === "loading" ? "Sending..." : "Send Request"}
          </button>
          {status === "success" && (
            <p className="text-green-400 text-center">Your message has been sent successfully!</p>
          )}
          {status === "error" && (
            <p className="text-red-400 text-center">Something went wrong. Please try again.</p>
          )}
        </form>
      </div>
    </section>
  );
}
