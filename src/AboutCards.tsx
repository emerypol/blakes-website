

function AboutCards() {
    return (
        <>
            {/* TODO texture this */}
            <div className="bg-[rgb(37,99,235)] py-10">
                <div className="flex flex-row flex-wrap justify-center items-center">
                    <div className="flex flex-col bg-red-700 rounded-2xl w-[300px] h-[400px] mx-2">
                        <div className="title">
                            West Coast Irrigation Services
                        </div>
                        <div className="desc">
                            West Coast Irrigation Services provides professional, full-service irrigation and water management solutions throughout West Michigan. From custom system design and precision installation to expert repairs and seasonal maintenance, we deliver reliable solutions built for long-term performance.
                        </div>
                    </div>
                    <div className="flex flex-col bg-red-700 rounded-2xl w-[300px] h-[400px] mx-2 my-5">
                        <div className="title">
                            Serving Communities Across West Michigan
                        </div>
                        <div className="desc">
                            We proudly provide irrigation services throughout Holland, Grand Haven, Zeeland, West Olive, and Saugatuck. With deep roots in the region, we understand the unique needs of West Michigan properties and are committed to delivering responsive, dependable service across the lakeshore communities we call home.
                        </div>
                    </div>
                    <div className="flex flex-col bg-red-700 rounded-2xl w-[300px] h-[400px] mx-2">
                        <div className="title">
                            40 Years of Trusted Expertise
                        </div>
                        <div className="desc">
                            For four decades, West Coast Irrigation Services has built a reputation for professionalism, reliability, and quality craftsmanship. Our extensive experience in water management enables us to handle every phase of an irrigation system with confidence, precision, and care.
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default AboutCards;