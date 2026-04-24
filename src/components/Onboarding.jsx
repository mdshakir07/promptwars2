import { useState } from 'react';

function Onboarding({ onSubmit }) {
  const [city, setCity] = useState('');
  const [state, setState] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() && state.trim()) {
      onSubmit({ city: city.trim(), state: state.trim() });
    }
  };

  return (
    <div className="glass-panel animate-fade-in" style={{ maxWidth: '600px', width: '100%', margin: '0 auto', textAlign: 'center', padding: '3rem 2rem' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
          Welcome to <span className="text-gradient">Civic Guide</span>
        </h2>
        <p className="text-muted" style={{ fontSize: '1.125rem', maxWidth: '80%' , margin: '0 auto' }}>
          I'm here to help you navigate the voting process so your voice can be heard. To give you the most accurate dates and registration steps, please enter your location.
        </p>
      </div>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
          <div className="input-group">
            <input 
              type="text" 
              className="input" 
              placeholder="Your City" 
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <input 
              type="text" 
              className="input" 
              placeholder="State or Province" 
              value={state}
              onChange={(e) => setState(e.target.value)}
              required
            />
          </div>
        </div>
        
        <button 
          type="submit" 
          className="btn btn-primary" 
          style={{ width: '100%', padding: '1rem', fontSize: '1.125rem', marginTop: '1rem' }}
          disabled={!city.trim() || !state.trim()}
        >
          Get My Voting Roadmap
          <span style={{ fontSize: '1.2em' }}>→</span>
        </button>
      </form>
    </div>
  );
}

export default Onboarding;
