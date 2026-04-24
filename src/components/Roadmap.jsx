import { useState } from 'react';
import { getOfficialVotingLinks } from '../utils/states';

const getSteps = (links) => [
  {
    id: 'registration',
    title: 'Registration',
    icon: '📝',
    description: 'Am I eligible? How do I sign up? What is the deadline?',
    details: 'To vote, you must be a citizen and meet age requirements. Registration deadlines vary by state. Check your local election office website to register online or by mail.',
    actionLabel: 'Register at Vote.gov',
    actionLink: links.registration
  },
  {
    id: 'research',
    title: 'Research',
    icon: '🔍',
    description: 'Where can I see a sample ballot?',
    details: 'You can usually find a sample ballot on your state or county election website a few weeks before the election. This helps you research candidates and measures in advance.',
    actionLabel: 'Check Official State Info',
    actionLink: links.checkStatus
  },
  {
    id: 'vote',
    title: 'The Vote',
    icon: '🗳️',
    description: 'Early voting vs. Mail-in vs. Election Day.',
    details: 'Decide how you want to vote. Early voting lets you avoid lines. Mail-in voting is convenient but has strict deadlines. Election Day is the final opportunity to cast your ballot.',
    actionLabel: 'Find Polling Place',
    actionLink: links.whereToVote
  },
  {
    id: 'confirmation',
    title: 'Confirmation',
    icon: '✅',
    description: 'How do I track my ballot or find my polling place?',
    details: 'If voting by mail, most states offer a tracking tool online. If voting in person, use your state election site to locate your official polling place before you go.',
    actionLabel: 'Track Ballot on Vote.gov',
    actionLink: links.checkStatus
  }
];

function Roadmap({ location }) {
  const [activeStep, setActiveStep] = useState(null);
  const links = getOfficialVotingLinks(location.state);
  const steps = getSteps(links);

  return (
    <div className="glass-panel" style={{ padding: '2.5rem' }}>
      <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.75rem' }}>
        Voting Roadmap
      </h3>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {steps.map((step, index) => {
          const isActive = activeStep === step.id;
          return (
            <div 
              key={step.id}
              className={`animate-fade-in animate-stagger-${index + 1 > 3 ? 3 : index + 1}`}
              style={{ 
                background: isActive ? 'var(--color-surface-hover)' : 'var(--color-bg)',
                border: `1px solid ${isActive ? 'var(--border-light)' : 'var(--border-light)'}`,
                borderRadius: 'var(--radius-md)',
                padding: '1.5rem',
                cursor: 'pointer',
                transition: 'all var(--transition-fast)'
              }}
              onClick={() => setActiveStep(isActive ? null : step.id)}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ 
                    width: '40px', height: '40px', 
                    borderRadius: '50%', 
                    background: isActive ? 'var(--color-primary)' : 'var(--color-surface)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.25rem',
                    transition: 'all var(--transition-normal)'
                  }}>
                    {step.icon}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.125rem', margin: 0, color: isActive ? 'var(--color-text)' : 'var(--color-text-muted)' }}>
                      Step {index + 1}: {step.title}
                    </h4>
                    <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--color-text-muted)', marginTop: '0.25rem' }}>
                      {step.description}
                    </p>
                  </div>
                </div>
                <div style={{ transform: isActive ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform var(--transition-normal)' }}>
                  ▼
                </div>
              </div>
              
              {isActive && (
                <div className="animate-fade-in" style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-light)' }}>
                  <p style={{ lineHeight: '1.6' }}>{step.details}</p>
                  <a href={step.actionLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ marginTop: '1rem', display: 'inline-block', padding: '0.5rem 1rem', fontSize: '0.875rem' }}>
                    {step.actionLabel} ↗
                  </a>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Roadmap;
