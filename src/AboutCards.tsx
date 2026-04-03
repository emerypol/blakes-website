



let cards = {
    "West Coast Irrigation Services": "West Coast Irrigation Services provides professional, full- service irrigation and water management solutions throughout West Michigan.From custom system design and precision installation to expert repairs and seasonal maintenance, we deliver reliable solutions built for long - term performance.",
    "Serving Communities Across West Michigan": "We proudly provide irrigation services throughout Holland, Grand Haven, Zeeland, West Olive, and Saugatuck.With deep roots in the region, we understand the unique needs of West Michigan properties and are committed to delivering responsive, dependable service across the lakeshore communities we call home.",
    "40 Years of Trusted Expertise": "For four decades, West Coast Irrigation Services has built a reputation for professionalism, reliability, and quality craftsmanship. Our extensive experience in water management enables us to handle every phase of an irrigation system with confidence, precision, and care.",

}



function AboutCards() {
    return (
        <>
            {/* TODO texture this */}
            <div className=" py-10 flex justify-center">
                <div className="flex flex-col md:flex-row flex-wrap gap-4 justify-center items-center md:items-start max-w-[1320px] w-[88vw]">
                    {Object.entries(cards).map(([key, value]) => (
                        <div
                            key={key}
                            className="flex flex-col flex-1 bg-white rounded-2xl sm:min-w-[300px] max-w-[424px]
                     shadow-lg p-4 border border-[#e2e2e2] justify-center items-center"
                        >
                            <div className="text-[clamp(26px,2.5vw,34px)] font-semibold text-center leading-[1.2]">
                                {key}
                            </div>
                            <div className="text-[16px] text-center w-[90%] py-3">
                                {value}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default AboutCards;

/*

<div className="flex flex-col bg-red-700 rounded-2xl w-[300px] h-[400px] mx-2 my-5">
                        <div className="title">
                        </div>
                        <div className="desc">
                            </div>
                    </div>
                    <div className="flex flex-col bg-red-700 rounded-2xl w-[300px] h-[400px] mx-2">
                        <div className="title">
                            
                        </div>
                        <div className="desc">
                                                    </div>
                    </div>



                    {
                        Object.keys(cards).map((key) => (
                            
                        ));
                    }
                    */