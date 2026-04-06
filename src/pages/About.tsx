import AboutCards from "../AboutCards";
import Footer from "../Footer";
import FounderCard from "../FounderCard";
import NavAndLanding from "../NavAndLanding";

function About() {
    return (
        <>
            <NavAndLanding bgImg="/src/assets/blake_we_2.jpg" bottomBarMsg="About Us" />


            <div className={` bg-[rgba(255, 255, 255, 0.8)] bg-cover`}>

                <AboutCards />


                <FounderCard />
                <div className="w-full mt-12" ></div>

            </div>

            <Footer />
        </>
    );
}

export default About;