import AboutCards from "../AboutCards";
import Footer from "../Footer";
import FounderCard from "../FounderCard";
import NavAndLanding from "../NavAndLanding";
import WhyChooseUs from "../WhyChooseUs";
import bgdk from "/src/assets/blake_we_2_desktop.jpg";
import twitter from "/src/assets/twitter.png";

function About() {
    return (
        <>
            <NavAndLanding bgImg={bgdk} bottomBarMsg="About West Coast Irrigation Services" />


            <div className={` bg-[rgba(255, 255, 255, 0.8)] bg-cover`}>
                <div className="w-full mt-2" ></div>
                <AboutCards />

                <div className="w-full mt-6" ></div>

                <WhyChooseUs />
                <div className="w-full mt-16" ></div>
                <div className="flex justify-center">
                    <div className="w-[90vw] max-w-[1320px] grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <FounderCard img={twitter} name="Blake" role="Founder & Owner"
                            desc="a to one word words a to one word a one to a words one to word a to one word words a to one word a one to a words one to word a to one word words a to one word a one to a words one to word a "
                        />
                        <FounderCard img={twitter} name="Mallory" role="Founder & Owner"
                            desc="a to one word words a to one word a one to a words one to word a to one word words a to one word a one to a words one to word a to one word words a to one word a one to a words one to word a "
                        />
                    </div>
                </div>
                <div className="w-full mt-16" ></div>

            </div>

            <Footer />
        </>
    );
}

export default About;