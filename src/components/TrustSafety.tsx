'use client'

import { motion } from 'framer-motion'
import { Shield, Phone, UserCheck, Lock, CheckCircle2, BadgeCheck } from 'lucide-react'

export default function TrustSafety() {
  const steps = [
    {
      icon: Phone,
      title: 'Phone Verification',
      description: 'Every user must verify their phone number. No anonymous accounts—just real neighbors.',
    },
    {
      icon: UserCheck,
      title: 'Identity Confirmation',
      description: 'Profile verification ensures you know exactly who you\'re dealing with.',
    },
    {
      icon: Lock,
      title: 'Secure Transactions',
      description: 'In-app messaging keeps your personal contact info private until you\'re ready.',
    },
  ]

  return (
    <section id="safety" className="py-24 bg-gradient-to-b from-navy-900 to-navy-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-navy-700/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-navy-600/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
            <Shield className="w-4 h-4" />
            <span>Trust & Safety</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            A Scam-Free Environment
          </h2>
          <p className="text-lg text-navy-200 max-w-2xl mx-auto">
            Our multi-layer verification system ensures that every user on Heyjaws is a real,
            verified member of your community.
          </p>
        </motion.div>

        {/* Verification Process */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-colors h-full">
                <div className="w-14 h-14 bg-gradient-to-br from-navy-400 to-navy-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <step.icon className="w-7 h-7 text-white" />
                </div>
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-white text-navy-800 rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-navy-200">{step.description}</p>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-navy-400 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Trust Badge Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-4">
                The Heyjaws Trust Badge
              </h3>
              <p className="text-navy-600 mb-6">
                Users who complete our full verification process earn the coveted Trust Badge,
                showing everyone they&apos;re a legitimate, trustworthy neighbor.
              </p>

              <div className="space-y-3">
                {[
                  'Phone number verified',
                  'Profile information confirmed',
                  'Community guidelines accepted',
                  'Positive trade history',
                ].map((item) => (
                  <div key={item} className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span className="text-navy-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative flex justify-center">
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 2, -2, 0],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                {/* Trust Badge Illustration */}
                <div className="w-64 h-64 bg-gradient-to-br from-navy-100 to-navy-200 rounded-full flex items-center justify-center">
                  <div className="w-48 h-48 bg-gradient-to-br from-navy-700 to-navy-900 rounded-full flex items-center justify-center shadow-2xl">
                    <BadgeCheck className="w-20 h-20 text-white" />
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
                >
                  Verified ✓
                </motion.div>

                <motion.div
                  animate={{ y: [5, -5, 5] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  className="absolute -bottom-4 -left-4 bg-navy-800 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
                >
                  Trusted Neighbor
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Trust Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
        >
          {[
            { value: 'Phone', label: 'Verification', suffix: '' },
            { value: 'Jaws', label: 'Points', suffix: '' },
            { value: 'CCTV', label: 'Monitored', suffix: '' },
            { value: '24/7', label: 'Support', suffix: '' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-2">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-navy-300 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
