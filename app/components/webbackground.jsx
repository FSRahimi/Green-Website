import Image from "next/image";

export default function WebBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <Image
        src="/images/backgrounds/green-bg.png"
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="h-full w-full object-cover opacity-45 saturate-75 brightness-[1.05]"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(164,230,139,0.16),transparent_30%),radial-gradient(circle_at_85%_10%,rgba(16,185,129,0.10),transparent_22%)]" />
      <div className="absolute inset-0 bg-linear-to-b from-[#05271c]/50 via-[#0e6d4ec]/15 to-[#094b35]/65" />
    </div>
  );
}
