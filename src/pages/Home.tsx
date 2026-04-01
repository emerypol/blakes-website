import { Link } from "react-router-dom";
import HomeContactUs from "../HomeContactUs";
import HomeServices from "../HomeServices";
import TwoBox from "../TwoBox";

function Home() {
    return (
        <>
            <TwoBox box1={
                <div className="pb-3 md:pb-0 text-[clamp(30px,3vw,60px)]">
                    Complete Irrigation Solutions. Dedicated to Perfection.

                </div>
            }
                box2={<div className="text-[clamp(16px,1.5vw,22px)]">
                    The CLS fleet of equipment is state-of-the-art, providing our team with the best tools for every task. Our licensed, educated staff takes pride in solving even the most complex problems as we design, construct, and maintain beautiful landscapes for our clients here in West Michigan.

                </div>}
            />
            <div className="bg-[rgb(37,99,235)]  py-10"></div>
            <TwoBox box1GoesTop={false} box1={<HomeServices></HomeServices>} box2={
                <div className=" h-100"><img src="/services.jpg" className="w-full h-full object-contain"></img></div>}></TwoBox>

            <TwoBox box1={<HomeContactUs></HomeContactUs>}
                box2={
                    <Link
                        to="/contact"
                        className="  "
                    >
                        <div className=" flex justify-start items-start ">
                            <div className="text-white text-[clamp(18px,1.5vw,24px)] 
                        font-bold bg-[rgb(20,135,243)] py-2 px-4 rounded-3xl leading-tight
                         mb-4 md:mb-0">
                                Our Services
                            </div>
                        </div>
                    </Link>
                }>
            </TwoBox>


        </>
    );
}

export default Home;