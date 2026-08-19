import { Icon } from '@iconify/react'

export default function CustomInput({
    icon, 
    className,
    type = "text",
    ...props
  }) {
  return (
    <div className={`relative ${className}`}>
      <Icon 
        className='absolute top-1/2 -translate-y-1/2 left-3 text-foreground'
        icon={icon} 
        width={18} 
      />
      <input 
        className={`
          text-muted
          w-full
          outline-none
          rounded-lg
          py-2
          pl-8
          border-2
          border-gray-500/20 
        `} 
        type={type}
        {...props}
      />
    </div>
  )
}
