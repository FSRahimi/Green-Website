export default function AboutUs(){
   const aboutCards = [
     { title: "Our Mission", text: "Protect nature and create sustainable solutions for a greener future."
     },
     {title: "Our Vision",text: "Build a world where people and nature live together in harmony."
     },
     {title: "Our Values",text: "Respect for nature, innovation, and responsibility."
     }
    ];
    return(
        <section className=" relative min-h-[600px] bg-fixed bg-cover bg-center flex items-center"
        style={{
            backgroundImage: "url('/images/nature.JPEG')"
        }}
        >
            <div className="absolute inset-0 bg-black/30"></div>
              <div className="relative z-10 max-w-6xl mx-auto px-6">  
                <div className="text-white text-center mb-12">
                <h2 className="text-4xl font-bold text-green-400">About Us</h2>
                <h3 className="text-2xl mt-4 font-semibold text-green-400">Growing A Greener Future</h3>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mt-8 items-center bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-white/20">
                    <img src="/images/mountain.jpg" className="w-full"/>
        
                    <p className="leading-8 text-white"> Green Future is a project dedicated to protecting
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
                            <h4 className="text-2xl font-bold text-green-700">{card.title}</h4>
                            <p className="mt-4">{card.text}</p>
                            </div>
                            </div>
                       ))}
                       </div>
       </div>
         
        </section>
    )
}