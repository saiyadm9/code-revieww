import ActivityItem from '@/components/dashboard/activity/ActivityItem'
import SmallButton from '@/components/ui/SmallButton'
import { activityData } from '@/data/dashboardData'

export default function ActivityCard() {
  
  return (
    <div className='overflow-x-auto col-span-1 xl:col-span-5 p-5 shadow-card border-border-gray bg-surface rounded-lg'>
      <div className='flex flex-col justify-between min-w-86'>
        <div>
          <h3 className='text-base mb-2'>Recent Activity</h3>
          <div className='flex flex-col gap-2'>
            {activityData.map((data, i) => (
              <ActivityItem key={i} data={data} />
            ))}
          </div>
        </div>
        <div className='p-2 mt-2 flex gap-2 lg:gap-6'>
          <div className='flex gap-2 items-center'>
            <div className='size-2 rounded-full bg-green-600'></div>
            <span className='text-xs'>Success</span>
          </div>

          <div className='flex gap-2 items-center'>
            <div className='size-2 rounded-full bg-red-600'></div>
            <span className='text-xs'>Error</span>
          </div>

          <div className='flex gap-2 items-center'>
            <div className='size-2 rounded-full bg-orange-400'></div>
            <span className='text-xs'>Rate Limit</span>
          </div>

          <div className='flex gap-2 items-center'>
            <div className='size-2 rounded-full bg-gray-600'></div>
            <span className='text-xs'>other</span>
          </div>
        </div>
      </div>
    </div>
  )
}
