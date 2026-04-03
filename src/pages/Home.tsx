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
                bgImg="/src/assets/blake_homepage.jpg" />

            <div className="bg-[rgb(37,99,235)]">
                <div className="flex justify-center items-center">
                    <div className=" flex justify-center items-center  py-10 max-w-[1320px]">
                        <div className="container w-[88vw]">
                            <TwoBox box1={
                                <div className="pb-3 md:pb-0 text-[clamp(30px,3vw,60px)] text-[rgb(97,218,255)]">
                                    Complete Irrigation Solutions. Dedicated to Perfection.

                                </div>
                            }
                                box2={<div className="text-[clamp(16px,1.5vw,22px)] text-white">
                                    The CLS fleet of equipment is state-of-the-art, providing our team with the best tools for every task. Our licensed, educated staff takes pride in solving even the most complex problems as we design, construct, and maintain beautiful landscapes for our clients here in West Michigan.

                                </div>}
                            />
                        </div>
                    </div>
                </div>
                <div className=" py-5 md:py-10"></div>
                <div className="flex justify-center items-center">
                    < div className=" w-[88vw] max-w-[1320px]" >
                        <div className="rounded-xl p-2 bg-white ">
                            <TwoBox box1GoesTop={false} color="white"
                                box1={<HomeServices></HomeServices>}
                                box2={
                                    <div className=" h-100">
                                        <img src="/src/assets/blake_we_3.jpg" className="w-full h-full object-cover"></img>
                                    </div>
                                }>

                            </TwoBox>

                        </div>
                    </div>
                </div>

                <div className=" py-8 md:py-10"></div>


                <div className="flex justify-center items-center">
                    <div className="flex justify-center items-center rounded-lg bg-[rgb(82,214,255)] pt-4 pb-6 w-[88vw] max-w-[1320px] md:px-3   ">
                        <TwoBox
                            color="rgb(82, 214, 255)" rounded="full"
                            box1={
                                <div className="flex flex-col  whitespace-nowrap text-[clamp(28px,6vw,54px)]
                                justify-center items-center md:items-start md:justify-start   pt-2 md:pt-0 text-white  ">
                                    <div className=" leading-tight md:leading-[1.25] text-center ">
                                        Want a Quote?
                                    </div>
                                    <div className=" text-center ">
                                        Have a Question?
                                    </div>
                                </div>}
                            box2={<div className="md:ps-8 md:pe-2 pt-4 md:pt-0"><HomeContactUs></HomeContactUs></div>}>
                        </TwoBox>
                    </div>
                </div>
                <div className=" py-8 md:py-10"></div>
                <Footer></Footer>

            </div>
        </>
    );
}

export default Home;