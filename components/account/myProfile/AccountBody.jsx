import AccountMain from '@/components/account/myProfile/AccountMain'
import AccountSideInfo from '@/components/account/myProfile/AccountSideInfo'

export default function AccountBody() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-12 shadow-card bg-surface rounded-lg overflow-hidden'>
      <AccountSideInfo />
      <AccountMain />
    </div>
  )
}


