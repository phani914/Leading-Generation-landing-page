import AnimatedSection from "../common/AnimatedSection";


function Mentors(){
    const mentors =
    JSON.parse(
        localStorage.getItem("mentors"))||[
            {
                id:1,
                name:"John Smith",
                role:"Senior Java Architect",
                experience:"12+ Years",
                specialization:"Java, Spring Boot, Cloud"
            },


            {
                id:2,
                name:"Sarah Williams",
                role:"Full Stack Developer",
                experience:"8+ Years",
                specialization:"React, Node.js, Angular"
            }


        ];
        
        return(
        <AnimatedSection>
            <section className="
            py-20
            bg-slate-50">
                
                <div className="
                max-w-7xl
                mx-auto
                px-6">
                    
                    <div className="
                    text-center
                    mb-12">
                        
                        <h2 className="
                        text-4xl
                        font-bold
                        text-slate-900">
                            
                            Our Expert Mentors
                        </h2>
                        
                        <p className="
                        mt-4
                        text-gray-600">
                            
                            Learn from experienced industry professionals.
                            
                        </p>
                    </div>
                    
                    <div className="grid
                    md:grid-cols-3
                    gap-8">
                        
                        {
                        
                        mentors.length === 0 ?
                        (<p className="text-center
                            text-gray-500
                            col-span-3">
                                
                                No mentors available yet.
                        </p>)
                        
                        :
                        
                        mentors.map((mentor,index)=>(
                        <div
                        key={mentor.id || index}
                        className="bg-white
                        rounded-2xl
                        p-8
                        shadow-sm
                        hover:shadow-xl
                        transition
                        text-center">
                            
                            <div className="w-24
                            h-24
                            mx-auto
                            rounded-full
                            bg-blue-100
                            flex
                            items-center
                            justify-center
                            text-5xl
                            mb-6">
                                👨‍🏫
                            </div>
                            
                            <h3 className="
                            text-xl
                            font-bold
                            text-slate-900
                            ">
                                {mentor.name}
                                
                            </h3>
                            
                            <p className="
                            text-blue-600
                            font-semibold
                            mt-2">
                                
                                {mentor.role}
                            
                            </p>
                            
                            <p className="mt-3
                            text-gray-600">
                                
                                
                                {mentor.experience}
                                
                            </p>
                            
                            <p className="
                            mt-3
                            text-gray-500">
                                {mentor.specialization}
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
                                
                                View Profile
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


export default Mentors;