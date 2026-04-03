import NavBar from "./NavBar";
type NavAndLandingProps = {
    landMessage?: string;
    bgImg?: string;
};
//
function NavAndLanding({ landMessage = "", bgImg = "" }: NavAndLandingProps) {
    return (
        <>

            <div className="w-full h-[86vh] relative  ">
                <div className="absolute inset-0 bg-cover bg-center "
                    style={{ backgroundImage: `url(${bgImg})` }}>
                </div>

                <div className="absolute inset-0 bg-black/30"></div>

                <NavBar></NavBar>

                <div className="absolute inset-0 top-80 lg:top-80 bottom-50 text-center text-white
                 text-[clamp(32px,6vw,64px)] font-extrabold leading-[1.3] px-8">

                    {landMessage}
                </div>
            </div>

        </>
    );
}

export default NavAndLanding;