import { Search, MapPin, Phone, Heart, Navigation, Clock } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { WavyBackground } from "./WavyBackground";
import { BloodDropAnimation } from "./BloodDropAnimation";

interface LandingPageProps {
  onNavigate: (screen: string) => void;
  isDarkMode: boolean;
}

const BLOOD_GROUPS = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

export function LandingPage({ onNavigate, isDarkMode }: LandingPageProps) {
  return (
    <div className="min-h-screen">
      <BloodDropAnimation isDarkMode={isDarkMode} />
      
      {/* Hero Section */}
      <div className={`${isDarkMode ? 'bg-black' : 'bg-white'} py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden`}>
        <WavyBackground isDarkMode={isDarkMode} variant="top" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="flex items-center justify-center mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Heart className={`w-16 h-16 ${isDarkMode ? 'text-red-600' : 'text-red-500'} fill-current`} />
            </motion.div>
            <motion.h1 
              className={`text-4xl sm:text-5xl lg:text-6xl mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Open Blood Availability Network
            </motion.h1>
            <motion.p 
              className={`text-xl sm:text-2xl mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Save lives by finding blood when it matters most
            </motion.p>
            <motion.p 
              className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} max-w-3xl mx-auto`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Real-time blood availability tracking across hospitals and blood banks. 
              Open data platform for transparent, accessible healthcare.
            </motion.p>
          </motion.div>

          {/* Search Bar - Glass Effect */}
          <motion.div 
            className="max-w-4xl mx-auto mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className={`p-6 rounded-2xl backdrop-blur-xl border ${
              isDarkMode 
                ? 'bg-gray-900/80 border-gray-800 shadow-2xl shadow-red-900/20' 
                : 'bg-white/80 border-gray-200 shadow-2xl shadow-red-500/10'
            }`}>
              <div className="space-y-4">
                <div>
                  <label className={`block text-sm mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Select Blood Group
                  </label>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {BLOOD_GROUPS.map((group) => (
                      <Button
                        key={group}
                        variant="outline"
                        className={`${
                          isDarkMode 
                            ? 'border-red-600 text-red-500 hover:bg-red-950' 
                            : 'border-red-500 text-red-600 hover:bg-red-50'
                        }`}
                      >
                        {group}
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <Input
                      placeholder="Enter your location..."
                      className={`pl-10 ${
                        isDarkMode 
                          ? 'bg-gray-800 border-gray-700 text-white placeholder:text-gray-500' 
                          : 'bg-white border-gray-300'
                      }`}
                    />
                  </div>
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <Input
                      placeholder="Search hospitals, blood banks..."
                      className={`pl-10 ${
                        isDarkMode 
                          ? 'bg-gray-800 border-gray-700 text-white placeholder:text-gray-500' 
                          : 'bg-white border-gray-300'
                      }`}
                    />
                  </div>
                </div>

                <Button
                  onClick={() => onNavigate('search-results')}
                  className={`w-full ${
                    isDarkMode 
                      ? 'bg-red-600 hover:bg-red-700 text-white' 
                      : 'bg-red-500 hover:bg-red-600 text-white'
                  }`}
                  size="lg"
                >
                  <Search className="mr-2 h-5 w-5" />
                  Search Blood Availability
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Emergency CTA - Pulse Effect */}
          <motion.div 
            className="max-w-4xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <div className={`${isDarkMode ? 'bg-red-950/50 border-red-900' : 'bg-red-50/80 border-red-200'} p-6 rounded-2xl border backdrop-blur-sm`}>
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-center sm:text-left">
                  <h3 className={`text-xl mb-2 ${isDarkMode ? 'text-red-400' : 'text-red-800'}`}>
                    Emergency Blood Required?
                  </h3>
                  <p className={`${isDarkMode ? 'text-red-300' : 'text-red-700'}`}>
                    Get instant alerts to nearby donors and blood banks
                  </p>
                </div>
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Button
                    onClick={() => onNavigate('emergency')}
                    size="lg"
                    className={`${
                      isDarkMode 
                        ? 'bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-600/50' 
                        : 'bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-500/50'
                    }`}
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Need Blood Now
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Map Preview - Enhanced Card */}
          <motion.div 
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <h3 className={`text-2xl mb-4 text-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Nearby Blood Banks & Hospitals
            </h3>
            <div className={`${isDarkMode ? 'bg-gray-900/80 border-gray-800' : 'bg-white/80 border-gray-200'} backdrop-blur-xl border rounded-2xl overflow-hidden shadow-2xl`}>
              <div className={`h-96 flex items-center justify-center ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                <div className="text-center">
                  <MapPin className={`w-16 h-16 mx-auto mb-4 ${isDarkMode ? 'text-red-600' : 'text-red-500'}`} />
                  <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                    Interactive map showing blood banks and hospitals
                  </p>
                  <div className="flex gap-2 justify-center mt-4">
                    <Badge variant="outline" className={isDarkMode ? 'border-green-600 text-green-500' : 'border-green-500 text-green-600'}>
                      <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                      Available
                    </Badge>
                    <Badge variant="outline" className={isDarkMode ? 'border-yellow-600 text-yellow-500' : 'border-yellow-500 text-yellow-600'}>
                      <div className="w-2 h-2 rounded-full bg-yellow-500 mr-2"></div>
                      Low Stock
                    </Badge>
                    <Badge variant="outline" className={isDarkMode ? 'border-red-600 text-red-500' : 'border-red-500 text-red-600'}>
                      <div className="w-2 h-2 rounded-full bg-red-500 mr-2"></div>
                      Out of Stock
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Quick Stats - Apple-style Grid */}
      <div className={`${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'} py-12 px-4`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { value: "450+", label: "Blood Banks", delay: 0 },
              { value: "1,200+", label: "Hospitals", delay: 0.1 },
              { value: "98%", label: "Accuracy Rate", delay: 0.2 },
              { value: "24/7", label: "Real-Time Updates", delay: 0.3 }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: stat.delay }}
              >
                <div className={`${isDarkMode ? 'bg-black/50 border-gray-800 hover:bg-gray-800/50' : 'bg-white border-gray-200 hover:bg-gray-50'} backdrop-blur-sm border rounded-2xl p-6 text-center transition-all duration-300 hover:scale-105 hover:shadow-xl ${isDarkMode ? 'hover:shadow-red-900/20' : 'hover:shadow-red-500/10'}`}>
                  <div className={`text-3xl mb-2 ${isDarkMode ? 'text-red-500' : 'text-red-600'}`}>{stat.value}</div>
                  <div className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Features - Enhanced Cards */}
      <div className={`${isDarkMode ? 'bg-black' : 'bg-white'} py-12 px-4 relative`}>
        <WavyBackground isDarkMode={isDarkMode} variant="bottom" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.h2 
            className={`text-3xl text-center mb-12 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Platform Features
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { Icon: Navigation, title: "Location-Based Search", desc: "Find the nearest blood banks and hospitals with real-time navigation", delay: 0 },
              { Icon: Clock, title: "Real-Time Updates", desc: "Live blood stock information updated every hour by registered facilities", delay: 0.2 },
              { Icon: Heart, title: "Open Data Platform", desc: "Transparent public API for developers, researchers, and NGOs", delay: 0.4 }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: feature.delay }}
                whileHover={{ y: -10 }}
              >
                <div className={`${isDarkMode ? 'bg-gray-900/80 border-gray-800 hover:bg-gray-800/80' : 'bg-white/80 border-gray-200 hover:bg-gray-50/80'} backdrop-blur-xl border rounded-2xl p-6 h-full transition-all duration-300 hover:shadow-2xl ${isDarkMode ? 'hover:shadow-red-900/30' : 'hover:shadow-red-500/20'}`}>
                  <div className={`w-16 h-16 rounded-2xl ${isDarkMode ? 'bg-red-950/50' : 'bg-red-50'} flex items-center justify-center mb-4`}>
                    <feature.Icon className={`w-8 h-8 ${isDarkMode ? 'text-red-500' : 'text-red-600'}`} />
                  </div>
                  <h3 className={`text-xl mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {feature.title}
                  </h3>
                  <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}