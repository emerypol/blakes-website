import { Link } from "react-router-dom";
import './HomeServices.css'

function HomeServices() {

    return (
        <>

            <div className="flex flex-col items-center justify-center md:items-start 
            md:justify-start max-w-[90vw] ">
                <div className="text-[rgb(20,135,243)] text-[clamp(50px,5vw,54px)] 
                font-bold pt-2 md:pt-0  " >
                    Services
                </div>
                <div className="text-black text-[clamp(18px,1.5vw,22px)] pt-1 md: pt-0 pb-2 md:pb-0
                 text-center md:text-start   leading-[1.5] w-[90%] " >
                    We service homeowners, businesses, commercial facilities, schools, and municipalities. Learn what we can do for you.
                </div>
                <Link
                    to="/services"
                    className="pt-2 md:pt-4"
                >
                    <div className=" flex   ">
                        <div className="text-white text-[clamp(22px,1.75vw,28px)] 
                        font-bold bg-[rgb(20,135,243)] py-2 px-4 rounded-md leading-tight border-1 border-black
                         mb-4 md:mb-0">
                            Our Services
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default HomeServices;

