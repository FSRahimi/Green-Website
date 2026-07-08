"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-100 p-6 text-center">
      <h2 className="text-2xl font-semibold text-slate-800">
        Something went wrong.
      </h2>
      <p className="mt-2 text-slate-600">
        The province page could not be loaded.
      </p>
      <button
        onClick={() => reset()}
        className="mt-4 rounded bg-slate-900 px-4 py-2 text-white"
      >
        Try again
      </button>
    </div>
  );
}