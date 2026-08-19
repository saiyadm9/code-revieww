import RequestOverviewCard from '@/components/requests/RequestOverviewCard'
import { footballData } from '@/data/statisticsData'

export default function RequestsOverview({sportsName}) {
  return (
    <section className='shadow-sm relative rounded-xl bg-surface p-4 overflow-hidden flex flex-col gap-8'>
      <div className='absolute rounded-t-xl rounded-b-md h-40 bg-primary/60 top-0 left-0 right-0'></div>
      
      <h2 className='relative text-white text-lg uppercase font-medium'>{sportsName} API</h2>

      <div className='relative grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4'>
        {footballData.map((item) => (
          <RequestOverviewCard key={item.id} data={item} />
        ))}
      </div>
    </section>
  )
}
