import React from 'react';
import { Clock, MapPin, User, AlertCircle } from 'lucide-react';

interface BusCardProps {
  busId: string;
  route: string;
  status: 'on-time' | 'delayed' | 'stopped';
  driver: string;
  location: string;
  passengers: {
    current: number;
    capacity: number;
  };
  lastUpdated: string;
}

export const BusCard: React.FC<BusCardProps> = ({
  busId,
  route,
  status,
  driver,
  location,
  passengers,
  lastUpdated,
}) => {
  const statusColors = {
    'on-time': 'bg-green-100 text-green-800 border-green-200',
    'delayed': 'bg-amber-100 text-amber-800 border-amber-200',
    'stopped': 'bg-red-100 text-red-800 border-red-200',
  };
  
  const statusText = {
    'on-time': 'On Time',
    'delayed': 'Delayed',
    'stopped': 'Stopped',
  };
  
  const occupancyPercentage = (passengers.current / passengers.capacity) * 100;
  
  let occupancyColor = 'bg-green-500';
  if (occupancyPercentage > 90) {
    occupancyColor = 'bg-red-500';
  } else if (occupancyPercentage > 70) {
    occupancyColor = 'bg-amber-500';
  }

  return (
    <div className="border border-slate-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300">
      <div className="p-4">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="font-semibold text-slate-800">{busId}</h3>
            <p className="text-sm text-slate-500">{route}</p>
          </div>
          <span className={`px-2 py-1 text-xs rounded-full border ${statusColors[status]}`}>
            {statusText[status]}
          </span>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center">
            <User size={16} className="text-slate-400 mr-2" />
            <span className="text-sm text-slate-600">{driver}</span>
          </div>
          <div className="flex items-center">
            <MapPin size={16} className="text-slate-400 mr-2" />
            <span className="text-sm text-slate-600">{location}</span>
          </div>
          <div className="flex items-center">
            <Clock size={16} className="text-slate-400 mr-2" />
            <span className="text-sm text-slate-500">Updated {lastUpdated}</span>
          </div>
        </div>
        
        <div className="mt-4">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs text-slate-500">Passengers</span>
            <span className="text-xs font-medium">{passengers.current}/{passengers.capacity}</span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-2">
            <div 
              className={`${occupancyColor} h-2 rounded-full transition-all duration-500 ease-in-out`}
              style={{ width: `${occupancyPercentage}%` }}
            ></div>
          </div>
        </div>
        
        {status === 'stopped' && (
          <div className="mt-3 p-2 bg-red-50 rounded flex items-center">
            <AlertCircle size={14} className="text-red-500 mr-2" />
            <span className="text-xs text-red-700">Maintenance required</span>
          </div>
        )}
      </div>
      
      <div className="bg-slate-50 px-4 py-2 border-t border-slate-200">
        <button className="text-blue-600 text-sm hover:text-blue-800">
          View Details
        </button>
      </div>
    </div>
  );
};