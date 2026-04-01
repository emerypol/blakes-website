
function Footer() {

    //3 clusters near middle, 3 cols until sm, then 1 col. 
    // so flex-col until sm, then flex-row.
    // build for mobile, switch order for desktop.
    return (
        <div className="w-full flex bg-[rgb(8,42,116)] text-white items-center justify-center relative"  >
            <div className="flex flex-col md:flex-row py-12  w-[90vw] lg:w-[70vw]    " >
                <div className="flex flex-1   flex-col items-center justify-center  ">
                    <div className="text-center">
                        999-999-9999
                    </div>
                    <div className="text-center">
                        fakeemail@notemail.com
                    </div>
                </div>
                <div className="flex flex-1 flex-col items-center justify-center py-8 md:py-0  ">
                    <div className="text-center">
                        West Coast Irrigation
                    </div>
                    <div className=" w-[180px] h-[120px]">
                        <img src="" className="w-full h-full object-contain"></img>
                    </div>
                </div>
                <div className="flex flex-1  flex-col items-center justify-center  ">
                    <div className="text-center">
                        99999 Fake Address St, Holland MI 9999
                    </div>
                    <div className="text-center">
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