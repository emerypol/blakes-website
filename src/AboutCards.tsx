let card1 = ["#EEEDFE",
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none"
        stroke="#534AB7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22V12"></path>
        <path d="M12 12C12 12 7 9 7 5a5 5 0 0110 0c0 4-5 7-5 7z"></path>
        <path d="M12 16c0 0-4 2-4 0"></path>
    </svg>,
    "LEGACY",
    "A Legacy Built on Water & Hard Work",
    "At West Coast Irrigation Services, irrigation isn't just what we do—it's who we are. Our owner, Blake, has been immersed in the industry since birth. Growing up in a family of irrigation professionals, he learned the trade at the side of his grandfather, father, uncles, and cousins. This multi-generational expertise means that when we step onto your property, we bring decades of passed-down knowledge, refined techniques, and a deep-rooted commitment to quality."
];

let card2 = ["#E1F5EE",
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none"
        stroke="#0F6E56" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="6" r="2"></circle>
        <circle cx="15" cy="6" r="2"></circle>
        <circle cx="12" cy="5" r="1.2"></circle>
        <path d="M5 22v-3a4 4 0 014-4h6a4 4 0 014 4v3"></path>
        <path d="M9 15v7"></path>
        <path d="M15 15v7"></path>
    </svg>,
    "FAMILY",
    "Family Owned & Locally Operated",
    "Family Owned & Locally Operated. We are a family-owned small business in every sense of the word. While Blake is out in the field ensuring your systems are running perfectly, his wife, Mallory, and their two sons, Bodhi and Bali, are the heartbeat of the operation behind the scenes."
];
let card3 = ["#FAEEDA",
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none"
        stroke="#854F0B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6"></circle>
        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"></path>
    </svg>,
    "COMMUNITY",
    "Rooted in Community.",
    "Our commitment to our neighbors extends beyond irrigation. Blake is proud to serve as a volunteer firefighter for Port Sheldon Township, dedicating his time to the safety and well-being of the local area. That same spirit of service and reliability is what drives our business. We don't just work here; we live here, and we treat every client's lawn like it's our own."
];





let cards = [card1, card2, card3];
function AboutCards() {
    return (
        <>
            <div className=" py-12 flex justify-center">
                <div className="flex flex-col md:flex-row flex-wrap gap-4 justify-center items-center md:items-stretch 
                max-w-[1320px] w-[88vw] ">
                    {cards.map((item) => (
                        <div
                            className="flex flex-col flex-1 bg-[rgba(11,93,185,0.9)] rounded-2xl sm:min-w-[300px] max-w-[424px]
                     shadow-lg px-6 py-6 border border-[#e2e2e2] justify-start items-start text-white"
                        >
                            <div className="rounded-lg flex justify-center items-center p-2" style={{ background: `${item[0]}` }}>
                                {item[1]}
                            </div>
                            <div className="text-[16px] font-bold text-start w-[90%] py-3 ">
                                {item[2]}
                            </div>
                            <div className="border-b w-full border-[rgba(255,255,255,0.65)]">

                            </div>
                            <div className="py-3 text-[clamp(26px,2.5vw,34px)] font-semibold">
                                {item[3]}
                            </div>

                            <div>
                                {item[4]}
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