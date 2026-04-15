import Footer from "../Footer";
import NavAndLanding from "../NavAndLanding";
import ServiceCards from "../ServiceCards";
import ServiceIcons from "../ServiceIcons";
import bgdk from "/src/assets/blake_we_2_desktop.jpg";

function Services() {
    return (
        <>
            <NavAndLanding bgImg={bgdk} bottomBarMsg="Our Services" />
            <div className={` bg-[rgba(255, 255, 255, 0.8)] bg-cover `}>

                <ServiceCards />
            </div>
            <Footer />
        </>
    );
}

export default Services;