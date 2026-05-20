import WaitlistForm from "@/components/WaitlistForm";
import { ChevronRight, Globe, Leaf, Zap } from "lucide-react";

// Final Database ID for waitlist signups
const DB_ID = "db_signups_8822"; 

export default function LandingPage() {
  return (
    <main className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full max-w-7xl px-6 pt-24 pb-32 text-center">
        <div className="inline-block px-3 py-1 mb-6 border border-[#B25D39]/30 rounded-full">
          <span className="text-[#B25D39] text-[10px] uppercase tracking-[0.3em] font-mono">
            Launching June 2026
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl font-mono uppercase tracking-tighter text-white mb-6">
          Global Flavor.<br />
          <span className="text-[#B25D39]">Zero Clutter.</span>
        </h1>
        <p className="text-[#6B7280] text-lg md:text-xl max-w-2xl mx-auto mb-12 font-sans leading-relaxed">
          Authentic pre-portioned spice kits for weeknight dinners. No more buying 
          full jars for a single recipe. Just the hero spices you need, exactly when you need them.
        </p>
        
        <WaitlistForm dbId={DB_ID} />
      </section>

      {/* Hero Image Section */}
      <section className="w-full max-w-5xl px-6 mb-32">
        <div className="rounded-2xl overflow-hidden border border-[#1A2035] shadow-2xl shadow-[#B25D39]/10">
          <img 
            src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=1200" 
            alt="Savora Global Hero Kit" 
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* Feature Grid */}
      <section className="w-full bg-[#0A0E1A]/50 border-y border-[#1A2035] py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col gap-4">
            <Zap className="text-[#B25D39]" size={32} />
            <h3 className="font-mono text-xl uppercase text-white">Precision Portioned</h3>
            <p className="text-[#6B7280] text-sm leading-relaxed">
              Every kit contains the exact measurement of fresh-ground spices for one recipe. No waste, no measuring, no pantry guilt.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <Globe className="text-[#4A5D4E]" size={32} />
            <h3 className="font-mono text-xl uppercase text-white">The Global Hero Series</h3>
            <p className="text-[#6B7280] text-sm leading-relaxed">
              Starting with Thai Green Curry, Moroccan Tagine, and Szechuan Mapo Tofu. Authentic ingredients sourced from origin.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <Leaf className="text-[#E8B85E]" size={32} />
            <h3 className="font-mono text-xl uppercase text-white">100% Compostable</h3>
            <p className="text-[#6B7280] text-sm leading-relaxed">
              Zero plastic. Our sachets are made from home-compostable wood pulp. Earth-friendly flavor delivered to your door.
            </p>
          </div>
        </div>
      </section>

      {/* Preview Section */}
      <section className="w-full max-w-7xl px-6 py-32">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <h2 className="text-4xl font-mono uppercase text-white">The Flatpack Experience</h2>
            <p className="text-[#6B7280] leading-relaxed">
              Our kits are designed to fit through your letterbox. Each pack includes:
            </p>
            <ul className="space-y-4">
              {["High-barrier compostable sachets", "Step-by-step recipe card", "QR-coded cook-along playlist", "Premium organic whole-ground spices"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-[#6B7280] font-mono">
                  <ChevronRight size={16} className="text-[#B25D39]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 w-full aspect-square bg-[#1A2035] rounded-lg overflow-hidden relative border border-[#1A2035]">
            <img 
              src="https://images.unsplash.com/photo-1506368249639-73a05d6f6488?auto=format&fit=crop&q=80&w=1000" 
              alt="Savora Spices" 
              className="object-cover opacity-60 hover:opacity-100 transition-opacity duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E1A] to-transparent" />
            <div className="absolute bottom-6 left-6">
              <span className="font-mono text-xs uppercase tracking-widest text-[#B25D39]">Hero Series 01</span>
              <p className="text-white font-mono text-xl uppercase">Thai Green Curry</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-12 border-t border-[#1A2035] text-center">
        <p className="text-[#6B7280] text-[10px] font-mono uppercase tracking-widest">
          Savora &copy; 2026 / Built for modern kitchens
        </p>
      </footer>
    </main>
  );
}
