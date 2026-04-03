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

            <div className="">

                <div className=" flex justify-center items-center bg-[rgb(37,99,235)]  pt-14 pb-20 md:pt-20 ">
                    <div className=" w-[90vw] max-w-[1320px] ">
                        <TwoBox rounded="lg"
                            box1={
                                <div className="pb-3 md:pb-0 text-[clamp(22px,3vw,36px)] text-[rgb(97,218,255)]">
                                    Complete Irrigation Solutions. Dedicated to Perfection.

                                </div>
                            }
                            box2={<div className="text-[clamp(14px,1.5vw,20px)] md:w-[30vw] text-white">
                                Serving West Michigan for over 40 years, we specialize in expert water and irrigation system design, installation, maintenance, and repair.
                            </div>}
                        />
                    </div>

                </div>


                <div className=" py-5 md:py-10"></div>


                <div className="flex justify-center items-center">
                    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow 
                    duration-300 max-w-[1320px] p-6 ">
                        <HomeServices></HomeServices>
                    </div>
                </div>

                <div className=" py-8 md:py-10"></div>


                <div className="flex justify-center items-center">
                    <div className="flex justify-center items-center w-full md:max-w-[1320px]   ">
                        <div className="flex justify-center items-center rounded-lg pt-4 pb-6 w-full 
                             md:px-3 bg-[url('/src/assets/blakes_we_4_cropped.jpg')] bg-cover bg-center max-w-[90vw]  ">
                            <TwoBox
                                box1={
                                    <div className="flex flex-col  whitespace-nowrap text-[clamp(28px,6vw,54px)]
                                justify-center items-center md:items-start md:justify-start   pt-2 md:pt-0
                                 text-white [text-shadow:-1px_-1px_0_black,1px_-1px_0_black,-1px_1px_0_black,1px_1px_0_black]  ">
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
                </div>


                <div className=" py-8 md:py-10"></div>



                <Footer></Footer>

            </div>
        </>
    );
}

export default Home;

/*

style={{
      textShadow: `
        -1px -1px 0 black,
         1px -1px 0 black,
        -1px  1px 0 black,
         1px  1px 0 black
      `,
    }}
<h1 className="text-white [text-shadow:-1px_-1px_0_black,1px_-1px_0_black,-1px_1px_0_black,1px_1px_0_black]">

both are tricks for getting a border around individual letters, more compatible than webkit
*/