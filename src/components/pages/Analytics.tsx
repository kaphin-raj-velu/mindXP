import React, { useState } from 'react';
import { BarChart3, TrendingUp, Award, Target } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import StatsCard from '../ui/StatsCard';

const Analytics: React.FC = () => {
  const [timeRange, setTimeRange] = useState('7d');

  const stats = [
    {
      title: 'Total Eco Points',
      value: '89,234',
      change: '+18%',
      changeType: 'increase' as const,
      icon: Award,
      color: 'purple'
    },
    {
      title: 'Task Completions',
      value: '5,678',
      change: '+23%',
      changeType: 'increase' as const,
      icon: Target,
      color: 'blue'
    },
    {
      title: 'Engagement Rate',
      value: '84.2%',
      change: '+5.2%',
      changeType: 'increase' as const,
      icon: TrendingUp,
      color: 'emerald'
    },
    {
      title: 'Content Views',
      value: '12,543',
      change: '+12%',
      changeType: 'increase' as const,
      icon: BarChart3,
      color: 'amber'
    },
  ];

  const monthlyData = [
    { month: 'Jan', users: 400, engagement: 65, ecoPoints: 1200 },
    { month: 'Feb', users: 600, engagement: 72, ecoPoints: 1800 },
    { month: 'Mar', users: 800, engagement: 68, ecoPoints: 2200 },
    { month: 'Apr', users: 1080, engagement: 85, ecoPoints: 2800 },
    { month: 'May', users: 1200, engagement: 89, ecoPoints: 3200 },
    { month: 'Jun', users: 1380, engagement: 84, ecoPoints: 3600 },
  ];

  const taskCompletionData = [
    { class: '10A', completed: 85, total: 100 },
    { class: '10B', completed: 92, total: 100 },
    { class: '11A', completed: 78, total: 100 },
    { class: '11B', completed: 88, total: 100 },
    { class: '12A', completed: 95, total: 100 },
    { class: '12B', completed: 82, total: 100 },
  ];

  const contentTypeData = [
    { name: 'Videos', value: 245, color: '#EF4444' },
    { name: 'Articles', value: 892, color: '#3B82F6' },
    { name: 'Tasks', value: 110, color: '#10B981' },
    { name: 'Quizzes', value: 67, color: '#F59E0B' },
  ];

  const topPerformers = [
    { rank: 1, name: 'Green Valley High School', points: 15430, change: '+12%' },
    { rank: 2, name: 'Eco Tech College', points: 14250, change: '+8%' },
    { rank: 3, name: 'Sustainable Learning Academy', points: 13890, change: '+15%' },
    { rank: 4, name: 'Nature First School', points: 12670, change: '+6%' },
    { rank: 5, name: 'Earth Sciences Institute', points: 11980, change: '+10%' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h1>
          <p className="text-gray-600">Track performance, engagement, and eco-points across the platform</p>
        </div>
        
        <select
          value={timeRange}
          onChange={(e) => setTimeRange(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="7d">Last 7 days</option>
          <option value="30d">Last 30 days</option>
          <option value="90d">Last 3 months</option>
          <option value="1y">Last year</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <StatsCard key={stat.title} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">User Growth & Engagement</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="users" stroke="#3B82F6" strokeWidth={2} name="Users" />
              <Line type="monotone" dataKey="engagement" stroke="#10B981" strokeWidth={2} name="Engagement %" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Task Completion by Class</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={taskCompletionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="class" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="completed" fill="#10B981" name="Completed Tasks" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Eco Points Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="ecoPoints" stroke="#F59E0B" strokeWidth={3} name="Eco Points" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Content Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={contentTypeData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {contentTypeData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Performing Institutions</h3>
          <div className="space-y-4">
            {topPerformers.map((institution) => (
              <div key={institution.rank} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="flex items-center space-x-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white ${
                    institution.rank === 1 ? 'bg-yellow-500' :
                    institution.rank === 2 ? 'bg-gray-400' :
                    institution.rank === 3 ? 'bg-amber-600' : 'bg-blue-500'
                  }`}>
                    {institution.rank}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{institution.name}</p>
                    <p className="text-sm text-gray-500">{institution.points.toLocaleString()} points</p>
                  </div>
                </div>
                <span className="text-sm text-green-600 font-medium">{institution.change}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Content Performance</h3>
          <div className="space-y-4">
            {[
              { title: 'Solar Energy Fundamentals', views: 1250, completion: 92, type: 'Video' },
              { title: 'Water Conservation Guide', views: 890, completion: 88, type: 'Article' },
              { title: 'Climate Action Challenge', views: 756, completion: 85, type: 'Task' },
              { title: 'Renewable Energy Quiz', views: 654, completion: 82, type: 'Task' },
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <div>
                  <p className="font-medium text-gray-900">{item.title}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>{item.views} views</span>
                    <span>•</span>
                    <span>{item.completion}% completion</span>
                    <span>•</span>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      item.type === 'Video' ? 'bg-red-100 text-red-800' :
                      item.type === 'Article' ? 'bg-blue-100 text-blue-800' : 'bg-emerald-100 text-emerald-800'
                    }`}>
                      {item.type}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;