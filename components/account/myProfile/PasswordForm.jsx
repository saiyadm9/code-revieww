import PasswordInput from '@/components/account/myProfile/PasswordInput'
import ButtonPrimary from '@/components/ui/ButtonPrimary'
import { Icon } from '@iconify/react'

export default function PasswordForm() {
  return (
    <form className="max-w-3xl">
      <div className="py-10">
        <div className="flex gap-4 mb-6 items-center">
          <div className="size-7 bg-light-primary rounded-lg  flex items-center justify-center">
            <Icon width={18} icon={"mdi:password-outline"} />
          </div>
          <p className="text-base font-semibold ">Change Password</p>
        </div>

        <div className="grid gap-8 grid-cols-12">
          <label  className="col-span-4 text-muted text-sm font-medium">Current Password</label >
          <PasswordInput className={"col-span-8"}/>

          <label  className="col-span-4 text-muted text-sm font-medium">New Password</label >
          <PasswordInput className={"col-span-8"}/>

          <label  className="col-span-4 text-muted text-sm font-medium">Verify Password</label >
          <PasswordInput className={"col-span-8"}/>
          
          <div className='col-span-4'></div>
          <ButtonPrimary className="col-span-3">Change Password</ButtonPrimary>
        </div>
      </div>
    </form>    
  )
}
