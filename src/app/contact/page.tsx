'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Mail, MessageSquare, Send } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Create mailto link with form data
    const mailtoLink = `mailto:hi@heyjaws.co?subject=${encodeURIComponent(
      formData.subject || 'Contact from Website'
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`
    window.location.href = mailtoLink
    setSubmitted(true)
  }

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
              Send us a message and we&apos;ll get back to you as soon as possible.
            </p>
          </div>

          {/* Direct Email Option */}
          <div className="bg-navy-50 rounded-2xl p-6 mb-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-navy-800 rounded-xl flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-navy-900">Email Us Directly</h3>
                <a
                  href="mailto:hi@heyjaws.co"
                  className="text-navy-600 hover:text-navy-800 transition-colors"
                >
                  hi@heyjaws.co
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-navy-900 mb-2">Thank You!</h3>
              <p className="text-navy-600 mb-6">
                Your email client should have opened. If not, please email us directly at{' '}
                <a href="mailto:hi@heyjaws.co" className="text-navy-800 font-medium hover:underline">
                  hi@heyjaws.co
                </a>
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-navy-600 hover:text-navy-800 transition-colors"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-navy-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-navy-200 focus:border-navy-500 focus:ring-2 focus:ring-navy-200 outline-none transition-all text-navy-900"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-navy-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-navy-200 focus:border-navy-500 focus:ring-2 focus:ring-navy-200 outline-none transition-all text-navy-900"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-navy-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-navy-200 focus:border-navy-500 focus:ring-2 focus:ring-navy-200 outline-none transition-all text-navy-900"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-navy-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-navy-200 focus:border-navy-500 focus:ring-2 focus:ring-navy-200 outline-none transition-all resize-none text-navy-900"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-navy-800 text-white px-8 py-4 rounded-xl font-semibold hover:bg-navy-900 transition-colors flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          )}

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
