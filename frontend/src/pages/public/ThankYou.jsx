function ThankYou(){

    return(

        <section className="
        min-h-screen
        flex
        items-center
        justify-center
        bg-slate-50
        px-6
        ">


            <div className="
            bg-white
            rounded-2xl
            shadow-lg
            p-10
            text-center
            max-w-xl
            ">


                <div className="
                text-6xl
                mb-6
                ">
                    🎉
                </div>


                <h1 className="
                text-4xl
                font-bold
                text-slate-900
                ">

                    Thank You!

                </h1>



                <p className="
                mt-4
                text-gray-600
                ">

                    Your details have been submitted successfully.
                    Our team will contact you soon.

                </p>



                <div className="
                mt-8
                space-y-4
                ">


                    <a href="/Training-Brochure.pdf"
                    download
                    className="
                    
                    bg-blue-600
                    text-white
                    py-3
                    rounded-lg
                    block
                    text-center
                    hover:bg-blue-700
                    transition
                    "
                    >

                        Download Brochure

                    </a>




                    <a href="https://chat.whatsapp.com/ADD_YOUR_GROUP_LINK"
                    target="_blank"
                    rel="noreferred"

                    className="
                    
                    bg-green-600
                    text-white
                    py-3
                    rounded-lg
                    block
                    text-center
                    hover:bg-green-700
                    transition
                    "
                    >

                        Join WhatsApp Group

                    </a>




                    <a href="/#consultation"
                    className="
                    boarder
                    
                    border-blue-600
                    text-blue-600
                    py-3
                    rounded-lg
                    block
                    text-center
                    hover:bg-blue-50
                    transition
                    "
                    >

                        Book Counseling Session

                    </a>


                </div>


            </div>


        </section>

    )

}


export default ThankYou;