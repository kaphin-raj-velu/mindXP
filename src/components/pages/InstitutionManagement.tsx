import React, { useState } from 'react';
import { Plus, Search, MapPin, Users, CreditCard as Edit, Trash2 } from 'lucide-react';
import DataTable from '../ui/DataTable';
import Modal from '../ui/Modal';
import InstitutionForm from '../forms/InstitutionForm';

const InstitutionManagement: React.FC = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const institutions = [
    { 
      id: 1, 
      name: 'Green Valley High School', 
      location: 'Mumbai, Maharashtra', 
      type: 'High School',
      students: 1250, 
      teachers: 45, 
      status: 'Active',
      joinDate: '2024-01-15'
    },
    { 
      id: 2, 
      name: 'Eco Tech College', 
      location: 'Bangalore, Karnataka', 
      type: 'College',
      students: 2300, 
      teachers: 89, 
      status: 'Active',
      joinDate: '2023-11-20'
    },
    { 
      id: 3, 
      name: 'Sustainable Learning Academy', 
      location: 'Delhi, NCR', 
      type: 'Academy',
      students: 890, 
      teachers: 34, 
      status: 'Pending',
      joinDate: '2024-03-01'
    },
  ];

  const columns = [
    { key: 'name', label: 'Institution Name' },
    { key: 'type', label: 'Type' },
    { key: 'location', label: 'Location' },
    { key: 'students', label: 'Students' },
    { key: 'teachers', label: 'Teachers' },
    { key: 'status', label: 'Status' },
    { key: 'actions', label: 'Actions' },
  ];

  const renderInstitutionRow = (institution: any) => ({
    ...institution,
    location: (
      <div className="flex items-center">
        <MapPin className="w-4 h-4 text-gray-400 mr-2" />
        {institution.location}
      </div>
    ),
    students: (
      <div className="flex items-center">
        <Users className="w-4 h-4 text-blue-500 mr-2" />
        {institution.students}
      </div>
    ),
    teachers: (
      <div className="flex items-center">
        <Users className="w-4 h-4 text-emerald-500 mr-2" />
        {institution.teachers}
      </div>
    ),
    status: (
      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
        institution.status === 'Active' 
          ? 'bg-green-100 text-green-800' 
          : 'bg-yellow-100 text-yellow-800'
      }`}>
        {institution.status}
      </span>
    ),
    actions: (
      <div className="flex items-center space-x-2">
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
          <h1 className="text-2xl font-bold text-gray-900">Institution Management</h1>
          <p className="text-gray-600">Manage schools, colleges, and educational institutions</p>
        </div>
        
        <button
          onClick={() => setShowAddModal(true)}
          className="inline-flex items-center px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Institution
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Students</p>
              <p className="text-2xl font-bold text-gray-900">4,440</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-3 bg-emerald-100 rounded-lg">
              <Users className="w-6 h-6 text-emerald-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Teachers</p>
              <p className="text-2xl font-bold text-gray-900">168</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-3 bg-amber-100 rounded-lg">
              <MapPin className="w-6 h-6 text-amber-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Locations</p>
              <p className="text-2xl font-bold text-gray-900">3</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search institutions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <DataTable
          columns={columns}
          data={institutions.map(renderInstitutionRow)}
          searchTerm={searchTerm}
          searchKey="name"
        />
      </div>

      <Modal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        title="Add New Institution"
      >
        <InstitutionForm onSubmit={() => setShowAddModal(false)} />
      </Modal>
    </div>
  );
};

export default InstitutionManagement;