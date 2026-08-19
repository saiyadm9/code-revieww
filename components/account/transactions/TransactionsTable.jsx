"use client";
import { Icon } from "@iconify/react";
import { transactionsData } from "@/data/statisticsData";
import SmallButton from "@/components/ui/SmallButton";

export default function TransactionsTable() {
  return (
    <div className="overflow-x-auto p-2">
      <table className="w-full border-separate border-spacing-y-3 text-foreground text-nowrap">
        <thead>
          <tr className="text-left text-xs uppercase text-text-light">
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">API</th>
            <th className="px-4 py-2 text-center">Plan</th>
            <th className="px-4 py-2 text-center">Months</th>
            <th className="px-4 py-2 text-center">Amount</th>
            <th className="px-4 py-2 text-center">Discount</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2 text-right">Invoice</th>
          </tr>
        </thead>

        <tbody>
          {transactionsData.map((item) => (
            <tr
              key={item.id}
              className="bg-surface odd:bg-gray-200/10 border border-border rounded-xl"
            >
              <td className="px-4 py-4 rounded-l-xl">
                <div className="flex items-center gap-3">
                  <div className="relative h-10 w-10 overflow-hidden rounded-lg flex justify-center items-center text-foreground bg-gray-400/10">
                    <Icon width={22} icon={"uiw:date"} />
                  </div>

                  <div className="inline-flex flex-col gap-1">
                    <span className="font-semibold">{item.date}</span>
                    <span className="text-xs text-muted font-semibold">{item.time}</span>
                  </div>
                </div>
              </td>

              <td className="px-4 py-4">
                <div className="flex items-center gap-3">
                  <div className="relative h-10 w-10 overflow-hidden rounded-lg bg-gray-400/10 flex justify-center items-center text-primary/70">
                    <Icon width={26} icon={item.apiIcon} />
                  </div>

                  <span className="font-semibold">
                    {item.api}
                  </span>
                </div>
              </td>

              <td className="px-4 py-4 text-center">
                {item.plan}
              </td>

              <td className="px-4 py-4 text-center">
                {item.months}
              </td>

              <td className="px-4 py-4 text-center">
                ${item.amount}
              </td>

              <td className="px-4 py-4 text-center">
                {item.discount}
              </td>

              <td className="px-4 py-4">
                <SmallButton point={true} className={"py-1.5 px-2.5"}>{item.status}</SmallButton>
              </td>

              <td className="px-4 py-4 rounded-r-xl text-right">
                <div
                  className="inline-flex rounded-lg bg-gray-400/10 p-1.5 text-foreground cursor-pointer"
                >
                  <Icon
                    icon="iconamoon:invoice-light"
                    width={24}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}