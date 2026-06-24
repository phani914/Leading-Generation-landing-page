import { useState } from "react";
import AnimatedSection from "../common/AnimatedSection";

function LeadForm(){


    const [formData,setFormData] = useState({

        name:"",
        email:"",
        phone:"",
        qualification:"",
        technology:"",
        trainingMode:"",
        message:""

    });



    const handleChange=(e)=>{

        setFormData({

            ...formData,

            [e.target.name]:e.target.value

        });

    };



    const handleSubmit=(e)=>{

    e.preventDefault();



    const newLead = {

        id: Date.now(),

        ...formData,

        status:"New",

        date:new Date().toLocaleString()

    };



    const existingLeads =

    JSON.parse(

        localStorage.getItem("leads")

    )

    ||

    [];




    localStorage.setItem(

        "leads",

        JSON.stringify(

            [

                ...existingLeads,

                newLead

            ]

        )

    );




    setFormData({

        name:"",
        email:"",
        phone:"",
        qualification:"",
        technology:"",
        trainingMode:"",
        message:""

    });



    window.location.href="/thank-you";


};

    return(
        <AnimatedSection>
        <section
        id="contact"
        className="
        py-20
        bg-white
        "
        >


            <div className="
            max-w-5xl
            mx-auto
            px-6
            ">


                <div className="
                text-center
                mb-12
                ">


                    <h2 className="
                    text-4xl
                    font-bold
                    text-slate-900
                    ">

                        Get Program Details

                    </h2>


                    <p className="
                    mt-4
                    text-gray-600
                    ">

                        Submit your details and our team will contact you.

                    </p>


                </div>




                <form

                onSubmit={handleSubmit}

                className="
                bg-slate-50
                p-8
                rounded-2xl
                shadow-sm
                grid
                md:grid-cols-2
                gap-6
                ">



                    <input

                    name="name"

                    value={formData.name}

                    onChange={handleChange}

                    placeholder="Full Name"

                    className="
                    p-3
                    rounded-lg
                    border
                    "

                    required

                    />




                    <input

                    name="email"

                    value={formData.email}

                    onChange={handleChange}

                    placeholder="Email Address"

                    type="email"

                    className="
                    p-3
                    rounded-lg
                    border
                    "

                    required

                    />





                    <input

                    name="phone"

                    value={formData.phone}

                    onChange={handleChange}

                    placeholder="Mobile Number"

                    className="
                    p-3
                    rounded-lg
                    border
                    "

                    required

                    />





                    <input

                    name="qualification"

                    value={formData.qualification}

                    onChange={handleChange}

                    placeholder="Qualification"

                    className="
                    p-3
                    rounded-lg
                    border
                    "

                    />





                    <select

                    name="technology"

                    value={formData.technology}

                    onChange={handleChange}

                    className="
                    p-3
                    rounded-lg
                    border
                    "

                    >

                        <option value="">
                            Select Technology
                        </option>

                        <option>
                            Java Full Stack
                        </option>

                        <option>
                            React
                        </option>

                        <option>
                            Angular
                        </option>

                        <option>
                            Python
                        </option>


                    </select>





                    <select

                    name="trainingMode"

                    value={formData.trainingMode}

                    onChange={handleChange}

                    className="
                    p-3
                    rounded-lg
                    border
                    "

                    >

                        <option value="">
                            Training Mode
                        </option>

                        <option>
                            Online
                        </option>

                        <option>
                            Offline
                        </option>


                    </select>






                    <textarea

                    name="message"

                    value={formData.message}

                    onChange={handleChange}

                    placeholder="Message"

                    rows="4"

                    className="
                    p-3
                    rounded-lg
                    border
                    md:col-span-2
                    "

                    />





                    <button

                    type="submit"

                    className="
                    bg-blue-600
                    text-white
                    py-3
                    rounded-lg
                    font-semibold
                    hover:bg-blue-700
                    md:col-span-2
                    "

                    >

                        Submit

                    </button>



                </form>


            </div>


        </section>
        </AnimatedSection>

    )

}


export default LeadForm;