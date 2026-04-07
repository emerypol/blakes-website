import ContactForm from "../ContactForm";
import Footer from "../Footer";
import NavAndLanding from "../NavAndLanding";
import bgdk from "/src/assets/blake_we_2_desktop.jpg";

function ContactUs() {
    return (
        <>
            <NavAndLanding bgImg={bgdk} bottomBarMsg="Contact Us" />
            <div className={` bg-[rgba(255, 255, 255, 0.8)] bg-cover flex justify-center items-center`}>





                <div className="py-12 max-w-[90vw] 2xl:max-w-[1320px]  ">
                    <ContactForm />


                </div>

            </div>


            <Footer />
        </>
    );
}

export default ContactUs;