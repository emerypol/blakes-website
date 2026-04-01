import HomeServices from "../HomeServices";
import TwoBox from "../TwoBox";

function Home() {
    return (
        <>
            <TwoBox box1="Complete Irrigation Solutions. Dedicated to Perfection." box2="The CLS fleet of equipment is state-of-the-art, providing our team with the best tools for every task. Our licensed, educated staff takes pride in solving even the most complex problems as we design, construct, and maintain beautiful landscapes for our clients here in West Michigan. " />

            <div className="flex bg-red-500 h-[200px]" >Calabunga</div>


            <TwoBox box1={<HomeServices></HomeServices>} box2={
                <div className=" h-100"><img src="/services.jpg" className="w-full h-full object-contain"></img></div>}></TwoBox>
        </>
    );
}

export default Home;