import { Icon } from '@iconify/react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function MenuItem({menu, navOpen, setMobileNavOpen}) {
  const pathName = usePathname();
  const [isCollapse , setIsCollapse] = useState(null);
  const isActive = pathName === menu.address || isCollapse === menu.id;

  function handleCollapse (e, menu) {
    if(menu.children) e.preventDefault(); 
    if(!menu.children) setMobileNavOpen(false);
    setIsCollapse((prev) => (prev === menu.id ? null : menu.id));
  }
  
  return (
    <div className="flex flex-col">
      <Link 
        href={menu.address} 
        title={menu.name}
        className={`
          flex 
          py-3 
          px-4 
          rounded-md 
          transition-colors 
          duration-400
          hover:bg-light-primary 
          relative gap-4
          ${isActive ? 'bg-light-primary text-primary' : 'text-foreground'}
        `} 
        onClick={(e) =>  handleCollapse(e, menu)}
        key={menu.name}
      >
        {/* left decoration border line */}
        {/* <span className={`w-0.5 rounded-r-full absolute top-1 bottom-1 left-0 ${isActive ? 'bg-primary/80' : ''}`}></span> */}
        
        <Icon className={`shrink-0 ${isActive ? 'text-primary' : 'text-muted'}`} icon={menu.icon} width={20}/>

        <div 
          className={`
            flex gap-3 
            justify-between 
            flex-1 text-nowrap 
            overflow-hidden 
            transition-all 
            duration-400 
            ${navOpen ? 'max-w-44' : 'max-w-0'}
          `}
        >
          <h3 className={`text-sm font-semibold text-inherit text-nowrap  `}>
            {menu.name}
          </h3>
          
          {menu.children && <div>
            <Icon 
              icon="mingcute:right-line" 
              width={20} 
              className={`transition-all duration-500 ${isCollapse === menu.id ? 'rotate-90' : 'rotate-0'}`}
            />
          </div>}
        </div>
      </Link>

      {navOpen && <div 
        className={`px-4 flex flex-col gap-3 transition-all duration-500 overflow-hidden 
          ${isCollapse === menu.id && menu.children ? 'my-3 max-h-40' : 'max-h-0'}`}
        >
        {menu.children && menu.children.map((item, i) => (
          <Link 
            key={i} 
            href={item.address} 
            className={`cursor-pointer flex gap-4 items-center text-muted hover:text-primary ${item.address === pathName ? "text-primary" : ""}`}
            onClick={() => setMobileNavOpen(false)}
          >
            <Icon width={16} icon={item.icon} />
            <p className="text-sm text-inherit">{item.name}</p>
          </Link>
        ))}
      </div>}
    </div>
  )
}
