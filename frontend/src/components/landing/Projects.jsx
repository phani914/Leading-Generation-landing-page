import AnimatedSection from "../common/AnimatedSection";


function Projects(){


    const projects =
    JSON.parse(
        localStorage.getItem("projects")
    )
    ||
    [

        {
            id:1,
            title:"Banking System",
            description:
            "Develop a complete banking application with account management and transactions.",
            technology:
            "Java, Spring Boot, MySQL"
        },


        {
            id:2,
            title:"E-Commerce Platform",
            description:
            "Build an online shopping platform with product and order management.",
            technology:
            "React, Spring Boot, AWS"
        },


        {
            id:3,
            title:"CRM Application",
            description:
            "Create a customer relationship management system for businesses.",
            technology:
            "React, Java, Database"
        },


        {
            id:4,
            title:"HR Management System",
            description:
            "Manage employees, attendance and HR operations digitally.",
            technology:
            "Angular, Spring Boot"
        }

    ];
    
    return(
    <AnimatedSection>
        <section className="
        py-20
        bg-white">
            
            <div className="max-w-7xl
            mx-auto
            px-6">
                
                <div className="text-center
                mb-12">
                    
                    <h2 className="
                    text-4xl
                    font-bold
                    text-slate-900">
                        Live Project Portfolio
                    </h2>
                    
                    <p className="
                    mt-4
                    text-gray-600">
                        Gain experience by working on real-world projects.
                    </p>
                </div>
                
                <div className="grid
                md:grid-cols-2
                gap-8">
                    {
                    projects.length === 0 ?(
                    <p className="
                    text-center
                    text-gray-500
                    col-span-2">
                        No projects available yet.
                    </p>
                    
                )
                :
                projects.map((project,index)=>(
                <div
                key={project.id || index}
                className="
                bg-slate-50
                rounded-2xl
                p-8
                shadow-sm
                hover:shadow-xl
                transition"
                >
                    <div className="
                    h-40
                    bg-blue-100
                    rounded-xl
                    flex
                    items-center
                    justify-center
                    mb-6
                    ">
                        
                        <span className="text-5xl">
                            💻
                        </span>
                        
                    </div>
                    
                    <h3 className="text-2xl
                    font-bold
                    text-slate-900">
                        
                        {project.title}
                    </h3>
                    
                    <p className="mt-3
                    text-gray-600">
                        {project.description}
                    </p>
                    
                    <p className="
                    mt-4
                    text-blue-600
                    font-semibold">
                        {project.technology}
                    </p>
                    
                    <button
                    className="mt-6
                    bg-blue-600
                    text-white
                    px-6
                    py-2
                    rounded-lg
                    hover:bg-blue-700
                    transition"
                    >
                        View Details
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


export default Projects;