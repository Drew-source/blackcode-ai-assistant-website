"use client"

import React from 'react';
import { FaBrain, FaPlug, FaRobot, FaMicrophone } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function Home() {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <main className="min-h-screen dark:bg-dark-bg">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-teal dark:from-dark-highlight dark:to-primary text-white py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Windows AI Assistant <span className="text-secondary">✨</span>
              </h1>
              <p className="text-xl mb-8">
                The most advanced AI integration tool connecting multiple AI models with real-world systems for unprecedented cognitive extension. 🧠
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/download" className="btn-secondary text-center flex items-center justify-center">
                  <span className="mr-2">⚡</span> Download Now
                </a>
                <a href="/features" className="bg-white text-primary py-2 px-6 rounded-md hover:bg-opacity-90 transition duration-200 font-semibold text-center flex items-center justify-center dark:bg-dark-card">
                  <span className="mr-2">🔍</span> Explore Features
                </a>
              </div>
            </motion.div>
            <motion.div 
              className="hidden md:block"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {/* Placeholder for hero image */}
              <div className="bg-white bg-opacity-20 rounded-lg h-96 flex items-center justify-center p-4 dark:bg-dark-card dark:bg-opacity-50 shadow-xl">
                <span className="text-xl font-semibold">🤖 AI Assistant Interface</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 dark:bg-dark-bg">
        <div className="container-custom">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-4 dark:text-dark-text gradient-text"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.5 }}
          >
            Key Capabilities 🚀
          </motion.h2>
          <motion.p
            className="text-center text-lg mb-16 max-w-3xl mx-auto text-body"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Discover how Windows AI Assistant transforms your computer into a powerful AI-augmented workstation
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              className="card p-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              transition={{ duration: 0.3 }}
            >
              <div className="emoji-bg bg-primary mb-4">
                <FaPlug className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-heading">Model Context Protocol</h3>
              <p className="text-body">
                Connect AI to 15+ data sources and services with secure, standardized protocols. 🔌
              </p>
            </motion.div>
            
            <motion.div 
              className="card p-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <div className="emoji-bg bg-accent-purple mb-4">
                <FaRobot className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-heading">Computer Use Agent</h3>
              <p className="text-body">
                Allow AI to control your computer interface with OpenAI's advanced CUA technology. 🖱️
              </p>
            </motion.div>
            
            <motion.div 
              className="card p-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <div className="emoji-bg bg-accent-green mb-4">
                <FaBrain className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-heading">Multi-Provider AI</h3>
              <p className="text-body">
                Leverage Claude, GPT, and ElevenLabs models for specialized capabilities. 🧠
              </p>
            </motion.div>
            
            <motion.div 
              className="card p-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <div className="emoji-bg bg-accent-pink mb-4">
                <FaMicrophone className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-heading">Voice Interaction</h3>
              <p className="text-body">
                Communicate naturally with high-quality bidirectional voice capabilities. 🎙️
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MCP Overview Section */}
      <section className="py-20 dark:bg-dark-highlight">
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4 dark:text-dark-text gradient-text"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.5 }}
            >
              Model Context Protocol (MCP) 🔌
            </motion.h2>
            <motion.p 
              className="text-xl max-w-3xl mx-auto text-body"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Standardized connections between AI models and various data sources or tools, enabling powerful real-world interactions.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              className="card dark:border-accent-green/30"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-blue-500 p-4 flex items-center">
                <span className="text-2xl mr-3">📁</span>
                <h3 className="text-xl font-bold text-white">File System & Storage</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span className="text-body">Filesystem MCP</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span className="text-body">Google Drive MCP</span>
                  </li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div 
              className="card dark:border-accent-green/30"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <div className="bg-green-500 p-4 flex items-center">
                <span className="text-2xl mr-3">📧</span>
                <h3 className="text-xl font-bold text-white">Productivity</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span className="text-body">Gmail MCP</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span className="text-body">Google Calendar MCP</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span className="text-body">Time MCP</span>
                  </li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div 
              className="card dark:border-accent-green/30"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <div className="bg-purple-500 p-4 flex items-center">
                <span className="text-2xl mr-3">🔍</span>
                <h3 className="text-xl font-bold text-white">Information Access</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span className="text-body">Google Maps MCP</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span className="text-body">Google Custom Search MCP</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span className="text-body">Needle AI & Pinecone MCPs</span>
                  </li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div 
              className="card dark:border-accent-green/30"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <div className="bg-indigo-500 p-4 flex items-center">
                <span className="text-2xl mr-3">🌐</span>
                <h3 className="text-xl font-bold text-white">Web Automation</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span className="text-body">Playwright MCP</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span className="text-body">Windows CLI MCP</span>
                  </li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div 
              className="card dark:border-accent-green/30"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <div className="bg-pink-500 p-4 flex items-center">
                <span className="text-2xl mr-3">🐦</span>
                <h3 className="text-xl font-bold text-white">Social & Media</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span className="text-body">X/Twitter MCP</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span className="text-body">Spotify MCP</span>
                  </li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div 
              className="card dark:border-accent-green/30"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              <div className="bg-yellow-500 p-4 flex items-center">
                <span className="text-2xl mr-3">💡</span>
                <h3 className="text-xl font-bold text-white">AI Enhancement</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span className="text-body">Sequential Thinking MCP</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span className="text-body">ElevenLabs MCP</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
          
          <div className="text-center mt-12">
            <a href="/mcps" className="btn-primary inline-flex items-center">
              <span className="mr-2">📚</span> Learn More About MCPs
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-secondary-orange to-accent-yellow dark:from-accent-purple dark:to-primary text-dark-bg dark:text-white">
        <div className="container-custom text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.5 }}
          >
            Ready to get started? <span className="text-white dark:text-secondary">🚀</span>
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 max-w-2xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Download the Windows AI Assistant today and experience the next generation of AI integration.
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a href="/download" className="bg-white dark:bg-dark-card text-primary font-bold py-3 px-8 rounded-md hover:bg-opacity-90 transition duration-200 inline-flex items-center">
              <span className="mr-2">⚡</span> Download Now
            </a>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 