export default function MinimalPage() {
  return (
    <div style={{
      padding: '40px',
      maxWidth: '800px',
      margin: '0 auto',
      fontFamily: 'system-ui, sans-serif',
      color: 'white',
      backgroundColor: '#1A1C2A',
      minHeight: '100vh'
    }}>
      <h1 style={{fontSize: '32px', fontWeight: 'bold', marginBottom: '20px'}}>
        Minimal Test Page
      </h1>
      
      <p style={{marginBottom: '20px', lineHeight: 1.6}}>
        This is a minimal page with no dependencies on components, just plain HTML and inline styles.
        If this page renders but others don't, we have a component-specific issue.
      </p>
      
      <div style={{
        backgroundColor: '#252A41',
        padding: '20px',
        borderRadius: '8px',
        marginBottom: '20px'
      }}>
        <h2 style={{fontSize: '24px', fontWeight: 'bold', marginBottom: '10px'}}>
          Diagnostic Links
        </h2>
        <ul style={{paddingLeft: '20px'}}>
          <li style={{marginBottom: '8px'}}>
            <a href="/" style={{color: '#5D63FF'}}>Home Page</a>
          </li>
          <li style={{marginBottom: '8px'}}>
            <a href="/debug" style={{color: '#5D63FF'}}>Debug Page</a>
          </li>
          <li style={{marginBottom: '8px'}}>
            <a href="/test" style={{color: '#5D63FF'}}>Test Page</a>
          </li>
        </ul>
      </div>
      
      <div style={{marginTop: '40px', textAlign: 'center'}}>
        <p>
          Check browser console (F12) for any error messages
        </p>
      </div>
    </div>
  );
} 