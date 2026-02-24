import Link from 'next/link';

const conditions = [
    { name: 'Diabetes Care', slug: 'diabetes-care', icon: '🩸', color: 'from-red-50 to-orange-50', borderColor: 'border-red-100', description: 'Blood sugar management' },
    { name: 'Heart Health', slug: 'heart-health', icon: '❤️', color: 'from-pink-50 to-red-50', borderColor: 'border-pink-100', description: 'Cardiovascular support' },
    { name: 'Mental Health', slug: 'mental-health', icon: '🧠', color: 'from-purple-50 to-indigo-50', borderColor: 'border-purple-100', description: 'Emotional wellbeing' },
    { name: 'Digestive Health', slug: 'digestive-health', icon: '🫁', color: 'from-green-50 to-emerald-50', borderColor: 'border-green-100', description: 'Gut & stomach care' },
    { name: 'Thyroid Health', slug: 'thyroid-health', icon: '🦋', color: 'from-sky-50 to-blue-50', borderColor: 'border-sky-100', description: 'Hormone balance' },
    { name: 'Allergy Care', slug: 'allergy-care', icon: '🌿', color: 'from-lime-50 to-green-50', borderColor: 'border-lime-100', description: 'Allergy & sinus relief' },
    { name: 'Antibiotics', slug: 'antibiotics', icon: '🛡️', color: 'from-amber-50 to-yellow-50', borderColor: 'border-amber-100', description: 'Infection treatment' },
    { name: 'Pain Relief', slug: 'pain-relief', icon: '💆', color: 'from-teal-50 to-cyan-50', borderColor: 'border-teal-100', description: 'Pain management' },
];

export default function ConditionNav() {
    return (
        <section id="conditions" className="section-padding bg-clinical-bg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <div className="text-center mb-14">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-trust-50 text-trust-700 text-xs font-bold tracking-wider uppercase mb-4">
                        Browse by Condition
                    </span>
                    <h2 className="heading-font text-3xl sm:text-4xl font-bold text-pharma-950 mb-4">
                        Find Medications by Health Condition
                    </h2>
                    <p className="text-clinical-muted text-lg max-w-2xl mx-auto">
                        Navigate our comprehensive catalog organized by health condition
                        for quick access to the medications you need.
                    </p>
                </div>

                {/* Condition grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                    {conditions.map((condition) => (
                        <Link
                            key={condition.slug}
                            href={`/categories/${condition.slug}`}
                            className={`group relative bg-gradient-to-br ${condition.color} border ${condition.borderColor} rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
                        >
                            <span className="text-4xl mb-3 block group-hover:scale-110 transition-transform duration-300">{condition.icon}</span>
                            <h3 className="heading-font text-sm font-bold text-pharma-900 mb-1">{condition.name}</h3>
                            <p className="text-xs text-clinical-muted">{condition.description}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
