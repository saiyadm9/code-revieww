import AccessHeader from '@/components/account/myAccess/AccessHeader'
import AccessTable from '@/components/account/myAccess/AccessTable'

export default function MyAccessBody() {
  return (
    <div className='bg-surface shadow-card border border-border-gray rounded-lg'>
      <AccessHeader />
      <AccessTable />
    </div>
  )
}
