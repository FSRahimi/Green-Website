
import {TreePine, Leaf, Recycle, Users} from "lucide-react" 
import CountUp from "react-countup";
export default function AboutUs(){
   const aboutCards = [
     { title: "Our Mission", text: "Protect nature and create sustainable solutions for a greener future."
     },
     {title: "Our Vision",text: "Build a world where people and nature live together in harmony."
     },
     {title: "Our Values",text: "Respect for nature, innovation, and responsibility."
     }
    ];

    const goals = [
     {
     title: "Tree Plantation",
     description: "Planting trees to restore nature and improve air quality.",
     icon: TreePine,
     },
     {
     title: "Clean Environment",
     description: "Keeping our communities clean through awareness and action.",
     icon: Leaf,
     },
     {
     title: "Recycling",
     description: "Encouraging recycling to reduce waste and protect resources.",
     icon: Recycle,
     },
     {
     title: "Volunteers",
     description: "Working together with volunteers to make a positive impact.",
     icon: Users,
     },
    ];

    const state = [
        {number: 100 ,description:"_____" , title: "VOLUNTEERS"},
        {number: 300 , description:"_____ ", title: "PROJECTS"},
        {number: 400 , description:"_____" , title: "AWARDS"},
        {number: 900 , description:"_____" , title: "MISSION"},
        {number: 700 , description:"_____" , title: "DONATORS"},
    ];

    return(
     <>
        
        <div className=" bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url('/images/nature.JPEG')"
          }}>
        <section >
          
            <div className="absolute inset-0 "></div>
             <div className="relative z-10 max-w-6xl mx-auto px-6">  
             <div className="text-white text-center mb-12">
              <div className="backdrop-blur-lg bg-white/20 border border-white/20 p-6 rounded-2xl">
                <h2 className="text-6xl font-bold text-white">About Us</h2>
                <h3 className="text-2xl mt-4 font-semibold text-white">Growing A Greener Future</h3>
                </div>
                </div>
                <section className="mt-20">
 
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    {goals.map((goal) => {
      const Icon = goal.icon;
      return (
        
        <div
          key={goal.title}
          className="glassmorphism rounded-2xl p-8 text-center backdrop-blur-lg bg-white/20 border border-white/20 hover:-translate-y-2 hover:scale-105 transition duration-300"
        >
          <div className="w-20 h-20 mx-auto rounded-full bg-green-600 flex items-center justify-center mb-6">
            <Icon size={40} className="text-white" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">{goal.title}</h3>
          <p className="text-white/80">{goal.description}</p>
          
         </div>
    
          );
       })}
        </div>
     </section>  

                <div className="grid md:grid-cols-2 gap-8 mt-8 items-center bg-white/10 backdrop-blur-lg p-8 rounded-2xl">
                    <img src="/images/gallery/IMG_3290.JPG" className="w-full rounded-lg "/>
        
                    <p className="leading-8 text-white">🍃 Green Future is a project dedicated to protecting
                    nature and building a sustainable future. We believe
                    that small actions can create a big impact on our
                    environment. Through awareness, creativity, and
                    innovation, we work toward a cleaner and greener world.<br></br>
                    <button className="mt-4 px-6 py-3 rounded-2xl bg-green-700 hover:scale-105 shadow-2xl hover:bg-green-900 hover:text-white transition">Learn More</button>
                    </p>
                    
                </div>
                <div className="grid md:grid-cols-3 gap-10 mt-6 transition">
                       {aboutCards.map((card)=>(
                        <div 
                        key={card.title}
                        className="glassmorphism transition hover:scale-105 hover:-translate-y-2 backdrop-blur-lg border border-white/10 rounded-2xl p-6 text-center text-white"
                        >
                            <div className="relative z-10">
                            <h4 className="text-2xl font-bold text-white">{card.title}</h4>
                            <p className="mt-4">{card.text}</p>
                            </div>
                            </div>
                       ))}
                       </div>
       </div>
          
        </section>
           <section className="mt-4 grid grid-cols-1 md:grid-cols-5 py-15 text-white gap-8 text-center backdrop-blur-lg ">
    
           {state.map((state)=> (
             <div key= {state.title}>
                <h5 className="text-5xl font-bold">{state.number}+</h5>
                <p className="text-green-500">{state.description}</p>
                <p className="mt-6 text-lg ">{state.title}</p>
                

             </div>
           ))}
        </section>
        </div>
        </>
    )
}