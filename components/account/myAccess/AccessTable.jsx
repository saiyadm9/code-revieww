"use client";
import { Icon } from "@iconify/react";
import { accessData } from "@/data/statisticsData";
import SmallButton from "@/components/ui/SmallButton";
import Link from "next/link";

export default function AccessTable() {
  return (
    <div className="overflow-x-auto p-2">
      <table className="w-full border-separate border-spacing-y-3 text-foreground">
        <thead>
          <tr className="text-left text-xs uppercase text-text-light">
            <th className="px-4 py-2">API</th>
            <th className="px-4 py-2">Plan</th>
            <th className="px-4 py-2 text-center">Requests Used</th>
            <th className="px-4 py-2 text-center">Limit Per Day</th>
            <th className="px-4 py-2">Subscription End</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">URL</th>
            <th className="px-4 py-2 text-right">Action</th>
          </tr>
        </thead>

        <tbody>
          {accessData.map((item) => (
            <tr
              key={item.id}
              className="bg-surface odd:bg-gray-200/10 border border-border rounded-xl"
            >
              <td className="px-4 py-4 rounded-l-xl">
                <div className="flex items-center gap-3">
                  <div className="relative h-10 w-10 overflow-hidden rounded-lg bg-gray-400/10 flex justify-center items-center text-primary/80">
                    <Icon width={26} icon={item.icon} />
                  </div>

                  <span className="font-semibold">
                    {item.api}
                  </span>
                </div>
              </td>

              <td className="px-4 py-4">
                {item.plan}
              </td>

              <td className="px-4 py-4 text-center">
                {item.requestsUsed}
              </td>

              <td className="px-4 py-4 text-center">
                {item.dailyLimit}
              </td>

              <td className="px-4 py-4 whitespace-nowrap">
                {item.subscriptionEnd}
              </td>

              <td className="px-4 py-4">
                <SmallButton point={true} className={"py-1.5 px-2.5"}>{item.status}</SmallButton>
              </td>

              <td className="px-4 py-4 whitespace-nowrap">
                {item.url}
              </td>

              <td className="px-4 py-4 rounded-r-xl text-right">
                <Link
                  href={`/subscription/${item.slug}`} 
                  className="inline-flex items-center gap-2 rounded-lg border-2 border-primary/40 px-4 py-2 text-xs font-semibold text-primary"
                >
                  <Icon
                    icon="boxicons:gift"
                    width={16}
                  />
                  {item.action}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}