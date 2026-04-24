
import { getOfficialVotingLinks } from '../utils/states';

function Timeline({ location }) {
  // Mock dates for demonstration purposes
  const dates = [
    {
      label: 'Voter Registration Deadline',
      date: 'October 7, 2026',
      type: 'danger',
      details: 'Last day to register to vote online or by mail.'
    },
    {
      label: 'Mail-in Ballot Request Deadline',
      date: 'October 24, 2026',
      type: 'warning',
      details: 'Last day to request an absentee ballot be mailed to you.'
    },
    {
      label: 'Early Voting Begins',
      date: 'October 26, 2026',
      type: 'success',
      details: 'Polls open early. Find your local early voting center.'
    },
    {
      label: 'Election Day',
      date: 'November 3, 2026',
      type: 'primary',
      details: 'Polls are open from 7 AM to 8 PM.'
    }
  ];

  const getColor = (type) => {
    switch(type) {
      case 'danger': return 'var(--color-danger)';
      case 'warning': return 'var(--color-warning)';
      case 'success': return 'var(--color-success)';
      default: return 'var(--color-primary)';
    }
  };

  const links = getOfficialVotingLinks(location.state);

  return (
    <div className="glass-panel" style={{ padding: '2rem' }}>
      <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span>Key Dates for {location.state}</span>
        <a href={links.registration} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.875rem', fontWeight: 'normal', color: 'var(--color-primary)' }}>Verify on Vote.gov ↗</a>
      </h3>
      
      <div style={{ position: 'relative', paddingLeft: '2rem' }}>
        {/* Vertical line */}
        <div style={{ 
          position: 'absolute', 
          left: '0.5rem', 
          top: '1rem', 
          bottom: '1rem', 
          width: '2px', 
          background: 'var(--border-light)' 
        }} />
        
        {dates.map((item, index) => (
          <div key={index} className={`animate-fade-in animate-stagger-${index + 1 > 3 ? 3 : index + 1}`} style={{ position: 'relative', marginBottom: index === dates.length - 1 ? '0' : '2rem' }}>
            {/* Dot */}
            <div style={{ 
              position: 'absolute', 
              left: '-2rem', 
              top: '0.3rem', 
              width: '16px', 
              height: '16px', 
              borderRadius: '50%', 
              background: getColor(item.type),
              border: '3px solid var(--color-surface)'
            }} />
            
            <div style={{ background: 'var(--color-bg)', padding: '1.25rem 1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                <h4 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 600 }}>{item.label}</h4>
                <span style={{ 
                  color: getColor(item.type),
                  fontSize: '0.85rem', 
                  fontWeight: 600 
                }}>
                  {item.date}
                </span>
              </div>
              <p style={{ margin: 0, color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
                {item.details}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      <div style={{ marginTop: '2rem', textAlign: 'center' }}>
        <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', fontStyle: 'italic', maxWidth: '80%', margin: '0 auto' }}>
          *Note: These dates are general estimates. For absolute accuracy, always verify specific deadlines for your county via the official <a href={links.registration} target="_blank" rel="noopener noreferrer" style={{textDecoration: 'underline'}}>Vote.gov</a> website.
        </p>
      </div>
    </div>
  );
}

export default Timeline;
