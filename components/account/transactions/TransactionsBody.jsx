import TransactionsHeader from '@/components/account/transactions/TransactionsHeader'
import TransactionsTable from '@/components/account/transactions/TransactionsTable'

export default function TransactionsBody() {
  return (
    <div className='bg-surface shadow-card border border-border-gray rounded-lg'>
      <TransactionsHeader />
      <TransactionsTable />
    </div>
  )
}
