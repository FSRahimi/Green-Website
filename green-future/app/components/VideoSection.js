
const Videos =[
    {title:"video 1", link:"https://youtu.be/ImTzHImU4Js"},
    {title:"video 2", link:"https://youtu.be/vS8jwW9dKhI"},
    {title:"video 3", link:"https://youtu.be/vIFf-N35m60"},
    {title:"video 4", link:"https://youtu.be/_TqjjPs34Iw"},
    {title:"video 5", link:"https://youtu.be/URK8aXwmNck"},
    {title:"video 6", link:"https://youtu.be/wHsy1CBJJRI"},

];

export default function VideoSection(){
return(
    <>
    <section className="relative h-[500px] overflow-hidden">
       <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
        <source src="/videos/forest.mp4" type="video/mp4"/>
       </video>

    <div className="absolute inset-0 bg-black/50"></div>
    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h2 className="text-5xl font-bold text-white mb-4">Nature in motion</h2>
        <p className="text-lg text-gray-200 max-w-2xl">Explore the beauty of nature through inspiring videos and discover why protecting our planet matters.</p>
    </div>
    </section>

    <section>
        <div className=" bg-green-950 grid grid-cols-1 md:grid-cols-3 py-8 gap-8">
        {Videos.map((video)=>(
            <div key={video.title} className=" rounded-2xl text-center bg-white p-8  border border-white/20">
              <p className="text-g<ray-700 font-bold mb-6">{video.title}</p>
              <a href={video.link} target="_blank" rel="noopener noreferrer" className="text-white bg-green-500 p-2 rounded-xl font-bold">Watch On Youtube</a>  
            </div>
        ))}
        </div>
</section>
</>
);
}