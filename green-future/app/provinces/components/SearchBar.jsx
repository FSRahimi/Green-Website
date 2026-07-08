"use client";

export default function SearchBar() {
  return (
    <div className="max-w-xl mx-auto my-8">

      <input
        type="text"
        placeholder="Search a province..."
        className="w-full rounded-xl border p-4"
      />

    </div>
  );
}