import Image from "next/image";

export default function GalleryCard({title, image, description , onViewDetails, item}){
    console.log(item);

    return( 
        <div  className=" border border-white/20 bg-white/15 backdrop-blur-xl p-4 shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300">
             <Image src={image} width={300} height={200} />
                <h2 className="text-center text-xl text-white font-semibold mb-4">
                {title}
                </h2>
            <button onClick={() =>{console.log("clicked");
            onViewDetails(item);
            }} className=" w-full py-2 block text-center bg-green-500 hover:bg-green-400 text-white font-semibold transition">Veiw Details </button>
           
        </div>
    
    );
}