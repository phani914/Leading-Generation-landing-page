import AnimatedSection from "../common/AnimatedSection";


function Technologies(){


    const technologies =
    JSON.parse(
        localStorage.getItem("technologies")
    )
    ||
    [

        {
            id:1,
            name:"Java",
            description:
            "Enterprise application development"
        },


        {
            id:2,
            name:"React",
            description:
            "Modern frontend development"
        },


        {
            id:3,
            name:"Python",
            description:
            "Backend and AI development"
        }

    ];
    
    return(
    
    <AnimatedSection>
        <section className="py-20 bg-white">
            
            <div className="max-w-7xl mx-auto px-6">
                
                <div className="text-center mb-12">
                    
                    <h2 className="text-4xl font-bold
                    text-slate-900">
                        
                        Technologies We Cover
                        
                    </h2>
                    
                    <p className="mt-4
                    text-gray-600">
                        
                        Learn the latest technologies used in the industry.
                        
                    </p>
                </div>
                
                <div className="grid
                sm:grid-cols-2
                md:grid-cols-3
                gap-8">
                    
                    {technologies.length === 0 ?
                    (
                    <p className="text-center
                    text-gray-500
                    col-span-3">
                        
                        No technologies available yet.
                        
                    </p>)
                    :
                    
                    technologies.map((tech,index)=>(
                    <div
                    key={tech.id || index}
                    className="bg-slate-50
                    rounded-2xl
                    p-8
                    shadow-sm
                    hover:shadow-xl
                    transition
                    text-center">
                        
                        <div className="
                        w-20
                        h-20
                        mx-auto
                        rounded-xl
                        bg-blue-100
                        flex
                        items-center
                        justify-center
                        text-4xl
                        mb-6">
                            
                            ⚙️
                        </div>
                        
                        <h3 className="
                        text-2xl
                        font-bold
                        text-slate-900">
                            
                            {tech.name}
                            
                        </h3>
                        
                        <p className="mt-3
                        text-gray-600">
                            
                            {tech.description}
                            
                        </p>
                        
                        <button
                        className="mt-6
                        bg-blue-600
                        
                        text-white
                        px-6
                        py-2
                        rounded-lg
                        hover:bg-blue-700
                        transition">
                            
                            Learn More
                        </button>
                    </div>
                    ))
                    
                    
                    }
                    
                </div>
            </div>
        </section>
    </AnimatedSection>
    
)
}


export default Technologies;