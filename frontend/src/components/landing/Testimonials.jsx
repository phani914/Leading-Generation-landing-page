import { useState } from "react";
import { FaStar } from "react-icons/fa";
import AnimatedSection from "../common/AnimatedSection";

const testimonials = [

    {
        review:
        "This training helped me get hired within 2 months.",
        name:
        "Rahul Sharma",
        role:
        "Java Full Stack Developer"
    },


    {
        review:
        "Working on live projects improved my confidence and technical skills.",
        name:
        "Priya Kumar",
        role:
        "React Developer"
    },


    {
        review:
        "The mentors provided excellent guidance throughout the training.",
        name:
        "Arjun Patel",
        role:
        "Software Engineer"
    }

];



function Testimonials(){


    const [current,setCurrent] = useState(0);



    const nextTestimonial = ()=>{

        setCurrent(
            (current + 1) % testimonials.length
        );

    };



    const previousTestimonial = ()=>{

        setCurrent(
            (current - 1 + testimonials.length) 
            % testimonials.length
        );

    };



    const item = testimonials[current];



    return(
        <AnimatedSection>
        <section className="
        py-20
        bg-white
        ">


            <div className="
            max-w-4xl
            mx-auto
            px-6
            text-center
            ">


                <h2 className="
                text-4xl
                font-bold
                text-slate-900
                ">

                    Student Testimonials

                </h2>



                <div className="
                mt-10
                bg-slate-50
                rounded-2xl
                p-10
                shadow-sm
                ">


                    {/* Rating */}

                    <div className="
                    flex
                    justify-center
                    gap-2
                    text-yellow-500
                    ">

                        {
                            [1,2,3,4,5].map((star)=>(

                                <FaStar key={star}/>

                            ))
                        }

                    </div>




                    {/* Review */}

                    <p className="
                    mt-6
                    text-xl
                    text-gray-700
                    italic
                    ">

                        "{item.review}"

                    </p>




                    <h3 className="
                    mt-6
                    text-xl
                    font-bold
                    text-slate-900
                    ">

                        {item.name}

                    </h3>



                    <p className="
                    text-blue-600
                    ">

                        {item.role}

                    </p>



                    {/* Buttons */}


                    <div className="
                    mt-8
                    flex
                    justify-center
                    gap-5
                    ">


                        <button
                        onClick={previousTestimonial}
                        className="
                        border
                        border-blue-600
                        text-blue-600
                        px-6
                        py-2
                        rounded-lg
                        "
                        >

                            Prev

                        </button>



                        <button
                        onClick={nextTestimonial}
                        className="
                        bg-blue-600
                        text-white
                        px-6
                        py-2
                        rounded-lg
                        "
                        >

                            Next

                        </button>


                    </div>


                </div>


            </div>


        </section>
        </AnimatedSection>

    )

}


export default Testimonials;