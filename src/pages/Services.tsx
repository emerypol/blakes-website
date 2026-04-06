import Footer from "../Footer";
import NavAndLanding from "../NavAndLanding";
import ServiceIcons from "../ServiceIcons";


function Services() {
    return (
        <>
            <NavAndLanding bgImg="/src/assets/blake_we_2.jpg" bottomBarMsg="Our Services" />


            <div className={` bg-[rgba(255, 255, 255, 0.8)] bg-cover `}>
                <div className="flex justify-center py-20">
                    <ServiceIcons />
                </div>


            </div>

            <Footer />
        </>
    );
}

export default Services;