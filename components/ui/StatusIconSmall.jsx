import { Icon } from "@iconify/react";

const iconsColor = {
  "green" : "bg-green-600/10 text-green-600",
  "blue" : "bg-blue-600/10 text-blue-600",
  "purple" : "bg-purple-600/10 text-purple-600",
  "red" : "bg-red-600/10 text-red-600",
  "orange": "bg-orange-600/10 text-orange-600"
}

export default function StatusIconSmall({color, icon}) {

  return (
    <div className={`size-9 flex justify-center items-center rounded-md ${iconsColor[color]}`}>
      <Icon icon={icon} width={24} />
    </div>
  )
}
