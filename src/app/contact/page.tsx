import Link from 'next/link'
import Image from 'next/image'
import { Mail, MessageSquare } from 'lucide-react'

export default function ContactPage() {
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
          <div className="text-center mb-10">
            <div className="w-16 h-16 bg-navy-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <MessageSquare className="w-8 h-8 text-navy-700" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-2">
              Contact Us
            </h1>
            <p className="text-navy-600 max-w-md mx-auto">
              Have questions, feedback, or need help? We&apos;d love to hear from you.
            </p>
          </div>

          {/* Email Contact */}
          <div className="bg-navy-50 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-navy-800 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-navy-900 mb-2">Email Us</h3>
            <p className="text-navy-600 mb-6">
              Send us an email and we&apos;ll get back to you as soon as possible.
            </p>
            <a
              href="mailto:hi@heyjaws.co"
              className="inline-flex items-center justify-center space-x-2 bg-navy-800 text-white px-8 py-4 rounded-xl font-semibold hover:bg-navy-900 transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>hi@heyjaws.co</span>
            </a>
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
