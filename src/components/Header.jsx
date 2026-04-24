

function Header({ onReset, showReset }) {
  return (
    <header style={{ borderBottom: '1px solid var(--border-light)', background: 'var(--color-bg)' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '64px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ width: '28px', height: '28px', borderRadius: '6px', background: 'var(--color-text)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-bg)', fontWeight: 'bold', fontSize: '1rem' }}>
            ✓
          </div>
          <h1 style={{ fontSize: '1.25rem', margin: 0, fontWeight: 600 }}>Civic Guide</h1>
        </div>
        
        {showReset && (
          <button 
            onClick={onReset}
            className="btn-outline"
            style={{ 
              padding: '0.4rem 0.8rem',
              borderRadius: 'var(--radius-md)',
              fontSize: '0.85rem'
            }}
          >
            Change Location
          </button>
        )}
      </div>
    </header>
  );
}

export default Header;
