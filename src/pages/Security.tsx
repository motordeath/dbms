import React, { useState } from 'react';
import { Shield, Camera, AlertTriangle, Bell, MapPin, Search, Filter, ChevronDown, Download } from 'lucide-react';

const Security: React.FC = () => {
  const [activeTab, setActiveTab] = useState('incidents');
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-2xl font-semibold text-slate-800">Security & Safety</h1>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              placeholder="Search incidents..."
              className="pl-10 pr-4 py-2 border border-slate-200 rounded-lg w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <button className="flex items-center justify-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors">
            <AlertTriangle size={18} />
            <span>Report Incident</span>
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg border border-slate-200">
          <div className="flex items-center mb-2">
            <div className="p-2 rounded-full bg-red-100 mr-3">
              <AlertTriangle size={20} className="text-red-600" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-slate-800">5</h3>
              <p className="text-sm text-slate-500">Active Incidents</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg border border-slate-200">
          <div className="flex items-center mb-2">
            <div className="p-2 rounded-full bg-green-100 mr-3">
              <Camera size={20} className="text-green-600" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-slate-800">98%</h3>
              <p className="text-sm text-slate-500">CCTV Operational</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg border border-slate-200">
          <div className="flex items-center mb-2">
            <div className="p-2 rounded-full bg-blue-100 mr-3">
              <Shield size={20} className="text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-slate-800">156</h3>
              <p className="text-sm text-slate-500">Security Personnel</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="border-b border-slate-200">
          <div className="flex">
            <button
              className={`px-6 py-3 text-sm font-medium ${
                activeTab === 'incidents'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-slate-600 hover:text-slate-800'
              }`}
              onClick={() => setActiveTab('incidents')}
            >
              Active Incidents
            </button>
            <button
              className={`px-6 py-3 text-sm font-medium ${
                activeTab === 'cctv'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-slate-600 hover:text-slate-800'
              }`}
              onClick={() => setActiveTab('cctv')}
            >
              CCTV Monitoring
            </button>
            <button
              className={`px-6 py-3 text-sm font-medium ${
                activeTab === 'personnel'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-slate-600 hover:text-slate-800'
              }`}
              onClick={() => setActiveTab('personnel')}
            >
              Security Personnel
            </button>
          </div>
        </div>
        
        <div className="p-6">
          {activeTab === 'incidents' && (
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
                <div className="flex items-center space-x-3">
                  <button className="flex items-center space-x-2 px-3 py-2 bg-slate-100 rounded-lg text-sm text-slate-700 hover:bg-slate-200">
                    <Filter size={16} />
                    <span>Filter</span>
                    <ChevronDown size={16} />
                  </button>
                  
                  <select className="px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>All Severity</option>
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                  </select>
                </div>
                
                <button className="flex items-center space-x-2 px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-700 hover:bg-slate-50">
                  <Download size={16} />
                  <span>Export</span>
                </button>
              </div>
              
              <div className="space-y-4">
                <div className="bg-red-50 border border-red-100 rounded-lg p-4">
                  <div className="flex items-start">
                    <div className="p-2 bg-red-100 rounded-full mr-3">
                      <AlertTriangle size={20} className="text-red-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm font-medium text-red-800">Emergency Button Activated</h3>
                        <span className="px-2 py-1 text-xs font-medium bg-red-100 text-red-800 rounded-full">High</span>
                      </div>
                      <p className="mt-1 text-sm text-red-600">Bus #DL-1425 - Route 522</p>
                      <p className="mt-1 text-sm text-slate-600">Near Connaught Place • 5 minutes ago</p>
                      <div className="mt-3 flex items-center space-x-3">
                        <button className="text-sm text-red-600 hover:text-red-800 font-medium">
                          Respond Now
                        </button>
                        <button className="text-sm text-slate-600 hover:text-slate-800">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-amber-50 border border-amber-100 rounded-lg p-4">
                  <div className="flex items-start">
                    <div className="p-2 bg-amber-100 rounded-full mr-3">
                      <AlertTriangle size={20} className="text-amber-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm font-medium text-amber-800">Overcrowding Detected</h3>
                        <span className="px-2 py-1 text-xs font-medium bg-amber-100 text-amber-800 rounded-full">Medium</span>
                      </div>
                      <p className="mt-1 text-sm text-amber-600">Bus #DL-1832 - Route 340</p>
                      <p className="mt-1 text-sm text-slate-600">Saket • 12 minutes ago</p>
                      <div className="mt-3 flex items-center space-x-3">
                        <button className="text-sm text-amber-600 hover:text-amber-800 font-medium">
                          Take Action
                        </button>
                        <button className="text-sm text-slate-600 hover:text-slate-800">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                  <div className="flex items-start">
                    <div className="p-2 bg-blue-100 rounded-full mr-3">
                      <Bell size={20} className="text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm font-medium text-blue-800">Speed Limit Warning</h3>
                        <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">Low</span>
                      </div>
                      <p className="mt-1 text-sm text-blue-600">Bus #DL-1567 - Route 423</p>
                      <p className="mt-1 text-sm text-slate-600">India Gate • 25 minutes ago</p>
                      <div className="mt-3 flex items-center space-x-3">
                        <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                          Notify Driver
                        </button>
                        <button className="text-sm text-slate-600 hover:text-slate-800">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'cctv' && (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6].map((camera) => (
                  <div key={camera} className="bg-slate-100 rounded-lg overflow-hidden">
                    <div className="aspect-video bg-slate-800 relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Camera className="text-slate-600" size={32} />
                      </div>
                      <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
                        Camera {camera}
                      </div>
                    </div>
                    <div className="p-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-slate-800">Bus #DL-{1420 + camera}</p>
                          <p className="text-xs text-slate-500">Route {520 + camera}</p>
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                          <span className="text-xs text-slate-600">Live</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {activeTab === 'personnel' && (
            <div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-slate-200">
                  <thead className="bg-slate-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                        ID
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                        Name
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                        Assignment
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                        Location
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-slate-200">
                    {[1, 2, 3, 4, 5].map((item) => (
                      <tr key={item} className="hover:bg-slate-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-800">
                          SEC-{Math.floor(Math.random() * 10000).toString().padStart(4, '0')}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
                          {['Rajesh Kumar', 'Priya Patel', 'Amir Khan', 'Neha Singh', 'Vikram Joshi'][item-1]}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
                          {['Route Patrol', 'Station Security', 'Bus Escort', 'CCTV Monitoring', 'Emergency Response'][item-1]}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
                          {['Connaught Place', 'Saket', 'AIIMS', 'Control Room', 'India Gate'][item-1]}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full 
                            ${item % 3 === 0 
                              ? 'bg-green-100 text-green-800' 
                              : item % 3 === 1 
                                ? 'bg-amber-100 text-amber-800' 
                                : 'bg-blue-100 text-blue-800'}`}>
                            {item % 3 === 0 ? 'On Duty' : item % 3 === 1 ? 'Break' : 'Responding'}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex items-center space-x-2">
                            <button className="text-blue-600 hover:text-blue-900">Contact</button>
                            <button className="text-slate-600 hover:text-slate-900">
                              <MapPin size={16} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Security;