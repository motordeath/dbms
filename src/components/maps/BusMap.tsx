import React, { useEffect, useState } from 'react';
import { MapPin } from 'lucide-react';

const BusMap: React.FC = () => {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate map loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  if (loading) {
    return (
      <div className="h-full flex items-center justify-center bg-slate-50">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-8 w-8 bg-blue-200 rounded-full mb-2"></div>
          <div className="h-4 w-32 bg-slate-200 rounded"></div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="h-full relative bg-slate-100">
      {/* This is a placeholder for the actual map component */}
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/68704/pexels-photo-68704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-center bg-no-repeat bg-cover opacity-90">
        {/* Map implementation would go here */}
      </div>
      
      {/* Sample bus markers */}
      <div className="absolute top-1/4 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
          <div className="absolute -inset-1 bg-green-500 rounded-full opacity-30 animate-ping"></div>
        </div>
      </div>
      
      <div className="absolute top-1/2 left-2/3 transform -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          <div className="w-4 h-4 bg-amber-500 rounded-full animate-pulse"></div>
          <div className="absolute -inset-1 bg-amber-500 rounded-full opacity-30 animate-ping"></div>
        </div>
      </div>
      
      <div className="absolute bottom-1/4 right-1/4 transform -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
          <div className="absolute -inset-1 bg-red-500 rounded-full opacity-30 animate-ping"></div>
        </div>
      </div>
      
      {/* Map Controls */}
      <div className="absolute top-4 right-4 bg-white rounded-lg shadow-md p-2 flex flex-col space-y-2">
        <button className="p-2 hover:bg-slate-100 rounded">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </button>
        <button className="p-2 hover:bg-slate-100 rounded">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
          </svg>
        </button>
        <div className="border-t border-slate-200 my-1"></div>
        <button className="p-2 hover:bg-slate-100 rounded">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
        </button>
      </div>
      
      <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-md p-3">
        <div className="flex items-center space-x-2 text-sm">
          <span className="flex items-center text-green-600">
            <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-1.5"></span>
            On Time: 56
          </span>
          <span className="flex items-center text-amber-600">
            <span className="inline-block w-2 h-2 rounded-full bg-amber-500 mr-1.5"></span>
            Delayed: 12
          </span>
          <span className="flex items-center text-red-600">
            <span className="inline-block w-2 h-2 rounded-full bg-red-500 mr-1.5"></span>
            Stopped: 5
          </span>
        </div>
      </div>
    </div>
  );
};

export default BusMap;