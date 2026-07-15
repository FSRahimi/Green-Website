"use client";
import Image from "next/image";
import { Camera} from "lucide-react";
import { ImageIcon, Video, TreePine, Users} from "lucide-react";
import GalleryCard from "@/app/components/GalleryCard";
import {useState} from "react";
const galleryItems= [
   {id: 1, title: "Image 1", image:"/images/mountain.jpg", description:" A beautifull mountain landscap"},
   {id: 2, title: "Image 2", image:"/images/mountain.jpg", description:"A beautifull mountain landscap"},
   {id: 3, title: "Image 3", image:"/images/mountain.jpg", description:"A beautifull mountain landscap"},
   {id: 4, title: "Image 4", image:"/images/mountain.jpg", description:"A beautifull mountain landscap"},
   {id: 5, title: "Image 5", image:"/images/mountain.jpg", description:"A beautifull mountain landscap"},
   {id: 6, title: "Image 6", image:"/images/mountain.jpg", description:"A beautifull mountain landscap"},
   {id: 7, title: "Image 7", image:"/images/mountain.jpg", description:"A beautifull mountain landscap"},
   {id: 8, title: "Image 8", image:"/images/mountain.jpg", description:"A beautifull mountain landscap"},
   
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
               <div className="flex gap-3">
                <ImageIcon className="text-green-400 bg-green-500/20 p-2 rounded-full" size={30}/>
                <p className="text-white">200+ Photos</p>
               </div>

               <div className="flex gap-3">
                <a href="" target="_blank" rel=" noopener noreferrer" className="flex gap-3 hover:text-green-400 transition  curser-pointer">
                <Video className="text-green-400  bg-green-500/20 p-2 rounded-full" size={30}/>
                <p className="text-white">200+ Videos</p>
                </a>
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
        
        
        <div className="w-3/4 grid grid-cols-1 md:grid-cols-4 gap-6">
            {galleryItems.map((item)=> (
                <GalleryCard key={item.id} title={item.title} item={item} image={item.image} onViewDetails={setSelectedItem} description={item.description}/>
           ))}
           </div>
           </div>
           {selectedItem && (
            
            <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-black/50 p-10 z-50  text-white">
            <div className="glassmorphism relative z-10 flex flex-col items-center justify-center max-w-2xl p-8 ">
                
            <Image src={selectedItem.image} width={600} height={300} alt={selectedItem.title}/>
            <h1 className="mt-6 itens-center justify-center text-3xl font-bold text-white"> {selectedItem.title} </h1>
            <p className=" items-center justify-center mt-3 text-white">{selectedItem.description}</p>
           <div className="flex items-center mt-4">
            <button onClick= {handleCloseModal} className=" bg-green-900 px-5 mt-0 py-2 rounded font-bold hover:bg-green-500" >Close</button>
            </div>
            </div>
            </div>

           )}
           </div>
           </div>
          
    );
}