import SmallButton from '@/components/ui/SmallButton'
import { Icon } from '@iconify/react';
import { ArrowRight } from 'lucide-react'
import moment from 'moment';
import Link from 'next/link';

export default function SportsOverviewCard({sports}) {
  const {percentage, used, limit} = sports.usages;
  const sportsIcon = {
    "football" : {
      "icon" : "game-icons:soccer-ball",
      "color_bg": "bg-primary",
      "color_light" : "bg-light-primary",
      "color_text" : "text-primary",
      "link" : "/dashboard/football/requests",
    },
    "cricket" : {
      "icon" : "noto:cricket-game",
      "color_bg" : "bg-secondary",
      "color_light" : "bg-light-secondary",
      "color_text" : "text-secondary",
      "link" : "/dashboard/cricket/requests",
    },
  }
  // const time = moment(sports.resetDate).format('MM/DD/YYYY'); 
  const time = "31 August";

  return (
    <Link href={sportsIcon[sports.type].link} className='p-4 md:p-5 flex flex-wrap gap-3 md:gap-6 cursor-pointer bg-surface rounded-lg border border-border-gray shadow-card hover:shadow-md'>
      <div className=''>
        <div className={`${sportsIcon[sports.type].color_light} size-15 md:size-19 flex items-center justify-center rounded-full text-foreground`}>
          <Icon width={36} icon={sportsIcon[sports.type].icon} />
        </div>
      </div>

      <div className='flex-1 flex flex-col gap-3'>
        <div className='flex flex-wrap gap-2 justify-between items-center'>
          <div className='flex flex-wrap gap-3 items-center'>
            <h3 className='text-base md:text-lg'>{sports.name}</h3>
            <SmallButton>Active</SmallButton>
          </div>

          <div className='px-2 py-1.5 border border-border-gray rounded shadow-xs flex gap-1 items-center'>
            <Icon icon={"stash:data-date"} width={18} />
            <p className='text-muted text-xs'>Restart on {time}</p>
          </div>
        </div>

        <div className="flex items-end gap-3 ">
          <p className={`text-primary text-lg md:text-xl font-bold ${sportsIcon[sports.type].color_text}`}>{percentage}%</p>
          <p>Used</p>
        </div>

        <div className="w-full h-2 bg-gray-400/30 rounded-full">
          <div 
            className={`${sportsIcon[sports.type].color_bg} h-full bg-primary rounded-full`}
            style={{ width: `${percentage}%` }}
          >
          </div>
        </div>

        <div className='flex flex-wrap justify-between'>
          <p>{used}/{limit}</p>
          <button className='flex items-center gap-2 text-primary'>
            <p className='text-inherit'>View Details</p>
            <ArrowRight size={16}/>
          </button>
        </div>
      </div>
    </Link>
  )
}
