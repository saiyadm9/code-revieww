import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function PasswordInput({className, ...props}) {
  const [show, setShow] = useState(false);

  return (
    <div className={`relative ${className}`}>
      <input
        type={show ? "text" : "password"}
        className="w-full px-4 py-2.5 pr-12 text-muted outline-none rounded-md border-2 border-gray-500/20 "
        {...props}
      />

      <button
        type="button"
        onClick={() => setShow((prev) => !prev)}
        className="absolute inset-y-0 right-4 flex items-center text-gray-500 hover:text-gray-700"
      >
        {show ? <EyeOff size={18} /> : <Eye size={18} />}
      </button>
    </div>
  );
}