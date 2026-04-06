import { Link } from "react-router-dom";
import './HomeServices.css'
import b3 from "/src/assets/blake_we_3.jpg";


function HomeServices() {

    return (
        <div className="flex justify-center items-center">
            < div className=" w-[90vw] max-w-[1320px]" >
                <div className="rounded-lg relative">
                    <img
                        src={b3}
                        alt="Services"
                        className="w-full h-[80vh] min-h-[448px] object-cover rounded-lg"
                    />
                    <div className="absolute bottom-0 w-full p-8 pt-1 bg-[rgb(1,1,1,.6)] rounded-b-lg">
                        <h2 className=" text-[clamp(34px,3vw,44px)] font-semibold text-white mb-1">Services</h2>
                        <p className="text-md text-white leading-relaxed mb-5">
                            We serve homeowners, businesses, commercial facilities, schools,
                            and municipalities — find out what we can do for you.
                        </p>
                        <Link to="/services">
                            <div
                                className="inline-flex items-center gap-1.5 text-sm font-bold border border-white 
                                            rounded-3xl px-4 py-2 text-white hover:bg-white 
                                            hover:text-black hover:border-black">
                                Our services
                            </div>
                        </Link>
                    </div>

                    <div className="absolute bottom-0 w-full">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeServices;

