import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";

function NavBar() {
    return (

        <div className="flex sticky top-0 z-50 items-center justify-center relative bg-white   
            text-[clamp(16px,4vw,22px)] w-full h-[60px] py-4  ">
            <div className="max-w-[90vw] 2xl:max-w-[1320px] relative w-full flex flex-row">
                <div className="  items-center justify-start  hidden md:flex  ">
                    <div className=" ">
                        <Link to="/home" className="hover:text-[#1279df]!">
                            Home
                        </Link>
                    </div>
                    <div className="px-3 lg:px-5    ">
                        <Link to="/about" className="hover:text-[#1279df]!">
                            <span className=" ">
                                About
                            </span>
                        </Link>
                    </div>
                    <div className="   ">
                        <Link to="/services" className="hover:text-[#1279df]!">
                            Services
                        </Link>
                    </div>
                    <div className="px-3 lg:px-5">
                        <Link to="/contact" className="hover:text-[#1279df]!">
                            Contact Us
                        </Link>
                    </div>
                </div>

                <div className=" ms-auto pe-4 hidden md:block  ">
                    <Link to="/home">
                        <img src='/src/assets/WCI_logo_crop_1.jpg' className="w-[140px] h-[46px] object-cover rounded-md" />
                    </Link>
                </div>

                <div className="px-6   w-full flex flex-row items-center md:hidden ">
                    <div className="flex md:hidden ">
                        <Link to="/home">
                            <img src='/src/assets/WCI_logo_crop_1.jpg'
                                className=" w-[140px] h-[46px]
                        object-cover rounded-md" />
                        </Link>
                    </div>
                    <div className="ms-auto flex md:hidden text-black  ">
                        <MobileMenu></MobileMenu>
                    </div>
                </div>
            </div >
        </div >


    );
}

export default NavBar;