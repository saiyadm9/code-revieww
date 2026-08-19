import { Icon } from '@iconify/react'

export default function SearchBoxInput({
    className,
    type = "text",
    placeholder="Search here...",
    ...props
  }) {
  return (
    <div className={`w-xs relative ${className}`}>
      <input 
        className={`
          text-muted
          w-full
          outline-none
          rounded-lg
          p-2
          pr-8
          border-2
          border-border-gray 
        `} 
        placeholder={placeholder}
        type={type}
        {...props}
      />
      <Icon 
        className='absolute top-1/2 -translate-y-1/2 right-3 text-muted'
        icon="ic:twotone-search"
        width={22} 
      />
    </div>
  )
}
