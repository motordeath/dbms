import React, { useState } from 'react';
import { CreditCard, Filter, Search, QrCode, ChevronDown, Download } from 'lucide-react';

const Ticketing: React.FC = () => {
  const [activeTab, setActiveTab] = useState('manage');
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-2xl font-semibold text-slate-800">Ticketing System</h1>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              placeholder="Search tickets..."
              className="pl-10 pr-4 py-2 border border-slate-200 rounded-lg w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <button className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
            <CreditCard size={18} />
            <span>Issue Ticket</span>
          </button>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="border-b border-slate-200">
          <div className="flex">
            <button
              className={`px-6 py-3 text-sm font-medium ${
                activeTab === 'manage'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-slate-600 hover:text-slate-800'
              }`}
              onClick={() => setActiveTab('manage')}
            >
              Manage Tickets
            </button>
            <button
              className={`px-6 py-3 text-sm font-medium ${
                activeTab === 'issue'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-slate-600 hover:text-slate-800'
              }`}
              onClick={() => setActiveTab('issue')}
            >
              Issue New
            </button>
            <button
              className={`px-6 py-3 text-sm font-medium ${
                activeTab === 'fares'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-slate-600 hover:text-slate-800'
              }`}
              onClick={() => setActiveTab('fares')}
            >
              Fare Management
            </button>
          </div>
        </div>
        
        <div className="p-6">
          {activeTab === 'manage' && (
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
                <div className="flex items-center space-x-3">
                  <button className="flex items-center space-x-2 px-3 py-2 bg-slate-100 rounded-lg text-sm text-slate-700 hover:bg-slate-200">
                    <Filter size={16} />
                    <span>Filter</span>
                    <ChevronDown size={16} />
                  </button>
                  
                  <select className="px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>All Tickets</option>
                    <option>Active</option>
                    <option>Used</option>
                    <option>Cancelled</option>
                  </select>
                </div>
                
                <button className="flex items-center space-x-2 px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-700 hover:bg-slate-50">
                  <Download size={16} />
                  <span>Export</span>
                </button>
              </div>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-slate-200">
                  <thead className="bg-slate-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                        Ticket ID
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                        Passenger
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                        Route
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                        Amount
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
                          TKT-{Math.floor(Math.random() * 10000).toString().padStart(4, '0')}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
                          {['Rahul Sharma', 'Priya Patel', 'Amir Khan', 'Neha Singh', 'Vikram Joshi'][item-1]}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
                          Route {Math.floor(Math.random() * 500) + 100}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
                          {new Date().toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
                          ₹{Math.floor(Math.random() * 50) + 10}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full 
                            ${item % 3 === 0 
                              ? 'bg-green-100 text-green-800' 
                              : item % 3 === 1 
                                ? 'bg-blue-100 text-blue-800' 
                                : 'bg-amber-100 text-amber-800'}`}>
                            {item % 3 === 0 ? 'Active' : item % 3 === 1 ? 'Used' : 'Pending'}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <button className="text-blue-600 hover:text-blue-900 mr-3">View</button>
                          <button className="text-slate-600 hover:text-slate-900">
                            <QrCode size={16} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="py-4 flex items-center justify-between border-t border-slate-200 mt-4">
                <div className="flex-1 flex justify-between sm:hidden">
                  <button className="relative inline-flex items-center px-4 py-2 border border-slate-300 text-sm font-medium rounded-md text-slate-700 bg-white hover:bg-slate-50">
                    Previous
                  </button>
                  <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-slate-300 text-sm font-medium rounded-md text-slate-700 bg-white hover:bg-slate-50">
                    Next
                  </button>
                </div>
                <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm text-slate-700">
                      Showing <span className="font-medium">1</span> to <span className="font-medium">5</span> of <span className="font-medium">42</span> results
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
                        8
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
          
          {activeTab === 'issue' && (
            <div className="max-w-2xl mx-auto">
              <h2 className="text-lg font-medium text-slate-800 mb-4">Issue New Ticket</h2>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Passenger Name
                    </label>
                    <input
                      type="text"
                      className="w-full border border-slate-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter passenger name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full border border-slate-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter phone number"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Route
                  </label>
                  <select className="w-full border border-slate-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Select route</option>
                    <option>Route 522 - Connaught Place to Dwarka</option>
                    <option>Route 340 - Saket to AIIMS</option>
                    <option>Route 423 - Lajpat Nagar to India Gate</option>
                  </select>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Journey Date
                    </label>
                    <input
                      type="date"
                      className="w-full border border-slate-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Journey Time
                    </label>
                    <select className="w-full border border-slate-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>Any Time</option>
                      <option>Morning (6 AM - 10 AM)</option>
                      <option>Afternoon (10 AM - 2 PM)</option>
                      <option>Evening (2 PM - 6 PM)</option>
                      <option>Night (6 PM - 10 PM)</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Ticket Type
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="border border-slate-200 rounded-lg p-3 cursor-pointer hover:bg-blue-50 hover:border-blue-200">
                      <input 
                        type="radio" 
                        name="ticket-type" 
                        id="single" 
                        className="mr-2"
                        defaultChecked
                      />
                      <label htmlFor="single" className="text-sm text-slate-700 cursor-pointer">
                        Single Journey
                      </label>
                    </div>
                    
                    <div className="border border-slate-200 rounded-lg p-3 cursor-pointer hover:bg-blue-50 hover:border-blue-200">
                      <input 
                        type="radio" 
                        name="ticket-type" 
                        id="return" 
                        className="mr-2"
                      />
                      <label htmlFor="return" className="text-sm text-slate-700 cursor-pointer">
                        Return Journey
                      </label>
                    </div>
                    
                    <div className="border border-slate-200 rounded-lg p-3 cursor-pointer hover:bg-blue-50 hover:border-blue-200">
                      <input 
                        type="radio" 
                        name="ticket-type" 
                        id="day-pass" 
                        className="mr-2"
                      />
                      <label htmlFor="day-pass" className="text-sm text-slate-700 cursor-pointer">
                        Day Pass
                      </label>
                    </div>
                  </div>
                </div>
                
                <div className="border-t border-slate-200 pt-4 mt-6">
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-slate-600">Base Fare:</span>
                      <span className="text-sm text-slate-800">₹25.00</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-slate-600">Taxes & Fees:</span>
                      <span className="text-sm text-slate-800">₹3.50</span>
                    </div>
                    <div className="flex justify-between pt-2 border-t border-slate-200 mt-2">
                      <span className="text-sm font-medium text-slate-800">Total:</span>
                      <span className="text-sm font-medium text-slate-800">₹28.50</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end space-x-3 pt-4">
                  <button className="px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50">
                    Cancel
                  </button>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center space-x-2">
                    <CreditCard size={18} />
                    <span>Issue Ticket</span>
                  </button>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'fares' && (
            <div>
              <div className="max-w-4xl mx-auto">
                <h2 className="text-lg font-medium text-slate-800 mb-4">Fare Management</h2>
                
                <div className="mb-6 bg-blue-50 border border-blue-100 rounded-lg p-4 text-sm text-blue-800">
                  <p>Fare updates will be applied to all new tickets. Existing tickets will maintain their original pricing.</p>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-white border border-slate-200 rounded-lg overflow-hidden">
                    <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex justify-between items-center">
                      <h3 className="font-medium text-slate-800">Base Fares by Distance</h3>
                      <button className="text-sm text-blue-600 hover:text-blue-800">Edit</button>
                    </div>
                    <div className="p-6">
                      <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-slate-200">
                          <thead>
                            <tr>
                              <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Distance Range</th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Fare (₹)</th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Last Updated</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-200">
                            <tr>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">0 - 5 km</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-800 font-medium">₹10.00</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">2 months ago</td>
                            </tr>
                            <tr>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">5 - 10 km</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-800 font-medium">₹15.00</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">2 months ago</td>
                            </tr>
                            <tr>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">10 - 15 km</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-800 font-medium">₹20.00</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">2 months ago</td>
                            </tr>
                            <tr>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">15 - 20 km</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-800 font-medium">₹25.00</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">2 months ago</td>
                            </tr>
                            <tr>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">20+ km</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-800 font-medium">₹30.00</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">2 months ago</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white border border-slate-200 rounded-lg overflow-hidden">
                    <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex justify-between items-center">
                      <h3 className="font-medium text-slate-800">Special Fares</h3>
                      <button className="text-sm text-blue-600 hover:text-blue-800">Edit</button>
                    </div>
                    <div className="p-6">
                      <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-slate-200">
                          <thead>
                            <tr>
                              <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Ticket Type</th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Description</th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Discount</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-200">
                            <tr>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">Day Pass</td>
                              <td className="px-6 py-4 text-sm text-slate-600">Unlimited travel for one day</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-medium">50% off regular fare</td>
                            </tr>
                            <tr>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">Senior Citizen</td>
                              <td className="px-6 py-4 text-sm text-slate-600">For passengers above 60 years</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-medium">25% off regular fare</td>
                            </tr>
                            <tr>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">Student Pass</td>
                              <td className="px-6 py-4 text-sm text-slate-600">For students with valid ID</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-medium">30% off regular fare</td>
                            </tr>
                            <tr>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">Monthly Pass</td>
                              <td className="px-6 py-4 text-sm text-slate-600">Unlimited travel for one month</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-medium">60% off regular fare</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Ticketing;