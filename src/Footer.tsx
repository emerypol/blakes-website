import { Link } from "react-router-dom";

function Footer() {

    //3 clusters near middle, 3 cols until sm, then 1 col. 
    // so flex-col until sm, then flex-row.
    // build for mobile, switch order for desktop.
    return (
        <div className="w-full flex bg-[rgb(8,42,116)] text-white items-center justify-center relative"  >
            <div className="flex flex-col md:flex-row py-12  w-[90vw] lg:w-[70vw]    " >
                <div className="flex flex-1   flex-col items-center justify-center  ">
                    <div className="text-center">
                        (616) 510-3424
                    </div>
                    <div className="text-center">
                        blake@wcoastirrigation.com
                    </div>
                    <div className="flex flex-row justify-center items-center pt-3">
                        <a href="https://facebook.com" className="pe-2" target="_blank" rel="noopener noreferrer" >
                            <img src="/src/assets/facebook.png" className=" w-[32px] h-[32px] object-contain"></img>
                        </a>
                        <a href="https://instagram.com" className="ps-2" target="_blank" rel="noopener noreferrer">
                            <img src="/src/assets/instagram.png" className=" w-[32px] h-[32px] object-contain"></img>
                        </a>
                    </div>
                </div>
                <div className="flex flex-1 flex-col items-center justify-center py-8 md:py-0  ">
                    <Link to="/home">
                        <img src="/src/assets/WCI_logo_crop_1.jpg" className="w-[230px] h-[80px] object-cover rounded-md" />
                    </Link>

                </div>
                <div className="flex flex-1  flex-col items-center justify-center leading-tight  ">
                    <div className="text-center">
                        6713 Wildwood Dr <br />West Olive, MI 49460
                    </div>
                    <div className="text-center leading-tight mt-2 text-[14px]">
                        Trademark of West Coast Irrigation, Inc. © 2024 All rights reserved.
                    </div>

                </div>
            </div>
            <div className="absolute bottom-1 right-8 text-xs text-gray-400 ">
                Site Credit: Emery Pollack
            </div>
        </div >
    )
}

export default Footer;