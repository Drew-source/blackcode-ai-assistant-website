'use client'

import React from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-light dark:bg-dark-bg">
      <div className="bg-white dark:bg-dark-card p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Something went wrong!</h2>
        <p className="text-body mb-6">
          We're sorry, but there was an error loading this page.
        </p>
        <button
          onClick={() => reset()}
          className="bg-primary text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition duration-200"
        >
          Try again
        </button>
      </div>
    </div>
  )
} 