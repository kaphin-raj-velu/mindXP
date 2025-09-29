import React, { useState } from 'react';
import { Plus, Search, Filter, CreditCard as Edit, Trash2, Eye } from 'lucide-react';
import DataTable from '../ui/DataTable';
import Modal from '../ui/Modal';
import UserForm from '../forms/UserForm';

const UserManagement: React.FC = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRole, setFilterRole] = useState('all');

  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Student', institution: 'ABC School', status: 'Active', ecoPoints: 245 },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Teacher', institution: 'ABC School', status: 'Active', ecoPoints: 0 },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com', role: 'Admin', institution: 'XYZ College', status: 'Active', ecoPoints: 0 },
    { id: 4, name: 'Sarah Wilson', email: 'sarah@example.com', role: 'Student', institution: 'XYZ College', status: 'Inactive', ecoPoints: 189 },
  ];

  const columns = [
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' },
    { key: 'role', label: 'Role' },
    { key: 'institution', label: 'Institution' },
    { key: 'ecoPoints', label: 'Eco Points' },
    { key: 'status', label: 'Status' },
    { key: 'actions', label: 'Actions' },
  ];

  const renderUserRow = (user: any) => ({
    ...user,
    ecoPoints: user.role === 'Student' ? user.ecoPoints : '-',
    status: (
      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
        user.status === 'Active' 
          ? 'bg-green-100 text-green-800' 
          : 'bg-red-100 text-red-800'
      }`}>
        {user.status}
      </span>
    ),
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
          <h1 className="text-2xl font-bold text-gray-900">User Management</h1>
          <p className="text-gray-600">Manage students, teachers, and administrators</p>
        </div>
        
        <button
          onClick={() => setShowAddModal(true)}
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add User
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search users..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-gray-400" />
              <select
                value={filterRole}
                onChange={(e) => setFilterRole(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Roles</option>
                <option value="Student">Students</option>
                <option value="Teacher">Teachers</option>
                <option value="Admin">Admins</option>
              </select>
            </div>
          </div>
        </div>

        <DataTable
          columns={columns}
          data={users.map(renderUserRow)}
          searchTerm={searchTerm}
          searchKey="name"
        />
      </div>

      <Modal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        title="Add New User"
      >
        <UserForm onSubmit={() => setShowAddModal(false)} />
      </Modal>
    </div>
  );
};

export default UserManagement;