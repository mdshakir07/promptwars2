

function NavBar({ activeTab, setActiveTab, isLocationSet }) {
  const tabs = [
    { id: 'overview', label: 'Overview', icon: '🏠' },
    { id: 'registration', label: 'Registration', icon: '📖' },
    { id: 'timeline', label: 'Timeline', icon: '📅' },
    { id: 'voting-steps', label: 'Voting Steps', icon: '✅' }
  ];

  return (
    <nav className="nav-container animate-fade-in">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`nav-pill ${activeTab === tab.id ? 'active' : ''}`}
          onClick={() => setActiveTab(tab.id)}
          disabled={tab.id !== 'overview' && !isLocationSet}
        >
          <span style={{ fontSize: '1.1em' }}>{tab.icon}</span>
          {tab.label}
        </button>
      ))}
    </nav>
  );
}

export default NavBar;
