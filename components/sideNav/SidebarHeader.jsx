import CustomImage from '@/components/customElements/CustomImage';
import { X } from "lucide-react";
import Link from 'next/link';

export default function SidebarHeader({navOpen, setMobileNavOpen}) {
	return (
		<div className="flex items-center gap-2 relative">
			<button
				type="button"
				onClick={() => setMobileNavOpen(false)}
				className="absolute right-0 top-0 flex size-8 items-center justify-center rounded-md text-muted bg-gray-200/10 hover:bg-light-primary hover:text-primary lg:hidden"
			>
				<X size={22} />
			</button>

			<Link className="" href={'/dashboard'}>
				<CustomImage 
					source={"/assets/logo.png"} 
					width={40}
					height={40}
					alt={'logo'}
				/>
			</Link>

			<div className={`flex flex-col gap-0 transition-all duration-400 overflow-hidden text-nowrap ${navOpen ? 'max-w-30' : 'max-w-0'}`}>
				<h2 className="text-base">API-FOOTBALL</h2>
				<span className="text-xs text-muted">All Real-time Data</span>
			</div>
		</div>
	)
}
