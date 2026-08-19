import QuickAction from '@/components/dashboard/quickAction/QuickAction'
import { quickActionData } from '@/data/dashboardData'

export default function QuickActionsCard() {
  return (
    <div className='p-5 shadow-card bg-surface rounded-lg'>
      <h3 className='text-base mb-2'>Quick Actions</h3>

      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4'>
        {quickActionData.map((data, i) => (
          <QuickAction key={i} data={data} />
        ))}
      </div>
    </div>
  )
}
