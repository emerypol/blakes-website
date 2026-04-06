import { useState } from 'react'

function ContactForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        service: '',
        message: '',
        honeypot: ''
    })
    const [errors, setErrors] = useState<Record<string, string>>({})
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
        setErrors(prev => ({ ...prev, [e.target.name]: '' }))
    }

    const validate = () => {
        const newErrors: Record<string, string> = {}
        if (!formData.firstName.trim()) newErrors.firstName = 'First name is required'
        if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required'
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required'
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Enter a valid email address'
        }
        if (!formData.phone.trim()) newErrors.phone = 'Phone number is required'
        if (!formData.address.trim()) newErrors.address = 'Address is required'
        if (!formData.service) newErrors.service = 'Please select a service'
        return newErrors
    }

    const handleSubmit = async () => {
        if (formData.honeypot) return

        const newErrors = validate()
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            return
        }

        setStatus('loading')
        try {
            const res = await fetch('https://your-worker.your-subdomain.workers.dev', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            })
            if (res.ok) {
                setStatus('success')
            } else {
                setStatus('error')
            }
        } catch {
            setStatus('error')
        }
    }

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
                            <p className="text-sm lg:text-base font-medium text-gray-900">(616) 510-3424</p>
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
                            <p className="text-sm lg:text-base font-medium text-gray-900">blake@wcoastirrigation.com</p>
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
                            <p className="text-sm lg:text-base font-medium text-gray-900">6713 Wildwood Dr <br /> West Olive, MI 49460</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right — quote form */}
            <div className="border border-gray-200 rounded-2xl p-8">
                <p className="text-xs font-medium tracking-widest uppercase text-blue-600 mb-1">Free quote</p>
                <h2 className="text-xl lg:text-2xl font-medium text-gray-900 mb-1">Get a free quote</h2>
                <p className="text-sm lg:text-base text-gray-500 mb-6">Fill out the form and we'll be in touch shortly.</p>

                {/* Honeypot — hidden from real users */}
                <input
                    name="honeypot"
                    type="text"
                    value={formData.honeypot}
                    onChange={handleChange}
                    style={{ display: 'none' }}
                    tabIndex={-1}
                    autoComplete="off"
                />

                <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                        <label className="block text-xs lg:text-sm text-gray-500 mb-1">First name</label>
                        <input name="firstName" type="text" placeholder="John" value={formData.firstName} onChange={handleChange}
                            className="w-full bg-transparent border-0 border-b border-gray-300 focus:border-blue-600 focus:outline-none pb-1.5 text-sm lg:text-base" />
                        {errors.firstName && <p className="text-xs text-red-500 mt-1">{errors.firstName}</p>}
                    </div>
                    <div>
                        <label className="block text-xs lg:text-sm text-gray-500 mb-1">Last name</label>
                        <input name="lastName" type="text" placeholder="Smith" value={formData.lastName} onChange={handleChange}
                            className="w-full bg-transparent border-0 border-b border-gray-300 focus:border-blue-600 focus:outline-none pb-1.5 text-sm lg:text-base" />
                        {errors.lastName && <p className="text-xs text-red-500 mt-1">{errors.lastName}</p>}
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block text-xs lg:text-sm text-gray-500 mb-1">Email address</label>
                    <input name="email" type="email" placeholder="john@example.com" value={formData.email} onChange={handleChange}
                        className="w-full bg-transparent border-0 border-b border-gray-300 focus:border-blue-600 focus:outline-none pb-1.5 text-sm lg:text-base" />
                    {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                </div>

                <div className="mb-4">
                    <label className="block text-xs lg:text-sm text-gray-500 mb-1">Phone number</label>
                    <input name="phone" type="tel" placeholder="(616) 000-0000" value={formData.phone} onChange={handleChange}
                        className="w-full bg-transparent border-0 border-b border-gray-300 focus:border-blue-600 focus:outline-none pb-1.5 text-sm lg:text-base" />
                    {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                </div>

                <div className="mb-4">
                    <label className="block text-xs lg:text-sm text-gray-500 mb-1">Address</label>
                    <input name="address" type="text" placeholder="123 Main St, Grand Rapids, MI 49503" value={formData.address} onChange={handleChange}
                        className="w-full bg-transparent border-0 border-b border-gray-300 focus:border-blue-600 focus:outline-none pb-1.5 text-sm lg:text-base" />
                    {errors.address && <p className="text-xs text-red-500 mt-1">{errors.address}</p>}
                </div>

                <div className="mb-4">
                    <label className="block text-xs lg:text-sm text-gray-500 mb-1">Service needed</label>
                    <select name="service" value={formData.service} onChange={handleChange}
                        className="w-full bg-transparent border-0 border-b border-gray-300 focus:border-blue-600 focus:outline-none pb-1.5 text-sm lg:text-base appearance-none">
                        <option value="" disabled>Select a service...</option>
                        <option>Irrigation installation</option>
                        <option>Sprinkler repair</option>
                        <option>System inspection</option>
                        <option>Winterization</option>
                        <option>Other</option>
                    </select>
                    {errors.service && <p className="text-xs text-red-500 mt-1">{errors.service}</p>}
                </div>

                <div className="mb-6">
                    <label className="block text-xs lg:text-sm text-gray-500 mb-1">
                        Description <span className="text-gray-400">(optional)</span>
                    </label>
                    <textarea name="message"
                        placeholder="Describe what you need"
                        value={formData.message} onChange={handleChange}
                        className="w-full bg-transparent border-0 border-b border-gray-300 focus:border-blue-600 focus:outline-none pb-1.5 text-sm lg:text-base resize-none min-h-20"
                    />
                </div>

                {status === 'success' ? (
                    <div className="w-full py-3 text-sm lg:text-base font-medium text-center text-green-600 bg-green-50 rounded-lg">
                        Request sent! We'll be in touch shortly.
                    </div>
                ) : (
                    <button
                        onClick={handleSubmit}
                        disabled={status === 'loading'}
                        className="w-full py-3 text-sm lg:text-base font-medium bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white rounded-lg transition-colors cursor-pointer">
                        {status === 'loading' ? 'Sending...' : 'Submit request'}
                    </button>
                )}

                {status === 'error' && (
                    <p className="text-xs text-red-500 text-center mt-2">Something went wrong. Please try again or call us directly.</p>
                )}

                <p className="text-xs lg:text-sm text-gray-400 text-center mt-3">We typically respond within 1 business day.</p>
            </div>
        </div>
    )
}

export default ContactForm