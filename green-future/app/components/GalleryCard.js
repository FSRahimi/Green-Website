import Image from "next/image";

export default function GalleryCard({title, image, onViewDetails, item}){

    return( 
        <div  className="max-w-[300px] mx-auto border border-white/20 bg-white/15 backdrop-blur-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300">
             <Image src={image} width={300} height={200} alt={title} className="w-full h-[200px] object-cover" />
                <h2 className="text-center text-xl text-white font-semibold mt-2 mb-2">
                {title}
                </h2>
            <button onClick={() =>
            onViewDetails(item)
            } className=" w-full py-2 block text-center bg-green-500 hover:bg-green-400 text-white font-semibold transition">Veiw Details </button>
           
        </div>
    
    );
}