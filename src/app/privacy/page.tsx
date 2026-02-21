import Link from 'next/link'
import Image from 'next/image'

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>
          <p className="text-navy-500 mb-8">
            <strong>Effective Date:</strong> February 1, 2026
          </p>

          <div className="prose prose-navy max-w-none">
            <h2 className="text-xl font-semibold text-navy-900 mt-8 mb-4">Section 1: Collection of Personal Data</h2>
            <p className="text-navy-600 mb-4">
              In compliance with the Malaysian Personal Data Protection Act 2010 (PDPA), we collect:
            </p>
            <ul className="text-navy-600 mb-6 list-disc pl-5 space-y-3">
              <li><strong>Identity Data:</strong> Phone number, email address, nickname, and profile information.</li>
              <li><strong>Content Data:</strong> Posts, photos, and comments shared in Meetups or the Marketplace.</li>
              <li><strong>Location Data (Optional):</strong> Approximate or precise location data to help you find nearby Jaws Points or local Meetups, collected only with your explicit consent.</li>
              <li><strong>Cookies:</strong> We may use cookies to optimize web service performance. Users can manage cookie preferences through their browser settings.</li>
            </ul>

            <h2 className="text-xl font-semibold text-navy-900 mt-8 mb-4">Section 2: Purpose of Processing</h2>
            <p className="text-navy-600 mb-4">Your data is processed to:</p>
            <ul className="text-navy-600 mb-6 list-disc pl-5 space-y-3">
              <li>Provide and manage core features (Marketplace, Meetups).</li>
              <li>Verify identities and provide account recovery services via email or SMS.</li>
              <li>Offer location-based neighborhood features and support customer inquiries.</li>
            </ul>

            <h2 className="text-xl font-semibold text-navy-900 mt-8 mb-4">Section 3: Disclosure and Security</h2>
            <ul className="text-navy-600 mb-6 list-disc pl-5 space-y-3">
              <li><strong>Third Parties:</strong> We utilize trusted providers like Google Firebase for secure hosting and authentication.</li>
              <li><strong>Security:</strong> We implement industry-standard encryption and access controls to protect your personal data.</li>
            </ul>

            <h2 className="text-xl font-semibold text-navy-900 mt-8 mb-4">Section 4: Data Retention and Deletion</h2>
            <ul className="text-navy-600 mb-6 list-disc pl-5 space-y-3">
              <li><strong>Retention Period:</strong> We retain your personal data only for as long as your account is active or as needed to provide the Service.</li>
              <li><strong>Deletion Upon Request:</strong> If you delete your account via the App, all personal data will be permanently deleted from our servers immediately.</li>
              <li><strong>Inactivity:</strong> If your account remains inactive for more than 12 months, we may delete your data after providing notice via email or SMS.</li>
              <li><strong>Safe Destruction:</strong> Digital records are permanently overwritten or deleted using secure methods that ensure they cannot be recovered.</li>
            </ul>

            <h2 className="text-xl font-semibold text-navy-900 mt-8 mb-4">Section 5: Your Rights and Contact</h2>
            <p className="text-navy-600 mb-4">
              Under the Malaysian PDPA, you have the right to access, correct, or withdraw consent for data processing. In the event of any discrepancies between language versions, the English version shall prevail.
            </p>
            <p className="text-navy-600">
              <strong>Email:</strong>{' '}
              <a href="mailto:hi@heyjaws.co" className="text-navy-800 hover:underline">
                hi@heyjaws.co
              </a>
            </p>

            <h2 className="text-xl font-semibold text-navy-900 mt-8 mb-4">Section 6: Child Safety Standards</h2>
            <p className="text-navy-600 mb-4">
              Heyjaws is intended for users aged 18 and above. We do not knowingly collect personal data from children under the age of 18.
            </p>
            <p className="text-navy-600 mb-4">
              We have zero tolerance for child sexual abuse material (CSAM) or any content that exploits minors. Any such content will be immediately removed, and the associated account will be permanently banned.
            </p>
            <p className="text-navy-600 mb-4">
              Users can report inappropriate content or behavior through the in-app reporting feature. Reports are reviewed promptly, and appropriate action is taken in accordance with applicable laws.
            </p>
            <p className="text-navy-600">
              If you become aware of any child exploitation content, please contact us immediately at{' '}
              <a href="mailto:hi@heyjaws.co" className="text-navy-800 hover:underline">
                hi@heyjaws.co
              </a>
              .
            </p>
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
