export default function ProvinceLegend() {
  return (
    <div className="mx-auto flex max-w-md flex-wrap items-center justify-center gap-6 px-4 pb-4 text-sm text-white/80">
      <div className="flex items-center gap-2">
        <span className="h-3 w-3 rounded-full bg-emerald-100 ring-1 ring-green-800" />
        Active province — click to explore
      </div>
      <div className="flex items-center gap-2">
        <span className="h-3 w-3 rounded-full bg-gray-300 ring-1 ring-gray-400" />
        Coming soon
      </div>
    </div>
  );
}
