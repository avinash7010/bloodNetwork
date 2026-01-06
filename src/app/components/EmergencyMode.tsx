import { useState } from "react";
import { AlertCircle, MapPin, Phone, Clock, CheckCircle, Radio } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

interface EmergencyModeProps {
  isDarkMode: boolean;
}

const BLOOD_GROUPS = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

export function EmergencyMode({ isDarkMode }: EmergencyModeProps) {
  const [selectedBloodGroup, setSelectedBloodGroup] = useState<string | null>(null);
  const [alertSent, setAlertSent] = useState(false);
  const [isDetectingLocation, setIsDetectingLocation] = useState(false);
  const [locationDetected, setLocationDetected] = useState(false);

  const handleLocationDetect = () => {
    setIsDetectingLocation(true);
    setTimeout(() => {
      setIsDetectingLocation(false);
      setLocationDetected(true);
    }, 1500);
  };

  const handleEmergencyRequest = () => {
    if (selectedBloodGroup && locationDetected) {
      setAlertSent(true);
    }
  };

  if (alertSent) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${isDarkMode ? 'bg-black' : 'bg-gray-50'} px-4`}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className={`${isDarkMode ? 'bg-gray-900/80 border-gray-800' : 'bg-white/80 border-gray-200'} backdrop-blur-xl border rounded-2xl p-8 max-w-2xl w-full shadow-2xl`}>
            <div className="text-center">
              <motion.div 
                className={`w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center ${
                  isDarkMode ? 'bg-green-950' : 'bg-green-100'
                }`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              >
                <CheckCircle className={`w-12 h-12 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`} />
              </motion.div>
              
              <h2 className={`text-3xl mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Emergency Alert Sent Successfully
              </h2>
              
              <p className={`text-lg mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Your request for <strong>{selectedBloodGroup}</strong> blood has been sent to nearby hospitals and blood banks.
              </p>

              <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'} rounded-lg p-6 mb-6`}>
                <div className="flex items-start gap-4 mb-4">
                  <Radio className={`w-6 h-6 ${isDarkMode ? 'text-red-400' : 'text-red-600'} animate-pulse`} />
                  <div className="flex-1 text-left">
                    <h3 className={`mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      Alert Broadcasting
                    </h3>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Notifying 12 blood banks and hospitals within 5km radius
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className={`w-6 h-6 ${isDarkMode ? 'text-red-400' : 'text-red-600'}`} />
                  <div className="flex-1 text-left">
                    <h3 className={`mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      Location Shared
                    </h3>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Downtown Medical District, Latitude: 40.7128, Longitude: -74.0060
                    </p>
                  </div>
                </div>
              </div>

              <div className={`${isDarkMode ? 'bg-red-950 border-red-900' : 'bg-red-50 border-red-200'} border rounded-lg p-4 mb-6`}>
                <p className={`text-sm ${isDarkMode ? 'text-red-300' : 'text-red-700'}`}>
                  <strong>Emergency Contact:</strong> You will receive calls from blood banks with available stock. 
                  Please keep your phone accessible.
                </p>
              </div>

              <div className="space-y-3">
                <Button
                  onClick={() => setAlertSent(false)}
                  className={`w-full ${
                    isDarkMode 
                      ? 'bg-red-600 hover:bg-red-700 text-white' 
                      : 'bg-red-500 hover:bg-red-600 text-white'
                  }`}
                  size="lg"
                >
                  Send Another Alert
                </Button>
                <Button
                  variant="outline"
                  className={`w-full ${isDarkMode ? 'border-gray-700 text-gray-300' : 'border-gray-300'}`}
                  size="lg"
                >
                  View Nearby Blood Banks
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen flex items-center justify-center ${isDarkMode ? 'bg-black' : 'bg-gray-50'} px-4`}>
      <Card className={`${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} p-8 max-w-2xl w-full`}>
        <div className="text-center mb-8">
          <div className={`w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center ${
            isDarkMode ? 'bg-red-950' : 'bg-red-100'
          }`}>
            <AlertCircle className={`w-12 h-12 ${isDarkMode ? 'text-red-400' : 'text-red-600'}`} />
          </div>
          
          <h1 className={`text-3xl mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Emergency Blood Request
          </h1>
          
          <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Get immediate assistance from nearby blood banks and hospitals
          </p>
        </div>

        {/* Location Detection */}
        <div className="mb-8">
          <Card className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'} p-6`}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <MapPin className={`w-6 h-6 ${isDarkMode ? 'text-red-400' : 'text-red-600'}`} />
                <div className="text-left">
                  <h3 className={`mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Your Location
                  </h3>
                  {locationDetected ? (
                    <p className={`text-sm ${isDarkMode ? 'text-green-400' : 'text-green-600'}`}>
                      Location detected: Downtown Medical District
                    </p>
                  ) : (
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Location not detected
                    </p>
                  )}
                </div>
              </div>
              {locationDetected && (
                <CheckCircle className={`w-6 h-6 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`} />
              )}
            </div>
            <Button
              onClick={handleLocationDetect}
              disabled={isDetectingLocation || locationDetected}
              variant="outline"
              className={`w-full ${
                isDarkMode ? 'border-gray-700 text-gray-300' : 'border-gray-300'
              } ${locationDetected ? 'opacity-50' : ''}`}
            >
              {isDetectingLocation ? (
                <>
                  <Clock className="mr-2 h-4 w-4 animate-spin" />
                  Detecting Location...
                </>
              ) : locationDetected ? (
                <>
                  <CheckCircle className="mr-2 h-4 w-4" />
                  Location Confirmed
                </>
              ) : (
                <>
                  <MapPin className="mr-2 h-4 w-4" />
                  Auto-Detect My Location
                </>
              )}
            </Button>
          </Card>
        </div>

        {/* Blood Group Selection */}
        <div className="mb-8">
          <h3 className={`text-lg mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Select Required Blood Group
          </h3>
          <div className="grid grid-cols-4 gap-3">
            {BLOOD_GROUPS.map((group) => (
              <button
                key={group}
                onClick={() => setSelectedBloodGroup(group)}
                className={`p-4 rounded-lg border-2 transition-all ${
                  selectedBloodGroup === group
                    ? isDarkMode
                      ? 'bg-red-950 border-red-600 text-red-400'
                      : 'bg-red-50 border-red-500 text-red-600'
                    : isDarkMode
                      ? 'bg-gray-800 border-gray-700 text-gray-300 hover:border-red-600'
                      : 'bg-white border-gray-300 text-gray-700 hover:border-red-500'
                }`}
              >
                <div className="text-2xl">{group}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Emergency Info */}
        <div className={`${isDarkMode ? 'bg-yellow-950 border-yellow-900' : 'bg-yellow-50 border-yellow-200'} border rounded-lg p-4 mb-6`}>
          <div className="flex gap-3">
            <AlertCircle className={`w-5 h-5 ${isDarkMode ? 'text-yellow-400' : 'text-yellow-600'} flex-shrink-0 mt-0.5`} />
            <div>
              <h4 className={`mb-1 ${isDarkMode ? 'text-yellow-400' : 'text-yellow-800'}`}>
                Important Information
              </h4>
              <ul className={`text-sm space-y-1 ${isDarkMode ? 'text-yellow-300' : 'text-yellow-700'}`}>
                <li>• This will alert nearby blood banks and hospitals</li>
                <li>• Your location and contact details will be shared</li>
                <li>• You may receive immediate calls from facilities</li>
                <li>• For life-threatening emergencies, call 911 first</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Button
            onClick={handleEmergencyRequest}
            disabled={!selectedBloodGroup || !locationDetected}
            className={`w-full ${
              isDarkMode 
                ? 'bg-red-600 hover:bg-red-700 text-white' 
                : 'bg-red-500 hover:bg-red-600 text-white'
            } disabled:opacity-50 disabled:cursor-not-allowed`}
            size="lg"
          >
            <Phone className="mr-2 h-5 w-5" />
            Send Emergency Alert
          </Button>
          
          <p className={`text-xs text-center ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
            By sending this alert, you agree to share your location and contact information with medical facilities
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-700">
          <div className="text-center">
            <div className={`text-2xl mb-1 ${isDarkMode ? 'text-red-400' : 'text-red-600'}`}>12</div>
            <div className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Blood Banks</div>
          </div>
          <div className="text-center">
            <div className={`text-2xl mb-1 ${isDarkMode ? 'text-red-400' : 'text-red-600'}`}>5km</div>
            <div className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Radius</div>
          </div>
          <div className="text-center">
            <div className={`text-2xl mb-1 ${isDarkMode ? 'text-red-400' : 'text-red-600'}`}>{'<2min'}</div>
            <div className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Avg Response</div>
          </div>
        </div>
      </Card>
    </div>
  );
}