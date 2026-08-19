import { Icon } from "@iconify/react";

const iconsColor = {
  "green" : "bg-green-600/10 text-green-600",
  "blue" : "bg-blue-600/10 text-blue-600",
  "purple" : "bg-purple-600/10 text-purple-600",
  "red" : "bg-red-50 text-red-600",
}

export default function StatusIcon({color, icon}) {

  return (
    <div className={`w-13 h-13 flex justify-center items-center rounded-md ${iconsColor[color]}`}>
      <Icon icon={icon} width={28} />
    </div>
  )
}
