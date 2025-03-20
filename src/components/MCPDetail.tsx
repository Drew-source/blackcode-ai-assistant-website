"use client"

import React from 'react';
import Image from 'next/image';

interface MCPDetailProps {
  id: string;
  name: string;
  description: string;
  icon: string;
  features: string[];
  permissions: string[];
  useCases: {
    title: string;
    description: string;
    image?: string;
  }[];
}

const MCPDetail = ({ id, name, description, icon, features, permissions, useCases }: MCPDetailProps) => {
  return (
    <div className="py-12">
      <div className="container-custom">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-primary-blue text-white p-8">
            <div className="flex items-center space-x-4">
              {icon && (
                <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full p-3">
                  <Image 
                    src={icon} 
                    alt={`${name} icon`} 
                    width={40} 
                    height={40}
                    className="text-primary-blue" 
                  />
                </div>
              )}
              <div>
                <h1 className="text-3xl font-bold">{name}</h1>
                <p className="text-lg opacity-90">{description}</p>
              </div>
            </div>
          </div>
          
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h2 className="text-xl font-bold mb-4 text-primary-blue">Key Features</h2>
                <ul className="space-y-2">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-secondary-orange mr-2">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h2 className="text-xl font-bold mb-4 text-primary-blue">Permissions Required</h2>
                <ul className="space-y-2">
                  {permissions.map((permission, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-secondary-orange mr-2">•</span>
                      <span>{permission}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h2 className="text-xl font-bold mb-4 text-primary-blue">Integration</h2>
                <div className="bg-neutral-light p-4 rounded-md">
                  <p className="text-sm mb-2 font-medium">Service Connection:</p>
                  <div className="flex items-center justify-center space-x-4 py-4">
                    <div className="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center text-white font-bold text-sm">
                      AI
                    </div>
                    <div className="w-24 h-0.5 bg-secondary-orange"></div>
                    <div className="w-16 h-16 bg-neutral-dark rounded-full flex items-center justify-center text-white font-bold text-sm">
                      MCP
                    </div>
                    <div className="w-24 h-0.5 bg-secondary-orange"></div>
                    <div className="w-16 h-16 bg-primary-teal rounded-full flex items-center justify-center text-white font-bold text-sm">
                      Service
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6 text-primary-blue">Example Use Cases</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {useCases.map((useCase, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-bold mb-2">{useCase.title}</h3>
                    <p style={{color: '#000'}} className="mb-4">{useCase.description}</p>
                    {useCase.image && (
                      <div className="rounded-md overflow-hidden bg-neutral-light h-40 flex items-center justify-center">
                        <span style={{color: '#000'}} className="text-sm">Screenshot: {useCase.title}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MCPDetail; 