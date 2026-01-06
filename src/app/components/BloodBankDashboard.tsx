import { useState } from "react";
import { AlertTriangle, TrendingUp, TrendingDown, Users, Droplet, Activity, Calendar, CheckCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

interface BloodBankDashboardProps {
  isDarkMode: boolean;
}

const BLOOD_STOCK = [
  { group: "A+", units: 45, status: "good", trend: "up", change: "+5" },
  { group: "A-", units: 12, status: "low", trend: "down", change: "-3" },
  { group: "B+", units: 38, status: "good", trend: "up", change: "+2" },
  { group: "B-", units: 8, status: "critical", trend: "down", change: "-4" },
  { group: "AB+", units: 22, status: "medium", trend: "up", change: "+1" },
  { group: "AB-", units: 5, status: "critical", trend: "down", change: "-2" },
  { group: "O+", units: 52, status: "good", trend: "up", change: "+7" },
  { group: "O-", units: 15, status: "low", trend: "stable", change: "0" },
];

const getStatusColor = (status: string, isDark: boolean) => {
  switch (status) {
    case "good":
      return isDark ? "bg-green-950 text-green-400 border-green-800" : "bg-green-50 text-green-700 border-green-200";
    case "medium":
      return isDark ? "bg-yellow-950 text-yellow-400 border-yellow-800" : "bg-yellow-50 text-yellow-700 border-yellow-200";
    case "low":
      return isDark ? "bg-orange-950 text-orange-400 border-orange-800" : "bg-orange-50 text-orange-700 border-orange-200";
    case "critical":
      return isDark ? "bg-red-950 text-red-400 border-red-800" : "bg-red-50 text-red-700 border-red-200";
    default:
      return isDark ? "bg-gray-800 text-gray-400 border-gray-700" : "bg-gray-50 text-gray-700 border-gray-200";
  }
};

export function BloodBankDashboard({ isDarkMode }: BloodBankDashboardProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isLoggedIn) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${isDarkMode ? 'bg-black' : 'bg-gray-50'} px-4`}>
        <Card className={`${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} p-8 w-full max-w-md`}>
          <div className="text-center mb-6">
            <Droplet className={`w-16 h-16 mx-auto mb-4 ${isDarkMode ? 'text-red-600' : 'text-red-500'}`} />
            <h2 className={`text-2xl mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Blood Bank Login
            </h2>
            <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
              Secure access for authorized facilities
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <Label htmlFor="facility" className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                Facility ID
              </Label>
              <Input
                id="facility"
                placeholder="Enter your facility ID"
                className={`mt-1 ${
                  isDarkMode 
                    ? 'bg-gray-800 border-gray-700 text-white placeholder:text-gray-500' 
                    : 'bg-white border-gray-300'
                }`}
              />
            </div>

            <div>
              <Label htmlFor="password" className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                className={`mt-1 ${
                  isDarkMode 
                    ? 'bg-gray-800 border-gray-700 text-white placeholder:text-gray-500' 
                    : 'bg-white border-gray-300'
                }`}
              />
            </div>

            <Button
              onClick={() => setIsLoggedIn(true)}
              className={`w-full ${
                isDarkMode 
                  ? 'bg-red-600 hover:bg-red-700 text-white' 
                  : 'bg-red-500 hover:bg-red-600 text-white'
              }`}
              size="lg"
            >
              Secure Login
            </Button>

            <p className={`text-xs text-center ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
              Protected by government-grade encryption
            </p>
          </div>
        </Card>
      </div>
    );
  }

  const criticalStock = BLOOD_STOCK.filter(item => item.status === "critical");
  const lowStock = BLOOD_STOCK.filter(item => item.status === "low");

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-black' : 'bg-gray-50'} py-8 px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className={`text-3xl mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Blood Stock Dashboard
          </h1>
          <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
            City Central Blood Bank - Last updated: Today at 2:30 PM
          </p>
        </div>

        {/* Alerts */}
        {(criticalStock.length > 0 || lowStock.length > 0) && (
          <div className="mb-6 space-y-4">
            {criticalStock.length > 0 && (
              <Card className={`${isDarkMode ? 'bg-red-950 border-red-900' : 'bg-red-50 border-red-200'} p-4`}>
                <div className="flex items-start gap-3">
                  <AlertTriangle className={`w-6 h-6 ${isDarkMode ? 'text-red-400' : 'text-red-600'} flex-shrink-0`} />
                  <div className="flex-1">
                    <h3 className={`mb-1 ${isDarkMode ? 'text-red-400' : 'text-red-800'}`}>
                      Critical Stock Alert
                    </h3>
                    <p className={`text-sm ${isDarkMode ? 'text-red-300' : 'text-red-700'}`}>
                      {criticalStock.map(s => s.group).join(", ")} are critically low. Immediate restocking required.
                    </p>
                  </div>
                </div>
              </Card>
            )}
            {lowStock.length > 0 && (
              <Card className={`${isDarkMode ? 'bg-orange-950 border-orange-900' : 'bg-orange-50 border-orange-200'} p-4`}>
                <div className="flex items-start gap-3">
                  <AlertTriangle className={`w-6 h-6 ${isDarkMode ? 'text-orange-400' : 'text-orange-600'} flex-shrink-0`} />
                  <div className="flex-1">
                    <h3 className={`mb-1 ${isDarkMode ? 'text-orange-400' : 'text-orange-800'}`}>
                      Low Stock Warning
                    </h3>
                    <p className={`text-sm ${isDarkMode ? 'text-orange-300' : 'text-orange-700'}`}>
                      {lowStock.map(s => s.group).join(", ")} stock levels are low. Consider organizing donation drives.
                    </p>
                  </div>
                </div>
              </Card>
            )}
          </div>
        )}

        {/* Analytics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className={`${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} p-6`}>
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className={`text-sm mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Total Units</p>
                <div className={`text-3xl ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>197</div>
              </div>
              <Droplet className={`w-8 h-8 ${isDarkMode ? 'text-red-600' : 'text-red-500'}`} />
            </div>
            <div className={`flex items-center text-sm ${isDarkMode ? 'text-green-400' : 'text-green-600'}`}>
              <TrendingUp className="w-4 h-4 mr-1" />
              +8 from yesterday
            </div>
          </Card>

          <Card className={`${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} p-6`}>
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className={`text-sm mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Donations Today</p>
                <div className={`text-3xl ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>24</div>
              </div>
              <Users className={`w-8 h-8 ${isDarkMode ? 'text-red-600' : 'text-red-500'}`} />
            </div>
            <div className={`flex items-center text-sm ${isDarkMode ? 'text-green-400' : 'text-green-600'}`}>
              <TrendingUp className="w-4 h-4 mr-1" />
              Above average
            </div>
          </Card>

          <Card className={`${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} p-6`}>
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className={`text-sm mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Requests Filled</p>
                <div className={`text-3xl ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>18</div>
              </div>
              <Activity className={`w-8 h-8 ${isDarkMode ? 'text-red-600' : 'text-red-500'}`} />
            </div>
            <div className={`flex items-center text-sm ${isDarkMode ? 'text-red-400' : 'text-red-600'}`}>
              <TrendingDown className="w-4 h-4 mr-1" />
              -3 from yesterday
            </div>
          </Card>

          <Card className={`${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} p-6`}>
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className={`text-sm mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Next Drive</p>
                <div className={`text-3xl ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>3d</div>
              </div>
              <Calendar className={`w-8 h-8 ${isDarkMode ? 'text-red-600' : 'text-red-500'}`} />
            </div>
            <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Jan 9, 2026
            </div>
          </Card>
        </div>

        {/* Blood Stock Update Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <Card className={`${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} p-6`}>
              <h3 className={`text-xl mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Update Blood Stock
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {BLOOD_STOCK.map((item) => (
                  <div key={item.group} className={`p-4 rounded-lg border ${getStatusColor(item.status, isDarkMode)}`}>
                    <div className="text-center mb-3">
                      <div className="text-2xl mb-1">{item.group}</div>
                      <div className="text-sm opacity-80">{item.units} units</div>
                    </div>
                    <Input
                      type="number"
                      placeholder="Update"
                      className={`text-center ${
                        isDarkMode 
                          ? 'bg-gray-800 border-gray-700 text-white' 
                          : 'bg-white border-gray-300'
                      }`}
                    />
                    <div className={`text-xs text-center mt-2 flex items-center justify-center ${
                      item.trend === 'up' ? (isDarkMode ? 'text-green-400' : 'text-green-600') :
                      item.trend === 'down' ? (isDarkMode ? 'text-red-400' : 'text-red-600') :
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {item.trend === 'up' && <TrendingUp className="w-3 h-3 mr-1" />}
                      {item.trend === 'down' && <TrendingDown className="w-3 h-3 mr-1" />}
                      {item.change}
                    </div>
                  </div>
                ))}
              </div>
              <Button
                className={`w-full mt-6 ${
                  isDarkMode 
                    ? 'bg-red-600 hover:bg-red-700 text-white' 
                    : 'bg-red-500 hover:bg-red-600 text-white'
                }`}
                size="lg"
              >
                <CheckCircle className="mr-2 h-5 w-5" />
                Save Updates
              </Button>
            </Card>
          </div>

          <div>
            <Card className={`${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} p-6`}>
              <h3 className={`text-xl mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Stock Overview
              </h3>
              <div className="space-y-4">
                <div>
                  <div className={`flex justify-between text-sm mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    <span>Good Stock</span>
                    <span>{BLOOD_STOCK.filter(s => s.status === 'good').length} types</span>
                  </div>
                  <div className={`h-2 rounded-full ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'}`}>
                    <div className="h-2 rounded-full bg-green-500" style={{ width: '50%' }}></div>
                  </div>
                </div>
                <div>
                  <div className={`flex justify-between text-sm mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    <span>Medium Stock</span>
                    <span>{BLOOD_STOCK.filter(s => s.status === 'medium').length} types</span>
                  </div>
                  <div className={`h-2 rounded-full ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'}`}>
                    <div className="h-2 rounded-full bg-yellow-500" style={{ width: '12.5%' }}></div>
                  </div>
                </div>
                <div>
                  <div className={`flex justify-between text-sm mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    <span>Low Stock</span>
                    <span>{BLOOD_STOCK.filter(s => s.status === 'low').length} types</span>
                  </div>
                  <div className={`h-2 rounded-full ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'}`}>
                    <div className="h-2 rounded-full bg-orange-500" style={{ width: '25%' }}></div>
                  </div>
                </div>
                <div>
                  <div className={`flex justify-between text-sm mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    <span>Critical</span>
                    <span>{BLOOD_STOCK.filter(s => s.status === 'critical').length} types</span>
                  </div>
                  <div className={`h-2 rounded-full ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'}`}>
                    <div className="h-2 rounded-full bg-red-500" style={{ width: '25%' }}></div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
