"use client"

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const useCases = [
  {
    title: "Research Paper Analysis",
    emoji: "🔬",
    color: "bg-primary",
    description: "Quickly analyze scientific papers with the Google Scholar MCP and Sequential Thinking MCP",
    steps: [
      "Upload a research paper using the Filesystem MCP",
      "Ask questions about methodology and findings",
      "Get precise answers with citations via Sequential Thinking",
      "Generate summaries to share with colleagues"
    ],
    benefits: [
      "Save hours of reading and analysis time",
      "Ensure comprehensive understanding of complex papers",
      "Easily extract key insights and methodology details"
    ]
  },
  {
    title: "Email Inbox Management",
    emoji: "📧",
    color: "bg-accent-green",
    description: "Organize and prioritize emails with Gmail MCP and natural language commands",
    steps: [
      "Connect your Gmail account via the secure MCP",
      "Ask the AI to summarize important messages",
      "Draft professional responses for your review",
      "Organize emails into categories with smart filters"
    ],
    benefits: [
      "Reduce email overwhelm and achieve inbox zero",
      "Ensure timely responses to important communications",
      "Never miss critical information buried in long threads"
    ]
  },
  {
    title: "Meeting Preparation & Notes",
    emoji: "📅",
    color: "bg-accent-purple",
    description: "Prepare for meetings and capture notes with Calendar and Filesystem MCPs",
    steps: [
      "Ask the AI to gather relevant documents for upcoming meetings",
      "Generate agendas based on previous discussions",
      "Take voice notes during meetings that get transcribed",
      "Create and distribute meeting summaries automatically"
    ],
    benefits: [
      "Enter meetings fully prepared with all relevant context",
      "Maintain comprehensive meeting records without manual effort",
      "Ensure all participants have clear action items and takeaways"
    ]
  },
  {
    title: "Web Research & Summarization",
    emoji: "🌐",
    color: "bg-primary-teal",
    description: "Conduct comprehensive web research with Google Search and Playwright MCPs",
    steps: [
      "Define your research question in natural language",
      "Let the AI search the web for relevant information",
      "Analyze multiple sources for comprehensive understanding",
      "Generate a structured research report with citations"
    ],
    benefits: [
      "Get the depth of human research with AI efficiency",
      "Avoid bias by analyzing multiple perspectives",
      "Save hours of manual searching and reading"
    ]
  },
  {
    title: "Document Creation & Editing",
    emoji: "📝",
    color: "bg-secondary-orange",
    description: "Create and edit documents with CUA functionality and voice control",
    steps: [
      "Describe the document you need to create",
      "Let the AI draft it using appropriate formatting",
      "Review and request specific edits via voice",
      "Store and organize in your preferred system"
    ],
    benefits: [
      "Dramatically speed up document creation workflows",
      "Maintain consistent quality and style in all documents",
      "Edit hands-free while multitasking"
    ]
  },
  {
    title: "Data Analysis & Visualization",
    emoji: "📊",
    color: "bg-accent-yellow",
    description: "Analyze data and create visualizations using CUA and Sequential Thinking",
    steps: [
      "Connect to your data source or upload files",
      "Ask questions about your data in plain language",
      "Request specific types of visual representations",
      "Export findings and charts for presentations"
    ],
    benefits: [
      "No coding or query language knowledge required",
      "Discover insights through natural conversation",
      "Create professional visualizations without design skills"
    ]
  }
];

export default function UseCasesPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <main className="min-h-screen dark:bg-dark-bg">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-teal dark:from-dark-highlight dark:to-primary text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Use Cases <span className="text-secondary">✨</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-center">
            Discover how Windows AI Assistant transforms your workflows and supercharges productivity
          </p>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                className="card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                variants={fadeInUp}
              >
                <div className={`${useCase.color} p-4 flex items-center space-x-4`}>
                  <div className="w-12 h-12 bg-white dark:bg-dark-bg rounded-full flex items-center justify-center text-2xl">
                    {useCase.emoji}
                  </div>
                  <h3 className="text-white text-xl font-bold">{useCase.title}</h3>
                </div>
                
                <div className="p-6">
                  <p className="mb-6 text-neutral-dark dark:text-dark-text">
                    {useCase.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-bold mb-3 text-neutral-dark dark:text-dark-text flex items-center">
                      <span className="mr-2">🔄</span> Workflow
                    </h4>
                    <ol className="space-y-2 pl-6 list-decimal text-neutral-dark dark:text-dark-muted">
                      {useCase.steps.map((step, stepIndex) => (
                        <li key={stepIndex}>{step}</li>
                      ))}
                    </ol>
                  </div>
                  
                  <div>
                    <h4 className="font-bold mb-3 text-neutral-dark dark:text-dark-text flex items-center">
                      <span className="mr-2">🌟</span> Benefits
                    </h4>
                    <ul className="space-y-2 pl-6 list-disc text-neutral-dark dark:text-dark-muted">
                      {useCase.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-dark-card">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4 dark:text-dark-text">
            Ready to transform your workflow? <span className="text-accent-green">🚀</span>
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto dark:text-dark-muted">
            Download the Windows AI Assistant today and experience these use cases firsthand
          </p>
          <a href="/download" className="bg-primary text-white font-bold py-3 px-8 rounded-md hover:bg-opacity-90 transition duration-200 inline-flex items-center">
            <span className="mr-2">⚡</span> Download Now
          </a>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 