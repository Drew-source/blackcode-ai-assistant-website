"use client"

import React from 'react';
import Link from 'next/link';
import { FaTwitter, FaLinkedin, FaGithub, FaDiscord } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white dark:bg-dark-highlight py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="mr-2">🧠</span> Blackcode Research
            </h3>
            <p className="text-sm mb-4 dark:text-dark-muted">
              Developing advanced AI integration tools that connect multiple AI models with real-world systems.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-secondary transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-secondary transition-colors">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-white hover:text-secondary transition-colors">
                <FaGithub size={20} />
              </a>
              <a href="#" className="text-white hover:text-secondary transition-colors">
                <FaDiscord size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center">
              <span className="mr-2">🚀</span> Product
            </h4>
            <ul className="space-y-2">
              <li><Link href="/features" className="hover:text-secondary transition-colors">Features</Link></li>
              <li><Link href="/mcps" className="hover:text-secondary transition-colors">MCPs</Link></li>
              <li><Link href="/use-cases" className="hover:text-secondary transition-colors">Use Cases</Link></li>
              <li><Link href="/pricing" className="hover:text-secondary transition-colors">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center">
              <span className="mr-2">📚</span> Resources
            </h4>
            <ul className="space-y-2">
              <li><Link href="/docs" className="hover:text-secondary transition-colors">Documentation</Link></li>
              <li><Link href="/blog" className="hover:text-secondary transition-colors">Blog</Link></li>
              <li><Link href="/faq" className="hover:text-secondary transition-colors">FAQ</Link></li>
              <li><Link href="/support" className="hover:text-secondary transition-colors">Support</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center">
              <span className="mr-2">🏢</span> Company
            </h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-secondary transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-secondary transition-colors">Contact</Link></li>
              <li><Link href="/privacy" className="hover:text-secondary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-secondary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm dark:text-dark-muted">
          <p>&copy; {new Date().getFullYear()} Blackcode Research. All rights reserved. Made with ❤️ for AI enthusiasts.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 