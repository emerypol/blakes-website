

function FounderCard({ img, name, role, desc }: {
    img: string;
    name: string;
    role: string;
    desc: string;
}) {
    return (
        <div className="flex justify-center">
            <div className="max-w-[424px] sm:max-w-[620px] w-[90vw]">
                <div className="flex flex-col sm:flex-row  rounded-2xl shadow-lg p-6 border border-[#e2e2e2] bg-white
                                justify-center items-center sm:items-start">
                    <img src={img}
                        className="h-[120px] w-[120px] object-cover rounded-2xl" />
                    <div className="flex flex-col justify-center sm:justify-start ps-5">
                        <div className="text-[rgba(11,93,185,0.9)] text-[clamp(5px,8vw,34px)] md:text-[34px] font-semibold
                                        text-center sm:text-start pt-3 sm:pt-0">
                            {name}
                        </div>
                        <div className="text-white bg-[rgb(120,180,248)] text-center sm:text-start 
                                        mb-2 ps-3 rounded-lg font-bold">
                            {role}
                        </div>
                        <div className=" text-center sm:text-start">
                            {desc}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FounderCard;
