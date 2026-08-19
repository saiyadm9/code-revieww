const typeMap = {
  "success" : "text-green-600 bg-green-600/10",
}

export default function SmallButton({
    children, 
    className,
    type = "success",
    point=false,
    ...props
  }) {
  return (
    <div 
      className={`inline-flex items-center gap-1.5 font-semibold text-xs px-1.5 py-1 rounded-md ${typeMap[type]} ${className}`}
      {...props}
    >
      {/* <span className=''></span> */}
      {point && <span className="h-2 w-2 rounded-full bg-green-600" />}
      {children}
    </div>
  )
}
