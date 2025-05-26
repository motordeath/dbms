import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  icon: React.ReactNode;
  trend: 'up' | 'down' | 'neutral';
}

const StatCard: React.FC<StatCardProps> = ({ title, value, change, icon, trend }) => {
  const trendColors = {
    up: 'text-green-600',
    down: 'text-red-600',
    neutral: 'text-slate-600',
  };
  
  return (
    <div className="bg-white rounded-xl shadow-sm p-5 transition-all duration-300 hover:shadow-md">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-slate-500 mb-1">{title}</p>
          <h3 className="text-2xl font-semibold text-slate-800">{value}</h3>
        </div>
        <div className="p-2 rounded-lg bg-slate-100">
          {icon}
        </div>
      </div>
      
      <div className="mt-4 flex items-center">
        <span className={`inline-flex items-center ${trendColors[trend]}`}>
          {trend === 'up' ? (
            <TrendingUp size={16} className="mr-1" />
          ) : trend === 'down' ? (
            <TrendingDown size={16} className="mr-1" />
          ) : null}
          {change}
        </span>
        <span className="text-slate-500 text-sm ml-2">vs yesterday</span>
      </div>
    </div>
  );
};

export default StatCard;