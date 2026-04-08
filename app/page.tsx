"use client";
import { useEffect, useState } from "react";
import HomeContent from "./home-content";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <main className="min-h-screen relative">
        <div className="py-20 px-4 text-center">Chargement...</div>
      </main>
    );
  }

  return <HomeContent />;
}
