"use client";
import { Bell, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Notification() {
  const[unreadNofificationCount, setUnreadNofificationCount] = useState(3);
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);

    return () =>
      document.removeEventListener("mousedown", handleClick);
  }, []);

  function handleNotificationClick() {
    setUnreadNofificationCount(0);
    setOpen(!open);
  }

  return (
    <div className="sm:relative" ref={ref}>
      <div className="relative">
        {unreadNofificationCount !== 0 && <div className="absolute -top-1.5 -right-1 w-4 h-4 bg-[#246AF9] rounded-full flex justify-center items-center">
          <span className="text-[9px] text-white">3</span>
        </div>}
        <Bell onClick={handleNotificationClick} className="cursor-pointer text-muted" size={22} />
      </div>

      <div
        className={`absolute -right-2 top-14 w-[300px] rounded-lg bg-surface border border-border-gray shadow-card transition-all duration-200 origin-top-right 
          ${open
            ? "scale-100 opacity-100 visible"
            : "scale-95 opacity-0 invisible"
          }`}
        >

        <div className="flex items-center justify-between px-6 py-3 border-b border-border-gray">
          <div className="flex items-center gap-3">
            <h2 className="text-lg font-semibold">
              Notifications
            </h2>
          </div>

          <button
            onClick={() => setOpen(false)}
            className="text-gray-500 hover:text-black"
          >
            <X size={18} />
          </button>
        </div>

        <div className="max-h-[400px] min-h-[200px] flex items-center justify-center overflow-y-auto">
          <p className="px-6 py-3 text-muted">No new notifications</p>
        </div>
      </div>
    </div>
  )
}
