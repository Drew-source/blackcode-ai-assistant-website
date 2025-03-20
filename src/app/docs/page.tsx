"use client"

import React, { useState, ReactNode } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { 
  FaBook, FaRocket, FaTools, FaCode, FaLock, 
  FaMicrophone, FaKeyboard, FaSearch, FaQuestion, FaChevronDown 
} from 'react-icons/fa';

interface DocSectionProps {
  title: string;
  icon: React.ReactNode;
  children: ReactNode;
  initialOpen?: boolean;
}

const DocSection: React.FC<DocSectionProps> = ({ title, icon, children, initialOpen = false }) => {
  const [isOpen, setIsOpen] = useState(initialOpen);
  
  return (
    <div className="mb-6 border border-gray-200 dark:border-dark-highlight rounded-lg overflow-hidden">
      <button 
        className="w-full flex items-center justify-between p-4 bg-white dark:bg-dark-card text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center">
          <div className="text-primary dark:text-accent-purple mr-3">
            {icon}
          </div>
          <h3 className="text-lg font-bold dark:text-dark-text">{title}</h3>
        </div>
        <FaChevronDown className={`transition-transform duration-300 dark:text-dark-text ${isOpen ? 'transform rotate-180' : ''}`} />
      </button>
      
      <div 
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[800px]' : 'max-h-0'}`}
      >
        <div className="p-4 bg-neutral-light dark:bg-dark-highlight">
          {children}
        </div>
      </div>
    </div>
  );
};

interface DocLinkProps {
  href: string;
  emoji: string;
  title: string;
}

const DocLink: React.FC<DocLinkProps> = ({ href, emoji, title }) => (
  <Link 
    href={href} 
    className="flex items-center p-3 bg-white dark:bg-dark-card rounded-md mb-2 hover:shadow-md transition-shadow group"
  >
    <span className="mr-3 text-lg">{emoji}</span>
    <span className="dark:text-dark-text group-hover:text-primary dark:group-hover:text-accent-purple transition-colors">{title}</span>
  </Link>
);

export default function DocsPage() {
  return (
    <main className="min-h-screen dark:bg-dark-bg">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-teal dark:from-dark-highlight dark:to-primary text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Documentation <span className="text-secondary">📚</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-center">
            Everything you need to know about using the Windows AI Assistant
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-white dark:bg-dark-card rounded-lg shadow-md p-4">
                <h2 className="text-xl font-bold mb-4 dark:text-dark-text flex items-center">
                  <FaSearch className="mr-2" /> Quick Navigation
                </h2>
                <div className="space-y-2">
                  <Link href="#getting-started" className="block p-2 hover:bg-neutral-light dark:hover:bg-dark-highlight rounded dark:text-dark-text">
                    Getting Started
                  </Link>
                  <Link href="#mcps-docs" className="block p-2 hover:bg-neutral-light dark:hover:bg-dark-highlight rounded dark:text-dark-text">
                    MCP Documentation
                  </Link>
                  <Link href="#cua-docs" className="block p-2 hover:bg-neutral-light dark:hover:bg-dark-highlight rounded dark:text-dark-text">
                    Computer Use Agent
                  </Link>
                  <Link href="#api-reference" className="block p-2 hover:bg-neutral-light dark:hover:bg-dark-highlight rounded dark:text-dark-text">
                    API Reference
                  </Link>
                  <Link href="#security" className="block p-2 hover:bg-neutral-light dark:hover:bg-dark-highlight rounded dark:text-dark-text">
                    Security & Privacy
                  </Link>
                  <Link href="#voice" className="block p-2 hover:bg-neutral-light dark:hover:bg-dark-highlight rounded dark:text-dark-text">
                    Voice Interface
                  </Link>
                  <Link href="#troubleshooting" className="block p-2 hover:bg-neutral-light dark:hover:bg-dark-highlight rounded dark:text-dark-text">
                    Troubleshooting
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* Getting Started */}
                <section id="getting-started" className="mb-12">
                  <div className="flex items-center mb-6">
                    <div className="emoji-bg bg-primary text-white">
                      <FaRocket />
                    </div>
                    <h2 className="text-2xl font-bold ml-4 dark:text-dark-text">Getting Started</h2>
                  </div>
                  
                  <DocSection 
                    title="Installation Guide" 
                    icon={<FaBook />}
                    initialOpen={true}
                  >
                    <div className="space-y-4 dark:text-dark-text">
                      <p>
                        Welcome to Windows AI Assistant! Follow these simple steps to get started:
                      </p>
                      <ol className="list-decimal pl-5 space-y-2">
                        <li>Download the installer from the <Link href="/download" className="text-primary dark:text-accent-purple hover:underline">download page</Link></li>
                        <li>Run the installer and follow the on-screen instructions</li>
                        <li>Launch the application after installation</li>
                        <li>Sign in with your Blackcode Research account or create a new one</li>
                        <li>Follow the initial setup wizard to configure your API keys</li>
                      </ol>
                    </div>
                  </DocSection>
                  
                  <DocSection 
                    title="First Steps" 
                    icon={<FaRocket />}
                  >
                    <div className="space-y-4 dark:text-dark-text">
                      <p>
                        Once you've installed the Windows AI Assistant, here are some things to try:
                      </p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Try basic text commands like "Tell me about Blackcode Research"</li>
                        <li>Enable voice mode with the microphone button or "Enable voice" command</li>
                        <li>Access file explorer with "Show me my documents" to try the Filesystem MCP</li>
                        <li>Check the settings panel to customize your experience</li>
                      </ul>
                    </div>
                  </DocSection>
                  
                  <DocSection 
                    title="Video Tutorials" 
                    icon={<FaBook />}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <DocLink href="/docs/tutorials/installation" emoji="🎬" title="Installation Walkthrough" />
                      <DocLink href="/docs/tutorials/basic-commands" emoji="💬" title="Basic Commands Tutorial" />
                      <DocLink href="/docs/tutorials/mcp-setup" emoji="🔌" title="Setting Up Your First MCP" />
                      <DocLink href="/docs/tutorials/cua-basics" emoji="🖱️" title="Computer Use Agent Basics" />
                    </div>
                  </DocSection>
                </section>
                
                {/* MCP Documentation */}
                <section id="mcps-docs" className="mb-12">
                  <div className="flex items-center mb-6">
                    <div className="emoji-bg bg-accent-green text-white">
                      <FaTools />
                    </div>
                    <h2 className="text-2xl font-bold ml-4 dark:text-dark-text">MCP Documentation</h2>
                  </div>
                  
                  <DocSection 
                    title="What are MCPs?" 
                    icon={<FaQuestion />}
                  >
                    <div className="space-y-4 dark:text-dark-text">
                      <p>
                        Model Context Protocols (MCPs) are standardized connections between AI models and various 
                        data sources or tools. They allow the Windows AI Assistant to safely and securely 
                        interact with files, applications, web services, and other resources.
                      </p>
                      <p>
                        Each MCP has specific capabilities and security permissions that you can configure.
                      </p>
                    </div>
                  </DocSection>
                  
                  <DocSection 
                    title="Available MCPs" 
                    icon={<FaTools />}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <DocLink href="/docs/mcps/filesystem" emoji="📁" title="Filesystem MCP" />
                      <DocLink href="/docs/mcps/gmail" emoji="📧" title="Gmail MCP" />
                      <DocLink href="/docs/mcps/google-calendar" emoji="📅" title="Google Calendar MCP" />
                      <DocLink href="/docs/mcps/google-drive" emoji="☁️" title="Google Drive MCP" />
                      <DocLink href="/docs/mcps/time" emoji="⏰" title="Time MCP" />
                      <DocLink href="/docs/mcps/google-maps" emoji="🗺️" title="Google Maps MCP" />
                      <DocLink href="/docs/mcps/google-search" emoji="🔍" title="Google Search MCP" />
                      <DocLink href="/docs/mcps/needle-ai" emoji="🧠" title="Needle AI MCP" />
                      <DocLink href="/docs/mcps/playwright" emoji="🎭" title="Playwright MCP" />
                      <DocLink href="/docs/mcps/windows-cli" emoji="💻" title="Windows CLI MCP" />
                      <DocLink href="/docs/mcps/elevenlabs" emoji="🔊" title="ElevenLabs MCP" />
                      <DocLink href="/docs/mcps/sequential-thinking" emoji="🤔" title="Sequential Thinking MCP" />
                    </div>
                  </DocSection>
                  
                  <DocSection 
                    title="Custom MCPs" 
                    icon={<FaCode />}
                  >
                    <div className="dark:text-dark-text">
                      <p className="mb-4">
                        Advanced users can create custom MCPs to connect to additional services and data sources.
                        Check out our developer documentation for more information:
                      </p>
                      <DocLink href="/docs/mcps/custom/creating" emoji="⚙️" title="Creating Custom MCPs" />
                    </div>
                  </DocSection>
                </section>
                
                {/* Other sections would follow the same pattern */}
                <section id="cua-docs" className="mb-12">
                  <div className="flex items-center mb-6">
                    <div className="emoji-bg bg-accent-purple text-white">
                      <FaKeyboard />
                    </div>
                    <h2 className="text-2xl font-bold ml-4 dark:text-dark-text">Computer Use Agent</h2>
                  </div>
                  
                  <DocSection 
                    title="CUA Overview" 
                    icon={<FaBook />}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <DocLink href="/docs/cua/overview" emoji="👁️" title="How CUA Works" />
                      <DocLink href="/docs/cua/permissions" emoji="🔐" title="Security & Permissions" />
                      <DocLink href="/docs/cua/examples" emoji="💡" title="Example Use Cases" />
                      <DocLink href="/docs/cua/troubleshooting" emoji="🔧" title="Troubleshooting" />
                    </div>
                  </DocSection>
                </section>
                
                <section id="api-reference" className="mb-12">
                  <div className="flex items-center mb-6">
                    <div className="emoji-bg bg-primary-teal text-white">
                      <FaCode />
                    </div>
                    <h2 className="text-2xl font-bold ml-4 dark:text-dark-text">API Reference</h2>
                  </div>
                  
                  <DocSection 
                    title="API Documentation" 
                    icon={<FaCode />}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <DocLink href="/docs/api/authentication" emoji="🔑" title="API Authentication" />
                      <DocLink href="/docs/api/endpoints" emoji="🔌" title="API Endpoints" />
                      <DocLink href="/docs/api/libraries" emoji="📚" title="Client Libraries" />
                      <DocLink href="/docs/api/examples" emoji="📝" title="Code Examples" />
                    </div>
                  </DocSection>
                </section>
                
                <section id="security" className="mb-12">
                  <div className="flex items-center mb-6">
                    <div className="emoji-bg bg-secondary-orange text-white">
                      <FaLock />
                    </div>
                    <h2 className="text-2xl font-bold ml-4 dark:text-dark-text">Security & Privacy</h2>
                  </div>
                  
                  <DocSection 
                    title="Security Documentation" 
                    icon={<FaLock />}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <DocLink href="/docs/security/permissions" emoji="🔐" title="Permission Model" />
                      <DocLink href="/docs/security/data-handling" emoji="📊" title="Data Handling" />
                      <DocLink href="/docs/security/encryption" emoji="🔒" title="Encryption" />
                      <DocLink href="/docs/security/compliance" emoji="📋" title="Compliance" />
                    </div>
                  </DocSection>
                </section>
                
                <section id="voice" className="mb-12">
                  <div className="flex items-center mb-6">
                    <div className="emoji-bg bg-accent-pink text-white">
                      <FaMicrophone />
                    </div>
                    <h2 className="text-2xl font-bold ml-4 dark:text-dark-text">Voice Interface</h2>
                  </div>
                  
                  <DocSection 
                    title="Voice Documentation" 
                    icon={<FaMicrophone />}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <DocLink href="/docs/voice/setup" emoji="🎙️" title="Voice Setup" />
                      <DocLink href="/docs/voice/commands" emoji="🗣️" title="Voice Commands" />
                      <DocLink href="/docs/voice/customization" emoji="⚙️" title="Voice Customization" />
                      <DocLink href="/docs/voice/troubleshooting" emoji="🔧" title="Voice Troubleshooting" />
                    </div>
                  </DocSection>
                </section>
                
                <section id="troubleshooting" className="mb-12">
                  <div className="flex items-center mb-6">
                    <div className="emoji-bg bg-accent-yellow text-white">
                      <FaQuestion />
                    </div>
                    <h2 className="text-2xl font-bold ml-4 dark:text-dark-text">Troubleshooting & FAQs</h2>
                  </div>
                  
                  <DocSection 
                    title="Common Issues" 
                    icon={<FaQuestion />}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <DocLink href="/docs/troubleshooting/installation" emoji="⚠️" title="Installation Issues" />
                      <DocLink href="/docs/troubleshooting/connectivity" emoji="🌐" title="Connectivity Problems" />
                      <DocLink href="/docs/troubleshooting/mcp-errors" emoji="❌" title="MCP Error Messages" />
                      <DocLink href="/docs/troubleshooting/performance" emoji="⚡" title="Performance Optimization" />
                    </div>
                  </DocSection>
                </section>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Help CTA */}
      <section className="py-12 bg-dark-card">
        <div className="container-custom text-center">
          <h2 className="text-2xl font-bold mb-4 dark:text-dark-text">
            Need more help? <span className="text-accent-green">🤔</span>
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto dark:text-dark-muted">
            Reach out to our support team or join our community forum
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/support" className="bg-primary text-white py-3 px-6 rounded-md hover:bg-opacity-90 transition duration-200 inline-flex items-center justify-center">
              <span className="mr-2">💬</span> Contact Support
            </a>
            <a href="/community" className="bg-accent-purple text-white py-3 px-6 rounded-md hover:bg-opacity-90 transition duration-200 inline-flex items-center justify-center">
              <span className="mr-2">👪</span> Join Community
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 