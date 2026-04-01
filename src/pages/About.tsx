import NavAndLanding from "../NavAndLanding";
import TwoBox from "../TwoBox";

function About() {
    return (
        <>
            <NavAndLanding landMessage="WE LOVE WHAT WE DO, AND IT SHOWS."
                bgImg="/src/assets/blake_we_2.jpg" />

            <div className="bg-[rgb(37,99,235)]">
                <div className=" flex justify-center items-center  py-10">
                    <div className="container mx-auto px-6 ">
                        <TwoBox box1={
                            <div className="pb-3 md:pb-0 text-[clamp(24px,3.5vw,46px)]
                             text-[rgb(97,218,255)] me-1">
                                Irrigation, other irrigation adjacent thing, a list with a few more.
                                We do it all. Complete solutions.

                            </div>
                        }
                            box2={<div className="text-[clamp(14px,1.5vw,20px)] text-white
                                md:ms-4">
                                Servicing the West Michigan area for over 20 years, WCI has built a reputation for excellence in irrigation services.  From design and installation to maintenance and repairs, we offer comprehensive irrigation services tailored to meet the unique needs of each customer. With a commitment to quality and customer satisfaction, WCI is your trusted partner for all your irrigation needs in West Michigan.
                            </div>}
                        />
                    </div>

                </div>
            </div>

        </>
    );
}

export default About;