import React from 'react';
import { FaWindows, FaDownload, FaKey, FaLock, FaQuestionCircle } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function DownloadPage() {
  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-primary-blue text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Download Windows AI Assistant
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-center">
            Get started with the most advanced AI integration tool for Windows
          </p>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-8 border-b">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-primary-blue text-white p-4 rounded-full">
                  <FaWindows size={40} />
                </div>
              </div>
              
              <h2 className="text-3xl font-bold text-center mb-4" style={{color: 'black'}}>Windows AI Assistant</h2>
              <p className="text-center mb-6" style={{color: 'black'}}>Version 1.0.3 | Released March 18, 2025</p>
              
              <div className="flex justify-center">
                <a 
                  href="#download" 
                  className="bg-secondary-orange text-white py-3 px-8 rounded-md font-bold flex items-center space-x-2 hover:bg-opacity-90 transition duration-200"
                >
                  <FaDownload />
                  <span>Download Now</span>
                </a>
              </div>
              
              <div className="mt-6 text-center text-sm" style={{color: 'black'}}>
                <p>Compatible with Windows 10 and Windows 11</p>
                <p>Requires 8GB RAM and 2GB free disk space</p>
              </div>
            </div>
            
            <div className="p-8">
              <h3 className="text-xl font-bold mb-4" style={{color: 'black'}}>Installation Instructions</h3>
              
              <ol className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="bg-primary-blue text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">1</span>
                  <div>
                    <p className="font-medium" style={{color: 'black'}}>Download the installer</p>
                    <p className="text-sm" style={{color: 'black'}}>Click the download button above to get the latest version.</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <span className="bg-primary-blue text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">2</span>
                  <div>
                    <p className="font-medium" style={{color: 'black'}}>Run the installer</p>
                    <p className="text-sm" style={{color: 'black'}}>Open the downloaded file and follow the installation wizard.</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <span className="bg-primary-blue text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">3</span>
                  <div>
                    <p className="font-medium" style={{color: 'black'}}>Log in or create an account</p>
                    <p className="text-sm" style={{color: 'black'}}>Use your Blackcode Research account or create a new one.</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <span className="bg-primary-blue text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">4</span>
                  <div>
                    <p className="font-medium" style={{color: 'black'}}>Set up your API keys</p>
                    <p className="text-sm" style={{color: 'black'}}>Add your API keys for Claude, OpenAI, and other services.</p>
                  </div>
                </li>
              </ol>
              
              <div className="bg-neutral-light p-6 rounded-lg">
                <h4 className="flex items-center font-bold mb-3" style={{color: 'black'}}>
                  <FaKey className="text-primary-blue mr-2" />
                  <span>API Key Requirements</span>
                </h4>
                <p className="mb-4 text-sm" style={{color: 'black'}}>
                  The Windows AI Assistant requires API keys for the following services:
                </p>
                <ul className="space-y-2 text-sm" style={{color: 'black'}}>
                  <li>• Anthropic (Claude) API key - Required</li>
                  <li>• OpenAI API key - Required for CUA functionality</li>
                  <li>• ElevenLabs API key - Optional, for voice capabilities</li>
                  <li>• Google API key - Optional, for Google-specific MCPs</li>
                </ul>
                <p className="mt-4 text-sm" style={{color: 'black'}}>
                  <a href="/docs/api-setup" className="text-primary-teal hover:underline flex items-center">
                    <FaQuestionCircle className="mr-1" />
                    <span>How to get your API keys</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Account & Security Section */}
      <section id="download" className="py-16 bg-neutral-light">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center" style={{color: 'black'}}>Account & Security</h2>
            
            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <div className="flex items-start">
                <div className="text-primary-blue mr-4 mt-1">
                  <FaLock size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3" style={{color: 'black'}}>Your Security Is Our Priority</h3>
                  <p className="mb-4" style={{color: 'black'}}>
                    The Windows AI Assistant is designed with security and privacy in mind:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-secondary-orange mr-2 font-bold">•</span>
                      <span style={{color: 'black'}}>All API keys are stored encrypted locally on your device</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary-orange mr-2 font-bold">•</span>
                      <span style={{color: 'black'}}>Permission-based MCP access with granular controls</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary-orange mr-2 font-bold">•</span>
                      <span style={{color: 'black'}}>CUA tools require explicit authorization for each application</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary-orange mr-2 font-bold">•</span>
                      <span style={{color: 'black'}}>Regular security updates and auditing</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-primary-blue">Free Trial</h3>
                <p className="mb-4" style={{color: 'black'}}>
                  Start with a 14-day free trial of the Professional plan. No credit card required.
                </p>
                <a href="#" className="btn-primary block text-center">Start Free Trial</a>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-primary-blue">Already Have an Account?</h3>
                <p className="mb-4" style={{color: 'black'}}>
                  Download the installer and log in with your existing credentials.
                </p>
                <a href="#" className="btn-secondary block text-center">Download Installer</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* System Requirements & Support */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6" style={{color: 'black'}}>System Requirements</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold mb-2" style={{color: 'black'}}>Operating System</h3>
                  <p style={{color: 'black'}}>Windows 10 (64-bit) or Windows 11</p>
                </div>
                
                <div>
                  <h3 className="font-bold mb-2" style={{color: 'black'}}>Processor</h3>
                  <p style={{color: 'black'}}>Intel Core i5 or equivalent (2.0 GHz or higher)</p>
                </div>
                
                <div>
                  <h3 className="font-bold mb-2" style={{color: 'black'}}>Memory</h3>
                  <p style={{color: 'black'}}>8GB RAM minimum, 16GB recommended</p>
                </div>
                
                <div>
                  <h3 className="font-bold mb-2" style={{color: 'black'}}>Storage</h3>
                  <p style={{color: 'black'}}>2GB free disk space</p>
                </div>
                
                <div>
                  <h3 className="font-bold mb-2" style={{color: 'black'}}>Internet Connection</h3>
                  <p style={{color: 'black'}}>Broadband internet connection required</p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-6" style={{color: 'black'}}>Support Resources</h2>
              
              <div className="space-y-4">
                <a href="/docs" className="block p-4 border border-gray-200 rounded-lg hover:bg-neutral-light transition duration-200">
                  <h3 className="font-bold mb-1" style={{color: 'black'}}>Documentation</h3>
                  <p className="text-sm" style={{color: 'black'}}>Comprehensive guides, tutorials, and reference materials</p>
                </a>
                
                <a href="/faq" className="block p-4 border border-gray-200 rounded-lg hover:bg-neutral-light transition duration-200">
                  <h3 className="font-bold mb-1" style={{color: 'black'}}>Frequently Asked Questions</h3>
                  <p className="text-sm" style={{color: 'black'}}>Answers to common questions and issues</p>
                </a>
                
                <a href="/community" className="block p-4 border border-gray-200 rounded-lg hover:bg-neutral-light transition duration-200">
                  <h3 className="font-bold mb-1" style={{color: 'black'}}>Community Forum</h3>
                  <p className="text-sm" style={{color: 'black'}}>Connect with other users and share experiences</p>
                </a>
                
                <a href="/support" className="block p-4 border border-gray-200 rounded-lg hover:bg-neutral-light transition duration-200">
                  <h3 className="font-bold mb-1" style={{color: 'black'}}>Technical Support</h3>
                  <p className="text-sm" style={{color: 'black'}}>Contact our support team for personalized help</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 