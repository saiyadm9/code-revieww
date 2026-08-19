import { Icon } from '@iconify/react'
export default function TransactionsHeader() {

  return (
    <div className='p-5 border-b-2 border-b-border-gray flex gap-4 items-center justify-between flex-wrap'>
      <div className='flex flex-col gap-2'>
        <h2 className='text-2xl text-foreground'>Transactions</h2>
        <p className='text-sm text-muted'>View your payment history and invoices</p>
      </div>

      <div className='flex items-center border-2 border-border-gray rounded-lg px-3 py-4 divide-x-2 divide-border-gray text-foreground'>
        <div className='flex px-4 flex-col gap-1'>
          <span className='text-xs text-muted font-semibold'>Total Spend</span>
          <span className='text-lg font-semibold'>$0.00</span>
        </div>
        <div className='px-4'>
          <Icon className='text-primary/80' width={40} icon={"ic:round-payment"} />
        </div>
      </div>
    </div>
  )
}