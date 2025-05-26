import React from 'react';
import { Menu, Bell, User, Search } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { getPageTitle } from '../../utils/helpers';

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  const location = useLocation();
  const pageTitle = getPageTitle(location.pathname);

  return (
    <header className="sticky top-0 z-10 bg-white border-b border-slate-200 px-4 py-2 flex items-center justify-between shadow-sm">
      <div className="flex items-center">
        <button 
          onClick={toggleSidebar}
          className="mr-4 p-2 rounded-full hover:bg-slate-100 md:hidden"
          aria-label="Toggle sidebar"
        >
          <Menu size={24} />
        </button>
        <h1 className="text-xl font-semibold text-slate-800">{pageTitle}</h1>
      </div>
      
      <div className="hidden md:flex items-center bg-slate-100 rounded-lg px-3 py-1.5 flex-1 mx-8">
        <Search size={18} className="text-slate-500 mr-2" />
        <input 
          type="text" 
          placeholder="Search for buses, routes or tickets..." 
          className="bg-transparent border-none outline-none w-full text-sm text-slate-700"
        />
      </div>
      
      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-full hover:bg-slate-100 relative">
          <Bell size={20} className="text-slate-600" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium">
            <User size={16} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;