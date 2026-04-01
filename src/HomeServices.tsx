import { Link } from "react-router-dom";
import './HomeServices.css'

function HomeServices() {

    return (
        <>

            <div className="flex flex-col items-left justify-left">
                <div className="text-[rgb(97,218,255)] text-[clamp(48px,5vw,84px)] font-bold" >
                    Services
                </div>
                <div className="text-white text-[clamp(20px,1.5vw,26px)] pt-6" >
                    We service homeowners, businesses, commercial facilities, schools, and municipalities. Learn what we can do for you.
                </div>
                <Link
                    to="/services"
                    className="pt-5 "
                >
                    <div className=" flex justify-start items-start ">
                        <div className="text-white text-[clamp(18px,1.5vw,24px)] 
                        font-bold bg-[rgb(20,135,243)] py-2 px-4 rounded-3xl leading-tight
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

