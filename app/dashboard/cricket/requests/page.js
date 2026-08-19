import DailyRequestGraph from '@/components/graph/DailyRequestGraph'
import MonthlyRequestGraph from '@/components/graph/MonthlyRequestGraph'
import RequestsOverview from '@/components/requests/RequestsOverview'

export default function page() {
  return (
    <div className='space-y-4'>
      <RequestsOverview sportsName={"CRICKET"}/>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
        <DailyRequestGraph />
        <MonthlyRequestGraph />
      </div>
    </div>
  )
}
