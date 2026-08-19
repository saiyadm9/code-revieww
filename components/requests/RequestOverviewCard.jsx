import StatusBar from '@/components/ui/StatusBar'
import { Icon } from '@iconify/react'

const colorMap = {
  "plan" : "green",
  "quota" : "orange",
  "requests" : "blue",
  "remaining" : "purple",
}

export default function RequestOverviewCard({data}) {
  const{icon, type, title, info, subtitle, usage, usage_text, percentage, quota_reset} = data;
  let bgColor = `bg-${colorMap[type]}-600`;
  let bgColorLite = `bg-${colorMap[type]}-600/10`;
  let textColor = `text-${colorMap[type]}-600`;

  return (
    <div className='flex flex-col border border-border-gray gap-6 rounded-xl shadow-card p-5 bg-surface'>
      <div className='flex gap-4'>
        <div className={`size-16 flex items-center justify-center rounded-full ${textColor} ${bgColorLite}`}>
          <Icon icon={icon} width={30}/>
        </div>
        <div className='flex flex-col gap-3.5'>
          <p className='font-bold text-xs uppercase'>{title}</p>
          <p className='font-extrabold text-2xl'>{info}</p>
          <p className='text-sm text-muted'>{subtitle}</p>
        </div>
      </div>

      <StatusBar color={bgColor} used={'20%'}/>

      {type != "quota" ? 
        <div className='flex justify-between'>
          <div className='flex items-end gap-1'>
            <p className='text-sm font-bold'>{usage}</p>
            <p className='text-xs font-medium'>{usage_text}</p>
          </div>
          <p className='text-sm font-bold'>{percentage}</p>
        </div>
      :
        <div className={`${textColor} flex gap-2 items-center`}>
          <Icon icon={"uiw:date"} width={16}/>
          <p className='text-inherit text-xs'>{quota_reset}</p>
        </div>
      }
    </div>
  )
}