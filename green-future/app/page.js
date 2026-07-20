import Hero from "./components/Hero/Hero";
import FinalCTA from "./components/Donate/FinalCTA";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Hero />
      <FinalCTA />
    </main>
  );
}
