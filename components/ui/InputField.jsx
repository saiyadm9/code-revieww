

export default function InputField({
  className,
  type="text",
  ...props
}) {
  return (
    <input 
      className={`border border-gray-500/20 px-2.5 py-2.5 rounded-md outline-none w-full text-muted bg-gray-200/10 ${className}`} 
      type={type}
      {...props}
    />
  )
}

