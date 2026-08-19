import { Icon } from '@iconify/react'

export default function SearchBox() {
  return (
    <div className='border-2 border-border-gray rounded-md px-2.5 py-1.5 hidden sm:flex sm:w-36 md:w-50 lg:w-65 xl:w-80'>
      <Icon icon={'ic:outline-search'} className='text-muted' width={20} />
      <input className='outline-none text-sm w-full pl-1' placeholder='Search here..'/>
    </div>
  )
}
