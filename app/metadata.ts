import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Savora | Global Flavors, Exact Portions",
  description: "The shortcut to authentic international dinner. Pre-portioned single-origin spice kits delivered to your door.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}