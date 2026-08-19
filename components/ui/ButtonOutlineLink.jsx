import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

export default function ButtonOutlineLink({children, link = '#', ...props}) {
  return (
    <Link 
      href={link}
      className='bg-surface flex gap-1 items-center py-1.5 px-3 border-[2px] border-gray-100 rounded-md font-bold'
      {...props}
    >
      <span className='text-foreground text-sm font-semibold'>
        {children}
      </span> 
      <ChevronRight size={20}/> 
    </Link>
  )
}
