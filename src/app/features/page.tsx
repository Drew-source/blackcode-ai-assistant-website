import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CUADemonstration from '@/components/CUADemonstration';
import ProviderComparison from '@/components/ProviderComparison';
import { FaPlug, FaMicrophone, FaRobot, FaBrain } from 'react-icons/fa';

export default function FeaturesPage() {
  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-primary-blue text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Features
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-center">
            The Windows AI Assistant combines multiple cutting-edge technologies to create a versatile cognitive extension tool.
          </p>
        </div>
      </section>

      {/* Feature Overview */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-primary-teal text-4xl mb-4">
                <FaPlug />
              </div>
              <h2 className="text-2xl font-bold mb-4">Model Context Protocol (MCP)</h2>
              <p className="mb-4">
                MCPs are standardized connections between AI models and data sources/tools that expand the capabilities of the assistant.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-secondary-orange mr-2">•</span>
                  <span>15+ specialized MCPs for different services</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-orange mr-2">•</span>
                  <span>Secure access with configurable permissions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-orange mr-2">•</span>
                  <span>Standardized interface for all integrations</span>
                </li>
              </ul>
              <div className="mt-6">
                <a href="/mcps" className="text-primary-teal font-semibold hover:underline">Learn more about MCPs →</a>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-primary-teal text-4xl mb-4">
                <FaRobot />
              </div>
              <h2 className="text-2xl font-bold mb-4">Computer Use Agent (CUA)</h2>
              <p className="mb-4">
                The Computer Use Agent enables the AI to directly interact with your computer interface through observation and action.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-secondary-orange mr-2">•</span>
                  <span>Screen observation and understanding</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-orange mr-2">•</span>
                  <span>Mouse and keyboard control</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-orange mr-2">•</span>
                  <span>Secure permission-based operation</span>
                </li>
              </ul>
              <div className="mt-6">
                <a href="#cua-section" className="text-primary-teal font-semibold hover:underline">Learn more about CUA →</a>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-primary-teal text-4xl mb-4">
                <FaBrain />
              </div>
              <h2 className="text-2xl font-bold mb-4">Multi-Provider AI</h2>
              <p className="mb-4">
                The assistant leverages multiple AI providers to combine their unique strengths for a comprehensive experience.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-secondary-orange mr-2">•</span>
                  <span>Anthropic (Claude) for conversation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-orange mr-2">•</span>
                  <span>OpenAI (GPT) for computer vision and UI control</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-orange mr-2">•</span>
                  <span>ElevenLabs for voice synthesis</span>
                </li>
              </ul>
              <div className="mt-6">
                <a href="#provider-section" className="text-primary-teal font-semibold hover:underline">Compare providers →</a>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-primary-teal text-4xl mb-4">
                <FaMicrophone />
              </div>
              <h2 className="text-2xl font-bold mb-4">Voice Interaction</h2>
              <p className="mb-4">
                Communicate naturally with the assistant through high-quality bidirectional voice capabilities.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-secondary-orange mr-2">•</span>
                  <span>ElevenLabs powered voice synthesis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-orange mr-2">•</span>
                  <span>Multiple voice options and customization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-orange mr-2">•</span>
                  <span>Voice activity detection for hands-free use</span>
                </li>
              </ul>
              <div className="mt-6">
                <a href="/voice" className="text-primary-teal font-semibold hover:underline">Voice interaction details →</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CUA Demonstration Section */}
      <section id="cua-section">
        <CUADemonstration />
      </section>
      
      {/* Provider Comparison Section */}
      <section id="provider-section">
        <ProviderComparison />
      </section>
      
      {/* Call to Action */}
      <section className="bg-secondary-orange text-white py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Experience the Power of AI Integration</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Download the Windows AI Assistant today to see how these features work together for a seamless experience.
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