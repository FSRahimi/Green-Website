import Image from "next/image";
import Link from "next/link";
export default function GalleryCard({title, image, id}){
    return( 
        <div  className=" border border-white/20 bg-white/15 backdrop-blur-xl p-4 shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300">
             <Image src={image} width={300} height={200} />
                <h2 className="text-center text-xl text-white font-semibold mb-4">
                {title}
                </h2>
            <Link href={`/gallery/${id}`} className=" w-full py-2 block text-center bg-green-500 hover:bg-green-400 text-white font-semibold transition">Veiw Details</Link>
           
        </div>
    
    );
}