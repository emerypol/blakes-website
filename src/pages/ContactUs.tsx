import ContactForm from "../ContactForm";
import Footer from "../Footer";
import NavAndLanding from "../NavAndLanding";


function ContactUs() {
    return (
        <>
            <NavAndLanding bgImg="/src/assets/blake_we_2.jpg" bottomBarMsg="Contact Us" />
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