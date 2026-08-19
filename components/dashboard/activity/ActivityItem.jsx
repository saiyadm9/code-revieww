import SmallButton from '@/components/ui/SmallButton'

export default function ActivityItem({data}) {
  return (
    <div className='grid grid-cols-12 place-items-center rounded-lg px-2 py-1.5 bg-gray-300/10'>
      <div className='col-span-3 place-self-start flex items-center gap-2 h-full'>
        <div className='size-2 rounded-full bg-green-600'></div>
        <p className='text-xs text-muted'>{data.time}</p>
      </div>
      <div className='col-span-2 place-self-start'>
        <SmallButton>{data.method}</SmallButton>
      </div>
      <p className='col-span-3 place-self-start text-sm truncate max-w-22 lg:max-w-24 font-semibold'>{data.endpoint}</p>
      <div className='col-span-2 place-self-end'>
        <SmallButton>{data.status}</SmallButton>
      </div>
      <p className='col-span-2 place-self-end text-xs text-muted'>{data.duration}</p>
    </div>
  )
}
