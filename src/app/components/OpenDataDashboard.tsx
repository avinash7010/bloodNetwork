import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Download, Code, Database, TrendingUp, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

interface OpenDataDashboardProps {
  isDarkMode: boolean;
}

const DEMAND_SUPPLY_DATA = [
  { month: "Jul", demand: 420, supply: 380 },
  { month: "Aug", demand: 450, supply: 430 },
  { month: "Sep", demand: 480, supply: 440 },
  { month: "Oct", demand: 510, supply: 490 },
  { month: "Nov", demand: 490, supply: 510 },
  { month: "Dec", demand: 530, supply: 520 },
];

const BLOOD_GROUP_DISTRIBUTION = [
  { name: "O+", value: 37, color: "#ef4444" },
  { name: "A+", value: 28, color: "#f97316" },
  { name: "B+", value: 20, color: "#eab308" },
  { name: "AB+", value: 5, color: "#84cc16" },
  { name: "O-", value: 4, color: "#22c55e" },
  { name: "A-", value: 3, color: "#10b981" },
  { name: "B-", value: 2, color: "#14b8a6" },
  { name: "AB-", value: 1, color: "#06b6d4" },
];

const CITY_AVAILABILITY = [
  { city: "New York", available: 85, low: 10, critical: 5 },
  { city: "Los Angeles", available: 78, low: 15, critical: 7 },
  { city: "Chicago", available: 82, low: 12, critical: 6 },
  { city: "Houston", available: 75, low: 18, critical: 7 },
  { city: "Phoenix", available: 80, low: 14, critical: 6 },
];

const API_ENDPOINTS = [
  {
    name: "Blood Availability",
    endpoint: "/api/v1/blood-availability",
    method: "GET",
    description: "Get real-time blood stock data by location"
  },
  {
    name: "Blood Banks",
    endpoint: "/api/v1/blood-banks",
    method: "GET",
    description: "List all registered blood banks and hospitals"
  },
  {
    name: "Search",
    endpoint: "/api/v1/search",
    method: "POST",
    description: "Search for blood by type and location"
  },
  {
    name: "Analytics",
    endpoint: "/api/v1/analytics",
    method: "GET",
    description: "Access aggregated statistics and trends"
  }
];

export function OpenDataDashboard({ isDarkMode }: OpenDataDashboardProps) {
  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-black' : 'bg-gray-50'} py-8 px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className={`text-3xl mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Open Data Dashboard
          </h1>
          <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
            Transparent blood availability data for researchers, developers, and policymakers
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className={`${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} p-6`}>
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className={`text-sm mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Total Blood Banks</p>
                <div className={`text-3xl ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>1,247</div>
              </div>
              <Database className={`w-8 h-8 ${isDarkMode ? 'text-red-600' : 'text-red-500'}`} />
            </div>
            <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Across 50 states
            </div>
          </Card>

          <Card className={`${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} p-6`}>
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className={`text-sm mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>API Calls Today</p>
                <div className={`text-3xl ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>45.2K</div>
              </div>
              <Code className={`w-8 h-8 ${isDarkMode ? 'text-red-600' : 'text-red-500'}`} />
            </div>
            <div className={`flex items-center text-sm ${isDarkMode ? 'text-green-400' : 'text-green-600'}`}>
              <TrendingUp className="w-4 h-4 mr-1" />
              +12% from last week
            </div>
          </Card>

          <Card className={`${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} p-6`}>
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className={`text-sm mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Data Updates</p>
                <div className={`text-3xl ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>24/7</div>
              </div>
              <TrendingUp className={`w-8 h-8 ${isDarkMode ? 'text-red-600' : 'text-red-500'}`} />
            </div>
            <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Real-time sync
            </div>
          </Card>

          <Card className={`${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} p-6`}>
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className={`text-sm mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Open Source</p>
                <div className={`text-3xl ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>100%</div>
              </div>
              <MapPin className={`w-8 h-8 ${isDarkMode ? 'text-red-600' : 'text-red-500'}`} />
            </div>
            <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Free to access
            </div>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Demand vs Supply */}
          <Card className={`${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} p-6`}>
            <h3 className={`text-xl mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Demand vs Supply (6 Months)
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={DEMAND_SUPPLY_DATA}>
                <CartesianGrid strokeDasharray="3 3" stroke={isDarkMode ? '#374151' : '#e5e7eb'} />
                <XAxis dataKey="month" stroke={isDarkMode ? '#9ca3af' : '#6b7280'} />
                <YAxis stroke={isDarkMode ? '#9ca3af' : '#6b7280'} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: isDarkMode ? '#1f2937' : '#ffffff',
                    border: isDarkMode ? '1px solid #374151' : '1px solid #e5e7eb',
                    borderRadius: '8px',
                    color: isDarkMode ? '#fff' : '#000'
                  }}
                />
                <Legend />
                <Line type="monotone" dataKey="demand" stroke="#ef4444" strokeWidth={2} name="Demand" />
                <Line type="monotone" dataKey="supply" stroke="#22c55e" strokeWidth={2} name="Supply" />
              </LineChart>
            </ResponsiveContainer>
          </Card>

          {/* Blood Group Distribution */}
          <Card className={`${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} p-6`}>
            <h3 className={`text-xl mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Blood Group Distribution
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={BLOOD_GROUP_DISTRIBUTION}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {BLOOD_GROUP_DISTRIBUTION.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: isDarkMode ? '#1f2937' : '#ffffff',
                    border: isDarkMode ? '1px solid #374151' : '1px solid #e5e7eb',
                    borderRadius: '8px',
                    color: isDarkMode ? '#fff' : '#000'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </Card>
        </div>

        {/* City Availability Heatmap */}
        <Card className={`${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} p-6 mb-8`}>
          <h3 className={`text-xl mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            City Blood Availability Heatmap
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={CITY_AVAILABILITY}>
              <CartesianGrid strokeDasharray="3 3" stroke={isDarkMode ? '#374151' : '#e5e7eb'} />
              <XAxis dataKey="city" stroke={isDarkMode ? '#9ca3af' : '#6b7280'} />
              <YAxis stroke={isDarkMode ? '#9ca3af' : '#6b7280'} />
              <Tooltip
                contentStyle={{
                  backgroundColor: isDarkMode ? '#1f2937' : '#ffffff',
                  border: isDarkMode ? '1px solid #374151' : '1px solid #e5e7eb',
                  borderRadius: '8px',
                  color: isDarkMode ? '#fff' : '#000'
                }}
              />
              <Legend />
              <Bar dataKey="available" stackId="a" fill="#22c55e" name="Available" />
              <Bar dataKey="low" stackId="a" fill="#eab308" name="Low Stock" />
              <Bar dataKey="critical" stackId="a" fill="#ef4444" name="Critical" />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        {/* Public API Access */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card className={`${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} p-6`}>
              <h3 className={`text-xl mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Public API Endpoints
              </h3>
              <div className="space-y-4">
                {API_ENDPOINTS.map((api, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg border ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'}`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge
                            variant="outline"
                            className={isDarkMode ? 'border-green-600 text-green-400' : 'border-green-500 text-green-600'}
                          >
                            {api.method}
                          </Badge>
                          <code className={`text-sm ${isDarkMode ? 'text-red-400' : 'text-red-600'}`}>
                            {api.endpoint}
                          </code>
                        </div>
                        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          {api.description}
                        </p>
                      </div>
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
              >
                <Code className="mr-2 h-5 w-5" />
                View Full API Documentation
              </Button>
            </Card>
          </div>

          <div>
            <Card className={`${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} p-6 mb-6`}>
              <h3 className={`text-xl mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Download Reports
              </h3>
              <div className="space-y-3">
                <Button
                  variant="outline"
                  className={`w-full justify-start ${isDarkMode ? 'border-gray-700 text-gray-300' : 'border-gray-300'}`}
                >
                  <Download className="mr-2 h-4 w-4" />
                  Monthly Report (PDF)
                </Button>
                <Button
                  variant="outline"
                  className={`w-full justify-start ${isDarkMode ? 'border-gray-700 text-gray-300' : 'border-gray-300'}`}
                >
                  <Download className="mr-2 h-4 w-4" />
                  Data Export (CSV)
                </Button>
                <Button
                  variant="outline"
                  className={`w-full justify-start ${isDarkMode ? 'border-gray-700 text-gray-300' : 'border-gray-300'}`}
                >
                  <Download className="mr-2 h-4 w-4" />
                  Analytics (JSON)
                </Button>
              </div>
            </Card>

            <Card className={`${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} p-6`}>
              <h3 className={`text-xl mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Data Freshness
              </h3>
              <div className="space-y-3">
                <div>
                  <div className={`flex justify-between text-sm mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    <span>Last Update</span>
                    <span className={isDarkMode ? 'text-green-400' : 'text-green-600'}>2 min ago</span>
                  </div>
                </div>
                <div>
                  <div className={`flex justify-between text-sm mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    <span>Update Frequency</span>
                    <span>Every 15 min</span>
                  </div>
                </div>
                <div>
                  <div className={`flex justify-between text-sm mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    <span>Data Accuracy</span>
                    <span className={isDarkMode ? 'text-green-400' : 'text-green-600'}>98.7%</span>
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
