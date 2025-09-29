import React, { useState } from 'react';
import { Plus, Search, Filter, BookOpen, Video, FileText, CreditCard as Edit, Trash2, Eye } from 'lucide-react';
import DataTable from '../ui/DataTable';
import Modal from '../ui/Modal';
import ContentForm from '../forms/ContentForm';

const ContentManagement: React.FC = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');

  const content = [
    { 
      id: 1, 
      title: 'Solar Energy Fundamentals', 
      type: 'Video', 
      category: 'Renewable Energy',
      author: 'Dr. Jane Smith',
      status: 'Published', 
      views: 1250,
      duration: '12:34',
      createdAt: '2024-01-15'
    },
    { 
      id: 2, 
      title: 'Water Conservation Techniques', 
      type: 'Article', 
      category: 'Conservation',
      author: 'Prof. Mike Johnson',
      status: 'Draft', 
      views: 0,
      duration: '5 min read',
      createdAt: '2024-01-20'
    },
    { 
      id: 3, 
      title: 'Climate Change Impact Assessment', 
      type: 'Task', 
      category: 'Climate Science',
      author: 'Dr. Sarah Wilson',
      status: 'Published', 
      views: 890,
      duration: '45 min',
      createdAt: '2024-01-25'
    },
  ];

  const columns = [
    { key: 'title', label: 'Title' },
    { key: 'type', label: 'Type' },
    { key: 'category', label: 'Category' },
    { key: 'author', label: 'Author' },
    { key: 'status', label: 'Status' },
    { key: 'views', label: 'Views' },
    { key: 'actions', label: 'Actions' },
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Video':
        return <Video className="w-4 h-4 text-red-500" />;
      case 'Article':
        return <FileText className="w-4 h-4 text-blue-500" />;
      case 'Task':
        return <BookOpen className="w-4 h-4 text-emerald-500" />;
      default:
        return <FileText className="w-4 h-4 text-gray-500" />;
    }
  };

  const renderContentRow = (item: any) => ({
    ...item,
    title: (
      <div>
        <p className="font-medium text-gray-900">{item.title}</p>
        <p className="text-sm text-gray-500">{item.duration}</p>
      </div>
    ),
    type: (
      <div className="flex items-center">
        {getTypeIcon(item.type)}
        <span className="ml-2">{item.type}</span>
      </div>
    ),
    status: (
      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
        item.status === 'Published' 
          ? 'bg-green-100 text-green-800' 
          : 'bg-yellow-100 text-yellow-800'
      }`}>
        {item.status}
      </span>
    ),
    views: item.views.toLocaleString(),
    actions: (
      <div className="flex items-center space-x-2">
        <button className="p-1 text-blue-600 hover:bg-blue-100 rounded transition-colors">
          <Eye className="w-4 h-4" />
        </button>
        <button className="p-1 text-emerald-600 hover:bg-emerald-100 rounded transition-colors">
          <Edit className="w-4 h-4" />
        </button>
        <button className="p-1 text-red-600 hover:bg-red-100 rounded transition-colors">
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    ),
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Content Management</h1>
          <p className="text-gray-600">Manage educational content, videos, articles, and tasks</p>
        </div>
        
        <button
          onClick={() => setShowAddModal(true)}
          className="inline-flex items-center px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Content
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-3 bg-red-100 rounded-lg">
              <Video className="w-6 h-6 text-red-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Videos</p>
              <p className="text-2xl font-bold text-gray-900">245</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-3 bg-blue-100 rounded-lg">
              <FileText className="w-6 h-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Articles</p>
              <p className="text-2xl font-bold text-gray-900">892</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-3 bg-emerald-100 rounded-lg">
              <BookOpen className="w-6 h-6 text-emerald-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Tasks</p>
              <p className="text-2xl font-bold text-gray-900">110</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search content..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-gray-400" />
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Types</option>
                <option value="Video">Videos</option>
                <option value="Article">Articles</option>
                <option value="Task">Tasks</option>
              </select>
            </div>
          </div>
        </div>

        <DataTable
          columns={columns}
          data={content.map(renderContentRow)}
          searchTerm={searchTerm}
          searchKey="title"
        />
      </div>

      <Modal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        title="Add New Content"
      >
        <ContentForm onSubmit={() => setShowAddModal(false)} />
      </Modal>
    </div>
  );
};

export default ContentManagement;