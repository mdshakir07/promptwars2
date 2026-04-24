import { useState } from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Onboarding from './components/Onboarding';
import Roadmap from './components/Roadmap';
import Timeline from './components/Timeline';
import RegistrationWizard from './components/RegistrationWizard';

function App() {
  const [locationData, setLocationData] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');

  const handleLocationSubmit = (data) => {
    setLocationData(data);
    // Auto-advance to registration tab once location is provided
    setActiveTab('registration');
  };

  const handleReset = () => {
    setLocationData(null);
    setActiveTab('overview');
  };

  return (
    <>
      <Header onReset={handleReset} showReset={!!locationData} />
      
      <main className="container flex-col" style={{ flex: 1, padding: '1rem 1.5rem', display: 'flex', flexDirection: 'column' }}>
        
        <NavBar 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          isLocationSet={!!locationData} 
        />

        <div style={{ width: '100%', margin: '0 auto', marginTop: '1rem' }}>
          {activeTab === 'overview' && (
            !locationData ? (
              <Onboarding onSubmit={handleLocationSubmit} />
            ) : (
              <div className="glass-panel animate-fade-in text-center" style={{ padding: '3rem' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
                  Location Set: <span className="text-gradient">{locationData.city}, {locationData.state}</span>
                </h2>
                <p className="text-muted" style={{ marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
                  Your guide is now configured for your specific location. Use the navigation tabs above to explore the registration process, key deadlines, and general voting steps.
                </p>
                <button className="btn btn-outline" onClick={handleReset}>Change Location</button>
              </div>
            )
          )}

          {activeTab === 'registration' && locationData && (
            <RegistrationWizard location={locationData} />
          )}

          {activeTab === 'timeline' && locationData && (
            <Timeline location={locationData} />
          )}

          {activeTab === 'voting-steps' && locationData && (
            <Roadmap location={locationData} />
          )}
        </div>
      </main>

      <footer className="text-center text-muted" style={{ padding: '2rem', fontSize: '0.875rem' }}>
        <p>Civic Guide is a non-partisan tool designed to help you navigate the voting process.</p>
      </footer>
    </>
  );
}

export default App;
