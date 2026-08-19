const buttonTypes = {
  primary: "bg-primary/90 text-white hover:bg-primary",
  danger: "bg-red-500 text-white hover:bg-red-600",
  secondary: "bg-secondary text-white hover:bg-secondary/90",
  outline: "bg-transparent border border-primary text-primary hover:bg-primary/10",
  link: "bg-transparent text-primary underline hover:text-primary/90",
}

export default function ButtonPrimary({children, buttonType = "primary", className, ...props}) {
  return (
    <button
      className={`cursor-pointer rounded px-3 py-2 transition-colors duration-200 ${buttonTypes[buttonType]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
