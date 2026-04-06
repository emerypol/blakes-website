import NavBar from "./NavBar";
type NavAndLandingProps = {
    landMessage?: string;
    bgImg?: string;
    bottomBarMsg?: string;
};
//
function NavAndLanding({ landMessage = "", bgImg = "", bottomBarMsg = "", }: NavAndLandingProps) {
    return (
        <>
            <NavBar></NavBar>
            <div className="w-full relative" style={{ height: bottomBarMsg === "" ? "86vh" : "58vh" }}>
                <div className="absolute inset-0 bg-cover bg-center "
                    style={{ backgroundImage: `url(${bgImg})` }}>
                </div>

                <div className="absolute inset-0 bg-black/30"></div>



                <div className="absolute inset-0 top-80 lg:top-80   text-center text-white
                 text-[clamp(32px,6vw,64px)] font-extrabold leading-[1.3] px-8">

                    {landMessage}
                </div>
                {bottomBarMsg != "" &&
                    <div className="absolute bottom-0 w-full  text-center   text-white
                            text-[clamp(28px,6vw,52px)] font-semibold leading-[1.3] bg-[rgb(15,95,184,0.8)]
                            flex justify-center ">

                        <div className="max-w-[1320px] w-[88vw] text-start py-3">
                            {bottomBarMsg}
                        </div>
                    </div>
                }
            </div >

        </>
    );
}

export default NavAndLanding;