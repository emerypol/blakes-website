function NavAndLanding() {
    return (
        <>
            <div className="w-full h-[90vh] relative ">
                <div className="absolute inset-0 bg-cover bg-center "
                    style={{ backgroundImage: `url('/src/assets/blake_homepage.jpg')` }}>
                </div>

                <div className="absolute inset-0 bg-black/30"></div>

                <div className="absolute inset-0 top-80 bottom-50 text-center text-white text-[clamp(32px,8vw,64px)] font-extrabold leading-[1.3]">
                    THE BEST IRRIGATION<br></br>SERVICE IN WEST MICHIGAN
                </div>
            </div>

        </>
    );
}

export default NavAndLanding;