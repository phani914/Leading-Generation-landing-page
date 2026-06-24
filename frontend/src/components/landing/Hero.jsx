import AnimatedSection from "../common/AnimatedSection";



function Hero(){

    return(
        <AnimatedSection>
        <section className="pt-32 bg-slate-50">


            <div className="
            max-w-7xl 
            mx-auto 
            px-6 
            grid 
            md:grid-cols-2 
            gap-10 
            items-center
            ">


                {/* Left Content */}

                <div>


                    <h1 className="
                    text-5xl
                    md:text-6xl
                    font-bold
                    text-slate-900
                    leading-tight
                    ">


                        Become Industry Ready with


                        <span className="
                        text-blue-600
                        block
                        ">

                            Real-Time Project Training

                        </span>


                    </h1>



                    <p className="
                    mt-6
                    text-lg
                    text-gray-600
                    max-w-xl
                    ">

                        Build practical skills through live projects
                        and learn industry demanded technologies
                        from experienced mentors.


                    </p>



                    <div className="
                    mt-8
                    flex
                    gap-4
                    flex-wrap
                    ">


                        <a href="#contact"
                        className="
                        bg-blue-600
                        text-white
                        px-8
                        py-3
                        rounded-lg
                        font-semibold
                        hover:bg-blue-700
                        "
                        >

                            Enroll Now

                        </a>



                        <button
                        className="
                        border
                        border-blue-600
                        text-blue-600
                        px-8
                        py-3
                        rounded-lg
                        font-semibold
                        hover:bg-blue-50
                        "
                        >

                            Free Consultation

                        </button>


                    </div>



                </div>




                {/* Right Illustration */}


                <div className="
                flex
                justify-center
                ">


                    <div className="
                    w-full
                    h-96
                    bg-blue-100
                    rounded-3xl
                    flex
                    items-center
                    justify-center
                    ">


                        <div className="
                        text-center
                        ">

                            <div className="
                            text-6xl
                            ">
                                🚀
                            </div>


                            <p className="
                            mt-4
                            text-gray-600
                            ">
                                Student Success Illustration
                            </p>


                        </div>


                    </div>


                </div>


            </div>


        </section>
        </AnimatedSection>


    )

}


export default Hero;