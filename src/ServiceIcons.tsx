import Sprinkler from '/src/assets/sprinkler.svg?react';
// svg icon, title, optional description
let service_1 = [<Sprinkler />, "Sprinkler", ""];
let service_2 = [<Sprinkler />, "Watering", "Large scale solutions"];
let service_3 = [<Sprinkler />, "Planting", "Trees, shrubs, bushes"];
let service_4 = [<Sprinkler />, "Irrigation", ""];
// add additional services/icons as blake directs
let services = [service_1, service_2, service_3, service_4, service_1, service_2, service_3, service_4,];

function ServiceIcons() {
    return (
        <div className="max-w-[90vw] xl:max-w-[1320px] w-full ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 gap-y-20">
                {services.map((item) => (
                    <div className="flex flex-col justify-start items-center">
                        <div className="text-[rgba(0,42,90,0.9)] 
                                    w-[90vw] max-w-[230px] min-w-[160px] md:w-[16vw] md:max-w-[180px] 
                                    h-[90vw] max-h-[230px] min-h-[160px] md:h-[16vw] md:max-h-[180px] ">
                            {item[0]}
                        </div>
                        <div className="text-[22px] font-bold pt-3 uppercase text-[rgba(11,93,185,0.9)] leading-none">
                            {item[1]}
                        </div>
                        <div className='pt-1 leading-none w-[70%] text-center text-[rgba(0,42,90,0.9)]'>
                            {item[2]}
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
}

export default ServiceIcons;