import AnimatedSection from "../common/AnimatedSection";

import {
    FaLaptopCode,
    FaUserTie,
    FaCertificate,
    FaBriefcase,
    FaFileAlt,
    FaComments
} from "react-icons/fa";


const benefits = [

    {
        icon:<FaLaptopCode/>,
        title:"Real Projects",
        description:
        "Work on industry based projects and gain practical experience."
    },


    {
        icon:<FaUserTie/>,
        title:"Industry Mentors",
        description:
        "Learn from experienced professionals and industry experts."
    },


    {
        icon:<FaCertificate/>,
        title:"Certification",
        description:
        "Receive certification after successful project completion."
    },


    {
        icon:<FaBriefcase/>,
        title:"Placement Support",
        description:
        "Get career guidance and placement assistance."
    },


    {
        icon:<FaFileAlt/>,
        title:"Resume Building",
        description:
        "Build a strong professional resume with project experience."
    },


    {
        icon:<FaComments/>,
        title:"Interview Preparation",
        description:
        "Prepare for technical and HR interviews."
    }

];



function Benefits(){


    return(
        <AnimatedSection>
        <section 
        id="programs"
        className="
        py-20
        bg-white
        "
        >


            <div className="
            max-w-7xl
            mx-auto
            px-6
            ">


                {/* Heading */}

                <div className="
                text-center
                mb-12
                ">

                    <h2 className="
                    text-4xl
                    font-bold
                    text-slate-900
                    ">

                        Why Choose Our Training Program

                    </h2>


                    <p className="
                    mt-4
                    text-gray-600
                    ">

                        Everything you need to become industry ready.

                    </p>

                </div>



                {/* Cards */}


                <div className="
                grid
                md:grid-cols-3
                gap-8
                ">


                    {
                    benefits.map((item,index)=>(


                        <div
                        key={index}
                        className="
                        bg-slate-50
                        p-8
                        rounded-2xl
                        shadow-sm
                        hover:shadow-xl
                        transition
                        "
                        >


                            <div className="
                            text-blue-600
                            text-4xl
                            mb-5
                            ">

                                {item.icon}

                            </div>


                            <h3 className="
                            text-xl
                            font-bold
                            text-slate-900
                            ">

                                {item.title}

                            </h3>


                            <p className="
                            mt-3
                            text-gray-600
                            ">

                                {item.description}

                            </p>


                        </div>


                    ))
                    }


                </div>


            </div>


        </section>
        </AnimatedSection>

    )

}


export default Benefits;