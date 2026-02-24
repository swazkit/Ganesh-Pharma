import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact Us | PharmaStore',
    description: 'Get in touch with PharmaStore pharmacists and customer support team.',
};

export default function ContactPage() {
    return (
        <div className="bg-clinical-bg min-h-screen pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="heading-font text-4xl sm:text-5xl font-bold text-pharma-950 mb-4">Contact Our Team</h1>
                    <p className="text-clinical-muted text-lg max-w-2xl mx-auto">
                        Our pharmacists and customer care team are available 24/7 to assist you with your medication needs.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="card-elevated p-8">
                            <div className="flex items-start gap-4 mb-6">
                                <span className="text-3xl">📞</span>
                                <div>
                                    <h3 className="heading-font text-xl font-bold text-pharma-900 mb-1">Phone Support</h3>
                                    <p className="text-sm text-clinical-muted mb-2">Available 24/7 for pharmacist consultations and order support.</p>
                                    <a href="tel:1-800-PHARMA" className="text-lg font-bold text-pharma-600 hover:text-pharma-700">1-800-PHARMA (742-762)</a>
                                </div>
                            </div>
                        </div>

                        <div className="card-elevated p-8">
                            <div className="flex items-start gap-4 mb-6">
                                <span className="text-3xl">✉️</span>
                                <div>
                                    <h3 className="heading-font text-xl font-bold text-pharma-900 mb-1">Email Support</h3>
                                    <p className="text-sm text-clinical-muted mb-2">We typically reply to all non-urgent inquiries within 1 business day.</p>
                                    <a href="mailto:care@pharmastore.com" className="text-lg font-bold text-pharma-600 hover:text-pharma-700">care@pharmastore.com</a>
                                </div>
                            </div>
                        </div>

                        <div className="card-elevated p-8">
                            <div className="flex items-start gap-4">
                                <span className="text-3xl">📍</span>
                                <div>
                                    <h3 className="heading-font text-xl font-bold text-pharma-900 mb-1">Corporate Headquarters</h3>
                                    <p className="text-sm text-clinical-muted">
                                        PharmaStore Inc.<br />
                                        100 Clinical Way, Suite 400<br />
                                        San Francisco, CA 94105
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="card-elevated p-8 lg:p-10">
                        <h2 className="heading-font text-2xl font-bold text-pharma-900 mb-6">Send us a message</h2>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-pharma-800 mb-2">First Name</label>
                                    <input type="text" className="w-full bg-white border border-clinical-border rounded-xl p-3 focus:ring-pharma-500" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-pharma-800 mb-2">Last Name</label>
                                    <input type="text" className="w-full bg-white border border-clinical-border rounded-xl p-3 focus:ring-pharma-500" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-pharma-800 mb-2">Email Address</label>
                                <input type="email" className="w-full bg-white border border-clinical-border rounded-xl p-3 focus:ring-pharma-500" />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-pharma-800 mb-2">Subject</label>
                                <select className="w-full bg-white border border-clinical-border rounded-xl p-3 focus:ring-pharma-500">
                                    <option>Order Status</option>
                                    <option>Pharmacist Consultation</option>
                                    <option>Prescription Refill</option>
                                    <option>Billing Question</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-pharma-800 mb-2">Message</label>
                                <textarea rows={5} className="w-full bg-white border border-clinical-border rounded-xl p-3 focus:ring-pharma-500"></textarea>
                            </div>

                            <div className="flex items-center gap-3">
                                <input type="checkbox" id="privacy" className="w-4 h-4 text-pharma-600 rounded focus:ring-pharma-500" />
                                <label htmlFor="privacy" className="text-xs text-clinical-muted">
                                    I agree to the privacy policy. Do not include sensitive medical information in this form.
                                </label>
                            </div>

                            <button type="button" className="w-full btn-primary py-4 pulse-glow">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
