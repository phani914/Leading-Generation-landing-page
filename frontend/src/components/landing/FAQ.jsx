import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import AnimatedSection from "../common/AnimatedSection";

const questions = [

    {
        question:"What is the duration of the program?",
        answer:
        "The program duration depends on the technology track. Complete project training is designed to make students industry ready."
    },


    {
        question:"Do I receive certification?",
        answer:
        "Yes. Students receive certification after successful completion of the training program and projects."
    },


    {
        question:"Is placement support available?",
        answer:
        "Yes. We provide placement guidance, resume preparation and interview preparation support."
    },


    {
        question:"What are the fees?",
        answer:
        "Fees vary based on the selected technology program. Contact our team for detailed information."
    }

];



function FAQ(){


    const [active,setActive] = useState(null);



    return(
        <AnimatedSection>
        <section 
        className="
        py-20
        bg-slate-50
        "
        >


            <div className="
            max-w-4xl
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

                        Frequently Asked Questions

                    </h2>


                    <p className="
                    mt-4
                    text-gray-600
                    ">

                        Find answers to common questions.

                    </p>


                </div>




                {/* Accordion */}


                <div className="
                space-y-4
                ">


                {
                    questions.map((item,index)=>(


                        <div
                        key={index}
                        className="
                        bg-white
                        rounded-xl
                        shadow-sm
                        overflow-hidden
                        "
                        >


                            <button

                            onClick={()=>{

                                setActive(
                                    active === index 
                                    ? null 
                                    : index
                                )

                            }}

                            className="
                            w-full
                            flex
                            justify-between
                            items-center
                            p-6
                            text-left
                            font-semibold
                            text-slate-900
                            "
                            >


                                {item.question}


                                <FaChevronDown

                                className={

                                active === index
                                ?
                                "rotate-180 transition"
                                :
                                "transition"

                                }

                                />

                            </button>





                            {
                                active === index && (

                                    <div className="
                                    px-6
                                    pb-6
                                    text-gray-600
                                    "
                                    >

                                        {item.answer}

                                    </div>

                                )
                            }



                        </div>


                    ))
                }


                </div>


            </div>


        </section>
        </AnimatedSection>


    )

}


export default FAQ;