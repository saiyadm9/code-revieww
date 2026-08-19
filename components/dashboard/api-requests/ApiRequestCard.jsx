import Statistic from '@/components/dashboard/statistics/Statistic'
import { statistics } from '@/data/statisticsData'

export default function ApiRequestCard() {
  return (
    <div className='col-span-2 bg-surface rounded-xl flex  flex-col gap-6 border border-border-gray shadow-sm p-6'>
      <h3 className='text-base'>Today's Statistics</h3>

      <div className='grid grid-cols-2 gap-6'>
        {statistics.map((statistic , i) => (
          <Statistic key={i} statistic={statistic} />
        ))}
      </div>
    </div>
  )
}
