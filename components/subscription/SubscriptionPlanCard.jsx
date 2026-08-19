import ButtonPrimary from "@/components/ui/ButtonPrimary"
import { Icon } from "@iconify/react"
import Link from "next/link"

export default function SubscriptionPlanCard({plan}) {
  return (
    <div className={`bg-surface px-10 py-8 rounded-xl flex flex-col gap-2 relative ${plan.isPopular ? 'border border-primary/50' : ''}`}>
      {plan.isPopular && <div className='flex gap-2 items-center absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 rounded-full text-white mx-auto bg-primary px-4 py-1.5'>
        <Icon icon={"material-symbols:star"} width={16}/>
        <span>Most Popular </span>
      </div>}
      <div className='flex flex-col items-center gap-2.5 mb-4'>
        <div className='p-5 bg-primary/10 rounded-full '>
          <Icon className='text-primary' icon={"mingcute:git-branch-line"} width={60} />
        </div>
        <div className='flex flex-col my-3 gap-2 items-center'>
          <p className='font-bold text-xl'>{plan.title}</p>
          <p className='text-sm text-muted'>{plan.description}</p>
          <div className='h-0.5 bg-primary/50 rounded-full w-10 mt-2'></div>
        </div>
        <p className=''>
          <span className='text-2xl font-bold'>{plan.currency}{plan.price}</span>
          <span> {plan.billing}</span>
        </p>
      </div>

      <div className='flex flex-col divide-y divide-gray-600/10'>
        {plan.features.map((feature, i) => (
          <div key={i} className='flex gap-4 items-center py-2'>
            <Icon className='text-primary' icon={"flowbite:check-circle-outline"} />
            <span className='text-muted font-medium'>{feature}</span>
          </div>
        ))}
      </div>
      <Link className='w-full mt-3' href={"/"}>
        <ButtonPrimary className="w-full rounded-lg py-2.5">Subscribe</ButtonPrimary>
      </Link>
    </div>   
  )
}
