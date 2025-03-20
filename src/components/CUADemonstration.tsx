"use client"

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaEye, FaBrain, FaMousePointer, FaCheck } from 'react-icons/fa';

const CUADemonstration = () => {
  const [step, setStep] = useState(0);
  
  const cuaSteps = [
    { 
      title: 'Observe',
      icon: <FaEye />,
      description: 'The AI captures a screenshot to understand what\'s on screen and the current state of the interface.',
      color: 'bg-blue-500'
    },
    { 
      title: 'Plan',
      icon: <FaBrain />,
      description: 'The AI analyzes the screenshot and determines what actions are needed to fulfill the request.',
      color: 'bg-purple-500'
    },
    { 
      title: 'Execute',
      icon: <FaMousePointer />,
      description: 'The AI performs the necessary actions, such as clicking, typing, or scrolling.',
      color: 'bg-green-500'
    },
    { 
      title: 'Verify',
      icon: <FaCheck />,
      description: 'The AI examines the result to ensure the action was successful and updates its understanding.',
      color: 'bg-orange-500'
    }
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prevStep) => (prevStep + 1) % cuaSteps.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="py-12 bg-neutral-light">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Computer Use Agent (CUA)</h2>
          <p className="text-xl max-w-3xl mx-auto">
            The AI assistant can directly interact with your computer interface using OpenAI's Computer Use Agent technology.
          </p>
        </div>
        
        <div className="relative">
          {/* Computer screen mockup */}
          <div className="bg-white rounded-lg shadow-xl overflow-hidden mx-auto max-w-4xl aspect-video p-4 border-2 border-gray-200">
            <div className="h-full bg-gray-100 rounded flex items-center justify-center">
              <div className="text-center">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center"
                >
                  <div className={`text-white text-4xl p-6 rounded-full ${cuaSteps[step].color} mb-4`}>
                    {cuaSteps[step].icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{cuaSteps[step].title}</h3>
                  <p className="max-w-md text-black dark:text-white">{cuaSteps[step].description}</p>
                </motion.div>
              </div>
            </div>
          </div>
          
          {/* CUA Loop diagram */}
          <div className="mt-12 flex justify-center">
            <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-4">
              {cuaSteps.map((cuaStep, index) => (
                <React.Fragment key={index}>
                  <div 
                    className={`w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center text-white text-xl
                    ${step === index ? cuaStep.color : 'bg-gray-300'} transition-colors duration-300`}
                  >
                    {cuaStep.icon}
                  </div>
                  {index < cuaSteps.length - 1 && (
                    <motion.div 
                      className="w-8 h-1 md:w-12 bg-gray-300"
                      animate={{ 
                        backgroundColor: step === index ? cuaSteps[index].color : '#D1D5DB'
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </React.Fragment>
              ))}
              <motion.div 
                className="hidden md:block h-1 w-12 bg-gray-300 ml-2"
                animate={{ 
                  backgroundColor: step === 3 ? cuaSteps[3].color : '#D1D5DB'
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.div 
                className="hidden md:block h-16 w-1 bg-gray-300"
                animate={{ 
                  backgroundColor: step === 3 ? cuaSteps[3].color : '#D1D5DB'
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.div 
                className="hidden md:block h-1 w-12 bg-gray-300"
                animate={{ 
                  backgroundColor: step === 3 ? cuaSteps[3].color : '#D1D5DB'
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.div 
                className="hidden md:block h-16 w-1 bg-gray-300"
                animate={{ 
                  backgroundColor: step === 3 ? cuaSteps[3].color : '#D1D5DB'
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.div 
                className="hidden md:block h-1 w-56 bg-gray-300 -mt-16"
                animate={{ 
                  backgroundColor: step === 3 ? cuaSteps[3].color : '#D1D5DB'
                }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        </div>
        
        <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-3 text-primary-blue">Security & Permissions</h3>
          <p className="mb-4">
            The Computer Use Agent operates with strict user permissions. You maintain full control over:
          </p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-secondary-orange mr-2">•</span>
              <span>Which applications the AI can access</span>
            </li>
            <li className="flex items-start">
              <span className="text-secondary-orange mr-2">•</span>
              <span>What actions the AI can perform</span>
            </li>
            <li className="flex items-start">
              <span className="text-secondary-orange mr-2">•</span>
              <span>When the AI can operate your computer</span>
            </li>
            <li className="flex items-start">
              <span className="text-secondary-orange mr-2">•</span>
              <span>The ability to instantly revoke permissions</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CUADemonstration; 