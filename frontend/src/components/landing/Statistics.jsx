import AnimatedSection from "../common/AnimatedSection";

const stats = [

    {
        number:"5000+",
        title:"Students"
    },


    {
        number:"1200+",
        title:"Projects"
    },


    {
        number:"85%",
        title:"Placement"
    },


    {
        number:"50+",
        title:"Corporate Partners"
    }

];



function Statistics(){

    return(
        <AnimatedSection>
        <section className="
        py-20
        bg-slate-900
        ">


            <div className="
            max-w-7xl
            mx-auto
            px-6
            ">


                <div className="
                grid
                grid-cols-2
                md:grid-cols-4
                gap-8
                text-center
                ">


                {
                    stats.map((item,index)=>(


                        <div
                        key={index}
                        className="
                        text-white
                        "
                        >


                            <h2 className="
                            text-5xl
                            font-bold
                            "
                            >

                                {item.number}

                            </h2>



                            <p className="
                            mt-3
                            text-gray-300
                            text-lg
                            "
                            >

                                {item.title}

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


export default Statistics;