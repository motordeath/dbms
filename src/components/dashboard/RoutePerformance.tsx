import React from 'react';

const RoutePerformance: React.FC = () => {
  const routes = [
    { id: 1, route: 'Route 522', performance: 96.8 },
    { id: 2, route: 'Route 340', performance: 82.3 },
    { id: 3, route: 'Route 423', performance: 94.2 },
  ];
  
  return (
    <div className="space-y-3">
      {routes.map(route => {
        let barColor = 'bg-green-500';
        if (route.performance < 85) {
          barColor = 'bg-amber-500';
        } else if (route.performance < 75) {
          barColor = 'bg-red-500';
        }
        
        return (
          <div key={route.id}>
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs font-medium text-slate-700">{route.route}</span>
              <span className="text-xs text-slate-600">{route.performance}%</span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-1.5">
              <div 
                className={`${barColor} h-1.5 rounded-full`}
                style={{ width: `${route.performance}%` }}
              ></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RoutePerformance;