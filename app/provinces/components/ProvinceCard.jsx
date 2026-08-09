"use client";

export default function ProvinceCard({ province, onClick }) {
  return (
    <button
      onClick={() => onClick(province)}
      className="border rounded-xl p-5 hover:bg-green-100 transition"
    >
      <h3 className="text-xl font-bold">
        {province.name}
      </h3>
    </button>
  );
}