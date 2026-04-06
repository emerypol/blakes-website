import { Link } from "react-router-dom";
import HomeContactUs from "../HomeContactUs";
import TwoBox from "../TwoBox";
import Footer from "../Footer";
import NavAndLanding from "../NavAndLanding";
import bg from "/src/assets/blake_homepage_optimized.jpg";
import HomeServices from "../HomeServices";


function Home() {
    return (
        <>
            <NavAndLanding landMessage="THE BEST IRRIGATION SERVICE IN WEST MICHIGAN"
                bgImg={bg} />

            <div className="">
                <div className="flex justify-center items-center 
                bg-[radial-gradient(circle,rgb(14,84,168),_#1487f3)]">
                    <div className=" flex justify-center items-center  py-12 max-w-[1320px]">
                        <div className="container w-[88vw]">
                            <TwoBox color="transparent"
                                box1={
                                    <div className="pb-3 md:pb-0 text-[clamp(34px,3vw,48px)] text-[rgb(97,218,255)]
                                     w-[90%]">
                                        Complete Irrigation Solutions. Dedicated to Perfection.

                                    </div>
                                }
                                box2={<div className="text-[clamp(14px,1.5vw,18px)] leading-[1.3] text-white w-[80%]">
                                    The CLS fleet of equipment is state-of-the-art, providing our team with the best tools for every task. Our licensed, educated staff takes pride in solving even the most complex problems as we design, construct, and maintain beautiful landscapes for our clients here in West Michigan.

                                </div>}
                            />
                        </div>
                    </div>
                </div>




                <div className="bg-[rgba(255, 255, 255, 0.8)] bg-cover  ">

                    <div className=" py-5 md:py-10"></div>

                    <HomeServices />

                    <div className=" py-8 md:py-10"></div>


                    <div className="flex justify-center items-center">
                        <div className="flex flex-col md:flex-row rounded-lg 
                                w-[90vw] md:w-[50vw] h-[30vh] min-h-[206px] md:h-[26vh] max-w-[1320px] relative
                                bg-[url('/src/assets/blake_we_4_crop.jpg')] bg-cover bg-center 
                                items-center justify-end">
                            <div className="absolute inset-0 bg-black/25 z-0 rounded-lg" />

                            <div className="flex flex-col text-[clamp(26px,6vw,46px)]  text-white md:ms-3 lg:ms-8 ">
                                <div className="flex flex-col justify-start">
                                    <div className="text-center md:text-start leading-tight z-1 md:text-[clamp(26px,3vw,44px)]
                                     font-semibold
                                    text-[clamp(28px,9vw,42px)] ">
                                        Want a Quote?
                                    </div>
                                    <div className="text-[clamp(15px,4.5vw,19px)] md:text-start z-1 md:text-[clamp(14px,1.7vw,18px)]
                                     ps-2 text-center ">
                                        We'd love to hear from you.
                                    </div>
                                </div>
                            </div>
                            <div className="pb-8 md:pb-0 pt-4 md:pt-4  md:ms-auto md:me-3 lg:me-8">
                                <HomeContactUs />
                            </div>

                        </div>
                    </div>
                    <div className=" py-8 md:py-10"></div>
                </div>




                <Footer></Footer>

            </div>
        </>
    );
}

export default Home;