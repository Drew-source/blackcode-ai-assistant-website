export default function TestPage() {
  return (
    <div className="p-8 bg-dark-bg text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Windows AI Assistant</h1>
      
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-secondary">About the Product</h2>
          <p className="mb-4">
            The Windows AI Assistant is a desktop application that integrates multiple AI models 
            and connects them to real-world systems through Model Context Protocol (MCP).
          </p>
          <p>
            Key features include Computer Use Agent (CUA) functionality and multi-provider AI integration.
          </p>
        </div>
        
        <div className="bg-dark-card p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4">MCP Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-dark-highlight rounded-lg">
              <h3 className="font-bold mb-2">File System & Storage</h3>
              <ul className="list-disc pl-6">
                <li>Filesystem MCP</li>
                <li>Google Drive MCP</li>
              </ul>
            </div>
            <div className="p-4 bg-dark-highlight rounded-lg">
              <h3 className="font-bold mb-2">Productivity</h3>
              <ul className="list-disc pl-6">
                <li>Gmail MCP</li>
                <li>Google Calendar MCP</li>
                <li>Time MCP</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <a href="/debug" className="bg-primary px-6 py-3 rounded-lg inline-block">
            Go to Debug Page
          </a>
        </div>
      </div>
    </div>
  );
} 