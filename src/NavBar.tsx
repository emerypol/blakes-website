import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";

function NavBar() {
    return (

        <div className="flex items-center justify-start w-full h-[12vh] ps-3 lg:ps-7 relative
            text-[clamp(16px,1.9vw,22px)] bg-transparent text-white">
            <div className="absolute left-1/2 -translate-x-1/2 hidden md:block ">
                <Link to="/home">
                    <img src='/src/assets/blake_we_1.jpg' className="w-[120px] h-[80px] object-contain" />
                </Link>
            </div>
            <div className="   items-start justify-start  hidden md:flex  ">
                <div className=" ">
                    <Link to="/home">
                        Home
                    </Link>
                </div>
                <div className="px-3 lg:px-5  ">
                    <Link to="/about">
                        About
                    </Link>
                </div>
                <div className="   ">
                    <Link to="/services">
                        Services
                    </Link>
                </div>
                <div className="px-3 lg:px-5">
                    <Link to="/contact">
                        Contact Us
                    </Link>
                </div>
            </div>

            <div className="px-6 pt-8 w-full flex flex-row items-center md:hidden ">
                <div className="flex md:hidden ">
                    <Link to="/home">
                        <img src='/src/assets/blake_we_1.jpg' className="w-[120px] h-[80px] object-contain" />
                    </Link>
                </div>
                <div className="ms-auto flex md:hidden  ">
                    <MobileMenu></MobileMenu>
                </div>
            </div>
        </div>


    );
}

export default NavBar;