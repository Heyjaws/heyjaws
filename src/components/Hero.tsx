'use client'

import { motion } from 'framer-motion'
import { Shield, Users, MapPin, Home, MessageCircle, User, Search, Bell, Heart, Eye, MessageSquare } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-navy-50 via-white to-navy-100">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-navy-200/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-navy-300/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-navy-100/40 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-navy-100 text-navy-800 px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <Shield className="w-4 h-4" />
              <span>Safe & Verified Trading</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-900 leading-tight mb-6">
              Trade Safely,
              <br />
              <span className="text-gradient">Meet Locally in Malaysia.</span>
            </h1>

            <p className="text-lg sm:text-xl text-navy-600 mb-12 max-w-lg">
              Stop worrying about scams. Join the safest neighborhood marketplace where
              every neighbor is verified and every trade happens at a secure Jaws Point.
            </p>

            {/* Features */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { icon: Shield, value: 'Verified', label: 'Users Only' },
                { icon: MapPin, value: 'Jaws Points', label: 'Safe Meetups' },
                { icon: Users, value: 'Local', label: 'Community' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <stat.icon className="w-6 h-6 text-navy-600 mx-auto mb-2" />
                  <div className="text-lg font-bold text-navy-800">{stat.value}</div>
                  <div className="text-sm text-navy-500">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Phone Mockups */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Main Phone - Marketplace */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                <div className="w-72 h-[580px] bg-navy-900 rounded-[3rem] p-2 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                    {/* Phone Screen Content - Marketplace */}
                    <div className="h-full flex flex-col">
                      {/* Status Bar */}
                      <div className="flex justify-between items-center px-6 pt-4 pb-2">
                        <span className="text-xs font-medium text-navy-800">9:41</span>
                        <div className="w-24 h-6 bg-navy-900 rounded-full" />
                        <div className="flex space-x-1">
                          <div className="w-4 h-2 bg-navy-400 rounded-sm" />
                        </div>
                      </div>

                      {/* App Header */}
                      <div className="flex items-center justify-between px-4 py-3">
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4 text-navy-700" />
                          <span className="font-semibold text-navy-800 text-sm">Your Neighborhood</span>
                          <svg className="w-3 h-3 text-navy-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                        <div className="flex space-x-3">
                          <Search className="w-5 h-5 text-navy-600" />
                          <Bell className="w-5 h-5 text-navy-600" />
                        </div>
                      </div>

                      {/* Category Filters */}
                      <div className="flex space-x-2 px-4 pb-3 overflow-x-auto">
                        <span className="flex-shrink-0 bg-navy-800 text-white px-4 py-1.5 rounded-full text-xs font-medium flex items-center space-x-1">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>All</span>
                        </span>
                        <span className="flex-shrink-0 bg-white border border-navy-200 text-navy-600 px-4 py-1.5 rounded-full text-xs font-medium">Electronics</span>
                        <span className="flex-shrink-0 bg-white border border-navy-200 text-navy-600 px-4 py-1.5 rounded-full text-xs font-medium">Furniture</span>
                      </div>

                      {/* Item List */}
                      <div className="flex-1 px-4 space-y-3 overflow-hidden">
                        {/* Item 1 */}
                        <div className="flex space-x-3 bg-white rounded-xl">
                          <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex-shrink-0" />
                          <div className="flex-1 py-1">
                            <h4 className="font-semibold text-navy-800 text-sm">Vintage Lamp</h4>
                            <p className="text-xs text-navy-500">Your Area · 2h ago</p>
                            <p className="font-bold text-navy-800 mt-2">RM 25</p>
                          </div>
                        </div>

                        {/* Item 2 */}
                        <div className="flex space-x-3 bg-white rounded-xl">
                          <div className="w-24 h-24 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl flex-shrink-0" />
                          <div className="flex-1 py-1">
                            <h4 className="font-semibold text-navy-800 text-sm">Kitchen Set</h4>
                            <p className="text-xs text-navy-500">Your Area · 5h ago</p>
                            <p className="font-bold text-navy-800 mt-2">RM 45</p>
                          </div>
                        </div>

                        {/* Item 3 */}
                        <div className="flex space-x-3 bg-white rounded-xl">
                          <div className="w-24 h-24 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex-shrink-0 relative">
                            <span className="absolute bottom-1 left-1 bg-orange-500 text-white text-[8px] px-1.5 py-0.5 rounded">Reserved</span>
                          </div>
                          <div className="flex-1 py-1">
                            <h4 className="font-semibold text-navy-800 text-sm">Plant Collection</h4>
                            <p className="text-xs text-navy-500">Your Area · 1d ago</p>
                            <p className="font-bold text-navy-800 mt-2">RM 30</p>
                          </div>
                        </div>
                      </div>

                      {/* Bottom Navigation */}
                      <div className="flex items-center justify-around py-4 border-t border-navy-100 bg-white">
                        <div className="flex flex-col items-center">
                          <div className="p-2 bg-navy-100 rounded-xl">
                            <Home className="w-5 h-5 text-navy-800" />
                          </div>
                          <span className="text-[10px] text-navy-800 font-medium mt-1">Home</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <Users className="w-5 h-5 text-navy-400" />
                          <span className="text-[10px] text-navy-400 mt-1">Community</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <MessageCircle className="w-5 h-5 text-navy-400" />
                          <span className="text-[10px] text-navy-400 mt-1">Chat</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <User className="w-5 h-5 text-navy-400" />
                          <span className="text-[10px] text-navy-400 mt-1">Profile</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Second Phone - Community (behind) */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -left-16 top-8 z-0"
              >
                <div className="w-56 h-[460px] bg-navy-800 rounded-[2.5rem] p-2 shadow-xl opacity-90">
                  <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden">
                    <div className="h-full flex flex-col">
                      {/* Header */}
                      <div className="text-center py-4 border-b border-navy-100">
                        <h3 className="font-semibold text-navy-800 text-sm">Community</h3>
                        <div className="flex justify-center space-x-8 mt-3">
                          <span className="text-xs text-navy-800 font-medium border-b-2 border-navy-800 pb-1">Feed</span>
                          <span className="text-xs text-navy-400">Meetups</span>
                        </div>
                      </div>

                      {/* Feed Posts */}
                      <div className="flex-1 p-3 space-y-3 overflow-hidden">
                        {/* Post */}
                        <div className="bg-white border border-navy-100 rounded-xl p-3">
                          <div className="flex items-center space-x-2 mb-2">
                            <div className="w-8 h-8 bg-navy-200 rounded-full" />
                            <div className="flex-1">
                              <p className="text-xs font-medium text-navy-800">Sarah K.</p>
                              <p className="text-[10px] text-navy-400">2h ago</p>
                            </div>
                            <span className="text-[10px] bg-navy-100 text-navy-600 px-2 py-0.5 rounded-full">Pet</span>
                          </div>
                          <p className="text-xs text-navy-700 mb-2">See my cute puppy! 🐕</p>
                          <div className="flex items-center space-x-3 text-[10px] text-navy-400">
                            <span className="flex items-center space-x-1">
                              <MessageSquare className="w-3 h-3" />
                              <span>5</span>
                            </span>
                            <span className="flex items-center space-x-1">
                              <Heart className="w-3 h-3" />
                              <span>12</span>
                            </span>
                            <span className="flex items-center space-x-1">
                              <Eye className="w-3 h-3" />
                              <span>45</span>
                            </span>
                          </div>
                        </div>

                        <div className="bg-white border border-navy-100 rounded-xl p-3">
                          <div className="flex items-center space-x-2 mb-2">
                            <div className="w-8 h-8 bg-navy-300 rounded-full" />
                            <div className="flex-1">
                              <p className="text-xs font-medium text-navy-800">Mike R.</p>
                              <p className="text-[10px] text-navy-400">5h ago</p>
                            </div>
                            <span className="text-[10px] bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full">Meetup</span>
                          </div>
                          <p className="text-xs text-navy-700">Running crew this Saturday?</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -15, 0], x: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-4 top-16 bg-white rounded-2xl p-3 shadow-xl z-20"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <Shield className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-navy-800">Safe Trade</div>
                    <div className="text-[10px] text-navy-500">Verified</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0], x: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute right-8 bottom-24 bg-white rounded-2xl p-3 shadow-xl z-20"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-navy-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-navy-600" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-navy-800">Jaws Point</div>
                    <div className="text-[10px] text-navy-500">Nearby</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
