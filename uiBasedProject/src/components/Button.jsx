export default function Button({
    children,
    size = 'sm',
    className = '',
    ...props
    
}){
     const sizes = {
    sm: "px-4 py-3 text-sm",
    md: "px-20 py-2 text-sm",
    icon: "px-4 py-3 text-sm",
  };


return (
    <button className={`${sizes[size]} group flex bg-black rounded-sm text-white hover:bg-amber-300 transition  ${className}`} {...props}>{children}</button>
)}

