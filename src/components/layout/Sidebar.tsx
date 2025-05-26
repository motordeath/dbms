import React from 'react';
import { NavLink } from 'react-router-dom';
import { Bus, CreditCard, BarChart2, Users, Shield, Settings, X, Home } from 'lucide-react';
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll';

interface SidebarProps {
  isOpen: boolean;
  toggle: () => void;
  isMobile: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggle, isMobile }) => {
  // Lock body scroll when sidebar is open on mobile
  useLockBodyScroll(isOpen && isMobile);
  
  const navItems = [
    { path: '/', icon: <Home size={20} />, label: 'Dashboard' },
    { path: '/ticketing', icon: <CreditCard size={20} />, label: 'Ticketing' },
    { path: '/fleet', icon: <Bus size={20} />, label: 'Fleet Management' },
    { path: '/passengers', icon: <Users size={20} />, label: 'Passenger Info' },
    { path: '/analytics', icon: <BarChart2 size={20} />, label: 'Analytics' },
    { path: '/security', icon: <Shield size={20} />, label: 'Security' },
    { path: '/settings', icon: <Settings size={20} />, label: 'Settings' }
  ];

  // Handle sidebar visibility logic
  const sidebarClass = isMobile
    ? `fixed inset-0 z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`
    : 'hidden md:block';
  
  return (
    <>
      {/* Backdrop for mobile */}
      {isMobile && isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggle}
        ></div>
      )}
      
      <aside className={`${sidebarClass} bg-blue-900 text-white w-64 flex flex-col h-full`}>
        <div className="p-4 flex items-center justify-between border-b border-blue-800">
          <div className="flex items-center space-x-2">
            <Bus size={24} className="text-orange-400" />
            <h2 className="text-lg font-bold">Delhi Bus</h2>
          </div>
          {isMobile && (
            <button onClick={toggle} className="p-1 rounded-full hover:bg-blue-800">
              <X size={20} className="text-white" />
            </button>
          )}
        </div>
        
        <nav className="flex-1 overflow-y-auto pt-4">
          <ul className="space-y-1 px-2">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  onClick={isMobile ? toggle : undefined}
                  className={({ isActive }) => 
                    `flex items-center space-x-3 px-4 py-2.5 rounded-lg transition-colors duration-200
                    ${isActive 
                      ? 'bg-blue-800 text-white' 
                      : 'text-blue-100 hover:bg-blue-800/50'}`
                  }
                >
                  {item.icon}
                  <span>{item.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="p-4 border-t border-blue-800">
          <div className="rounded-lg bg-blue-800 p-3">
            <p className="text-sm text-blue-200 mb-2">Currently Operating</p>
            <div className="flex justify-between">
              <div>
                <p className="text-lg font-semibold">2,541</p>
                <p className="text-xs text-blue-300">Buses</p>
              </div>
              <div>
                <p className="text-lg font-semibold">187</p>
                <p className="text-xs text-blue-300">Routes</p>
              </div>
              <div>
                <p className="text-lg font-semibold">95.2%</p>
                <p className="text-xs text-blue-300">On Time</p>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;