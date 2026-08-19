"use client"
import { Icon } from '@iconify/react'
import React, { useEffect, useState } from 'react'

export default function AccessHeader() {
  const apiKey = "sdfsdfsdffffffffsdfsdfsdfsdfsdfdsdffffffff";
  const[copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      if(copied) return;
      await navigator.clipboard.writeText(apiKey);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };


  return (
    <div className='p-6 border-b-2 border-b-border-gray flex gap-4 items-center justify-between flex-wrap'>
      <div className='flex gap-4 items-center'>
        <div className='size-12 text-primary bg-primary/10 rounded-lg flex justify-center items-center'>
          <Icon width={26} icon={"at-icons:key"} />
        </div>
        <div>
          <h2 className='text-xl'>My Access</h2>
          <p className='text-xs text-muted'>Api-Key and active subscriptions</p>
        </div>
      </div>

      <div className='flex gap-4 items-center flex-wrap'>
        <p className='text-sm font-semibold'>API KEY</p>
        <div className='border-2 border-border-gray rounded-lg px-4 py-2 inline-flex items-center gap-4'>
          <span className='text-xs text-foreground ransition-all duration-200 blur-xs hover:blur-none'>{apiKey}</span>
          <button>
            <Icon 
              onClick={copyToClipboard}
              className={`cursor-pointer ${copied ? 'text-success' : 'text-foreground'}`} 
              width={20} 
              icon={copied ? "tabler:check" : "tabler:copy"}
            />
          </button>
        </div>

        <button className='cursor-pointer inline-flex gap-2 items-center text-danger border-2 border-danger/40 rounded-lg px-4 py-2'>
          <Icon width={20} icon={"pepicons-pop:arrows-spin"} />
          <span className='text-xs font-semibold'>Reset My API Key</span>
        </button>
      </div>
    </div>
  )
}