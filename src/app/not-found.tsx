import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-light dark:bg-dark-bg">
      <div className="bg-white dark:bg-dark-card p-8 rounded-lg shadow-lg max-w-md w-full text-center">
        <h2 className="text-3xl font-bold text-primary mb-4">404</h2>
        <h3 className="text-xl font-semibold text-heading mb-6">Page Not Found</h3>
        <p className="text-body mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link href="/" className="bg-primary text-white py-2 px-6 rounded-md hover:bg-opacity-90 inline-block transition duration-200">
          Go Home
        </Link>
      </div>
    </div>
  )
} 