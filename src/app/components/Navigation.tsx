import { Moon, Sun, Heart, Search, BarChart3, Database, AlertCircle, Home } from "lucide-react";
import { Button } from "./ui/button";
import { Switch } from "./ui/switch";

interface NavigationProps {
  currentScreen: string;
  onNavigate: (screen: string) => void;
  isDarkMode: boolean;
  onToggleTheme: () => void;
}

export function Navigation({ currentScreen, onNavigate, isDarkMode, onToggleTheme }: NavigationProps) {
  const menuItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "search-results", label: "Search", icon: Search },
    { id: "dashboard", label: "Dashboard", icon: BarChart3 },
    { id: "open-data", label: "Open Data", icon: Database },
    { id: "emergency", label: "Emergency", icon: AlertCircle },
  ];

  return (
    <nav className={`${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} border-b sticky top-0 z-50`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => onNavigate("home")}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <Heart className={`w-8 h-8 ${isDarkMode ? 'text-red-600' : 'text-red-500'} fill-current`} />
            <span className={`hidden sm:inline text-lg ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Open Blood Availability Network
            </span>
            <span className={`sm:hidden text-lg ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              OBAN
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentScreen === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                    isActive
                      ? isDarkMode
                        ? 'bg-red-950 text-red-400'
                        : 'bg-red-50 text-red-600'
                      : isDarkMode
                        ? 'text-gray-300 hover:bg-gray-800'
                        : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm">{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Theme Toggle */}
          <div className="flex items-center gap-3">
            <Sun className={`w-4 h-4 ${isDarkMode ? 'text-gray-500' : 'text-yellow-500'}`} />
            <Switch checked={isDarkMode} onCheckedChange={onToggleTheme} />
            <Moon className={`w-4 h-4 ${isDarkMode ? 'text-blue-400' : 'text-gray-400'}`} />
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-2 pb-4 overflow-x-auto">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentScreen === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors whitespace-nowrap ${
                  isActive
                    ? isDarkMode
                      ? 'bg-red-950 text-red-400'
                      : 'bg-red-50 text-red-600'
                    : isDarkMode
                      ? 'text-gray-300 hover:bg-gray-800'
                      : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="text-sm">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
