'use client'

import { motion } from 'framer-motion'
import { MapPin, Shield, Users, MessageCircle, Heart, Star, CheckCircle, Calendar, Eye, MessageSquare, Tag, Search } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-navy-600 font-semibold text-sm uppercase tracking-wider mb-4">
            Two Powerful Cores
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mb-6">
            Everything Your Neighborhood Needs
          </h2>
          <p className="text-lg text-navy-600 max-w-2xl mx-auto">
            Heyjaws combines secure local trading with vibrant community features,
            all in one beautifully designed app.
          </p>
        </motion.div>

        {/* Marketplace Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-32"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center space-x-2 bg-navy-100 text-navy-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Tag className="w-4 h-4" />
                <span>Local Marketplace</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-6">
                Buy & Sell with{' '}
                <span className="text-gradient">Your Neighbors</span>
              </h3>
              <p className="text-lg text-navy-600 mb-8">
                Browse items from verified neighbors in your area. From electronics
                to furniture, find great deals just around the corner—and meet at
                secure Jaws Points with CCTV coverage and on-site security.
              </p>

              <div className="space-y-4">
                {[
                  {
                    icon: Search,
                    title: 'Smart Categories',
                    description: 'Filter by Electronics, Furniture, Fashion, and more',
                  },
                  {
                    icon: MapPin,
                    title: 'Meet Securely at Jaws Points',
                    description: 'No more meeting in unfamiliar locations. Trade at CCTV-monitored spots like malls, LRT stations, and residential hubs.',
                  },
                  {
                    icon: Shield,
                    title: 'Verified Sellers',
                    description: 'Every user is phone-verified for your peace of mind',
                  },
                ].map((feature) => (
                  <motion.div
                    key={feature.title}
                    variants={itemVariants}
                    className="flex items-start space-x-4 p-4 rounded-2xl hover:bg-navy-50 transition-colors"
                  >
                    <div className="w-12 h-12 bg-navy-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-navy-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy-800 mb-1">{feature.title}</h4>
                      <p className="text-navy-600 text-sm">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-navy-100 to-navy-50 rounded-3xl p-8 lg:p-10">
                {/* Marketplace Phone Mockup */}
                <div className="bg-white rounded-[2rem] p-4 shadow-xl max-w-[280px] mx-auto">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4 text-navy-700" />
                      <span className="font-semibold text-navy-800 text-sm">Your Area</span>
                      <svg className="w-3 h-3 text-navy-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                    <Search className="w-5 h-5 text-navy-500" />
                  </div>

                  {/* Category Pills */}
                  <div className="flex space-x-2 mb-4 overflow-x-auto pb-1">
                    <span className="flex-shrink-0 bg-navy-800 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                      <CheckCircle className="w-3 h-3" />
                      <span>All</span>
                    </span>
                    <span className="flex-shrink-0 bg-white border border-navy-200 text-navy-600 px-3 py-1 rounded-full text-xs">Electronics</span>
                    <span className="flex-shrink-0 bg-white border border-navy-200 text-navy-600 px-3 py-1 rounded-full text-xs">Furniture</span>
                  </div>

                  {/* Item Cards */}
                  <div className="space-y-3">
                    {[
                      { name: 'Vintage Camera', price: 'RM 85', time: '3h ago', color: 'from-amber-100 to-amber-200' },
                      { name: 'Designer Chair', price: 'RM 120', time: '5h ago', color: 'from-blue-100 to-blue-200' },
                      { name: 'Plant Set', price: 'Free', time: '1d ago', color: 'from-green-100 to-green-200', reserved: true },
                    ].map((item, idx) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex space-x-3"
                      >
                        <div className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-xl flex-shrink-0 relative`}>
                          {item.reserved && (
                            <span className="absolute bottom-1 left-1 bg-orange-500 text-white text-[8px] px-1.5 py-0.5 rounded">Reserved</span>
                          )}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-navy-800 text-sm">{item.name}</h4>
                          <p className="text-xs text-navy-500">Your Area · {item.time}</p>
                          <p className="font-bold text-navy-800 text-sm mt-1">{item.price}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* FAB */}
                  <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-navy-800 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white text-2xl font-light">+</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Community Section */}
        <motion.div
          id="community"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-32"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={itemVariants}
              className="order-2 lg:order-1 relative"
            >
              <div className="relative bg-gradient-to-br from-navy-100 to-navy-50 rounded-3xl p-8 lg:p-10">
                {/* Community Feed Mockup */}
                <div className="bg-white rounded-[2rem] p-4 shadow-xl max-w-[280px] mx-auto">
                  {/* Header */}
                  <div className="text-center pb-3 border-b border-navy-100 mb-4">
                    <h4 className="font-semibold text-navy-800">Community</h4>
                    <div className="flex justify-center space-x-6 mt-3">
                      <span className="text-xs text-navy-800 font-medium border-b-2 border-navy-800 pb-1">Feed</span>
                      <span className="text-xs text-navy-400">Meetups</span>
                    </div>
                  </div>

                  {/* Filter Pills */}
                  <div className="flex space-x-2 mb-4 overflow-x-auto pb-1">
                    <span className="flex-shrink-0 bg-navy-800 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                      <MapPin className="w-3 h-3" />
                      <span>Your Area</span>
                    </span>
                    <span className="flex-shrink-0 bg-navy-800 text-white px-3 py-1 rounded-full text-xs">All</span>
                    <span className="flex-shrink-0 bg-white border border-navy-200 text-navy-500 px-3 py-1 rounded-full text-xs">Review</span>
                  </div>

                  {/* Posts */}
                  <div className="space-y-3">
                    {/* Post 1 */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="bg-white border border-navy-100 rounded-xl p-3"
                    >
                      <div className="flex items-start space-x-2 mb-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-navy-300 to-navy-400 rounded-full flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <p className="text-xs font-semibold text-navy-800">Emma K.</p>
                            <span className="text-[10px] bg-navy-100 text-navy-600 px-2 py-0.5 rounded-full">Pet</span>
                          </div>
                          <p className="text-[10px] text-navy-400">2025. 12. 15.</p>
                        </div>
                      </div>
                      <h5 className="text-xs font-semibold text-navy-800 mb-1">See my Pomi!</h5>
                      <p className="text-[10px] text-navy-600 mb-2">so cute lah</p>
                      <div className="flex items-center space-x-3 text-[10px] text-navy-400">
                        <span className="flex items-center space-x-1">
                          <MessageSquare className="w-3 h-3" />
                          <span>0</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Heart className="w-3 h-3" />
                          <span>2</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Eye className="w-3 h-3" />
                          <span>7</span>
                        </span>
                      </div>
                    </motion.div>

                    {/* Post 2 */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                      className="bg-white border border-navy-100 rounded-xl p-3"
                    >
                      <div className="flex items-start space-x-2 mb-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-300 to-blue-400 rounded-full flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <p className="text-xs font-semibold text-navy-800">David P.</p>
                            <span className="text-[10px] bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full">Meetup</span>
                          </div>
                          <p className="text-[10px] text-navy-400">2025. 12. 03.</p>
                        </div>
                      </div>
                      <h5 className="text-xs font-semibold text-navy-800 mb-1">Any running crew around here?</h5>
                      <p className="text-[10px] text-navy-600">I am so bored. wanna join any running crew.</p>
                    </motion.div>
                  </div>

                  {/* FAB */}
                  <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-navy-800 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white text-2xl font-light">+</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="order-1 lg:order-2">
              <div className="inline-flex items-center space-x-2 bg-navy-100 text-navy-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Users className="w-4 h-4" />
                <span>Community Feed</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-6">
                Connect with{' '}
                <span className="text-gradient">Real Neighbors</span>
              </h3>
              <p className="text-lg text-navy-600 mb-8">
                Share updates, ask for recommendations, and stay connected with
                what&apos;s happening in your neighborhood. From pet photos to
                local tips—it&apos;s all here.
              </p>

              <div className="space-y-4">
                {[
                  {
                    icon: MessageCircle,
                    title: 'Neighborhood Feed',
                    description: 'Post updates, share photos, and engage with neighbors',
                  },
                  {
                    icon: Tag,
                    title: 'Topic Tags',
                    description: 'Filter by Pet, Review, Around, and more categories',
                  },
                  {
                    icon: Heart,
                    title: 'Engage & Connect',
                    description: 'Like, comment, and build real relationships locally',
                  },
                ].map((feature) => (
                  <motion.div
                    key={feature.title}
                    variants={itemVariants}
                    className="flex items-start space-x-4 p-4 rounded-2xl hover:bg-navy-50 transition-colors"
                  >
                    <div className="w-12 h-12 bg-navy-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-navy-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy-800 mb-1">{feature.title}</h4>
                      <p className="text-navy-600 text-sm">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Meetups Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center space-x-2 bg-navy-100 text-navy-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Calendar className="w-4 h-4" />
                <span>Community Meetups</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-6">
                Join Local{' '}
                <span className="text-gradient">Interest Groups</span>
              </h3>
              <p className="text-lg text-navy-600 mb-8">
                Discover meetups based on your interests. Whether you&apos;re into
                fitness, art, business, or gaming—find your tribe right in your
                neighborhood.
              </p>

              <div className="space-y-4">
                {[
                  {
                    icon: Heart,
                    title: 'Interest-Based Discovery',
                    description: 'Meetups recommended based on what you love',
                  },
                  {
                    icon: Users,
                    title: 'Diverse Categories',
                    description: 'Art, Business, Exercise, Gaming, Language & more',
                  },
                  {
                    icon: MapPin,
                    title: 'Neighborhood Events',
                    description: 'Meet real people from your local community',
                  },
                ].map((feature) => (
                  <motion.div
                    key={feature.title}
                    variants={itemVariants}
                    className="flex items-start space-x-4 p-4 rounded-2xl hover:bg-navy-50 transition-colors"
                  >
                    <div className="w-12 h-12 bg-navy-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-navy-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy-800 mb-1">{feature.title}</h4>
                      <p className="text-navy-600 text-sm">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-navy-100 to-navy-50 rounded-3xl p-8 lg:p-10">
                {/* Meetups Mockup */}
                <div className="bg-white rounded-[2rem] p-4 shadow-xl max-w-[280px] mx-auto">
                  {/* Header */}
                  <div className="text-center pb-3 border-b border-navy-100 mb-4">
                    <h4 className="font-semibold text-navy-800">Community</h4>
                    <div className="flex justify-center space-x-6 mt-3">
                      <span className="text-xs text-navy-400">Feed</span>
                      <span className="text-xs text-navy-800 font-medium border-b-2 border-navy-800 pb-1">Meetups</span>
                    </div>
                  </div>

                  {/* Based on Interests */}
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                      <Heart className="w-3 h-3 text-red-500" />
                    </div>
                    <span className="text-xs font-medium text-navy-800">Based on your interests</span>
                  </div>

                  {/* Meetup Cards */}
                  <div className="flex space-x-3 mb-4 overflow-x-auto pb-2">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      className="flex-shrink-0 w-36 bg-navy-800 rounded-xl overflow-hidden"
                    >
                      <div className="h-20 bg-gradient-to-br from-navy-700 to-navy-900 flex items-center justify-center">
                        <span className="text-white text-2xl">🏃</span>
                      </div>
                      <div className="p-2">
                        <span className="text-[8px] text-navy-300">Exercise</span>
                        <h5 className="text-xs font-semibold text-white">Running Crew</h5>
                        <p className="text-[10px] text-navy-300 mt-1">12 members</p>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                      className="flex-shrink-0 w-36 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl overflow-hidden"
                    >
                      <div className="h-20 flex items-center justify-center">
                        <span className="text-white text-2xl">🎨</span>
                      </div>
                      <div className="p-2">
                        <span className="text-[8px] text-purple-200">Art</span>
                        <h5 className="text-xs font-semibold text-white">Art Workshop</h5>
                        <p className="text-[10px] text-purple-200 mt-1">8 members</p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Category Section */}
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="w-6 h-6 bg-navy-100 rounded-lg flex items-center justify-center">
                      <Tag className="w-3 h-3 text-navy-600" />
                    </div>
                    <span className="text-xs font-medium text-navy-800">Explore by Category</span>
                  </div>

                  {/* Category Pills */}
                  <div className="flex flex-wrap gap-2">
                    {['All', 'Art', 'Business', 'Exercise', 'Game'].map((cat, idx) => (
                      <span
                        key={cat}
                        className={`text-xs px-3 py-1 rounded-full ${
                          idx === 0
                            ? 'bg-navy-800 text-white'
                            : 'bg-white border border-navy-200 text-navy-600'
                        }`}
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
