"use client";
import { useEffect, useRef, useState } from "react";
import { CalendarDays, ArrowRight, X} from "lucide-react";
import { Icon } from '@iconify/react'
import { changelogData } from "@/data/statisticsData";

export default function ChangeLogButton() {
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


  return (
    <div className="relative" ref={ref}>
      <button
        className='bg-surface cursor-pointer flex gap-2 items-center justify-center py-2 px-3 border-2 border-border-gray-strong/50 rounded-md hover:shadow-xs'
        onClick={() => setOpen(!open)}
      >
        <Icon className="text-foreground" icon={"stash:data-date"} width={18} />
        <span className='font-semibold text-xs text-muted'>ChangeLog</span>
        <span className='size-2 bg-green-600 rounded-full'></span>
      </button>

      <div
        className={`absolute right-0 top-14 w-[300px] rounded-lg bg-surface border border-border-gray shadow-card transition-all duration-200 origin-top-right ${
          open
            ? "scale-100 opacity-100 visible"
            : "scale-95 opacity-0 invisible"
        }`}
      >

        <div className="flex items-center justify-between px-6 py-3 border-b border-border-gray">
          <div className="flex items-center gap-3">
            <h2 className="text-lg font-semibold">
              Changelog
            </h2>
          </div>

          <button
            onClick={() => setOpen(false)}
            className="text-gray-500 hover:text-black"
          >
            <X size={18} />
          </button>
        </div>

        <div className="max-h-[400px] overflow-y-auto">
          {changelogData.map((item, index) => (
            <div
              key={index}
              className="group border-b border-border-gray px-6 py-3 last:border-none hover:bg-gray-300/10 transition"
            >
              <div className="flex justify-between gap-4">
                <div className="flex-1">
                  <div className="mb-1 flex items-center gap-2">
                    <span className="size-2 rounded-full bg-emerald-500"></span>
                    <span className="text-xs text-muted">
                      {item.date}
                    </span>
                  </div>

                  <h3 className="font-semibold text-sm">
                    {item.title}
                  </h3>

                  <p className="text-sm text-muted text-nowrap truncate overflow-hidden max-w-50">
                    {item.description}
                  </p>
                </div>

                {/* <ArrowRight
                  className="mt-1 text-gray-400 group-hover:translate-x-1 transition"
                  size={18}
                /> */}
              </div>
            </div>
          ))}
        </div>

        {/* <div className="flex justify-center border-t border-border-gray py-3">
          <button className="font-medium text-foreground hover:text-primary">
            View Full Changelog
          </button>
        </div> */}
      </div>
    </div>
  )
}