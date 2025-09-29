import React, { useState } from 'react';
import { FolderOpen, Eye, CheckCircle, XCircle, Download, Search, Filter } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  team: string;
  files: string[];
  hashStatus: string;
  status: 'pending' | 'approved' | 'rejected';
  submittedDate: string;
  ecoPoints: number;
}

const ProjectManagement: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const projects: Project[] = [
    {
      id: 1,
      title: "Solar Energy Awareness Campaign",
      description: "Students created awareness posters and presentations on renewable energy sources, focusing on solar power benefits and implementation strategies.",
      team: "Grade 10A - Green Warriors",
      files: ["solar_poster.pdf", "presentation.pptx", "campaign_video.mp4"],
      hashStatus: "Unique - No duplicates found",
      status: 'pending',
      submittedDate: '2024-01-15',
      ecoPoints: 150
    },
    {
      id: 2,
      title: "Waste Segregation Model",
      description: "Prototype for automated waste segregation using color-coded bins, sensors, and Arduino-based sorting mechanism.",
      team: "College Eco Club - Tech Division",
      files: ["technical_report.docx", "model_photos.zip", "code_files.zip"],
      hashStatus: "Verified - Original content",
      status: 'approved',
      submittedDate: '2024-01-10',
      ecoPoints: 200
    },
    {
      id: 3,
      title: "Water Conservation System",
      description: "Rainwater harvesting system design with cost analysis and implementation plan for school premises.",
      team: "Grade 11B - Eco Engineers",
      files: ["design_blueprint.pdf", "cost_analysis.xlsx", "implementation_plan.docx"],
      hashStatus: "Under review",
      status: 'pending',
      submittedDate: '2024-01-20',
      ecoPoints: 175
    },
    {
      id: 4,
      title: "Plastic Recycling Initiative",
      description: "Community-based plastic waste collection and recycling program with local partnerships.",
      team: "Environmental Science Club",
      files: ["project_proposal.pdf", "partnership_agreements.pdf"],
      hashStatus: "Duplicate content detected",
      status: 'rejected',
      submittedDate: '2024-01-08',
      ecoPoints: 0
    }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.team.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || project.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved':
        return 'bg-green-100 text-green-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-yellow-100 text-yellow-800';
    }
  };

  const getHashStatusColor = (hashStatus: string) => {
    if (hashStatus.includes('Unique') || hashStatus.includes('Verified')) {
      return 'text-green-600';
    } else if (hashStatus.includes('Duplicate')) {
      return 'text-red-600';
    }
    return 'text-yellow-600';
  };

  const handleApprove = (projectId: number) => {
    // Logic to approve project
    console.log('Approving project:', projectId);
  };

  const handleReject = (projectId: number) => {
    // Logic to reject project
    console.log('Rejecting project:', projectId);
  };

  const handleDownload = (fileName: string) => {
    // Logic to download file
    console.log('Downloading file:', fileName);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Project Management</h1>
          <p className="text-gray-600">Review and manage student project submissions</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-3 bg-blue-100 rounded-lg">
              <FolderOpen className="w-6 h-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Projects</p>
              <p className="text-2xl font-bold text-gray-900">{projects.length}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-3 bg-green-100 rounded-lg">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Approved</p>
              <p className="text-2xl font-bold text-gray-900">
                {projects.filter(p => p.status === 'approved').length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-3 bg-yellow-100 rounded-lg">
              <Eye className="w-6 h-6 text-yellow-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Pending Review</p>
              <p className="text-2xl font-bold text-gray-900">
                {projects.filter(p => p.status === 'pending').length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-3 bg-red-100 rounded-lg">
              <XCircle className="w-6 h-6 text-red-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Rejected</p>
              <p className="text-2xl font-bold text-gray-900">
                {projects.filter(p => p.status === 'rejected').length}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-gray-400" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Status</option>
                <option value="pending">Pending</option>
                <option value="approved">Approved</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>
          </div>
        </div>

        {/* Projects List */}
        <div className="divide-y divide-gray-200">
          {filteredProjects.map((project) => (
            <div key={project.id} className="p-6 hover:bg-gray-50 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(project.status)}`}>
                      {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-3">{project.description}</p>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                    <span><strong>Team:</strong> {project.team}</span>
                    <span><strong>Submitted:</strong> {project.submittedDate}</span>
                    <span><strong>Eco Points:</strong> {project.ecoPoints}</span>
                    <span className={`font-medium ${getHashStatusColor(project.hashStatus)}`}>
                      <strong>Hash Status:</strong> {project.hashStatus}
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-2 ml-4">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                  {project.status === 'pending' && (
                    <>
                      <button
                        onClick={() => handleApprove(project.id)}
                        className="px-3 py-2 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700 transition-colors"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => handleReject(project.id)}
                        className="px-3 py-2 bg-red-600 text-white text-sm rounded-lg hover:bg-red-700 transition-colors"
                      >
                        Reject
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={() => setSelectedProject(null)} />
            
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
            
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full">
              <div className="bg-white px-6 pt-6 pb-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{selectedProject.title}</h3>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <XCircle className="w-6 h-6" />
                  </button>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Description</h4>
                    <p className="text-gray-600">{selectedProject.description}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Team</h4>
                      <p className="text-gray-600">{selectedProject.team}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Eco Points</h4>
                      <p className="text-gray-600">{selectedProject.ecoPoints}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Hash Status</h4>
                    <p className={`${getHashStatusColor(selectedProject.hashStatus)}`}>
                      {selectedProject.hashStatus}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Project Files</h4>
                    <div className="space-y-2">
                      {selectedProject.files.map((file, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <span className="text-sm text-gray-700">{file}</span>
                          <button
                            onClick={() => handleDownload(file)}
                            className="flex items-center space-x-1 px-3 py-1 text-sm text-blue-600 hover:bg-blue-100 rounded transition-colors"
                          >
                            <Download className="w-4 h-4" />
                            <span>Download</span>
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {selectedProject.status === 'pending' && (
                  <div className="flex justify-end space-x-3 mt-6 pt-4 border-t border-gray-200">
                    <button
                      onClick={() => handleReject(selectedProject.id)}
                      className="px-4 py-2 text-sm font-medium text-red-700 bg-red-100 rounded-lg hover:bg-red-200 transition-colors"
                    >
                      Reject Project
                    </button>
                    <button
                      onClick={() => handleApprove(selectedProject.id)}
                      className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors"
                    >
                      Approve & Submit to NGO
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectManagement;