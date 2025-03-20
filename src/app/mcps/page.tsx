import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  FaFolder, FaEnvelope, FaCalendarAlt, FaClock, 
  FaMap, FaSearch, FaDatabase, FaGlobe, FaTerminal,
  FaTwitter, FaSpotify, FaLightbulb, FaMicrophone
} from 'react-icons/fa';

// MCP categories and details
const mcpCategories = [
  {
    name: "File System & Storage",
    description: "Connect AI to your files and storage systems",
    color: "bg-blue-500",
    icon: <FaFolder className="text-white" />,
    mcps: [
      {
        id: "filesystem",
        name: "Filesystem MCP",
        description: "Secure file operations with configurable access controls",
        icon: <FaFolder />,
      },
      {
        id: "google-drive",
        name: "Google Drive MCP",
        description: "Cloud storage access and search capabilities",
        icon: <FaFolder />,
      }
    ]
  },
  {
    name: "Productivity",
    description: "Enhance your workflow with email and calendar integration",
    color: "bg-green-500",
    icon: <FaCalendarAlt className="text-white" />,
    mcps: [
      {
        id: "gmail",
        name: "Gmail MCP",
        description: "Email management with auto authentication support",
        icon: <FaEnvelope />,
      },
      {
        id: "google-calendar",
        name: "Google Calendar MCP",
        description: "Calendar management and scheduling",
        icon: <FaCalendarAlt />,
      },
      {
        id: "time",
        name: "Time MCP",
        description: "Time and timezone conversion capabilities",
        icon: <FaClock />,
      }
    ]
  },
  {
    name: "Information Access",
    description: "Access and search information from various sources",
    color: "bg-purple-500",
    icon: <FaSearch className="text-white" />,
    mcps: [
      {
        id: "google-maps",
        name: "Google Maps MCP",
        description: "Location services, directions, and place details",
        icon: <FaMap />,
      },
      {
        id: "google-search",
        name: "Google Custom Search MCP",
        description: "Web search capabilities via Google Custom Search API",
        icon: <FaSearch />,
      },
      {
        id: "needle-ai",
        name: "Needle AI MCP",
        description: "Production-ready RAG (Retrieval-Augmented Generation)",
        icon: <FaDatabase />,
      },
      {
        id: "pinecone",
        name: "Pinecone MCP",
        description: "Vector database integration for advanced RAG",
        icon: <FaDatabase />,
      }
    ]
  },
  {
    name: "Web Automation",
    description: "Automate web interactions and command-line operations",
    color: "bg-indigo-500",
    icon: <FaGlobe className="text-white" />,
    mcps: [
      {
        id: "playwright",
        name: "Playwright MCP",
        description: "Advanced browser automation and web scraping",
        icon: <FaGlobe />,
      },
      {
        id: "windows-cli",
        name: "Windows CLI MCP",
        description: "Secure command-line access to Windows",
        icon: <FaTerminal />,
      }
    ]
  },
  {
    name: "Social & Media",
    description: "Connect to social media and entertainment platforms",
    color: "bg-pink-500",
    icon: <FaTwitter className="text-white" />,
    mcps: [
      {
        id: "twitter",
        name: "X/Twitter MCP",
        description: "Twitter API integration",
        icon: <FaTwitter />,
      },
      {
        id: "spotify",
        name: "Spotify MCP",
        description: "Music streaming service control",
        icon: <FaSpotify />,
      }
    ]
  },
  {
    name: "AI Enhancement",
    description: "Improve AI capabilities with specialized tools",
    color: "bg-yellow-500",
    icon: <FaLightbulb className="text-white" />,
    mcps: [
      {
        id: "sequential-thinking",
        name: "Sequential Thinking MCP",
        description: "Dynamic and reflective problem-solving",
        icon: <FaLightbulb />,
      },
      {
        id: "elevenlabs",
        name: "ElevenLabs MCP",
        description: "High-quality text-to-speech synthesis",
        icon: <FaMicrophone />,
      }
    ]
  }
];

export default function MCPsPage() {
  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-primary-blue text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Model Context Protocol (MCP)
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-center">
            Expand your AI assistant's capabilities with standardized connections to data sources and services
          </p>
        </div>
      </section>

      {/* MCP Explanation Section */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">What is an MCP?</h2>
            <p className="text-lg mb-6">
              Model Context Protocols (MCPs) are standardized connections between AI models and various 
              data sources or tools. They allow the Windows AI Assistant to safely and securely 
              interact with files, applications, web services, and other resources.
            </p>
            <div className="bg-neutral-light p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-3">Key Benefits:</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li className="flex items-start">
                  <span className="text-secondary-orange mr-2 font-bold">•</span>
                  <span><strong>Enhanced Capabilities:</strong> Extends what the AI can do beyond conversation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-orange mr-2 font-bold">•</span>
                  <span><strong>Secure Access:</strong> Granular permissions for each integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-orange mr-2 font-bold">•</span>
                  <span><strong>Standardized Interface:</strong> Consistent interaction patterns</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-orange mr-2 font-bold">•</span>
                  <span><strong>User Control:</strong> Enable or disable MCPs as needed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* MCP Directory */}
      <section className="py-16 bg-neutral-light">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">MCP Directory</h2>
          
          <div className="space-y-16">
            {mcpCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-full ${category.color} flex items-center justify-center`}>
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{category.name}</h3>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.mcps.map((mcp, mcpIndex) => (
                    <Link 
                      href={`/mcps/${mcp.id}`} 
                      key={mcpIndex}
                      className="bg-white rounded-lg shadow-md p-6 transition-transform hover:scale-105"
                    >
                      <div className="flex items-start gap-4">
                        <div className={`w-10 h-10 rounded-full ${category.color} flex items-center justify-center mt-1`}>
                          {mcp.icon}
                        </div>
                        <div>
                          <h4 className="text-lg font-bold mb-2">{mcp.name}</h4>
                          <p className="text-gray-600 text-sm">{mcp.description}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Integration Diagram */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8 text-center">How MCPs Connect</h2>
          
          <div className="max-w-4xl mx-auto bg-neutral-light p-8 rounded-lg">
            <div className="flex flex-col items-center">
              <div className="bg-primary-blue text-white rounded-full w-24 h-24 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold">AI Model</span>
              </div>
              
              <div className="h-16 w-1 bg-secondary-orange"></div>
              
              <div className="bg-neutral-dark text-white rounded-full w-24 h-24 flex items-center justify-center my-4">
                <span className="text-2xl font-bold">MCPs</span>
              </div>
              
              <div className="grid grid-cols-3 gap-8 mt-8">
                <div className="flex flex-col items-center">
                  <div className="h-16 w-1 bg-secondary-orange mb-4"></div>
                  <div className="bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center">
                    <FaFolder size={24} />
                  </div>
                  <p className="mt-2 text-center font-medium">Files</p>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="h-16 w-1 bg-secondary-orange mb-4"></div>
                  <div className="bg-green-500 text-white rounded-full w-16 h-16 flex items-center justify-center">
                    <FaGlobe size={24} />
                  </div>
                  <p className="mt-2 text-center font-medium">Web</p>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="h-16 w-1 bg-secondary-orange mb-4"></div>
                  <div className="bg-purple-500 text-white rounded-full w-16 h-16 flex items-center justify-center">
                    <FaDatabase size={24} />
                  </div>
                  <p className="mt-2 text-center font-medium">Services</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-secondary-orange text-white py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to explore MCPs?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Download the Windows AI Assistant and unlock the full potential of AI integration.
          </p>
          <a href="/download" className="bg-white text-secondary-orange font-bold py-3 px-8 rounded-md hover:bg-opacity-90 transition duration-200">
            Download Now
          </a>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 