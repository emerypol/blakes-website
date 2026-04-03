import { Link } from "react-router-dom";

function HomeContactUs() {

    return (
        <>
            <Link
                to="/contact"
                className="   "
            >
                <div className=" flex justify-start items-start  ">
                    <div className="text-white text-[clamp(22px,2vw,32px)] 
                        font-bold bg-[rgb(20,135,243)] py-2 px-4 rounded-md leading-tight border-2
                           whitespace-nowrap">
                        Contact Us
                    </div>
                </div>
            </Link>
        </>
    )
}

export default HomeContactUs;

