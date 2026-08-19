import StatusIcon from '@/components/ui/StatusIcon'
import { MoveDown, MoveUp } from 'lucide-react'

export default function Statistic({statistic}) {
  let {title, data, increasing, color, changes, unit,  comparision, icon} = statistic;
  return (
    <div className='border border-border-gray shadow-card bg-surface gap-6 rounded-lg p-5'>
      <div className='flex items-center gap-4'>
        <StatusIcon color={color} icon={icon} />

        <div className='flex flex-col gap-1'>
          <p>{title}</p>
          <div className='flex gap-2 items-end'>
            <p className='font-bold text-lg md:text-xl'>{data} <span className='text-base font-semibold'>{unit}</span> </p>
            
            <div className={`flex gap-0.5 items-center ${increasing ? 'text-green-600' : 'text-red-600'}`}>
              {changes && (increasing ? <MoveUp size={10} /> : <MoveDown size={10} />)}
              <p className={`text-sm font-medium ${increasing ? 'text-green-600' : 'text-red-600'}`}>{changes}</p>
            </div>
          </div>
          <p className='text-xs'>{comparision}</p>
        </div>
      </div>
    </div>
  )
}
