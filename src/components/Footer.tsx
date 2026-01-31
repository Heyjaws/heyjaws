'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Twitter, Instagram, Facebook, Linkedin, Apple, Play } from 'lucide-react'
import Image from 'next/image'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
}

function Modal({ isOpen, onClose, title, children }: ModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-2xl md:w-full bg-white rounded-2xl shadow-2xl z-50 overflow-hidden"
          >
            <div className="flex items-center justify-between p-6 border-b border-navy-100">
              <h2 className="text-xl font-bold text-navy-900">{title}</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-navy-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-navy-600" />
              </button>
            </div>
            <div className="p-6 max-h-[60vh] overflow-y-auto">
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default function Footer() {
  const [termsOpen, setTermsOpen] = useState(false)
  const [privacyOpen, setPrivacyOpen] = useState(false)

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ]

  const footerLinks = [
    {
      title: 'Product',
      links: [
        { name: 'Features', href: '#features' },
        { name: 'Safety', href: '#safety' },
        { name: 'Community', href: '#community' },
        { name: 'Download', href: '#download' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Blog', href: '#' },
        { name: 'Press', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', href: '#' },
        { name: 'Contact Us', href: '#' },
        { name: 'Safety Tips', href: '#' },
        { name: 'FAQs', href: '#' },
      ],
    },
  ]

  return (
    <>
      <footer className="bg-navy-900 text-white">
        {/* CTA Section */}
        <div className="border-b border-navy-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Ready to Join Your Neighborhood?
              </h2>
              <p className="text-navy-300 mb-8 max-w-xl mx-auto">
                Download Heyjaws today and start trading safely with verified neighbors.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center space-x-3 bg-white text-navy-900 px-8 py-4 rounded-2xl font-semibold hover:bg-navy-100 transition-colors"
                >
                  <Apple className="w-6 h-6" />
                  <div className="text-left">
                    <div className="text-xs opacity-70">Download on the</div>
                    <div className="text-lg">App Store</div>
                  </div>
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center space-x-3 bg-navy-700 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-navy-600 transition-colors border border-navy-600"
                >
                  <Play className="w-6 h-6 fill-white" />
                  <div className="text-left">
                    <div className="text-xs opacity-70">Get it on</div>
                    <div className="text-lg">Google Play</div>
                  </div>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Main Footer */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {/* Brand Column */}
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 rounded-xl overflow-hidden">
                  <Image
                    src="/logo.png"
                    alt="Heyjaws Logo"
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-xl font-bold">Heyjaws</span>
              </div>
              <p className="text-navy-400 mb-6 max-w-sm">
                The ultimate neighborhood app for safe marketplaces and community connection.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-navy-800 rounded-full flex items-center justify-center hover:bg-navy-700 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Link Columns */}
            {footerLinks.map((column) => (
              <div key={column.title}>
                <h3 className="font-semibold mb-4">{column.title}</h3>
                <ul className="space-y-3">
                  {column.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-navy-400 hover:text-white transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-navy-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-navy-400 text-sm">
                © {new Date().getFullYear()} Heyjaws. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm">
                <button
                  onClick={() => setTermsOpen(true)}
                  className="text-navy-400 hover:text-white transition-colors"
                >
                  Terms of Service
                </button>
                <button
                  onClick={() => setPrivacyOpen(true)}
                  className="text-navy-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Terms of Service Modal */}
      <Modal isOpen={termsOpen} onClose={() => setTermsOpen(false)} title="Terms and Conditions">
        <div className="prose prose-navy max-w-none">
          <p className="text-navy-600 mb-4">
            <strong>Effective Date:</strong> February 1, 2026
          </p>

          <h3 className="text-lg font-semibold text-navy-900 mt-6 mb-3">Section 1: Definitions</h3>
          <ul className="text-navy-600 mb-4 list-disc pl-5 space-y-2">
            <li><strong>&quot;Company&quot;</strong>: Refers to Heyjaws, the provider and operator of the Service.</li>
            <li><strong>&quot;Service&quot;</strong>: The Heyjaws mobile application, website, and all related digital platforms.</li>
            <li><strong>&quot;User&quot;</strong>: Any individual who registers an account and utilizes the Service.</li>
            <li><strong>&quot;Meetup&quot;</strong>: Any online or offline social gathering or event organized or joined by Users through the Service.</li>
            <li><strong>&quot;Jaws Points (Safe Zones)&quot;</strong>: Specific physical locations recommended by the Company as preferred meeting spots for face-to-face transactions.</li>
            <li><strong>&quot;Marketplace&quot;</strong>: The platform feature allowing Users to buy, sell, and trade goods within their local communities.</li>
          </ul>

          <h3 className="text-lg font-semibold text-navy-900 mt-6 mb-3">Section 2: Eligibility and Account Safety</h3>
          <ul className="text-navy-600 mb-4 list-disc pl-5 space-y-2">
            <li><strong>Age Requirement:</strong> You must be at least 18 years old to use the Service.</li>
            <li><strong>Verification:</strong> Identity verification via phone number and/or email address is required to enhance community trust and prevent fraudulent activities.</li>
            <li><strong>Responsibility:</strong> Users are solely responsible for maintaining the security of their accounts and passwords.</li>
          </ul>

          <h3 className="text-lg font-semibold text-navy-900 mt-6 mb-3">Section 3: User Conduct and Zero-Tolerance Policy</h3>
          <ul className="text-navy-600 mb-4 list-disc pl-5 space-y-2">
            <li><strong>Zero-Tolerance:</strong> Heyjaws maintains a zero-tolerance policy for objectionable content (defamatory, obscene, or offensive) or abusive behavior.</li>
            <li><strong>Termination:</strong> The Company reserves the right to immediately suspend or terminate access for any User who violates these standards, without prior notice.</li>
          </ul>

          <h3 className="text-lg font-semibold text-navy-900 mt-6 mb-3">Section 4: Marketplace and Jaws Points Disclaimer</h3>
          <ul className="text-navy-600 mb-4 list-disc pl-5 space-y-2">
            <li><strong>Neutral Venue:</strong> The Company acts as a neutral platform and is not a party to any transactions between Users.</li>
            <li><strong>Safety Disclaimer:</strong> Jaws Points are recommended for convenience only.</li>
            <li><strong>Assumption of Risk:</strong> The Company does not guarantee absolute safety at Jaws Points.</li>
            <li><strong>No Liability:</strong> Users assume all risks for transactions and meetings. The Company is not liable for any incidents, injuries, or damages occurring at these locations.</li>
          </ul>
        </div>
      </Modal>

      {/* Privacy Policy Modal */}
      <Modal isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)} title="Privacy Policy">
        <div className="prose prose-navy max-w-none">
          <p className="text-navy-600 mb-4">
            <strong>Effective Date:</strong> February 1, 2026
          </p>

          <h3 className="text-lg font-semibold text-navy-900 mt-6 mb-3">Section 1: Collection of Personal Data</h3>
          <p className="text-navy-600 mb-2">
            In compliance with the Malaysian Personal Data Protection Act 2010 (PDPA), we collect:
          </p>
          <ul className="text-navy-600 mb-4 list-disc pl-5 space-y-2">
            <li><strong>Identity Data:</strong> Phone number, email address, nickname, and profile information.</li>
            <li><strong>Content Data:</strong> Posts, photos, and comments shared in Meetups or the Marketplace.</li>
            <li><strong>Location Data (Optional):</strong> Approximate or precise location data to help you find nearby Jaws Points or local Meetups, collected only with your explicit consent.</li>
            <li><strong>Cookies:</strong> We may use cookies to optimize web service performance. Users can manage cookie preferences through their browser settings.</li>
          </ul>

          <h3 className="text-lg font-semibold text-navy-900 mt-6 mb-3">Section 2: Purpose of Processing</h3>
          <p className="text-navy-600 mb-2">Your data is processed to:</p>
          <ul className="text-navy-600 mb-4 list-disc pl-5 space-y-2">
            <li>Provide and manage core features (Marketplace, Meetups).</li>
            <li>Verify identities and provide account recovery services via email or SMS.</li>
            <li>Offer location-based neighborhood features and support customer inquiries.</li>
          </ul>

          <h3 className="text-lg font-semibold text-navy-900 mt-6 mb-3">Section 3: Disclosure and Security</h3>
          <ul className="text-navy-600 mb-4 list-disc pl-5 space-y-2">
            <li><strong>Third Parties:</strong> We utilize trusted providers like Google Firebase for secure hosting and authentication.</li>
            <li><strong>Security:</strong> We implement industry-standard encryption and access controls to protect your personal data.</li>
          </ul>

          <h3 className="text-lg font-semibold text-navy-900 mt-6 mb-3">Section 4: Data Retention and Deletion</h3>
          <ul className="text-navy-600 mb-4 list-disc pl-5 space-y-2">
            <li><strong>Retention Period:</strong> We retain your personal data only for as long as your account is active or as needed to provide the Service.</li>
            <li><strong>Deletion Upon Request:</strong> If you delete your account via the App, all personal data will be permanently deleted from our servers immediately.</li>
            <li><strong>Inactivity:</strong> If your account remains inactive for more than 12 months, we may delete your data after providing notice via email or SMS.</li>
            <li><strong>Safe Destruction:</strong> Digital records are permanently overwritten or deleted using secure methods that ensure they cannot be recovered.</li>
          </ul>

          <h3 className="text-lg font-semibold text-navy-900 mt-6 mb-3">Section 5: Your Rights and Contact</h3>
          <p className="text-navy-600 mb-4">
            Under the Malaysian PDPA, you have the right to access, correct, or withdraw consent for data processing. In the event of any discrepancies between language versions, the English version shall prevail.
          </p>
          <p className="text-navy-600">
            <strong>Email:</strong> hi@heyjaws.co
          </p>
        </div>
      </Modal>
    </>
  )
}
