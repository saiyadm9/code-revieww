import QuotaAlertsHeader from "@/components/account/quotaAlerts/QuotaAlertsHeader";
import QuotaAlertsTable from "@/components/account/quotaAlerts/QuotaAlertsTable";


export default function QuotaAlertsBody() {
  return (
    <div className='bg-surface shadow-card border border-border-gray rounded-lg'>
      <QuotaAlertsHeader />
      <QuotaAlertsTable />
    </div>
  )
}
