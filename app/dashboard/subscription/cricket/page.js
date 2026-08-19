import SubscriptionPlans from '@/components/subscription/SubscriptionPlans'
import SubscriptionTitle from '@/components/subscription/SubscriptionTitle'

export default function page() {
  return (
    <div className='space-y-6'>
      <SubscriptionTitle />
      <SubscriptionPlans />
    </div>
  )
}
