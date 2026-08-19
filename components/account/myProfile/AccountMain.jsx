"use client"
import AccountDangerZone from "@/components/account/myProfile/AccountDangerZone";
import AccountForm from "@/components/account/myProfile/AccountForm";
import PasswordForm from "@/components/account/myProfile/PasswordForm";
import { Icon } from "@iconify/react";
import { useState } from "react";

const navData = [
  {
    "id" : "1",
    "name" : "Account",
    "type" : "account",
    "icon" : "mdi:account-outline",
    "color" : "",
  },
  {
    "id" : "2",
    "name" : "Password",
    "type" : "password",
    "icon" : "mdi:password-outline",
    "color" : "",
  },
  {
    "id" : "3",
    "name" : "Danger Zone",
    "type" : "danger_zone",
    "icon" : "jam:triangle-danger",
    "color" : "",
  }
]



export default function AccountMain() {
  const[activeType, setActiveType] = useState('account');
  const [position, setPosition] = useState("");

  function handleTabClick () {
    setActiveType(item.type)
  
  }

  return (
    <div className='col-span-9 p-8'>
      <div>
        <h2 className="text-2xl">Personal Information</h2>
        <p className="text-muted">Update your personal information and manage your account details.</p>
      </div>

      <div className='flex justify-between mt-4'>
        <div className='flex items-center lg:gap-4 border-b border-border-gray-strong overflow-auto'>
          {navData.map((item) => (
            <a 
              key={item.id}
              onClick={() => setActiveType(item.type)} 
              className={`
                text-nowrap 
                font-semibold 
                p-2 
                sm:p-3 
                lg:p-4 
                cursor-pointer 
                inline-flex 
                gap-1 
                sm:gap-2 
                items-center 
                border-b
                transition-all
                duration-500
                ${activeType === item.type 
                  ? 'border-primary text-primary' 
                  : 'border-transparent hover:border-primary hover:text-primary'
                }`
              }
            >
              <Icon width={18} icon={item.icon} />
              {item.name}
            </a>
          ))}
        </div>
      </div>
      
      {activeType === "account" && <AccountForm />}
      {activeType === "password" && <PasswordForm />}
      {activeType === "danger_zone" && <AccountDangerZone />}
    </div>
  )
}


