"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaDownload } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-primary text-white dark:bg-dark-card py-4 sticky top-0 z-50 backdrop-blur-sm bg-opacity-95 dark:bg-opacity-95 shadow-md">
      <div className="container-custom flex justify-between items-center">
        <Link href="/" className="font-montserrat font-bold text-2xl flex items-center">
          <span className="mr-2 text-lg">🧠</span> Blackcode Research
        </Link>

        {/* Mobile menu button */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden text-white focus:outline-none"
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link href="/" className="hover:text-secondary transition duration-200 flex items-center">
            <span className="mr-1">🏠</span> Home
          </Link>
          <Link href="/features" className="hover:text-secondary transition duration-200 flex items-center">
            <span className="mr-1">⚡</span> Features
          </Link>
          <Link href="/mcps" className="hover:text-secondary transition duration-200 flex items-center">
            <span className="mr-1">🔌</span> MCPs
          </Link>
          <Link href="/use-cases" className="hover:text-secondary transition duration-200 flex items-center">
            <span className="mr-1">💼</span> Use Cases
          </Link>
          <Link href="/pricing" className="hover:text-secondary transition duration-200 flex items-center">
            <span className="mr-1">💰</span> Pricing
          </Link>
          <Link href="/docs" className="hover:text-secondary transition duration-200 flex items-center">
            <span className="mr-1">📚</span> Docs
          </Link>
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <Link href="/download" className="btn-secondary ml-8 flex items-center">
            <FaDownload className="mr-2" /> Download
          </Link>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden absolute top-16 left-0 right-0 bg-primary dark:bg-dark-card p-4 border-t border-white/10`}>
          <div className="flex flex-col space-y-4">
            <Link href="/" className="hover:text-secondary transition duration-200 flex items-center">
              <span className="mr-2">🏠</span> Home
            </Link>
            <Link href="/features" className="hover:text-secondary transition duration-200 flex items-center">
              <span className="mr-2">⚡</span> Features
            </Link>
            <Link href="/mcps" className="hover:text-secondary transition duration-200 flex items-center">
              <span className="mr-2">🔌</span> MCPs
            </Link>
            <Link href="/use-cases" className="hover:text-secondary transition duration-200 flex items-center">
              <span className="mr-2">💼</span> Use Cases
            </Link>
            <Link href="/pricing" className="hover:text-secondary transition duration-200 flex items-center">
              <span className="mr-2">💰</span> Pricing
            </Link>
            <Link href="/docs" className="hover:text-secondary transition duration-200 flex items-center">
              <span className="mr-2">📚</span> Docs
            </Link>
            <Link href="/download" className="btn-secondary text-center flex items-center justify-center">
              <FaDownload className="mr-2" /> Download
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 