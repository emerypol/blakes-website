import { Link } from "react-router-dom";

function HomeContactUs() {

    return (
        <>
            <Link
                to="/contact"
                className="   "
            >
                <div className=" flex justify-start items-start  ">
                    <div className="text-white text-[clamp(15px,1.7vw,28px)] 
                        font-bold bg-transparent py-2 px-4 rounded-[400px] leading-tight border-2
                           whitespace-nowrap z-10">
                        Contact Us
                    </div>
                </div>
            </Link>
        </>
    )
}

export default HomeContactUs;

