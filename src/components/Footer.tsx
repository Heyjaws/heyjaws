'use client'

import { motion } from 'framer-motion'
import { Apple, Play } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  const supportLinks = [
    { name: 'Contact Us', href: '/contact' },
    { name: 'Terms & Conditions', href: '/terms' },
    { name: 'Privacy Policy', href: '/privacy' },
  ]

  return (
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Brand Column */}
          <div>
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
          </div>

          {/* Support Links */}
          <div className="md:text-right">
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-navy-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
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
              <Link
                href="/terms"
                className="text-navy-400 hover:text-white transition-colors"
              >
                Terms & Conditions
              </Link>
              <Link
                href="/privacy"
                className="text-navy-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
