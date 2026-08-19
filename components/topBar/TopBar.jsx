import { Menu } from 'lucide-react'
import ToggleTheme from './ToggleTheme'
import Notification from '@/components/topBar/Notification'
import ChangeLogButton from '@/components/topBar/ChangeLogButton'
import SearchBox from '@/components/topBar/SearchBox'
import SearchBoxInput from '@/components/ui/SearchBoxInput'
import Breadcrumbs from '@/components/topBar/Breadcrumb'

export default function TopBar({setNavOpen, setMobileNavOpen}) {
  return (
    <div className='bg-surface sticky top-0 h-18 px-6 flex items-center justify-between shadow-xs lg:shadow-none z-10'>
      <div className='flex items-center gap-6'>
        <Menu onClick={() => setNavOpen(prev => !prev)} size={22} className='hidden lg:flex text-foreground cursor-pointer hover:text-primary' />
        <Menu onClick={() => setMobileNavOpen(true)} size={22} className='lg:hidden text-foreground cursor-pointer hover:text-primary' />
        <Breadcrumbs />
      </div>

      <div className='flex items-center gap-3 md:gap:4 xl:gap-8 lg:pr-4 relative'>
        <SearchBox />
        {/* <SearchBoxInput /> */}
        <ToggleTheme />
        <Notification />
        <ChangeLogButton />
      </div>
    </div>
  )
}
