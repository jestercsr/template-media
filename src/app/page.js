'use client';
import SkeletonCard from "./components/SkeletonCard";

export default function Home() {
  return (
    <main className="pt-24 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Derniers articles</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {[...Array(6)].map((_, idx) => (
          <SkeletonCard key={idx} />
        ))}
      </div>
    </main>
  );
}
