// "use client";

// import Image from "next/image";
// import Link from "next/link";

// export default function ProvincePopup({ province, onClose }) {
//   if (!province) return null;

//   const statistics = province.statistics || province.stats || {};

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4 backdrop-blur-sm">
//       <div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-white/20 bg-white/10 shadow-2xl backdrop-blur-xl">
//         <div className="relative h-52 w-full">
//           <Image
//             src={province.heroImage || province.image}
//             alt={province.name}
//             fill
//             sizes="(max-width: 768px) 100vw, 448px"
//             className="object-cover"
//           />
//         </div>

//         <button
//           type="button"
//           onClick={onClose}
//           className="absolute right-4 top-4 h-10 w-10 rounded-full bg-black/40 text-white"
//           aria-label="Close popup"
//         >
//           x
//         </button>

//         <div className="p-6 text-white">
//           <h2 className="text-3xl font-bold">{province.name}</h2>

//           <p className="mt-3 text-white/80">{province.shortDescription}</p>

//           <div className="mt-6 grid grid-cols-3 gap-3">
//             <div className="rounded-2xl bg-white/10 p-3 text-center">
//               <small>Trees</small>
//               <div className="text-xl font-bold">{statistics.trees || 0}</div>
//             </div>

//             <div className="rounded-2xl bg-white/10 p-3 text-center">
//               <small>Volunteers</small>
//               <div className="text-xl font-bold">
//                 {statistics.volunteers || 0}
//               </div>
//             </div>

//             <div className="rounded-2xl bg-white/10 p-3 text-center">
//               <small>Projects</small>
//               <div className="text-xl font-bold">
//                 {statistics.projects || 0}
//               </div>
//             </div>
//           </div>

//           <div className="mt-8 flex gap-3">
//             <Link
//               href={`/provinces/${province.slug || province.id}`}
//               className="flex-1 rounded-xl bg-emerald-600 py-3 text-center font-semibold transition hover:bg-emerald-500"
//             >
//               View Details
//             </Link>

//             <button
//               type="button"
//               className="rounded-xl border border-white/20 px-5"
//             >
//               Donate
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

export default function ProvincePopup({ province, onClose }) {
  const statistics = province?.statistics || {};

  return (
    <AnimatePresence>
      {province && (
        <motion.div
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            key="card"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
            onClick={(event) => event.stopPropagation()}
            className="relative w-full max-w-md overflow-hidden rounded-3xl border border-white/20 bg-white/10 shadow-2xl backdrop-blur-xl"
          >
            <div className="relative h-52 w-full">
              <Image
                src={province.heroImage || province.image}
                alt={province.name}
                fill
                sizes="(max-width: 768px) 100vw, 448px"
                className="object-cover"
              />
            </div>

            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 h-10 w-10 rounded-full bg-black/40 text-white"
              aria-label="Close popup"
            >
              x
            </button>

            <div className="p-6 text-white">
              <h2 className="text-3xl font-bold">{province.name}</h2>

              <p className="mt-3 text-white/80">{province.shortDescription}</p>

              <div className="mt-6 grid grid-cols-3 gap-3">
                <div className="rounded-2xl bg-white/10 p-3 text-center">
                  <small>Trees</small>
                  <div className="text-xl font-bold">
                    {statistics.trees || 0}
                  </div>
                </div>

                <div className="rounded-2xl bg-white/10 p-3 text-center">
                  <small>Volunteers</small>
                  <div className="text-xl font-bold">
                    {statistics.volunteers || 0}
                  </div>
                </div>

                <div className="rounded-2xl bg-white/10 p-3 text-center">
                  <small>Projects</small>
                  <div className="text-xl font-bold">
                    {statistics.projects || 0}
                  </div>
                </div>
              </div>

              <div className="mt-8 flex gap-3">
                <Link
                  href={`/provinces/${province.slug || province.id}`}
                  className="flex-1 rounded-xl bg-emerald-600 py-3 text-center font-semibold transition hover:bg-emerald-500"
                >
                  View Details
                </Link>

                <Link
                  href={`/provinces/${province.slug || province.id}#donate`}
                  onClick={onClose}
                  className="rounded-xl border border-white/20 px-5 py-3 text-center"
                >
                  Donate
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
