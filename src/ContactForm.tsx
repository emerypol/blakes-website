


function ContactForm() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left — contact info */}
            <div>
                <h1 className="text-[30px] lg:text-[34px] xl:text-[38px] font-medium text-gray-900 mb-3 leading-tight">Let's get in touch</h1>
                <p className="text-sm lg:text-base xl:text-lg text-gray-500 leading-relaxed mb-10">
                    We serve the Western Michigan area and are happy to come take a look. Reach out directly or fill out the form and we'll get back to you within 1 business day.
                </p>

                <div className="flex flex-col gap-6">
                    <div className="flex items-start gap-4">
                        <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.12 1.18 2 2 0 012.11 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.56-.56a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-xs lg:text-sm text-gray-400 mb-0.5">Phone</p>
                            <p className="text-sm lg:text-base font-medium text-gray-900">(720) 555-0192</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                <polyline points="22,6 12,13 2,6" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-xs lg:text-sm text-gray-400 mb-0.5">Email</p>
                            <p className="text-sm lg:text-base font-medium text-gray-900">hello@yourcompany.com</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                                <circle cx="12" cy="10" r="3" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-xs lg:text-sm text-gray-400 mb-0.5">Address</p>
                            <p className="text-sm lg:text-base font-medium text-gray-900">1234 Maple St<br />Lakewood, CO 80226</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right — quote form */}
            <div className="border border-gray-200 rounded-2xl p-8">
                <p className="text-xs font-medium tracking-widest uppercase text-blue-600 mb-1">Free quote</p>
                <h2 className="text-xl lg:text-2xl font-medium text-gray-900 mb-1">Get a free quote</h2>
                <p className="text-sm lg:text-base text-gray-500 mb-6">Fill out the form and we'll be in touch shortly.</p>

                <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                        <label className="block text-xs lg:text-sm text-gray-500 mb-1">First name</label>
                        <input type="text" placeholder="Jane"
                            className="w-full bg-transparent border-0 border-b border-gray-300 focus:border-blue-600 focus:outline-none pb-1.5 text-sm lg:text-base" />
                    </div>
                    <div>
                        <label className="block text-xs lg:text-sm text-gray-500 mb-1">Last name</label>
                        <input type="text" placeholder="Smith"
                            className="w-full bg-transparent border-0 border-b border-gray-300 focus:border-blue-600 focus:outline-none pb-1.5 text-sm lg:text-base" />
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block text-xs lg:text-sm text-gray-500 mb-1">Email address</label>
                    <input type="email" placeholder="jane@example.com"
                        className="w-full bg-transparent border-0 border-b border-gray-300 focus:border-blue-600 focus:outline-none pb-1.5 text-sm lg:text-base" />
                </div>

                <div className="mb-4">
                    <label className="block text-xs lg:text-sm text-gray-500 mb-1">Phone number</label>
                    <input type="tel" placeholder="+1 (555) 000-0000"
                        className="w-full bg-transparent border-0 border-b border-gray-300 focus:border-blue-600 focus:outline-none pb-1.5 text-sm lg:text-base" />
                </div>

                <div className="mb-4">
                    <label className="block text-xs lg:text-sm text-gray-500 mb-1">Service needed</label>
                    <select className="w-full bg-transparent border-0 border-b border-gray-300 focus:border-blue-600 focus:outline-none pb-1.5 text-sm lg:text-base appearance-none">
                        <option value="" disabled>Select a service...</option>
                        <option>Irrigation installation</option>
                        <option>Sprinkler repair</option>
                        <option>System inspection</option>
                        <option>Winterization</option>
                        <option>Other</option>
                    </select>
                </div>

                <div className="mb-6">
                    <label className="block text-xs lg:text-sm text-gray-500 mb-1">
                        Message <span className="text-gray-400">(optional)</span>
                    </label>
                    <textarea
                        placeholder="Describe your property or setup..."
                        className="w-full bg-transparent border-0 border-b border-gray-300 focus:border-blue-600 focus:outline-none pb-1.5 text-sm lg:text-base resize-none min-h-20"
                    />
                </div>

                <button className="w-full py-3 text-sm lg:text-base font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors cursor-pointer">
                    Submit request
                </button>
                <p className="text-xs lg:text-sm text-gray-400 text-center mt-3">We typically respond within 1 business day.</p>
            </div>
        </div>

    );
}

export default ContactForm;
