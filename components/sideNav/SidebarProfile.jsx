import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import ConfirmLogout from "@/components/sideNav/ConfirmLogout";


export default function SidebarProfile({navOpen}) {
	const [logoutModal, setLogoutModal] = useState(false);
	const [open, setOpen] = useState(false);
	const ref = useRef();

	useEffect(() => {
		function handleClick(e) {
			if (ref.current && !ref.current.contains(e.target)) {
				setOpen(false);
			}
		}
		document.addEventListener("mousedown", handleClick);

		return () =>
			document.removeEventListener("mousedown", handleClick);
	}, []);

	function handleProfileClick() {
		setOpen((prev) => !prev);
	}

	function handleCancelLogout() {
		setLogoutModal(false);
	}

	function handleLogoutClick() {
		setOpen(false);
		setLogoutModal(true);
	}

	return (
		<>
			<div className="relative" ref={ref}>
				<div 
					className="flex items-center justify-between cursor-pointer"
					onClick={handleProfileClick}
				>
					<div className="flex items-center gap-2">
						<span className='bg-primary w-9 h-9 flex justify-center items-center text-white font-bold rounded-full'>
							<span className="text-sm">S</span>
						</span>

						{navOpen && <div className="flex flex-col">
							<h3 className="text-foreground text-sm">User Name</h3>
							<p className="text-foreground text-xs">user@gmail.com</p>
						</div>}
					</div>

					{navOpen && <ChevronDown size={16} stroke="black" />}
				</div>

				<div
					className={`absolute left-0 bottom-14 w-full rounded-lg bg-surface border border-border-gray shadow-card transition-all duration-200 origin-top-right 
						${open && navOpen
							? "scale-100 opacity-100 visible"
							: "scale-95 opacity-0 invisible"
						}`}
					>

					<div className="px-6 py-3 border-b border-border-gray">
						<div className="flex items-center gap-2">
							<span className='bg-primary size-7 flex justify-center items-center text-white font-medium rounded-full'>
								<span className="text-xs">S</span>
							</span>

							<div className="flex flex-col">
								<h3 className="text-foreground text-sm">User Name</h3>
								<p className="text-foreground text-xs">Free</p>
							</div>
						</div>
					</div>

					<div className="px-6 py-3  flex flex-col gap-2 ">
						<Link href="/dashboard/account/profile" className="flex items-center gap-2 hover:text-primary cursor-pointer">
							<Icon icon="material-symbols:person" width={20} />
							<span className="font-medium">Profile</span>
						</Link>
						<div className="flex items-center gap-2 hover:text-primary cursor-pointer">
							<Icon icon="material-symbols:logout-rounded" width={20} />
							<span onClick={handleLogoutClick} className="font-medium">Logout</span>
						</div>
					</div>
				</div>
			</div>

			{logoutModal && (
				<ConfirmLogout handleCancelLogout={handleCancelLogout}  />
			)}
		</>
	)
}
