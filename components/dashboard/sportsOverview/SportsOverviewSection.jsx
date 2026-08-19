import SportsOverviewCard from "@/components/dashboard/sportsOverview/SportsOverviewCard"
import { sportsData } from "@/data/statisticsData"



export default function SportsOverviewSection() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
      {sportsData.map((sports, i) => (
        <SportsOverviewCard key={i} sports={sports} />
      ))}
    </div>
  )
}
