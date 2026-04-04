
import img1 from "/src/assets/twitter.png";


let card1 = [img1, "WHO WE ARE", "West Coast Irrigation", "West Coast Irrigation Services provides professional, full- service irrigation and water management solutions throughout West Michigan.From custom system design and precision installation to expert repairs and seasonal maintenance, we deliver reliable solutions built for long - term performance."];

let card2 = [img1, "WHERE TO FIND US", "West Michigan", "We proudly provide irrigation services throughout Holland, Grand Haven, Zeeland, West Olive, and Saugatuck.With deep roots in the region, we understand the unique needs of West Michigan properties and are committed to delivering responsive, dependable service across the lakeshore communities we call home."];
let card3 = [img1, "OUR TRACK RECORD", "40+ Years of Expertise", "For four decades, West Coast Irrigation Services has built a reputation for professionalism, reliability, and quality craftsmanship. Our extensive experience in water management enables us to handle every phase of an irrigation system with confidence, precision, and care."];

let cards = [card1, card2, card3];
function AboutCards() {
    return (
        <>
            <div className=" py-12 flex justify-center">
                <div className="flex flex-col md:flex-row flex-wrap gap-4 justify-center items-center md:items-start max-w-[1320px] w-[88vw]">
                    {cards.map((item, index) => (
                        <div
                            className="flex flex-col flex-1 bg-[rgba(11,93,185,0.9)] rounded-2xl sm:min-w-[300px] max-w-[424px]
                     shadow-lg px-6 py-6 border border-[#e2e2e2] justify-start items-start text-white"
                        >
                            <img src={item[0]} className="w-[32px] h-[32px] me-auto" />
                            <div className="text-[16px] font-bold text-start w-[90%] py-3 ">
                                {item[1]}
                            </div>
                            <div className="border-b w-full border-[rgba(255,255,255,0.65)]">

                            </div>
                            <div className="py-3 text-[clamp(26px,2.5vw,34px)]">
                                {item[2]}
                            </div>

                            <div>
                                {item[3]}
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