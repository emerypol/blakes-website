import { Link } from "react-router-dom";
import HomeContactUs from "../HomeContactUs";
import HomeServices from "../HomeServices";
import TwoBox from "../TwoBox";
import Footer from "../Footer";
import NavAndLanding from "../NavAndLanding";
import rainempty from "/src/assets/raindrop_empty.jpg";
import rainfull from "/src/assets/raindrop_filled.jpg";
import facebook from "/src/assets/facebook.png";

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






                <div className="bg-[url('/src/assets/white_bg_crop_2_optimized.jpg')] bg-cover  ">
                    <div className=" py-5 md:py-10"></div>
                    <div className="flex justify-center items-center">
                        < div className=" w-[88vw] max-w-[1320px]" >
                            <div className="rounded-lg p-4 bg-white shadow-md border-1 border-[#e2e2e2] ">
                                <div className="grid grid-cols-1 md:grid-cols-2  ">
                                    <div className="order-2 md:order-1">
                                        <HomeServices />
                                    </div>
                                    <div className="order-1 md:order-2 relative   ">
                                        <img src="/src/assets/blake_we_3.jpg"
                                            className="relative h-[60vh] w-full object-cover
                                            md:absolute md:top-0 md:left-0 md:h-full md:w-full 
                                            md:object-cover rounded-lg border-4 border-[#2563eb] " />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>



                    <div className=" py-8 md:py-10"></div>


                    <div className="flex justify-center items-center">
                        <div className="flex justify-center items-center rounded-lg  pt-4 pb-6 w-[88vw] max-w-[1320px] md:px-3
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