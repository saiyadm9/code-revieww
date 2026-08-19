import { Icon } from "@iconify/react"


export default function QuotaAlertsHeader() {
  return (
    <div className='p-6 border-b-2 border-b-border-gray'>
      <div className='flex gap-4 items-center'>
        <div className='size-12 text-primary bg-primary/10 rounded-lg flex justify-center items-center'>
          <Icon width={26} icon={"mdi:bell-outline"} />
        </div>
        <div>
          <h2 className='text-2xl text-foreground'>Quota Alerts</h2>
          <p className='text-sm text-muted'>Set up email alerts to track your APIs consumption.</p>
        </div>
      </div>
    </div>
  )
}