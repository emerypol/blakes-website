import { Link } from "react-router-dom";
import './HomeServices.css'

function HomeServices() {

    return (
        <>

            <div className="flex justify-center  items-stretch ">
                < div className="container w-[90vw] max-w-[1320px]" >
                    <div className="rounded-xl   bg-white h-[30vw] ">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className="box1">
                                <div className="flex flex-col items-center justify-center md:items-start 
                                        md:justify-start max-w-[90vw] ">
                                    <div className="text-[rgb(20,135,243)] text-[clamp(54px,5vw,60px)] 
                                            font-bold pt-5 md:pt-0 " >
                                        Services
                                    </div>
                                    <div className="text-black text-[clamp(18px,1.5vw,22px)] pt-6
                                             text-center md:text-start max-w-[80%] leading-[1.5] " >
                                        We service homeowners, businesses, commercial facilities, schools, and municipalities. Learn what we can do for you.
                                    </div>
                                    <Link
                                        to="/services"
                                        className="pt-2 md:pt-4"
                                    >
                                        <div className=" flex   ">
                                            <div className="text-white text-[clamp(22px,1.75vw,28px)] 
                                                font-bold bg-[rgb(20,135,243)] py-2 px-4 rounded-3xl leading-tight
                                                 mb-4 md:mb-0">
                                                Our Services
                                            </div>
                                        </div>
                                    </Link>
                                </div>

                            </div>
                            <div className="relative m-0">
                                <img
                                    src="/src/assets/blake_we_1_cropped.jpg"
                                    className="w-full h-full object-cover absolute inset-0"
                                ></img>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
















        </>
    )
}

export default HomeServices;

