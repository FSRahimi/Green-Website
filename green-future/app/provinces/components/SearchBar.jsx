// "use client";

// export default function SearchBar() {
//   return (
//     <div className="max-w-xl mx-auto my-8">

//       <input
//         type="text"
//         placeholder="Search a province..."
//         className="w-full rounded-xl border p-4"
//       />

//     </div>
//   );
// }
"use client";

import { useMemo, useState } from "react";

export default function SearchBar({ provinces = [], onSelect }) {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const matches = useMemo(() => {
    const trimmed = query.trim().toLowerCase();
    if (!trimmed) return [];

    return provinces
      .filter((province) => province.name.toLowerCase().includes(trimmed))
      .slice(0, 6);
  }, [provinces, query]);

  function handleSelect(province) {
    onSelect?.(province);
    setQuery("");
    setIsFocused(false);
  }

  return (
    <div className="relative mx-auto my-8 max-w-xl px-4">
      <input
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setTimeout(() => setIsFocused(false), 100)}
        placeholder="Search a province..."
        aria-label="Search for a province"
        className="w-full rounded-xl border border-emerald-200 p-4 shadow-sm outline-none focus:border-emerald-500"
      />

      {isFocused && query.trim() && (
        <div className="absolute left-4 right-4 top-full z-10 mt-2 overflow-hidden rounded-xl border border-emerald-100 bg-white shadow-xl">
          {matches.length > 0 ? (
            matches.map((province) => (
              <button
                key={province.id}
                type="button"
                onClick={() => handleSelect(province)}
                className="block w-full px-4 py-3 text-left hover:bg-emerald-50"
              >
                {province.name}
              </button>
            ))
          ) : (
            <p className="px-4 py-3 text-sm text-slate-500">
              No province found.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
