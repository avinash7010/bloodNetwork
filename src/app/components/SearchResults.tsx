import { MapPin, Navigation, Phone, Clock, Filter, SlidersHorizontal, ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";

interface SearchResultsProps {
  isDarkMode: boolean;
}

const BLOOD_BANKS = [
  {
    id: 1,
    name: "City Central Blood Bank",
    type: "Blood Bank",
    distance: "0.8 km",
    address: "123 Medical Plaza, Downtown",
    phone: "+1-555-0101",
    availability: {
      "A+": "High",
      "A-": "Medium",
      "B+": "High",
      "B-": "Low",
      "AB+": "Medium",
      "AB-": "Out",
      "O+": "High",
      "O-": "Medium"
    },
    lastUpdated: "15 minutes ago"
  },
  {
    id: 2,
    name: "General Hospital Blood Center",
    type: "Hospital",
    distance: "1.2 km",
    address: "456 Health Avenue, Medical District",
    phone: "+1-555-0102",
    availability: {
      "A+": "High",
      "A-": "High",
      "B+": "Medium",
      "B-": "Medium",
      "AB+": "High",
      "AB-": "Low",
      "O+": "High",
      "O-": "High"
    },
    lastUpdated: "30 minutes ago"
  },
  {
    id: 3,
    name: "Regional Medical Blood Bank",
    type: "Blood Bank",
    distance: "2.5 km",
    address: "789 Care Street, Northside",
    phone: "+1-555-0103",
    availability: {
      "A+": "Medium",
      "A-": "Low",
      "B+": "High",
      "B-": "Out",
      "AB+": "Low",
      "AB-": "Out",
      "O+": "Medium",
      "O-": "Low"
    },
    lastUpdated: "1 hour ago"
  },
  {
    id: 4,
    name: "Community Health Blood Services",
    type: "Blood Bank",
    distance: "3.1 km",
    address: "321 Wellness Road, Eastside",
    phone: "+1-555-0104",
    availability: {
      "A+": "High",
      "A-": "Medium",
      "B+": "High",
      "B-": "Medium",
      "AB+": "High",
      "AB-": "Medium",
      "O+": "High",
      "O-": "High"
    },
    lastUpdated: "20 minutes ago"
  }
];

const getAvailabilityColor = (status: string, isDark: boolean) => {
  switch (status) {
    case "High":
      return isDark ? "bg-green-950 text-green-400 border-green-800" : "bg-green-50 text-green-700 border-green-200";
    case "Medium":
      return isDark ? "bg-yellow-950 text-yellow-400 border-yellow-800" : "bg-yellow-50 text-yellow-700 border-yellow-200";
    case "Low":
      return isDark ? "bg-orange-950 text-orange-400 border-orange-800" : "bg-orange-50 text-orange-700 border-orange-200";
    case "Out":
      return isDark ? "bg-red-950 text-red-400 border-red-800" : "bg-red-50 text-red-700 border-red-200";
    default:
      return isDark ? "bg-gray-800 text-gray-400 border-gray-700" : "bg-gray-50 text-gray-700 border-gray-200";
  }
};

export function SearchResults({ isDarkMode }: SearchResultsProps) {
  return (
    <div className="min-h-screen">
      <div className={`${isDarkMode ? 'bg-black' : 'bg-white'} py-8 px-4 sm:px-6 lg:px-8`}>
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className={`text-3xl mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Search Results
            </h1>
            <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
              Showing blood banks and hospitals near your location
            </p>
          </motion.div>

          {/* Filter Bar */}
          <motion.div 
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className={`${isDarkMode ? 'bg-gray-900/80 border-gray-800' : 'bg-white/80 border-gray-200'} backdrop-blur-xl border rounded-2xl p-4 shadow-lg`}>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <Input
                    placeholder="Filter by name or address..."
                    className={`${
                      isDarkMode 
                        ? 'bg-gray-800 border-gray-700 text-white placeholder:text-gray-500' 
                        : 'bg-white border-gray-300'
                    }`}
                  />
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    className={isDarkMode ? 'border-gray-700 text-gray-300' : 'border-gray-300'}
                  >
                    <SlidersHorizontal className="mr-2 h-4 w-4" />
                    Filters
                  </Button>
                  <Button
                    variant="outline"
                    className={isDarkMode ? 'border-gray-700 text-gray-300' : 'border-gray-300'}
                  >
                    Sort By
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Results Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {BLOOD_BANKS.map((bank, index) => (
              <motion.div
                key={bank.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className={`${isDarkMode ? 'bg-gray-900/80 border-gray-800 hover:bg-gray-800/80' : 'bg-white/80 border-gray-200 hover:bg-gray-50/80'} backdrop-blur-xl border rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl ${isDarkMode ? 'hover:shadow-red-900/30' : 'hover:shadow-red-500/20'}`}>
                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className={`text-xl mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {bank.name}
                    </h3>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge
                        variant="outline"
                        className={isDarkMode ? 'border-red-600 text-red-400' : 'border-red-500 text-red-600'}
                      >
                        {bank.type}
                      </Badge>
                      <div className={`flex items-center text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        <Clock className="w-4 h-4 mr-1" />
                        {bank.lastUpdated}
                      </div>
                    </div>
                  </div>
                  <div className={`text-right ${isDarkMode ? 'text-red-400' : 'text-red-600'}`}>
                    <div className="text-2xl">{bank.distance}</div>
                    <div className="text-sm">away</div>
                  </div>
                </div>

                {/* Address */}
                <div className={`flex items-start gap-2 mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                  <span className="text-sm">{bank.address}</span>
                </div>

                {/* Blood Availability Grid */}
                <div className="mb-4">
                  <h4 className={`text-sm mb-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Blood Availability
                  </h4>
                  <div className="grid grid-cols-4 gap-2">
                    {Object.entries(bank.availability).map(([group, status]) => (
                      <motion.div
                        key={group}
                        className={`p-2 rounded-lg border text-center ${getAvailabilityColor(status, isDarkMode)}`}
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <div className="text-sm">{group}</div>
                        <div className="text-xs mt-1">{status}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <Button
                    className={`flex-1 ${
                      isDarkMode 
                        ? 'bg-red-600 hover:bg-red-700 text-white' 
                        : 'bg-red-500 hover:bg-red-600 text-white'
                    }`}
                  >
                    <Navigation className="mr-2 h-4 w-4" />
                    Get Directions
                  </Button>
                  <Button
                    variant="outline"
                    className={isDarkMode ? 'border-gray-700 text-gray-300' : 'border-gray-300'}
                  >
                    <Phone className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              </motion.div>
            ))}
          </div>

          {/* Load More */}
          <motion.div 
            className="text-center mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Button
              variant="outline"
              size="lg"
              className={isDarkMode ? 'border-gray-700 text-gray-300' : 'border-gray-300'}
            >
              Load More Results
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}