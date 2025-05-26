import React, { useState } from 'react';
import { Bus, Filter, Search, MapPin, PenTool as Tool, AlertTriangle, Plus, Calendar, MoreHorizontal } from 'lucide-react';

const FleetManagement: React.FC = () => {
  const [activeTab, setActiveTab] = useState('buses');
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-2xl font-semibold text-slate-800">Fleet Management</h1>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              placeholder="Search fleet..."
              className="pl-10 pr-4 py-2 border border-slate-200 rounded-lg w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <button className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
            <Plus size={18} />
            <span>Add Bus</span>
          </button>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="border-b border-slate-200">
          <div className="flex overflow-x-auto">
            <button
              className={`px-6 py-3 text-sm font-medium whitespace-nowrap ${
                activeTab === 'buses'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-slate-600 hover:text-slate-800'
              }`}
              onClick={() => setActiveTab('buses')}
            >
              All Buses
            </button>
            <button
              className={`px-6 py-3 text-sm font-medium whitespace-nowrap ${
                activeTab === 'routes'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-slate-600 hover:text-slate-800'
              }`}
              onClick={() => setActiveTab('routes')}
            >
              Routes & Schedules
            </button>
            <button
              className={`px-6 py-3 text-sm font-medium whitespace-nowrap ${
                activeTab === 'maintenance'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-slate-600 hover:text-slate-800'
              }`}
              onClick={() => setActiveTab('maintenance')}
            >
              Maintenance
            </button>
            <button
              className={`px-6 py-3 text-sm font-medium whitespace-nowrap ${
                activeTab === 'drivers'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-slate-600 hover:text-slate-800'
              }`}
              onClick={() => setActiveTab('drivers')}
            >
              Drivers
            </button>
          </div>
        </div>
        
        <div className="p-6">
          {activeTab === 'buses' && (
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
                <div className="flex items-center space-x-3">
                  <button className="flex items-center space-x-2 px-3 py-2 bg-slate-100 rounded-lg text-sm text-slate-700 hover:bg-slate-200">
                    <Filter size={16} />
                    <span>Filter</span>
                  </button>
                  
                  <select className="px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>All Status</option>
                    <option>Active</option>
                    <option>In Maintenance</option>
                    <option>Out of Service</option>
                  </select>
                </div>
                
                <div className="flex items-center space-x-3">
                  <select className="px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>All Types</option>
                    <option>Standard</option>
                    <option>Electric</option>
                    <option>Mini</option>
                  </select>
                  
                  <button className="flex items-center space-x-2 px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-700 hover:bg-slate-50">
                    <Calendar size={16} />
                    <span>Last 30 Days</span>
                  </button>
                </div>
              </div>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-slate-200">
                  <thead className="bg-slate-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                        Bus ID
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                        Type
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                        Route
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                        Driver
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                        Last Location
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
                          DL-{Math.floor(Math.random() * 10000).toString().padStart(4, '0')}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
                          {item % 3 === 0 ? 'Electric' : item % 2 === 0 ? 'Standard' : 'Mini'}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
                          Route {Math.floor(Math.random() * 500) + 100}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
                          {['Rahul Sharma', 'Priya Patel', 'Amir Khan', 'Neha Singh', 'Vikram Joshi'][item-1]}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full 
                            ${item % 3 === 0 
                              ? 'bg-green-100 text-green-800' 
                              : item % 3 === 1 
                                ? 'bg-red-100 text-red-800' 
                                : 'bg-amber-100 text-amber-800'}`}>
                            {item % 3 === 0 ? 'Active' : item % 3 === 1 ? 'Maintenance' : 'In Transit'}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
                          {['Connaught Place', 'Saket', 'AIIMS', 'India Gate', 'Lajpat Nagar'][item-1]}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex items-center space-x-2">
                            <button className="text-blue-600 hover:text-blue-900">View</button>
                            <button className="text-slate-600 hover:text-slate-900">
                              <MapPin size={16} />
                            </button>
                            <button className="text-slate-600 hover:text-slate-900">
                              <MoreHorizontal size={16} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="py-4 flex items-center justify-between border-t border-slate-200 mt-4">
                <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm text-slate-700">
                      Showing <span className="font-medium">1</span> to <span className="font-medium">5</span> of <span className="font-medium">156</span> buses
                    </p>
                  </div>
                  <div>
                    <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                      <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-slate-300 bg-white text-sm font-medium text-slate-500 hover:bg-slate-50">
                        <span className="sr-only">Previous</span>
                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </button>
                      <button className="relative inline-flex items-center px-4 py-2 border border-slate-300 bg-white text-sm font-medium text-slate-700 hover:bg-slate-50">
                        1
                      </button>
                      <button className="relative inline-flex items-center px-4 py-2 border border-slate-300 bg-blue-50 text-sm font-medium text-blue-600 hover:bg-blue-100">
                        2
                      </button>
                      <button className="relative inline-flex items-center px-4 py-2 border border-slate-300 bg-white text-sm font-medium text-slate-700 hover:bg-slate-50">
                        3
                      </button>
                      <span className="relative inline-flex items-center px-4 py-2 border border-slate-300 bg-white text-sm font-medium text-slate-700">
                        ...
                      </span>
                      <button className="relative inline-flex items-center px-4 py-2 border border-slate-300 bg-white text-sm font-medium text-slate-700 hover:bg-slate-50">
                        16
                      </button>
                      <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-slate-300 bg-white text-sm font-medium text-slate-500 hover:bg-slate-50">
                        <span className="sr-only">Next</span>
                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'maintenance' && (
            <div>
              <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg border border-slate-200">
                  <div className="flex items-center mb-2">
                    <div className="p-2 rounded-full bg-green-100 mr-3">
                      <Bus size={20} className="text-green-600" />
                    </div>
                    <h3 className="text-lg font-medium text-slate-800">136</h3>
                  </div>
                  <p className="text-sm text-slate-500">Buses operational</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-slate-200">
                  <div className="flex items-center mb-2">
                    <div className="p-2 rounded-full bg-amber-100 mr-3">
                      <Tool size={20} className="text-amber-600" />
                    </div>
                    <h3 className="text-lg font-medium text-slate-800">15</h3>
                  </div>
                  <p className="text-sm text-slate-500">Under maintenance</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-slate-200">
                  <div className="flex items-center mb-2">
                    <div className="p-2 rounded-full bg-red-100 mr-3">
                      <AlertTriangle size={20} className="text-red-600" />
                    </div>
                    <h3 className="text-lg font-medium text-slate-800">5</h3>
                  </div>
                  <p className="text-sm text-slate-500">Critical issues</p>
                </div>
              </div>
              
              <h3 className="text-lg font-medium text-slate-800 mb-4">Maintenance Schedule</h3>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-slate-200">
                  <thead className="bg-slate-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                        Bus ID
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                        Maintenance Type
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                        Scheduled Date
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                        Assigned To
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
                          DL-{Math.floor(Math.random() * 10000).toString().padStart(4, '0')}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
                          {['Routine Inspection', 'Oil Change', 'Brake Service', 'Engine Tune-up', 'Tire Replacement'][item-1]}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
                          {new Date(Date.now() + (item * 24 * 60 * 60 * 1000)).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full 
                            ${item % 3 === 0 
                              ? 'bg-green-100 text-green-800' 
                              : item % 3 === 1 
                                ? 'bg-blue-100 text-blue-800' 
                                : 'bg-amber-100 text-amber-800'}`}>
                            {item % 3 === 0 ? 'Completed' : item % 3 === 1 ? 'Scheduled' : 'In Progress'}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
                          {['Maintenance Team A', 'Rahul Mechanic', 'External Vendor', 'Maintenance Team B', 'Suresh Mechanic'][item-1]}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex items-center space-x-2">
                            <button className="text-blue-600 hover:text-blue-900">View</button>
                            <button className="text-green-600 hover:text-green-900">Update</button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
          
          {activeTab === 'routes' && (
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
                <h3 className="text-lg font-medium text-slate-800">Active Routes</h3>
                
                <div className="flex items-center space-x-3">
                  <select className="px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>All Zones</option>
                    <option>North Delhi</option>
                    <option>South Delhi</option>
                    <option>East Delhi</option>
                    <option>West Delhi</option>
                    <option>Central Delhi</option>
                  </select>
                  
                  <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    <Plus size={16} />
                    <span>Add Route</span>
                  </button>
                </div>
              </div>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-slate-200">
                  <thead className="bg-slate-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                        Route #
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                        From - To
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                        Distance
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                        Buses Assigned
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                        Frequency
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
                          {[522, 340, 423, 128, 245][item-1]}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
                          {['Connaught Place - Dwarka', 'Saket - AIIMS', 'Lajpat Nagar - India Gate', 'Karol Bagh - Gurgaon', 'Kashmere Gate - Noida'][item-1]}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
                          {[18.5, 12.2, 8.5, 22.7, 25.3][item-1]} km
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
                          {[12, 8, 6, 15, 10][item-1]} buses
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
                          Every {[10, 15, 20, 12, 8][item-1]} mins
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full 
                            ${item % 3 === 0 
                              ? 'bg-green-100 text-green-800' 
                              : item % 3 === 1 
                                ? 'bg-amber-100 text-amber-800' 
                                : 'bg-blue-100 text-blue-800'}`}>
                            {item % 3 === 0 ? 'Active' : item % 3 === 1 ? 'Modified' : 'High Traffic'}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex items-center space-x-2">
                            <button className="text-blue-600 hover:text-blue-900">View</button>
                            <button className="text-slate-600 hover:text-slate-900">
                              <MapPin size={16} />
                            </button>
                            <button className="text-slate-600 hover:text-slate-900">
                              <MoreHorizontal size={16} />
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
          
          {activeTab === 'drivers' && (
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
                <h3 className="text-lg font-medium text-slate-800">Driver Management</h3>
                
                <div className="flex items-center space-x-3">
                  <select className="px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>All Shifts</option>
                    <option>Morning</option>
                    <option>Afternoon</option>
                    <option>Evening</option>
                    <option>Night</option>
                  </select>
                  
                  <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    <Plus size={16} />
                    <span>Add Driver</span>
                  </button>
                </div>
              </div>
              
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
                        License
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                        Assigned Bus
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                        Shift
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
                          DRV-{Math.floor(Math.random() * 10000).toString().padStart(4, '0')}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
                          {['Rahul Sharma', 'Priya Patel', 'Amir Khan', 'Neha Singh', 'Vikram Joshi'][item-1]}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
                          DL-{Math.floor(Math.random() * 10000000).toString().padStart(8, '0')}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
                          DL-{Math.floor(Math.random() * 10000).toString().padStart(4, '0')}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
                          {['Morning (6AM-2PM)', 'Afternoon (2PM-10PM)', 'Night (10PM-6AM)', 'Morning (6AM-2PM)', 'Afternoon (2PM-10PM)'][item-1]}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full 
                            ${item % 3 === 0 
                              ? 'bg-green-100 text-green-800' 
                              : item % 3 === 1 
                                ? 'bg-red-100 text-red-800' 
                                : 'bg-amber-100 text-amber-800'}`}>
                            {item % 3 === 0 ? 'On Duty' : item % 3 === 1 ? 'Off Duty' : 'Break'}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex items-center space-x-2">
                            <button className="text-blue-600 hover:text-blue-900">View</button>
                            <button className="text-slate-600 hover:text-slate-900">
                              <MapPin size={16} />
                            </button>
                            <button className="text-slate-600 hover:text-slate-900">
                              <MoreHorizontal size={16} />
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

export default FleetManagement;