import WaitlistForm from "@/components/WaitlistForm";

export default function Page() {
  return (
    <main className="min-h-screen bg-cream text-black font-sans">
      <nav className="border-b-4 border-black p-6 flex justify-between items-center bg-white sticky top-0 z-50">
        <div className="text-3xl font-bold font-mono tracking-tighter">SAVORA</div>
        <div className="hidden md:block font-mono font-bold uppercase tracking-widest">Est. 2026</div>
      </nav>

      <section className="grid md:grid-cols-2 border-b-4 border-black min-h-[80vh]">
        <div className="p-8 md:p-16 flex flex-col justify-center border-b-4 md:border-b-0 md:border-r-4 border-black">
          <div className="bg-[#FF006E] text-white px-4 py-1 font-mono font-bold inline-block w-fit mb-6 border-4 border-black shadow-[4px_4px_0_0_#000000]">
            COMING SUMMER 2026
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-none mb-6 uppercase font-mono">
            THE SHORTCUT TO <span className="text-[#FF006E] italic">SOMEWHERE ELSE</span>.
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-medium">
            Stop buying $12 jars of sumac for one teaspoon. We deliver the exact amount of single-origin spices and chef-verified instructions for a world-class Tuesday night.
          </p>
          
          <WaitlistForm />
        </div>
        
        <div className="bg-white flex items-center justify-center p-8 relative overflow-hidden">
          <div className="border-4 border-black shadow-[4px_4px_0_0_#000000] bg-cream w-full h-full min-h-[400px] relative overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2070&auto=format&fit=crop" 
              alt="Artisanal spice blends in sachets" 
              className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute top-4 left-4 bg-white border-4 border-black shadow-[4px_4px_0_0_#000000] px-4 py-2 font-mono font-bold text-sm">
              SICHUAN MAPO TOFU KIT
            </div>
          </div>
        </div>
      </section>

      <section className="border-b-4 border-black bg-white">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="p-12 border-b-4 md:border-b-0 md:border-r-4 border-black">
            <div className="text-6xl font-mono font-bold mb-4 text-[#FF006E]">01</div>
            <h2 className="text-3xl font-bold mb-4 uppercase font-mono">OPEN</h2>
            <p className="text-lg font-medium">Receive a USPS-optimized kit. No bulk packaging, no waste. Just the flavors you need for a single, perfect recipe.</p>
          </div>
          <div className="p-12 border-b-4 md:border-b-0 md:border-r-4 border-black">
            <div className="text-6xl font-mono font-bold mb-4 text-[#FF006E]">02</div>
            <h2 className="text-3xl font-bold mb-4 uppercase font-mono">POUR</h2>
            <p className="text-lg font-medium">Tear the compostable sachet. Our spices are single-origin and fresh-ground, not sitting in a warehouse for years.</p>
          </div>
          <div className="p-12">
            <div className="text-6xl font-mono font-bold mb-4 text-[#FF006E]">03</div>
            <h2 className="text-3xl font-bold mb-4 uppercase font-mono">COOK</h2>
            <p className="text-lg font-medium">Follow the 20-minute editorial recipe card. High-end international dinner on a weeknight schedule.</p>
          </div>
        </div>
      </section>

      <section className="bg-[#FF006E] p-8 md:p-24 border-b-4 border-black">
        <div className="bg-cream border-4 border-black shadow-[4px_4px_0_0_#000000] p-8 md:p-16 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center leading-none uppercase font-mono">EXACT PORTIONS.<br/>ZERO CLUTTER.</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <ul className="space-y-4 font-mono font-bold text-lg uppercase">
              <li className="flex items-center"><span className="mr-4 text-[#FF006E] text-2xl font-bold">×</span> NO $15 SPICE JARS</li>
              <li className="flex items-center"><span className="mr-4 text-[#FF006E] text-2xl font-bold">×</span> NO PLASTIC WASTE</li>
              <li className="flex items-center"><span className="mr-4 text-[#FF006E] text-2xl font-bold">×</span> NO "WHAT'S FOR DINNER?"</li>
            </ul>
            <ul className="space-y-4 font-mono font-bold text-lg uppercase">
              <li className="flex items-center"><span className="mr-4 text-green-600 text-2xl font-bold">✓</span> 20-MINUTE MEALS</li>
              <li className="flex items-center"><span className="mr-4 text-green-600 text-2xl font-bold">✓</span> COMPOSTABLE MATERIALS</li>
              <li className="flex items-center"><span className="mr-4 text-green-600 text-2xl font-bold">✓</span> SINGLE-ORIGIN TRACEABILITY</li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="p-12 text-center bg-black text-white">
        <div className="text-4xl font-mono font-bold mb-6 italic tracking-tighter">SAVORA</div>
        <p className="font-mono text-sm uppercase opacity-70 mb-4 tracking-widest">© 2026 SAVORA FOODS INC. // ALL RIGHTS RESERVED</p>
        <div className="flex justify-center gap-8 font-mono text-sm uppercase">
          <a href="#" className="hover:text-[#FF006E] underline underline-offset-4">INSTAGRAM</a>
          <a href="#" className="hover:text-[#FF006E] underline underline-offset-4">TIKTOK</a>
          <a href="#" className="hover:text-[#FF006E] underline underline-offset-4">CONTACT</a>
        </div>
      </footer>
    </main>
  );
}