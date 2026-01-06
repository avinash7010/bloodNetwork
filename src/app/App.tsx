import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { LandingPage } from "./components/LandingPage";
import { SearchResults } from "./components/SearchResults";
import { BloodBankDashboard } from "./components/BloodBankDashboard";
import { OpenDataDashboard } from "./components/OpenDataDashboard";
import { EmergencyMode } from "./components/EmergencyMode";
import { Footer } from "./components/Footer";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState("home");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const renderScreen = () => {
    switch (currentScreen) {
      case "home":
        return <LandingPage onNavigate={setCurrentScreen} isDarkMode={isDarkMode} />;
      case "search-results":
        return <SearchResults isDarkMode={isDarkMode} />;
      case "dashboard":
        return <BloodBankDashboard isDarkMode={isDarkMode} />;
      case "open-data":
        return <OpenDataDashboard isDarkMode={isDarkMode} />;
      case "emergency":
        return <EmergencyMode isDarkMode={isDarkMode} />;
      default:
        return <LandingPage onNavigate={setCurrentScreen} isDarkMode={isDarkMode} />;
    }
  };

  return (
    <div className={isDarkMode ? 'dark bg-black min-h-screen' : 'bg-white min-h-screen'}>
      <Navigation
        currentScreen={currentScreen}
        onNavigate={setCurrentScreen}
        isDarkMode={isDarkMode}
        onToggleTheme={() => setIsDarkMode(!isDarkMode)}
      />
      {renderScreen()}
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}