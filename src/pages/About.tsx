import AboutCards from "../AboutCards";
import NavAndLanding from "../NavAndLanding";
import TwoBox from "../TwoBox";

import whitebg from "/src/assets/white_bg_crop_2_optimized.jpg"

function About() {
    return (
        <>
            <NavAndLanding bgImg="/src/assets/blake_we_2.jpg" bottomBarMsg="About" />
            <div className={`bg-[url('${whitebg}')] bg-cover`}>
                <AboutCards></AboutCards>
            </div>

        </>
    );
}

export default About;