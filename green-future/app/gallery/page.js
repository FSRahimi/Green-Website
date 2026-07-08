import GalleryCard from "@/app/components/GalleryCard";
const galleryItems= [
   {id: 1, title: "Title 1", image:"/images/mountain.jpg", description:""},
   {id: 2, title: "Title 2", image:"/images/mountain.jpg", description:""},
   {id: 3, title: "Title 3", image:"/images/mountain.jpg", description:""},
   {id: 4, title: "Title 4", image:"/images/mountain.jpg", description:""},
   {id: 5, title: "Title 5", image:"/images/mountain.jpg", description:""},
   {id: 6, title: "Title 6", image:"/images/mountain.jpg", description:""},
   {id: 7, title: "Title 7", image:"/images/mountain.jpg", description:""},
   {id: 8, title: "Title 8", image:"/images/mountain.jpg", description:""},
   
];

export default function GalleryPage (){
    return(
        <div className="min-h-screen bg-no-repeat p-10 bg-cover bg-center"
             style={{ backgroundImage:"url('/images/background.jpg.jpg')"

            }}
            >
                <div className=" min-h-screen px-8 py-16">
            <h1 className="text-5xl font-bold text-center text-white mb-12">Nature's Lens</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {galleryItems.map((item)=> (
                <GalleryCard key={item.id} title={item.title} image={item.image}/>
           ))}
           </div>
           </div>
        </div>
    );
}