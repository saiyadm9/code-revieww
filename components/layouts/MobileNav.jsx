import React from 'react'

export default function MobileNav({children}) {
  return (
    <div className='absolute z-50 inset-y-0 left-0'>
      {children}
    </div>
  )
}
