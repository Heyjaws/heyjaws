import Link from 'next/link'
import Image from 'next/image'

export default function AccountDeletionPage() {
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
            Account Deletion
          </h1>
          <p className="text-navy-500 mb-8">
            <strong>Effective Date:</strong> April 13, 2026
          </p>

          <div className="prose prose-navy max-w-none">
            <p className="text-navy-600 mb-6">
              At Heyjaws, we respect your right to control your personal data. You can delete your Heyjaws account and all associated data at any time. This page explains how.
            </p>

            <h2 className="text-xl font-semibold text-navy-900 mt-8 mb-4">Option 1: Delete Your Account In-App</h2>
            <p className="text-navy-600 mb-4">
              The fastest way to delete your account is directly within the Heyjaws app:
            </p>
            <ol className="text-navy-600 mb-6 list-decimal pl-5 space-y-3">
              <li>Open the Heyjaws app on your device.</li>
              <li>Go to <strong>Settings</strong>.</li>
              <li>Tap <strong>Account</strong>.</li>
              <li>Tap <strong>Delete Account</strong>.</li>
              <li>Confirm the deletion when prompted.</li>
            </ol>
            <p className="text-navy-600 mb-6">
              Once confirmed, your account and all associated data will be permanently deleted immediately.
            </p>

            <h2 className="text-xl font-semibold text-navy-900 mt-8 mb-4">Option 2: Request Deletion by Email</h2>
            <p className="text-navy-600 mb-4">
              If you are unable to access the app, you can request account deletion by sending an email to{' '}
              <a href="mailto:hi@heyjaws.co" className="text-navy-800 hover:underline">
                hi@heyjaws.co
              </a>{' '}
              from the email address registered to your account.
            </p>
            <p className="text-navy-600 mb-4">
              Please include the following in your request:
            </p>
            <ul className="text-navy-600 mb-6 list-disc pl-5 space-y-3">
              <li>Subject line: <strong>&ldquo;Account Deletion Request&rdquo;</strong></li>
              <li>The phone number or email associated with your Heyjaws account</li>
              <li>Your registered nickname (if known)</li>
            </ul>
            <p className="text-navy-600 mb-6">
              We will verify your identity and process your request within 7 business days.
            </p>

            <h2 className="text-xl font-semibold text-navy-900 mt-8 mb-4">What Data Is Deleted</h2>
            <p className="text-navy-600 mb-4">
              When you delete your account, the following data is <strong>permanently and immediately removed</strong> from our servers:
            </p>
            <ul className="text-navy-600 mb-6 list-disc pl-5 space-y-3">
              <li>Profile information (nickname, phone number, email address)</li>
              <li>Posts, photos, and comments shared in Meetups and the Marketplace</li>
              <li>Location data</li>
              <li>Messages and chat history</li>
              <li>All other personal data associated with your account</li>
            </ul>

            <h2 className="text-xl font-semibold text-navy-900 mt-8 mb-4">Data Retention After Deletion</h2>
            <p className="text-navy-600 mb-6">
              Heyjaws does <strong>not retain any personal data</strong> after account deletion. All information is permanently erased using secure methods that ensure the data cannot be recovered.
            </p>

            <h2 className="text-xl font-semibold text-navy-900 mt-8 mb-4">Need Help?</h2>
            <p className="text-navy-600">
              If you have any questions about deleting your account or concerns about your data, please contact us at{' '}
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
