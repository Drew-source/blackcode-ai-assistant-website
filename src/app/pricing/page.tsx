import React from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Pricing plan details
const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Try out basic features with limited usage",
    features: [
      { name: "Basic Claude AI Conversations", included: true },
      { name: "Basic MCP Access (3 MCPs included)", included: true },
      { name: "5 CUA Actions per day", included: true },
      { name: "Text-only interface", included: true },
      { name: "Community support", included: true },
      { name: "Full MCP Access", included: false },
      { name: "Unlimited CUA Actions", included: false },
      { name: "Voice Interface", included: false },
      { name: "Priority support", included: false },
      { name: "Custom MCPs", included: false },
    ],
    buttonText: "Get Started",
    highlight: false,
    buttonClass: "bg-neutral-dark hover:bg-opacity-90"
  },
  {
    name: "Professional",
    price: "$19.99",
    period: "per month",
    description: "Full access to all features for individual use",
    features: [
      { name: "Advanced Claude AI Conversations", included: true },
      { name: "Full MCP Access (All 15+ MCPs)", included: true },
      { name: "Unlimited CUA Actions", included: true },
      { name: "Voice Interface with multiple voices", included: true },
      { name: "Priority email support", included: true },
      { name: "Custom MCP definitions", included: true },
      { name: "Multiple AI profiles", included: true },
      { name: "Data export capabilities", included: true },
      { name: "1 Custom Voice Model", included: true },
      { name: "Team collaboration", included: false },
    ],
    buttonText: "Subscribe Now",
    highlight: true,
    buttonClass: "bg-secondary-orange hover:bg-opacity-90"
  },
  {
    name: "Enterprise",
    price: "Contact Us",
    period: "custom plans",
    description: "Tailored solutions for teams and businesses",
    features: [
      { name: "All Professional features", included: true },
      { name: "Team collaboration", included: true },
      { name: "Dedicated account manager", included: true },
      { name: "Custom integration support", included: true },
      { name: "Advanced security features", included: true },
      { name: "User management", included: true },
      { name: "Usage analytics", included: true },
      { name: "SLA guarantees", included: true },
      { name: "Multiple Custom Voice Models", included: true },
      { name: "Private deployment options", included: true },
    ],
    buttonText: "Contact Sales",
    highlight: false,
    buttonClass: "bg-primary-blue hover:bg-opacity-90"
  }
];

export default function PricingPage() {
  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-primary-blue text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-center">
            Choose the plan that's right for you and start experiencing the power of AI integration
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div 
                key={index} 
                className={`rounded-lg shadow-lg overflow-hidden ${
                  plan.highlight ? 'border-4 border-secondary-orange transform scale-105' : 'border border-gray-200'
                }`}
              >
                <div className={`p-6 ${plan.highlight ? 'bg-secondary-orange text-white' : 'bg-white'}`}>
                  <h2 className="text-2xl font-bold mb-2">{plan.name}</h2>
                  <div className="flex items-end">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-sm ml-2 mb-1">/ {plan.period}</span>
                  </div>
                  <p className={`mt-3 ${plan.highlight ? 'text-white opacity-90' : 'text-gray-600'}`}>
                    {plan.description}
                  </p>
                </div>
                
                <div className="bg-white p-6">
                  <ul className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        {feature.included ? (
                          <FaCheck className="text-green-500 mr-3 flex-shrink-0" />
                        ) : (
                          <FaTimes className="text-ui-muted mr-3 flex-shrink-0" />
                        )}
                        <span className={feature.included ? 'text-body' : 'text-ui-muted'}>
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-8">
                    <a 
                      href={plan.name === "Enterprise" ? "/contact" : "/download"} 
                      className={`text-white py-3 px-6 rounded-md block text-center font-bold transition duration-200 ${plan.buttonClass}`}
                    >
                      {plan.buttonText}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQs Section */}
      <section className="py-16 bg-neutral-light">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-primary-blue">Can I change plans later?</h3>
              <p className="text-gray-600">
                Yes, you can upgrade or downgrade your plan at any time. Changes will take effect on your next billing cycle.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-primary-blue">What payment methods are accepted?</h3>
              <p className="text-gray-600">
                We accept all major credit cards, PayPal, and for Enterprise plans, we also accept wire transfers and purchase orders.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-primary-blue">Is there a free trial?</h3>
              <p className="text-gray-600">
                Yes, you can try the Professional plan for 14 days before being charged. No credit card required for the trial.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-primary-blue">Do you offer refunds?</h3>
              <p className="text-gray-600">
                We offer a 30-day money-back guarantee for all new Professional plan subscriptions.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-primary-blue">What's included in Full MCP Access?</h3>
              <p className="text-gray-600">
                Full MCP Access includes all 15+ Model Context Protocols, allowing the assistant to connect with all supported services and tools.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-primary-blue">What are CUA Actions?</h3>
              <p className="text-gray-600">
                Computer Use Agent (CUA) actions are operations where the AI controls your computer interface. This includes clicks, typing, and other interactions.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="py-16 bg-primary-blue text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Need a custom solution?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact our sales team to discuss enterprise plans, volume discounts, or specific requirements for your organization.
          </p>
          <a href="/contact" className="bg-white text-primary-blue font-bold py-3 px-8 rounded-md hover:bg-opacity-90 transition duration-200">
            Contact Sales
          </a>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 