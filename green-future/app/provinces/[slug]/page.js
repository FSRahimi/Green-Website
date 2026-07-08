import provinces from "../data/provinces";
import { notFound } from "next/navigation";

export default async function ProvincePage({ params }) {
  const { slug } = await params;

  const province = provinces.find(
    (p) => p.slug === slug || p.id === slug
  );

  if (!province) {
    notFound();
  }

  return (
    <main className="min-h-screen">

      <section className="h-80 bg-green-700 flex items-center justify-center">

        <h1 className="text-6xl text-white font-bold">
          {province.name}
        </h1>

      </section>

    </main>
  );
}
