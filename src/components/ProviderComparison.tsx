"use client"

import React from 'react';
import { motion } from 'framer-motion';

const ProviderComparison: React.FC = () => {
  const providers = [
    {
      name: 'Anthropic (Claude)',
      logo: '/images/claude-logo.png', // Placeholder, would need actual logo
      strengths: [
        'Primary conversation AI',
        'Natural language understanding',
        'Complex reasoning',
        'Detailed responses',
        'MCP protocol integration'
      ],
      color: 'border-blue-500'
    },
    {
      name: 'OpenAI (GPT)',
      logo: '/images/openai-logo.png', // Placeholder, would need actual logo
      strengths: [
        'Computer vision',
        'UI control through CUA',
        'Specialized tasks',
        'Alternative reasoning engine'
      ],
      color: 'border-green-500'
    },
    {
      name: 'ElevenLabs',
      logo: '/images/elevenlabs-logo.png', // Placeholder, would need actual logo
      strengths: [
        'High-quality voice synthesis',
        'Voice recognition',
        'Multiple voice options',
        'Conversational voice API'
      ],
      color: 'border-purple-500'
    }
  ];

  return (
    <div className="py-12 bg-white dark:bg-dark-bg">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 dark:text-dark-text gradient-text">Multi-Provider AI Integration</h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-900 dark:text-gray-100">
            Windows AI Assistant combines the best capabilities from leading AI providers for a comprehensive experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {providers.map((provider, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`bg-white dark:bg-dark-card p-6 rounded-lg shadow-md border-t-4 ${provider.color}`}
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-neutral-light dark:bg-dark-highlight rounded-full flex items-center justify-center">
                  {/* This would be replaced with actual logos */}
                  <span className="font-bold text-gray-900 dark:text-gray-100">{provider.name.split(' ')[0]}</span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-center text-gray-900 dark:text-gray-100">{provider.name}</h3>
              
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Core Strengths:</h4>
              <ul className="space-y-2">
                {provider.strengths.map((strength, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-secondary-orange mr-2">•</span>
                    <span className="text-gray-800 dark:text-gray-200">{strength}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 bg-neutral-light dark:bg-dark-highlight p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100">Integration Architecture</h3>
          
          <div className="relative py-6">
            {/* Integration flow diagram */}
            <div className="flex flex-col md:flex-row justify-between items-center max-w-4xl mx-auto">
              <div className="flex flex-col items-center mb-8 md:mb-0">
                <div className="bg-white dark:bg-dark-card rounded-lg p-4 shadow-md mb-2 w-44">
                  <h4 className="font-bold text-center mb-1 text-gray-900 dark:text-gray-100">User Request</h4>
                  <p className="text-sm text-gray-800 dark:text-gray-200 text-center">Voice or text input</p>
                </div>
                <div className="h-8 w-0.5 bg-gray-300 dark:bg-gray-600 md:hidden"></div>
              </div>
              
              <div className="hidden md:block w-24 h-0.5 bg-gray-300 dark:bg-gray-600"></div>
              
              <div className="flex flex-col items-center mb-8 md:mb-0">
                <div className="bg-primary-blue text-white rounded-lg p-4 shadow-md mb-2 w-44">
                  <h4 className="font-bold text-center mb-1">Request Router</h4>
                  <p className="text-sm text-gray-100 text-center">Directs to optimal model</p>
                </div>
                <div className="h-8 w-0.5 bg-gray-300 dark:bg-gray-600 md:hidden"></div>
              </div>
              
              <div className="hidden md:block w-24 h-0.5 bg-gray-300 dark:bg-gray-600"></div>
              
              <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col items-center">
                  <div className="bg-blue-500 text-white rounded-lg p-2 shadow-md mb-2 w-24">
                    <h4 className="font-bold text-center text-xs">Claude</h4>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-green-500 text-white rounded-lg p-2 shadow-md mb-2 w-24">
                    <h4 className="font-bold text-center text-xs">GPT</h4>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-purple-500 text-white rounded-lg p-2 shadow-md mb-2 w-24">
                    <h4 className="font-bold text-center text-xs">ElevenLabs</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <h4 className="font-bold mb-3 text-gray-900 dark:text-gray-100">Benefits of Multi-Provider Approach:</h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="bg-white dark:bg-dark-card p-3 rounded shadow-sm flex items-start">
                <span className="text-secondary-orange mr-2 font-bold">•</span>
                <span className="text-gray-800 dark:text-gray-200">Leverages each provider's unique strengths</span>
              </li>
              <li className="bg-white dark:bg-dark-card p-3 rounded shadow-sm flex items-start">
                <span className="text-secondary-orange mr-2 font-bold">•</span>
                <span className="text-gray-800 dark:text-gray-200">Provides fallback mechanisms for reliability</span>
              </li>
              <li className="bg-white dark:bg-dark-card p-3 rounded shadow-sm flex items-start">
                <span className="text-secondary-orange mr-2 font-bold">•</span>
                <span className="text-gray-800 dark:text-gray-200">Ensures optimal performance for each task type</span>
              </li>
              <li className="bg-white dark:bg-dark-card p-3 rounded shadow-sm flex items-start">
                <span className="text-secondary-orange mr-2 font-bold">•</span>
                <span className="text-gray-800 dark:text-gray-200">Maintains context across different providers</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderComparison; 