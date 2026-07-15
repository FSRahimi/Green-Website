

const Videos =[
    {video:" ", title:"video 1", description:"protect our plan", link:""},
    {video:" ", title:"video 2", description:"protect our plan", link:""},
    {video:" ", title:"video 3", description:"protect our plan", link:""},
    {video:" ", title:"video 4", description:"protect our plan", link:""},
    {video:" ", title:"video 5", description:"protect our plan", link:""},
    {video:" ", title:"video 6", description:"protect our plan", link:""},

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
              
              <p className="text-white">{video.title}</p>
              <p className="mb-4">{video.description}</p>
              <a href="{video.link}" target="_blank" className="text-white bg-green-500 p-2 rounded-xl font-bold">Watch Now</a>  
            </div>
        ))}
        </div>
</section>
</>
);
}