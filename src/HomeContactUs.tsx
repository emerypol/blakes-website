import { Link } from "react-router-dom";

function HomeContactUs() {

    return (
        <>
            <Link
                to="/contact"
                className="  "
            >
                <div className=" flex justify-start items-start ">
                    <div className="text-white text-[clamp(18px,1.5vw,24px)] 
                        font-bold bg-[rgb(20,135,243)] py-2 px-4 rounded-3xl leading-tight
                         mb-4 md:mb-0">
                        Contact Us
                    </div>
                </div>
            </Link>
        </>
    )
}

export default HomeContactUs;

