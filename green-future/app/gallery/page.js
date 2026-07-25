"use client";
import Image from "next/image";
import { Camera} from "lucide-react";
import { ImageIcon, Video, TreePine, Users} from "lucide-react";
import GalleryCard from "@/app/components/GalleryCard";

import {useState} from "react";
import Link from "next/link";
const galleryItems= [
   {id: 1, title: "بید روسی", image:"/images/gallery/IMG_3287.JPG", description:" A beautifull mountain landscap"},
   {id: 2, title: "پالی", image:"/images/gallery/IMG_3290.JPG", description:"این گیاه کوهی که نیاز به آب جاری ندارد"},
   {id: 3, title: "دایکندی", image:"/images/gallery/IMG_3298.JPG", description:" در منطقه گیسو ولایت دایکندی  درخت ناجو مطلقا درخت کوهی نیست اما همیشه تزيینی است در خاک های مناسب و مرطوب بعد از یک الی دو سال مراقبت به آب نیاز ندارد در مناطق گرم و سرد دیده شده است در داخل یک غوزه آن ده ها دانه میباشد که میتوانید از آن قوریه بسازید و تکثیر کنید تا مناطق تان را از حالت خشک و دلگیر کننده نجات دهید"},
   {id: 4, title: "ایرغی", image:"/images/gallery/IMG_3302.JPG", description:"آشنایی با شاخه و رنگ و شکل ایرغی درختچه کوهی که بدون  آب در کوه ها می رویند مساعد برای مناطق سرد و گیروها مهم برای تنوع جنگلی در کوههت درختچه بومی و محلی بوده مناسب برای دایره سبزاز مزایای آن میتوا به برگ های آن اشاره کرد که برای تغذیه مواشی میباشد و یک درختچه تزیینی مناسب نیز میباشد"},
   {id: 5, title: "Image 5", image:"/images/gallery/IMG_3321.JPG", description:"A beautifull mountain landscap"},
   {id: 6, title: "Image 6", image:"/images/gallery/IMG_3311.JPG", description:"A beautifull mountain landscap"},
   {id: 7, title: "Image 7", image:"/images/gallery/IMG_3296.JPG", description:"A beautifull mountain landscap"},
   {id: 8, title: "Image 8", image:"/images/gallery/IMG_3279.JPG", description:"A beautifull mountain landscap"},
   
];

export default function GalleryPage (){
    const [selectedItem, setSelectedItem] = useState(null);
    const handleCloseModal= () => {
        setSelectedItem(null);
    }
    return(
    
        <div className="min-h-screen bg-no-repeat p-10 bg-cover bg-center"
             style={{ backgroundImage:"url('/images/background.jpg.jpg')"

            }}
            >
                <div className=" min-h-screen px-8 py-16">
            <h1 className="text-5xl font-bold text-center mb-12"><span className="text-white">Nature's</span> <span className="text-green-500"> Lens </span></h1>

        <div className=" flex gap-8">
            <aside className="w-1/4">
                <div className="backdrop-blur-lg bg-white/10 p-6 rounded-2xl">
                  <Camera className="text-green-400 bg-green-500/20 p-2 rounded-full drop-shadow-[0_0_10px_#22c55e]" size={60}/>
                  <h2 className="text-2xl font-bold"><span className="text-white">Capturing the beauty</span><span className="text-green-500"> of Nature</span></h2>
                <p className="mt-4 text-white/80"> Every nature tells astory of hope,action,and a greener tomorrow.</p>
                <hr className="mt-6 border-white/20"></hr>
            
               <div className="space-y-4">
               <Link href="/gallery/photos" className="flex gap-3 ">
                <ImageIcon className="text-green-400 bg-green-500/20 p-2 rounded-full" size={30}/>
                <p className="text-white">86+ Photos</p>
               </Link>

               <div className="flex gap-3">
                <Link href="/gallery/videos" className="flex gap-3 hover:text-green-400 transition  cursor-pointer">
                <Video className="text-green-400  bg-green-500/20 p-2 rounded-full" size={30}/>
                <p className="text-white">200+ Videos</p>
                </Link>
               </div>

               <div className="flex gap-3">
                <TreePine className="text-green-400  bg-green-500/20 p-2 rounded-full" size={30}/>
                <p className="text-white">200+ Projects</p>
               </div>

               <div className="flex gap-3">
                <Users className="text-green-400  bg-green-500/20 p-2 rounded-full" size={30}/>
                <p className="text-white">2000+ Valunteers</p>
               </div>

                <hr className="mt-6 border-white/20"></hr>
                 <div className="">
                <p className="text-white">Look deep into nature, and then you will understand everything better.</p>
                <p className=" text-green-500 font-semibold"> - Albert Einstein</p>
               </div>
               </div>
               </div>
            </aside>
        
        
        <div className="w-3/4 grid grid-cols-1 md:grid-cols-4 gap-6 ">
            {galleryItems.map((item)=> (
                <GalleryCard key={item.id} title={item.title} item={item} image={item.image} onViewDetails={setSelectedItem} description={item.description}/>
           ))}
           </div>
           </div>
           {selectedItem && (
            
            <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-black/50 p-10 z-50  text-white">
            <div className="glassmorphism relative z-10 flex flex-col items-center justify-center p-8 max-h-[90vh] ">
                
            <Image src={selectedItem.image} width={600} height={300} alt={selectedItem.title} className="w-full max-h-[400px] object-contain rounded-lg"/>
            <h1 className="mt-6 itens-center justify-center text-3xl font-bold text-white"> {selectedItem.title} </h1>
            <p className=" items-center justify-center mt-3 text-white">{selectedItem.description}</p>
           <div className="flex items-center mt-4">
            <button onClick= {handleCloseModal} className="absolute top-4 right-4 backdrop-blur-lg px-5 mt-0 py-2 rounded-full font-bold" >X</button>
            </div>
            </div>
            </div>

           )}
           </div>
           </div>
          
    );
}