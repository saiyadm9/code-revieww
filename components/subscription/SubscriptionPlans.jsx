"use client"
import SubscriptionPlanCard from '@/components/subscription/SubscriptionPlanCard';
import { subscriptionData } from '@/data/statisticsData'
import { Icon } from '@iconify/react';
import React, { useState } from 'react'
const pricing = [
  {
    "id" : 1,
    "plan" : "1 Month",
  },
  {
    "id" : 2,
    "plan" : "2 Month",
  },
  {
    "id" : 3,
    "plan" : "3 Month",
  },
  {
    "id" : 4,
    "plan" : "4 Month",
  },
]

const data = [
  {
    "id" : "1",
    "title" : "Cancel Anytime",
    "subtitle" : "No contracts. Cancel at any time.",
    "icon" : "tdesign:secured",
  },
  {
    "id" : "2",
    "title" : "Secure Payments",
    "subtitle" : "Your payments are 100% scure.",
    "icon" : "mdi:secure-outline",
  },
  {
    "id" : "3",
    "title" : "24/7 Support",
    "subtitle" : "We're here tohelp you.",
    "icon" : "griddy-icons:customer-support",
  },
]

export default function SubscriptionPlans() {
  const[selectedMonth, setSelectedMonth] = useState(1);

  return (
    <div className='max-w-[1200px]  gap-4'>
      <div className='bg-surface border-border-gray grid grid-cols-2 sm:grid-cols-4 gap-1 shadow-card px-4 py-3 mx-auto rounded-xl xl:max-w-[1000px]'>
        {pricing.map((price) => (
          <button 
            key={price.id} 
            onClick={() => setSelectedMonth(price.id)} 
            className={`px-4 py-2.5 rounded-md w-full cursor-pointer hover:text-primary 
              ${price.id == selectedMonth ? 'bg-primary/90 text-gray-50 hover:bg-primary hover:text-white' : 'text-foreground'} `}
          >
            {price.plan}
          </button>
        ))}
      </div>
  
      <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mt-10'>
        {subscriptionData.map((plan) => (
           <SubscriptionPlanCard key={plan.id} plan={plan} />
        ))}
      </div>

      <div className='grid grid-cols-1 p-4 shadow-card bg-surface rounded-xl lg:place-items-center lg:grid-cols-3 mt-6 lg:divide-x divide-gray-200 divide-y lg:divide-y-0'>
        {data.map((item) => (
          <div key={item.id} className='flex p-4 items-center gap-4'>
            <Icon className='text-primary' width={34} icon={item.icon} />
            <div>
              <p className='font-bold text-sm mb-1'>{item.title}</p>
              <p className='text-xs'>{item.subtitle}</p>
            </div>
            <div className='w-1'></div>
            <div className='w-1'></div>
          </div>
        ))}
      </div>
    </div>
  )
}
