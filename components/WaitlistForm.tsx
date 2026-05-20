"use client";

import { useState } from "react";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus("loading");

    try {
      const res = await fetch('https://app.baget.ai/api/public/databases/savora-waitlist-522/rows', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: { email, source: 'landing-page' } })
      });

      if (res.ok) {
        setStatus("success");
      } else {
        throw new Error();
      }
    } catch (err) {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-black text-white p-6 brutal-border brutal-shadow font-mono text-xl text-center mt-8">
        YOU'RE ON THE LIST. SEE YOU IN THE KITCHEN.
      </div>
    );
  }

  return (
    <div className="mt-8 max-w-md">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="relative group">
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="ENTER YOUR EMAIL" 
            className="w-full p-6 brutal-border text-lg font-mono focus:outline-none focus:bg-white bg-cream transition-colors placeholder:text-black/50"
            required
          />
        </div>
        <button 
          type="submit"
          disabled={status === "loading"}
          className="bg-black text-white p-6 brutal-border brutal-shadow brutal-shadow-hover brutal-shadow-active font-mono font-bold text-xl uppercase tracking-tighter disabled:opacity-50"
        >
          {status === "loading" ? "HOLD ON..." : "JOIN THE WAITLIST"}
        </button>
        {status === "error" && (
          <p className="font-mono text-xs text-accent font-bold mt-2">SOMETHING WENT WRONG. TRY AGAIN.</p>
        )}
      </form>
      <p className="mt-4 font-mono text-xs opacity-60 uppercase tracking-widest">
        JOIN 1,248+ HOME COOKS WAITING FOR LAUNCH
      </p>
    </div>
  );
}