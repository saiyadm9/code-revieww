import { statistics } from '@/data/statisticsData'
import Statistic from '@/components/dashboard/statistics/Statistic'

export default function StatisticsCard() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4'>
      {statistics.map((statistic , i) => (
        <Statistic key={i} statistic={statistic} />
      ))}
    </div>
  )
}
