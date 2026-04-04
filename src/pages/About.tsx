import AboutCards from "../AboutCards";
import NavAndLanding from "../NavAndLanding";
import TwoBox from "../TwoBox";

import whitebg from "/src/assets/white_bg_crop_3.jpg"
function About() {
    return (
        <>
            <NavAndLanding bgImg="/src/assets/blake_we_2.jpg" bottomBarMsg="About" />


            <div className={` bg-[rgba(255, 255, 255, 0.8)] bg-cover`}>

                <AboutCards></AboutCards>


















                <div className="flex justify-center py-10">
                    <div className="w-[88vw] flex justify-center">
                        <div className="max-w-[1320px] rounded-2xl shadow-lg p-4 border border-[#e2e2e2] bg-white
                            flex flex-col md:flex-row sm:min-w-[300px] sm:max-w-[424px] md:max-w-auto text-wrap">
                            <div className="text-[clamp(26px,2.5vw,34px)]">
                                Our Founder
                            </div>
                            <div className="text-[16px]">
                                Blake grew up from 0 years old into an adult. He currently lives in west michigan. He founded WCI in 2010. He's been doing this for over 10 years. Other sentences needed.
                            </div>

                            <img src="/src/assets/blake_we_3.jpg"
                                className="relative  h-[480px] w-[280px] rounded-2xl border-4 border-[#2563eb] " />
                        </div>
                    </div>
                </div>

            </div>


        </>
    );
}

export default About;