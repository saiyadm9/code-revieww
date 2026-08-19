import { ArrowRightIcon, Crown } from 'lucide-react'
import Link from 'next/link'

export default function SidebarPlan({navOpen}) {
	return (
		<div className={`hidden lg:flex bg-light-primary shadow rounded-lg transition-all duration-200 overflow-hidden ${navOpen ? 'max-w-60' : 'max-w-0'}`}>
			<div className={` text-gray-300 flex flex-col gap-3 p-5 text-nowrap`}>
				<div className="flex flex-col gap-1.5 border-b border-b-border-gray-strong pb-4">
					<p className="text-primary text-sm font-medium">Current Plan</p>
					<div className="flex gap-2 items-center">
						<Crown fill="#02877D" stroke="#02877D"/>
						<h2 className="text-xl text-foreground font-bold">Pro</h2>
					</div>
					<div className="">
						<p className="text-foreground text-xs ">Renews on Aug 26, 2025</p>
					</div>
				</div>
				<Link href="/subscription/cricket" className="text-primary text-xs flex justify-between items-center">
					<span>Manage Plan</span>
					<ArrowRightIcon size={16}/>
				</Link>
			</div>
		</div>
	)
}
