import Link from 'next/link'
import Image from 'next/image'

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-navy-50 via-white to-navy-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-navy-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-xl overflow-hidden">
              <Image
                src="/logo.png"
                alt="Heyjaws Logo"
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-xl font-bold text-navy-800">Heyjaws</span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-2">
            Terms and Conditions
          </h1>
          <p className="text-navy-500 mb-8">
            <strong>Effective Date:</strong> February 1, 2026
          </p>

          <div className="prose prose-navy max-w-none">
            <h2 className="text-xl font-semibold text-navy-900 mt-8 mb-4">Section 1: Definitions</h2>
            <ul className="text-navy-600 mb-6 list-disc pl-5 space-y-3">
              <li><strong>&quot;Company&quot;</strong>: Refers to Heyjaws, the provider and operator of the Service.</li>
              <li><strong>&quot;Service&quot;</strong>: The Heyjaws mobile application, website, and all related digital platforms.</li>
              <li><strong>&quot;User&quot;</strong>: Any individual who registers an account and utilizes the Service.</li>
              <li><strong>&quot;Meetup&quot;</strong>: Any online or offline social gathering or event organized or joined by Users through the Service.</li>
              <li><strong>&quot;Jaws Points (Safe Zones)&quot;</strong>: Specific physical locations recommended by the Company as preferred meeting spots for face-to-face transactions.</li>
              <li><strong>&quot;Marketplace&quot;</strong>: The platform feature allowing Users to buy, sell, and trade goods within their local communities.</li>
            </ul>

            <h2 className="text-xl font-semibold text-navy-900 mt-8 mb-4">Section 2: Eligibility and Account Safety</h2>
            <ul className="text-navy-600 mb-6 list-disc pl-5 space-y-3">
              <li><strong>Age Requirement:</strong> You must be at least 18 years old to use the Service.</li>
              <li><strong>Verification:</strong> Identity verification via phone number and/or email address is required to enhance community trust and prevent fraudulent activities.</li>
              <li><strong>Responsibility:</strong> Users are solely responsible for maintaining the security of their accounts and passwords.</li>
            </ul>

            <h2 className="text-xl font-semibold text-navy-900 mt-8 mb-4">Section 3: User Conduct and Zero-Tolerance Policy</h2>
            <ul className="text-navy-600 mb-6 list-disc pl-5 space-y-3">
              <li><strong>Zero-Tolerance:</strong> Heyjaws maintains a zero-tolerance policy for objectionable content (defamatory, obscene, or offensive) or abusive behavior.</li>
              <li><strong>Termination:</strong> The Company reserves the right to immediately suspend or terminate access for any User who violates these standards, without prior notice.</li>
            </ul>

            <h2 className="text-xl font-semibold text-navy-900 mt-8 mb-4">Section 4: Marketplace and Jaws Points Disclaimer</h2>
            <ul className="text-navy-600 mb-6 list-disc pl-5 space-y-3">
              <li><strong>Neutral Venue:</strong> The Company acts as a neutral platform and is not a party to any transactions between Users.</li>
              <li><strong>Safety Disclaimer:</strong> Jaws Points are recommended for convenience only.</li>
              <li><strong>Assumption of Risk:</strong> The Company does not guarantee absolute safety at Jaws Points.</li>
              <li><strong>No Liability:</strong> Users assume all risks for transactions and meetings. The Company is not liable for any incidents, injuries, or damages occurring at these locations.</li>
            </ul>
          </div>

          <div className="mt-12 pt-8 border-t border-navy-100">
            <Link
              href="/"
              className="inline-flex items-center text-navy-600 hover:text-navy-800 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
