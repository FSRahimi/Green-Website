"use client";

export default function ProvincePopup({ province, onClose }) {
  if (!province) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-6 w-[420px] shadow-xl">
        <h2 className="text-3xl font-bold mb-4">
          {province.name}
        </h2>

        <p className="mb-6">
          {province.shortDescription}
        </p>

        <div className="flex gap-3">
          <button className="bg-green-600 text-white px-5 py-2 rounded-lg">
            Donate
          </button>

          <button className="border px-5 py-2 rounded-lg">
            View Details
          </button>
        </div>

        <button
          onClick={onClose}
          className="mt-6 text-gray-500"
        >
          Close
        </button>
      </div>
    </div>
  );
}