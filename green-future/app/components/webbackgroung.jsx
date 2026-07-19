export default function WebBackgroung() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <img
        src="/green-bg.png"
        alt=""
        aria-hidden="true"
        className="h-full w-full object-cover opacity-45 saturate-75 brightness-[1.05]"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(164,230,139,0.16),transparent_30%),radial-gradient(circle_at_85%_10%,rgba(16,185,129,0.10),transparent_22%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#02110c]/40 via-[#03150d]/15 to-[#03110a]/55" />
    </div>
  );
}
