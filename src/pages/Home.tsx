import { Link } from "react-router-dom";
import HomeContactUs from "../HomeContactUs";
import HomeServices from "../HomeServices";
import TwoBox from "../TwoBox";
import Footer from "../Footer";
import NavAndLanding from "../NavAndLanding";


function Home() {
    return (
        <>
            <NavAndLanding landMessage="THE BEST IRRIGATION SERVICE IN WEST MICHIGAN"
                bgImg="/src/assets/blake_homepage_optimized.jpg" />

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



                    <div className="flex justify-center items-center">
                        < div className=" w-[90vw] max-w-[1320px]" >
                            <div className="rounded-lg  shadow-md border-1 border-[#e2e2e2] relative">
                                <img
                                    src="/src/assets/blake_we_3.jpg"
                                    alt="Services"
                                    className="w-full h-[60vh] object-cover rounded-lg"
                                />
                                <div className="absolute bottom-0 w-full p-8 pt-1 bg-[rgb(1,1,1,.6)] rounded-b-lg">
                                    <h2 className=" text-[clamp(34px,3vw,44px)] font-semibold text-white mb-1">Services</h2>
                                    <p className="text-md text-white leading-relaxed mb-5">
                                        We serve homeowners, businesses, commercial facilities, schools,
                                        and municipalities — find out what we can do for you.
                                    </p>
                                    <a href="/services"
                                        className="inline-flex items-center gap-1.5 text-sm font-bold border border-white 
                                    rounded-3xl px-4 py-2 text-white ">
                                        Our services
                                    </a>
                                </div>

                                <div className="absolute bottom-0 w-full">

                                </div>
                            </div>
                        </div>
                    </div>



















                    <div className=" py-8 md:py-10"></div>


                    <div className="flex justify-center items-center">
                        <div className="flex justify-center items-center rounded-lg  pt-4 pb-6 w-[90vw] max-w-[1320px] md:px-3
                                    bg-[url('/src/assets/blake_we_4_crop.jpg')] bg-cover bg-center 
                                    shadow-lg border-2 border-white   ">
                            <TwoBox
                                color="transparent" rounded="full"
                                box1={
                                    <div className="flex flex-col  whitespace-nowrap text-[clamp(26px,6vw,46px)] 
                                md:text-[clamp(28px,4vw,54px)] 
                                justify-center items-center md:items-end md:justify-start   pt-2 md:pt-0 text-white
                                 [text-shadow:-1px_-1px_0_black,1px_-1px_0_black,-1px_1px_0_black,1px_1px_0_black]  ">
                                        <div className="flex flex-col justify-start">
                                            <div className=" leading-tight md:leading-[1.25] text-center md:text-end ">
                                                Want a Quote?
                                            </div>
                                            <div className="text-center md:text-end ">
                                                Have a Question?
                                            </div>
                                        </div>
                                    </div>}
                                box2={<div className="md:ps-8 md:pe-2 pt-4 md:pt-0"><HomeContactUs></HomeContactUs></div>}>
                            </TwoBox>
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