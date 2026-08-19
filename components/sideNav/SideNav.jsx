"use client"
import { menuData } from "@/data/dashboardData";
import SidebarProfile from "@/components/sideNav/SidebarProfile";
import SidebarHeader from "@/components/sideNav/SidebarHeader";
import SidebarPlan from "@/components/sideNav/SidebarPlan";
import MenuItem from "@/components/sideNav/MenuItem";

export default function SideNav({navOpen, mobileNavOpen, setMobileNavOpen}) {
	return (
		<aside
			className={`
				fixed
				inset-y-0
				z-50
				flex
				w-62
				flex-col
				overflow-hidden
				bg-surface
				px-4
				py-6
				shadow-xs
				transition-[left,width]
				duration-400
			
				justify-between
				gap-2
				shrink-0

				lg:relative
				lg:left-0
				${navOpen ? "lg:w-66" : "lg:w-21"}
				${mobileNavOpen ?  "left-0" : "-left-62"}
			`}
		>
			<div className="overflow-y-auto">
				<SidebarHeader navOpen={navOpen} setMobileNavOpen={setMobileNavOpen}/>

				<div className="flex flex-col gap-0.5 mt-6">
					{menuData.map((menu, i) => (
						<MenuItem 
							key={i}
							menu={menu}
							navOpen={navOpen}
							setMobileNavOpen={setMobileNavOpen}
						/>
					))}
				</div>
			</div>

			{/* <SidebarPlan navOpen={navOpen} /> */}
			<SidebarProfile navOpen={navOpen}/>
		</aside>
	)
}