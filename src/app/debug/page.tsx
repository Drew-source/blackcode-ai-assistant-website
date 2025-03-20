export default function DebugPage() {
  return (
    <div className="p-8 bg-dark-bg text-white min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Debug Page</h1>
      <p className="mb-4">This is a simple diagnostic page to test if basic rendering works.</p>
      
      <div className="p-4 bg-dark-card rounded mb-4">
        <h2 className="text-xl mb-2">Current Stack:</h2>
        <ul className="list-disc pl-6">
          <li>Next.js</li>
          <li>React</li>
          <li>Tailwind CSS</li>
          <li>Framer Motion</li>
        </ul>
      </div>
      
      <div className="mt-6">
        <pre className="bg-dark-highlight p-4 rounded overflow-auto">
          {`
// Check if browser console shows any errors
// and click the following links to test routing

- Home: /
- Features: /features 
- Debug: /debug
          `}
        </pre>
      </div>
    </div>
  );
} 