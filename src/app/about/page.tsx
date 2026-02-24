import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'About Us | PharmaStore',
    description: 'Learn about PharmaStore, our mission, pharmacists, and licensing compliance.',
};

export default function AboutPage() {
    return (
        <div className="bg-clinical-bg min-h-screen pt-32 pb-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="heading-font text-4xl sm:text-5xl font-bold text-pharma-950 mb-8">About PharmaStore</h1>

                <div className="card-elevated p-8 mb-12">
                    <h2 className="heading-font text-2xl font-bold text-pharma-900 mb-4">Our Mission</h2>
                    <p className="text-clinical-muted leading-relaxed mb-6">
                        At PharmaStore, we believe that access to essential medications should be simple, affordable, and profoundly personal. Since our founding, we have been dedicated to bridging the gap between clinical excellence and digital convenience, providing a pharmacy experience that prioritizes patient care above all else.
                    </p>
                    <p className="text-clinical-muted leading-relaxed">
                        Every prescription we dispense is backed by rigorous safety protocols and reviewed by state-licensed pharmacists.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-8 mb-12">
                    <div className="card-elevated p-8 bg-clinical-white">
                        <span className="text-4xl block mb-4">⚕️</span>
                        <h3 className="heading-font text-xl font-bold text-pharma-900 mb-2">Licensed Pharmacy</h3>
                        <p className="text-sm text-clinical-muted">
                            We operate under full compliance with state and federal regulations. Our DEA registration and NABP accreditation ensure we meet the highest standards of pharmaceutical care.
                        </p>
                    </div>
                    <div className="card-elevated p-8 bg-clinical-white">
                        <span className="text-4xl block mb-4">👨‍⚕️</span>
                        <h3 className="heading-font text-xl font-bold text-pharma-900 mb-2">Clinical Expertise</h3>
                        <p className="text-sm text-clinical-muted">
                            Our clinical advisory board and dispensing pharmacists have decades of combined experience in medication therapy management.
                        </p>
                    </div>
                </div>

                <div className="text-center mt-16">
                    <Link href="/contact" className="btn-secondary">Contact Our Team</Link>
                </div>
            </div>
        </div>
    );
}
