import ApexChart from '@/components/graph/ApexChart'
import Intro from '@/components/dashboard/Intro'
import StatisticsCard from '@/components/dashboard/statistics/StatisticsCard'
import SportsOverviewSection from '@/components/dashboard/sportsOverview/SportsOverviewSection'
import ActivityCard from '@/components/dashboard/activity/ActivityCard'
import QuickActionsCard from '@/components/dashboard/quickAction/QuickActionsCard'

export default function page() {
  return (
    <div className="space-y-4">
      <Intro />
      
      <SportsOverviewSection />

      <StatisticsCard />

      <div className='grid gap-4 grid-cols-1 xl:grid-cols-12'>
        <ApexChart />
        <ActivityCard />
      </div>
      <QuickActionsCard />
    </div>
  )
}
