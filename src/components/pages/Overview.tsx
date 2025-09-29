import React from 'react';
import { Users, Building2, BookOpen, TrendingUp, Award, Activity } from 'lucide-react';
import StatsCard from '../ui/StatsCard';
import Chart from '../ui/Chart';

const Overview: React.FC = () => {
  const stats = [
    {
      title: 'Total Users',
      value: '12,543',
      change: '+12%',
      changeType: 'increase' as const,
      icon: Users,
      color: 'blue'
    },
    {
      title: 'Institutions',
      value: '156',
      change: '+8%',
      changeType: 'increase' as const,
      icon: Building2,
      color: 'emerald'
    },
    {
      title: 'Content Items',
      value: '1,247',
      change: '+23%',
      changeType: 'increase' as const,
      icon: BookOpen,
      color: 'amber'
    },
    {
      title: 'Eco Points Earned',
      value: '89,234',
      change: '+18%',
      changeType: 'increase' as const,
      icon: Award,
      color: 'purple'
    },
  ];

  const chartData = [
    { name: 'Jan', users: 400, engagement: 240 },
    { name: 'Feb', users: 600, engagement: 398 },
    { name: 'Mar', users: 800, engagement: 600 },
    { name: 'Apr', users: 1080, engagement: 908 },
    { name: 'May', users: 1200, engagement: 1000 },
    { name: 'Jun', users: 1380, engagement: 1200 },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
        <p className="text-gray-600">Welcome back! Here's what's happening with your platform.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <StatsCard key={stat.title} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">User Growth</h3>
          <Chart data={chartData} />
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {[
              { action: 'New user registered', user: 'John Doe', time: '2 hours ago', type: 'user' },
              { action: 'Content uploaded', user: 'Teacher Mary', time: '4 hours ago', type: 'content' },
              { action: 'Institution added', user: 'Admin Sarah', time: '6 hours ago', type: 'institution' },
              { action: 'Task completed', user: 'Student Alex', time: '8 hours ago', type: 'task' },
            ].map((activity, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <div className={`p-2 rounded-full ${
                  activity.type === 'user' ? 'bg-blue-100' :
                  activity.type === 'content' ? 'bg-emerald-100' :
                  activity.type === 'institution' ? 'bg-amber-100' : 'bg-purple-100'
                }`}>
                  <Activity className={`w-4 h-4 ${
                    activity.type === 'user' ? 'text-blue-600' :
                    activity.type === 'content' ? 'text-emerald-600' :
                    activity.type === 'institution' ? 'text-amber-600' : 'text-purple-600'
                  }`} />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                  <p className="text-xs text-gray-500">{activity.user} • {activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;