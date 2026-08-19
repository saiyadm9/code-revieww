import ButtonPrimary from '@/components/ui/ButtonPrimary'
import CustomInput from '@/components/ui/CustomInput'
import { Icon } from '@iconify/react'
import React from 'react'

export default function AccountForm() {
  return (
    <form className="max-w-3xl">
      <div className="border-b border-gray-600/10 py-10">
        <div className="flex gap-4 mb-6 items-center">
          <div className="size-7 bg-light-primary rounded-lg  flex items-center justify-center">
            <Icon width={18} icon={"mdi:account-outline"} />
          </div>
          <p className="text-base font-semibold ">User Info</p>
        </div>

        <div className="grid gap-8 grid-cols-12">
          <label  className="col-span-4 text-muted text-sm font-medium">First Name</label >
          <CustomInput 
            className={"col-span-8"} 
            icon={"mdi:account-outline"} 
          />

          <label  className="col-span-4 text-muted text-sm font-medium">Last Name</label >
          <CustomInput 
            className={"col-span-8"} 
            icon={"mdi:account-outline"} 
          />
        </div>
      </div>

      <div className=" py-10">
        <div className="flex gap-4 mb-6 items-center">
          <div className="size-7 bg-light-primary rounded-lg  flex items-center justify-center">
            <Icon width={18} icon={"octicon:mail-16"} />
          </div>
          <p className="text-base font-semibold ">Contact Info</p>
        </div>

        <div className="grid gap-8 grid-cols-12">
          <label  className="col-span-4 text-muted text-sm font-medium">Email Address</label >
          <CustomInput 
            className={"col-span-8"} 
            icon={"mingcute:at-line"} 
          />

          <label  className="col-span-4 text-muted text-sm font-medium">Billing Address</label >
          <textarea 
            className="col-span-8 h-25 outline-none rounded-lg p-2 border-2 border-gray-600/10" 
            id="username" 
            name="username" 
            placeholder="123 Main St, City, State 12345"
          />

          <label  className="col-span-4 text-muted text-sm font-medium">Email Address</label >
          <select className="col-span-8 outline-none rounded-lg p-2 border-2 border-gray-600/10 " name="newsletter" id="newsletter">
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          <div className="col-span-4"></div>
          <div className="col-span-8 -mt-7 text-xs text-muted">*We won't spam your mailbox, we promise!</div>
          <div className="col-span-4"></div>
          <ButtonPrimary className="col-span-4 -mt-4">Save Change</ButtonPrimary>
        </div>

      </div>
    </form>    
  )
}
