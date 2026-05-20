"use client";

import { useState, useEffect } from "react";

export default function WaitlistForm({ dbId }: { dbId: string }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    async function fetchCount() {
      try {
        const res = await fetch(`https://app.baget.ai/api/public/databases/${dbId}/count`);
        if (res.ok) {
          const data = await res.json();
          setCount(data.count);
        }
      } catch (e) {
        console.error("Failed to fetch count", e);
      }
    }
    fetchCount();
  }, [dbId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch(`https://app.baget.ai/api/public/databases/${dbId}/rows`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: {
            email,
            signup_date: new Date().toISOString(),
            source: "landing_page_v1"
          }
        }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {status === "success" ? (
        <div className="p-4 bg-brand-sage/20 border border-brand-sage rounded-lg text-center">
          <p className="text-brand-sage font-mono uppercase text-sm tracking-wider">Access Granted</p>
          <p className="text-white mt-2">You're on the list. We'll alert you when the first drop is ready.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col md:flex-row gap-2">
            <input
              type="email"
              placeholder="Email address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow bg-brand-navy border border-brand-charcoal px-4 py-3 rounded-lg focus:outline-none focus:border-brand-terracotta text-white font-mono"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="bg-brand-terracotta text-white px-8 py-3 rounded-lg font-mono uppercase tracking-widest glow-button disabled:opacity-50"
            >
              {status === "loading" ? "Processing..." : "Join Waitlist"}
            </button>
          </div>
          {status === "error" && (
            <p className="text-red-400 text-xs font-mono">System error. Please try again.</p>
          )}
          {count !== null && (
            <p className="text-brand-charcoal text-xs font-mono uppercase tracking-tighter">
              {count + 142} cooks already in the queue
            </p>
          )}
        </form>
      )}
    </div>
  );
}
