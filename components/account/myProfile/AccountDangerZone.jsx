import ButtonPrimary from '@/components/ui/ButtonPrimary'
import { Icon } from '@iconify/react'
import React from 'react'

export default function AccountDangerZone() {
  return (
    <div className='py-10 flex gap-4 justify-between items-center flex-wrap'>
      <div className='text-red-600 bg-red-400/10 rounded-lg p-4 flex gap-4 items-center'>
        <div className='size-7 bg-red-600/20 rounded-full flex justify-center items-center'>
          <Icon width={30} icon={"uil:info"} />
        </div>
        <p className='text-inherit'>If you delete your account, all your data will be deleted and you will no longer have access to the APIs !</p>
      </div>

      <ButtonPrimary className={"bg-red-600"}>
        Delete my account
      </ButtonPrimary>
    </div>
  )
}
