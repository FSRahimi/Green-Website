"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
const photos = [
  "/images/gallery/IMG_3268.jpg",
  "/images/gallery/IMG_3269.jpg",
  "/images/gallery/IMG_3270.jpg",
  "/images/gallery/IMG_3271.jpg",
  "/images/gallery/IMG_3272.jpg",
  "/images/gallery/IMG_3273.JPG",
  "/images/gallery/IMG_3274.JPG",
  "/images/gallery/IMG_3275.JPG",
  "/images/gallery/IMG_3276.JPG",
  "/images/gallery/IMG_3277.JPG",
  "/images/gallery/IMG_3278.JPG",
  "/images/gallery/IMG_3279.JPG",
  "/images/gallery/IMG_3280.JPG",
  "/images/gallery/IMG_3281.JPG",
  "/images/gallery/IMG_3282.JPG",
  "/images/gallery/IMG_3287.JPG",
  "/images/gallery/IMG_3289.JPG",
  "/images/gallery/IMG_3290.JPG",
  "/images/gallery/IMG_3292.JPG",
  "/images/gallery/IMG_3293.JPG",
  "/images/gallery/IMG_3294.JPG",
  "/images/gallery/IMG_3295.JPG",
  "/images/gallery/IMG_3296.JPG",
  "/images/gallery/IMG_3297.JPG",
  "/images/gallery/IMG_3298.JPG",
  "/images/gallery/IMG_3300.JPG",
  "/images/gallery/IMG_3301.JPG",
  "/images/gallery/IMG_3302.JPG",
  "/images/gallery/IMG_3304.JPG",
  "/images/gallery/IMG_3305.JPG",
  "/images/gallery/IMG_3306.JPG",
  "/images/gallery/IMG_3307.JPG",
  "/images/gallery/IMG_3308.JPG",
  "/images/gallery/IMG_3309.JPG",
  "/images/gallery/IMG_3310.JPG",
  "/images/gallery/IMG_3311.JPG",
  "/images/gallery/IMG_3312.JPG",
  "/images/gallery/IMG_3313.JPG",
  "/images/gallery/IMG_3314.JPG",
  "/images/gallery/IMG_3315.JPG",
  "/images/gallery/IMG_3316.JPG",
  "/images/gallery/IMG_3317.JPG",
  "/images/gallery/IMG_3318.JPG",
  "/images/gallery/IMG_3319.JPG",
  "/images/gallery/IMG_3320.JPG",
  "/images/gallery/IMG_3321.JPG",
  "/images/gallery/IMG_3322.JPG",
  "/images/gallery/IMG_3323.JPG",
  "/images/gallery/IMG_3324.JPG",
  "/images/gallery/IMG_3325.JPG",
  "/images/gallery/IMG_3326.JPG",
  "/images/gallery/IMG_3327.JPG",
  "/images/gallery/IMG_3331.JPG",
  "/images/gallery/IMG_3333.JPG",
  "/images/gallery/IMG_3334.JPG",
  "/images/gallery/IMG_3335.JPG",
  "/images/gallery/IMG_3336.JPG",
  "/images/gallery/IMG_3337.JPG",
  "/images/gallery/IMG_3338.JPG",
  "/images/gallery/IMG_3339.JPG",
  "/images/gallery/IMG_3340.JPG",
  "/images/gallery/IMG_3341.JPG",
  "/images/gallery/IMG_3342.JPG",
  "/images/gallery/IMG_3343.JPG",
  "/images/gallery/IMG_3344.JPG",
  "/images/gallery/IMG_3345.JPG",
  "/images/gallery/IMG_3346.JPG",
  "/images/gallery/IMG_3347.JPG",
  "/images/gallery/IMG_3348.JPG",
  "/images/gallery/IMG_3349.JPG",
  "/images/gallery/IMG_3350.JPG",
  "/images/gallery/IMG_3351.JPG",
  "/images/gallery/IMG_3352.JPG",
  "/images/gallery/IMG_3353.JPG",
  "/images/gallery/IMG_3354.JPG",
  "/images/gallery/IMG_3355.JPG",
  "/images/gallery/IMG_3356.JPG",
  "/images/gallery/IMG_3357.JPG",
  "/images/gallery/IMG_3358.JPG",
  "/images/gallery/IMG_3359.JPG",
  "/images/gallery/IMG_3360.JPG",
  "/images/gallery/IMG_3361.JPG",
  "/images/gallery/IMG_3362.JPG",
  "/images/gallery/IMG_3363.JPG",
  "/images/gallery/IMG_3364.JPG",
  "/images/gallery/IMG_3365.JPG",
];


export default function PhotosPage() {
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <main className="min-h-screen bg-green-950 p-8">
      <div className="mx-auto max-w-7xl">
        <Link href="/gallery" className=" text-green-300 hover:text-green-100">
         Go back
        </Link>
        <h1 className="my-8 text-4xl font-bold text-white">Nature's Lens</h1>
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {photos.map((src, index) => (
            <div className="mb-4 break-inside-avoid cursor-pointer" onClick={()=> setSelectedImage(src)} >
            <Image
              key={src}
              src={src}
              alt={`Nature photo ${index + 1}`}
              width={800}
              height={600}
              className=" w-full rounded-lg"
              priority={index < 3}
            />
            </div>
          ))}

          {selectedImage && (
      <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50" onClick={() => setSelectedImage(null)}>
        <Image src={selectedImage} alt="Large photo" width={1200} height={800} className="max-w-[90vw] max-h-[90vh] object-contain rounded-xl"/>
      </div>
    )}
        </div>
      </div>
    </main>
    
  );
}
