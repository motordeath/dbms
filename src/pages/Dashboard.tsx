import React from 'react';
import { MapPin, Users, Clock, Wallet, TrendingUp, AlertTriangle, Bus } from 'lucide-react';
import { BusCard } from '../components/dashboard/BusCard';
import StatCard from '../components/dashboard/StatCard';
import BusMap from '../components/maps/BusMap';
import RoutePerformance from '../components/dashboard/RoutePerformance';
import { useWindowSize } from '../hooks/useWindowSize';

const Dashboard: React.FC = () => {
  const { width } = useWindowSize();
  const isMobile = width < 768;
  
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard 
          title="Active Buses" 
          value="2,341" 
          change="+12"
          icon={<Bus className="text-blue-600" />} 
          trend="up"
        />
        <StatCard 
          title="Passengers Today" 
          value="186,204" 
          change="+5.2%"
          icon={<Users className="text-green-600" />} 
          trend="up"
        />
        <StatCard 
          title="On-Time Performance" 
          value="95.2%" 
          change="-0.8%"
          icon={<Clock className="text-amber-600" />} 
          trend="down"
        />
        <StatCard 
          title="Today's Revenue" 
          value="₹15.8L" 
          change="+2.1%"
          icon={<Wallet className="text-indigo-600" />} 
          trend="up"
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center">
            <h2 className="text-lg font-semibold text-slate-800">Live Fleet Map</h2>
            <div className="flex items-center space-x-2 text-sm">
              <span className="flex items-center text-green-600">
                <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-1.5"></span>
                On Time
              </span>
              <span className="flex items-center text-amber-600">
                <span className="inline-block w-2 h-2 rounded-full bg-amber-500 mr-1.5"></span>
                Delayed
              </span>
              <span className="flex items-center text-red-600">
                <span className="inline-block w-2 h-2 rounded-full bg-red-500 mr-1.5"></span>
                Stopped
              </span>
            </div>
          </div>
          <div className="h-[400px] relative">
            <BusMap />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-100">
            <h2 className="text-lg font-semibold text-slate-800">Active Alerts</h2>
          </div>
          <div className="p-4 space-y-4">
            <div className="p-3 bg-red-50 border border-red-100 rounded-lg flex items-start">
              <AlertTriangle className="text-red-500 mr-3 mt-0.5 flex-shrink-0" size={18} />
              <div>
                <p className="text-sm font-medium text-red-800">Bus #DL-1425 breakdown</p>
                <p className="text-xs text-red-600 mt-1">Route 522 - Near Connaught Place</p>
                <p className="text-xs text-slate-500 mt-1">20 minutes ago</p>
              </div>
            </div>
            
            <div className="p-3 bg-amber-50 border border-amber-100 rounded-lg flex items-start">
              <AlertTriangle className="text-amber-500 mr-3 mt-0.5 flex-shrink-0" size={18} />
              <div>
                <p className="text-sm font-medium text-amber-800">High passenger load</p>
                <p className="text-xs text-amber-600 mt-1">Route 340 - Saket to AIIMS</p>
                <p className="text-xs text-slate-500 mt-1">35 minutes ago</p>
              </div>
            </div>
            
            <div className="p-3 bg-blue-50 border border-blue-100 rounded-lg flex items-start">
              <MapPin className="text-blue-500 mr-3 mt-0.5 flex-shrink-0" size={18} />
              <div>
                <p className="text-sm font-medium text-blue-800">Route diversion active</p>
                <p className="text-xs text-blue-600 mt-1">Route 423 - Due to construction</p>
                <p className="text-xs text-slate-500 mt-1">1 hour ago</p>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-slate-100">
              <h3 className="text-sm font-medium text-slate-700 mb-3">Performance Overview</h3>
              <RoutePerformance />
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center">
          <h2 className="text-lg font-semibold text-slate-800">Active Bus Status</h2>
          <div className="flex space-x-2">
            <select className="text-sm border rounded-md px-2 py-1 bg-white">
              <option>All Routes</option>
              <option>High Traffic</option>
              <option>Delayed</option>
            </select>
            <button className="text-sm bg-blue-50 text-blue-600 px-3 py-1 rounded-md hover:bg-blue-100 transition-colors">
              View All
            </button>
          </div>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <BusCard 
              busId="DL-1756" 
              route="Route 522" 
              status="on-time"
              driver="Rajesh Kumar"
              location="Connaught Place"
              passengers={{current: 42, capacity: 60}}
              lastUpdated="2 min ago"
            />
            <BusCard 
              busId="DL-2145" 
              route="Route 340" 
              status="delayed"
              driver="Amit Singh"
              location="Saket"
              passengers={{current: 58, capacity: 60}}
              lastUpdated="1 min ago"
            />
            <BusCard 
              busId="DL-1823" 
              route="Route 423" 
              status="stopped"
              driver="Priya Sharma"
              location="AIIMS"
              passengers={{current: 12, capacity: 60}}
              lastUpdated="5 min ago"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;