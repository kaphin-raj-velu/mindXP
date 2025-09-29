import React from 'react';

interface ChartProps {
  data: any[];
}

const Chart: React.FC<ChartProps> = ({ data }) => {
  const maxValue = Math.max(...data.flatMap(item => Object.values(item).filter(val => typeof val === 'number')));

  return (
    <div className="w-full h-64 flex items-end justify-between space-x-2">
      {data.map((item, index) => {
        const keys = Object.keys(item).filter(key => typeof item[key] === 'number');
        return (
          <div key={index} className="flex-1 flex flex-col items-center space-y-2">
            <div className="w-full h-48 flex items-end justify-center space-x-1">
              {keys.map((key, keyIndex) => (
                <div
                  key={key}
                  className={`w-4 rounded-t transition-all duration-500 ${
                    keyIndex === 0 ? 'bg-blue-500' : 
                    keyIndex === 1 ? 'bg-emerald-500' : 'bg-amber-500'
                  }`}
                  style={{ height: `${(item[key] / maxValue) * 100}%` }}
                />
              ))}
            </div>
            <span className="text-xs text-gray-500">{item.name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Chart;