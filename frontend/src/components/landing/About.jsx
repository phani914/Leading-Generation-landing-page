import AnimatedSection from "../common/AnimatedSection";

function About(){

    return(

        <AnimatedSection>
            <section id="about"
        className="
        py-20
        bg-white
        "
        >


            <div className="
            max-w-7xl
            mx-auto
            px-6
            grid
            md:grid-cols-2
            gap-12
            items-center
            ">



                {/* Left Content */}

                <div>


                    <h2 className="
                    text-4xl
                    font-bold
                    text-slate-900
                    ">

                        Project Training Program

                    </h2>



                    <p className="
                    mt-5
                    text-gray-600
                    leading-relaxed
                    ">

                        Our project training program helps students
                        develop practical industry skills by working
                        on real-time projects with professional guidance.

                    </p>



                    <p className="
                    mt-4
                    text-gray-600
                    leading-relaxed
                    ">

                        Learn modern technologies, understand real
                        business requirements, and build projects
                        that strengthen your career profile.

                    </p>



                    <button
                    className="
                    mt-6
                    bg-blue-600
                    text-white
                    px-7
                    py-3
                    rounded-lg
                    "
                    >

                        Learn More

                    </button>


                </div>




                {/* Right Cards */}


                <div className="
                space-y-5
                ">


                    <div className="
                    bg-slate-50
                    p-6
                    rounded-xl
                    shadow-sm
                    ">


                        <h3 className="
                        text-xl
                        font-bold
                        text-slate-900
                        ">

                            Training Process

                        </h3>


                        <p className="
                        mt-2
                        text-gray-600
                        ">

                            Learn concepts → Build projects →
                            Get mentor feedback → Become job ready.

                        </p>


                    </div>



                    <div className="
                    bg-slate-50
                    p-6
                    rounded-xl
                    shadow-sm
                    ">


                        <h3 className="
                        text-xl
                        font-bold
                        text-slate-900
                        ">

                            Career Benefits

                        </h3>


                        <p className="
                        mt-2
                        text-gray-600
                        ">

                            Improve technical skills, create portfolio
                            projects and prepare for interviews.

                        </p>


                    </div>


                </div>



            </div>


        </section>

        </AnimatedSection>

    )

}


export default About;