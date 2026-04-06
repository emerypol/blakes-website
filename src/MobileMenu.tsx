import { useState } from "react";
import { Link } from "react-router-dom";

function MobileMenu() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setMenuOpen(true)}
                className="p-2"
                aria-label="Open menu"
            >
                <svg className="w-[54px] h-[54px]  " viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <title>menu</title>
                    <g id="Layer_2" data-name="Layer 2">
                        <g id="invisible_box" data-name="invisible box">
                            <rect width="48" height="48" fill="none" />
                        </g>
                        <g id="icons_Q2" data-name="icons Q2">
                            <g>
                                <path d="M42,12a2,2,0,0,1-2,2H8a2,2,0,0,1-2-2H6a2,2,0,0,1,2-2H40a2,2,0,0,1,2,2Z" fill="currentColor" />
                                <path d="M42,24a2,2,0,0,1-2,2H8a2,2,0,0,1-2-2H6a2,2,0,0,1,2-2H40a2,2,0,0,1,2,2Z" fill="currentColor" />
                                <path d="M42,36a2,2,0,0,1-2,2H8a2,2,0,0,1-2-2H6a2,2,0,0,1,2-2H40a2,2,0,0,1,2,2Z" fill="currentColor" />
                            </g>
                        </g>
                    </g>
                </svg>
            </button>

            {/* Full-screen menu */}
            {menuOpen && (
                <div className="fixed inset-0 z-50 bg-blue-600 flex flex-col items-center justify-start pt-[12vh] gap-8">
                    <button
                        onClick={() => setMenuOpen(false)}
                        className="absolute top-6 right-6 text-white text-3xl"
                        aria-label="Close menu"
                    >
                        ×
                    </button>

                    <Link
                        to="/home"
                        onClick={() => setMenuOpen(false)}
                        className="text-white text-3xl font-bold"
                    >
                        Home
                    </Link>

                    <Link
                        to="/about"
                        onClick={() => setMenuOpen(false)}
                        className="text-white text-3xl font-bold"
                    >
                        About
                    </Link>

                    <Link
                        to="/services"
                        onClick={() => setMenuOpen(false)}
                        className="text-white text-3xl font-bold"
                    >
                        Services
                    </Link>

                    <Link
                        to="/contact"
                        onClick={() => setMenuOpen(false)}
                        className="text-white text-3xl font-bold"
                    >
                        Contact Us
                    </Link>
                </div>
            )}
        </>
    );
}

export default MobileMenu;