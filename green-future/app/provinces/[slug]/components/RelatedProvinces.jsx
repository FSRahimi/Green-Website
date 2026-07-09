import Image from "next/image";
import Link from "next/link";

export default function RelatedProvinces({ currentProvince, provinces }) {
  const otherProvinces = provinces.filter(
    (item) => item.id !== currentProvince.id
  );

  return (
    <section className="mx-auto max-w-6xl px-4 pb-24">
      <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary-green">
        Other Provinces
      </p>
      <h2 className="mt-3 text-4xl font-black">Explore More</h2>

      <div className="mt-8 flex gap-5 overflow-x-auto pb-4">
        {otherProvinces.map((item) => (
          <Link
            key={item.id}
            href={`/provinces/${item.slug}`}
            className="group min-w-64 overflow-hidden rounded-2xl bg-white shadow-xl"
          >
            <div className="relative h-36">
              <Image
                src={item.heroImage || item.image}
                alt={`${item.name} province`}
                fill
                sizes="256px"
                className="object-cover transition duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold">{item.name}</h3>
              <p className="mt-1 text-sm text-slate-600">{item.location}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
