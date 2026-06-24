import Hero from "../../components/landing/Hero";
import About from "../../components/landing/About";
import Benefits from "../../components/landing/Benefits";
import Technologies from "../../components/landing/Technologies";
import Projects from "../../components/landing/Projects";
import Mentors from "../../components/landing/Mentors";
import Testimonials from "../../components/landing/Testimonials";
import Statistics from "../../components/landing/Statistics";
import FAQ from "../../components/landing/FAQ";
import LeadForm from "../../components/landing/LeadForm";



function Home(){

    return(

        <>


            <section id="home">

                <Hero />

            </section>





            <section id="about">

                <About />

            </section>





            <section id="programs">

                <Benefits />

                <Technologies />

                <Projects />

            </section>





            <section id="mentors">

                <Mentors />

            </section>





            <section id="testimonials">

                <Testimonials />

            </section>





            <section id="statistics">

                <Statistics />

            </section>





            <section id="faq">

                <FAQ />

            </section>





            <section id="contact">

                <LeadForm />

            </section>



        </>

    )

}


export default Home;