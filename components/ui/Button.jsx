import React from 'react'

export default function Button ({children, className = "", ...props}) {
  return (
    <button
      className={`border-2 border-border-gray px-3 py-1.5 rounded-md hover:bg-gray-200/10 ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
  