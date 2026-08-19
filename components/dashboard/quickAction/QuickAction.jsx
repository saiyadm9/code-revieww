import StatusIconSmall from '@/components/ui/StatusIconSmall'
import { ArrowRight } from 'lucide-react'
const iconsColor = {
  "green" : "bg-green-300/10 text-green-700",
  "blue" : "bg-blue-300/10 text-blue-500",
  "purple" : "bg-purple-300/10 text-purple-500",
  "red" : "bg-red-300/10 text-red-700",
  "orange": "bg-orange-200/10 text-orange-700"
}

export default function QuickAction({data}) {
  return (
    <div className={`cursor-pointer flex justify-between items-center gap-2 ${iconsColor[data.color]} p-3 rounded-xl`}>
      <div className='flex items-center gap-2'>
        <StatusIconSmall color={data.color} icon={data.icon} />
        <div>
          <p className='text-xs text-inherit font-semibold'>{data.title}</p>
          <p className='text-xs text-muted'>{data.subtitle}</p>
          </div>
        </div>
      <ArrowRight size={18} />
    </div>
  )
}
