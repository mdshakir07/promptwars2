import { useState } from 'react';
import { getOfficialVotingLinks } from '../utils/states';

function RegistrationWizard({ location }) {
  const [currentStep, setCurrentStep] = useState(0);
  const links = getOfficialVotingLinks(location?.state || '');

  const steps = [
    {
      title: 'Check Eligibility',
      icon: '✅',
      content: "First, make sure you meet the basic requirements. Generally, you must be a U.S. citizen, meet your state's residency requirements, and be 18 years old on or before Election Day."
    },
    {
      title: 'Gather Requirements',
      icon: '📄',
      content: "You will typically need a valid Driver's License, State ID, or your Social Security Number. Some states may also require proof of residence if registering for the first time."
    },
    {
      title: 'Check Deadlines',
      icon: '⏰',
      content: "Deadlines vary wildly by state. Some states allow Election Day registration, while others require you to register up to 30 days in advance. Don't wait until the last minute!"
    },
    {
      title: 'Submit Registration',
      icon: '🗳️',
      content: "You're ready! Click the button below to be securely directed to the official Vote.gov portal for your specific state to complete your registration.",
      action: {
        label: `Register for ${location?.state || 'Your State'} ↗`,
        link: links.registration
      }
    }
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const step = steps[currentStep];

  return (
    <div className="animate-fade-in" style={{ maxWidth: '700px', margin: '0 auto', display: 'flex', flexDirection: 'column', width: '100%' }}>
      
      {/* Headings OUTSIDE the card */}
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '2rem', color: 'var(--color-primary)' }}>Voter Registration Guide</h2>
        <p className="text-muted" style={{ marginTop: '0.5rem', fontSize: '1.1rem' }}>Step {currentStep + 1} of {steps.length}</p>
      </div>

      {/* The Card */}
      <div className="glass-panel" style={{ padding: '0', display: 'flex', flexDirection: 'column', minHeight: '400px', overflow: 'hidden' }}>
        
        {/* Progress Bar exactly at the top edge inside the card */}
        <div style={{ display: 'flex', gap: '4px', padding: '1rem 1.5rem 0 1.5rem' }}>
          {steps.map((_, index) => (
            <div key={index} style={{ height: '4px', flex: 1, background: 'var(--color-surface-hover)', borderRadius: '4px', overflow: 'hidden' }}>
              <div style={{ height: '100%', background: 'var(--color-primary)', width: index <= currentStep ? '100%' : '0%', transition: 'width var(--transition-normal)' }} />
            </div>
          ))}
        </div>

        {/* Card Content Area */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '3rem 2rem' }}>
          <div style={{ 
            width: '64px', height: '64px', 
            borderRadius: '50%', 
            background: 'var(--color-surface-hover)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '2rem',
            marginBottom: '1.5rem'
          }}>
            {step.icon}
          </div>
          
          <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>{step.title}</h3>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', maxWidth: '85%', lineHeight: '1.6' }}>
            {step.content}
          </p>

          {step.action && (
            <a 
              href={step.action.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary animate-fade-in" 
              style={{ marginTop: '2rem' }}
            >
              {step.action.label}
            </a>
          )}
        </div>

        {/* Footer Area with Buttons */}
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1.5rem', borderTop: '1px solid var(--border-light)', background: 'var(--color-bg)' }}>
          <button 
            onClick={handleBack} 
            style={{ visibility: currentStep === 0 ? 'hidden' : 'visible' }}
            className="btn btn-outline"
          >
            &lt; Back
          </button>
          <button 
            onClick={handleNext} 
            disabled={currentStep === steps.length - 1}
            className="btn btn-primary"
          >
            Next Step &gt;
          </button>
        </div>

      </div>
    </div>
  );
}

export default RegistrationWizard;
