"use client";
import { Icon } from "@iconify/react";
import { accessData, quotaAlertData } from "@/data/statisticsData";
import SmallButton from "@/components/ui/SmallButton";
import Link from "next/link";
import StatusBar from "@/components/ui/StatusBar";

export default function QuotaAlertsTable() {
  return (
    <div className="overflow-x-auto p-2 text-nowrap">
      <table className="w-full border-separate border-spacing-y-3 text-foreground">
        <thead>
          <tr className="text-left text-xs uppercase text-text-light">
            <th className="px-4 py-2">API</th>
            <th className="px-4 py-2">THRESHOLD</th>
            <th className="px-4 py-2 text-center">STATUS</th>
            <th className="px-4 py-2">LAST MAIL</th>
            <th className="px-4 py-2">CURRENT USAGE</th>
            <th className="px-4 py-2 text-right">ACTIONS</th>
          </tr>
        </thead>

        <tbody>
          {quotaAlertData.map((item) => (
            <tr
              key={item.id}
              className="bg-surface odd:bg-gray-200/10 border border-border rounded-xl"
            >
              <td className="px-4 py-4 rounded-l-xl">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 overflow-hidden rounded-lg bg-gray-400/10 flex justify-center items-center text-primary/80">
                    <Icon width={26} icon={item.icon} />
                  </div>

                  <span className="font-semibold">
                    {item.api}
                  </span>
                </div>
              </td>

              <td className="px-4 py-4">
                50%
              </td>

              <td className="px-4 py-4 text-center">
                <SmallButton 
                  point={true} 
                  className={"py-1.5 px-2.5"}
                >
                  {item.status}
                </SmallButton>
              </td>

              <td className="px-4 py-4">
                <div className="flex items-center gap-3">
                  <span className="text-muted">
                    <Icon width={18} icon={"mynaui:mail"} />
                  </span>

                  <span className="font-medium">
                    {item.lastEmail}
                  </span>
                </div>
              </td>

              <td className="px-4 py-4">
                <div className="flex items-center gap-3">
                  {item.usage}%
                  <StatusBar />
                </div>
              </td>

              <td className="px-4 py-4 rounded-r-xl text-right">
                <div
                  className="inline-flex items-center gap-2 rounded-lg border-2 border-danger/40 px-4 py-2 text-xs font-semibold text-danger"
                >
                  <Icon
                    icon="si:bin-fill"
                    width={16}
                  />
                  <span>Remove</span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}