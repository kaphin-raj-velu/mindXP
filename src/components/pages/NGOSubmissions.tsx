import React, { useState } from 'react';
import { Heart, Send, CheckCircle, Clock, ExternalLink, Search } from 'lucide-react';

interface NGOSubmission {
  id: number;
  projectTitle: string;
  ngoName: string;
  ngoType: string;
  submittedDate: string;
  status: 'submitted' | 'under_review' | 'accepted' | 'feedback_received';
  studentTeam: string;
  ecoPoints: number;
  feedback?: string;
}

const NGOSubmissions: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubmission, setSelectedSubmission] = useState<NGOSubmission | null>(null);

  const submissions: NGOSubmission[] = [
    {
      id: 1,
      projectTitle: "Solar Energy Awareness Campaign",
      ngoName: "World Wildlife Fund (WWF)",
      ngoType: "Environmental Conservation",
      submittedDate: "2024-01-16",
      status: "accepted",
      studentTeam: "Grade 10A - Green Warriors",
      ecoPoints: 150,
      feedback: "Excellent initiative! The campaign materials are well-researched and visually appealing. We'd like to feature this project in our next newsletter."
    },
    {
      id: 2,
      projectTitle: "Waste Segregation Model",
      ngoName: "United Nations Environment Programme (UNEP)",
      ngoType: "Environmental Policy",
      submittedDate: "2024-01-12",
      status: "under_review",
      studentTeam: "College Eco Club - Tech Division",
      ecoPoints: 200
    },
    {
      id: 3,
      projectTitle: "Water Conservation System",
      ngoName: "Water.org",
      ngoType: "Water & Sanitation",
      submittedDate: "2024-01-22",
      status: "submitted",
      studentTeam: "Grade 11B - Eco Engineers",
      ecoPoints: 175
    },
    {
      id: 4,
      projectTitle: "Community Garden Initiative",
      ngoName: "Greenpeace India",
      ngoType: "Environmental Activism",
      submittedDate: "2024-01-18",
      status: "feedback_received",
      studentTeam: "Environmental Science Club",
      ecoPoints: 130,
      feedback: "Great concept! Consider adding more details about soil preparation and seasonal planting schedules. We'd love to see a pilot implementation."
    }
  ];

  const ngoPartners = [
    { name: "World Wildlife Fund (WWF)", type: "Environmental Conservation", projects: 15 },
    { name: "United Nations Environment Programme", type: "Environmental Policy", projects: 8 },
    { name: "Greenpeace India", type: "Environmental Activism", projects: 12 },
    { name: "Water.org", type: "Water & Sanitation", projects: 6 },
    { name: "The Nature Conservancy", type: "Conservation", projects: 9 },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'accepted':
        return 'bg-green-100 text-green-800';
      case 'under_review':
        return 'bg-blue-100 text-blue-800';
      case 'feedback_received':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-yellow-100 text-yellow-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'accepted':
        return <CheckCircle className="w-4 h-4" />;
      case 'under_review':
        return <Clock className="w-4 h-4" />;
      case 'feedback_received':
        return <Heart className="w-4 h-4" />;
      default:
        return <Send className="w-4 h-4" />;
    }
  };

  const filteredSubmissions = submissions.filter(submission =>
    submission.projectTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
    submission.ngoName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    submission.studentTeam.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">NGO Submissions</h1>
          <p className="text-gray-600">Track project submissions to NGO partners and their feedback</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Send className="w-6 h-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Submissions</p>
              <p className="text-2xl font-bold text-gray-900">{submissions.length}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-3 bg-green-100 rounded-lg">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Accepted</p>
              <p className="text-2xl font-bold text-gray-900">
                {submissions.filter(s => s.status === 'accepted').length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-3 bg-purple-100 rounded-lg">
              <Heart className="w-6 h-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">NGO Partners</p>
              <p className="text-2xl font-bold text-gray-900">{ngoPartners.length}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-3 bg-amber-100 rounded-lg">
              <Clock className="w-6 h-6 text-amber-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Under Review</p>
              <p className="text-2xl font-bold text-gray-900">
                {submissions.filter(s => s.status === 'under_review').length}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Submissions List */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Recent Submissions</h3>
              </div>
              
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search submissions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="divide-y divide-gray-200">
              {filteredSubmissions.map((submission) => (
                <div key={submission.id} className="p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h4 className="font-semibold text-gray-900">{submission.projectTitle}</h4>
                        <span className={`inline-flex items-center space-x-1 px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(submission.status)}`}>
                          {getStatusIcon(submission.status)}
                          <span>{submission.status.replace('_', ' ').toUpperCase()}</span>
                        </span>
                      </div>
                      
                      <div className="space-y-1 text-sm text-gray-600">
                        <p><strong>NGO:</strong> {submission.ngoName}</p>
                        <p><strong>Team:</strong> {submission.studentTeam}</p>
                        <p><strong>Submitted:</strong> {submission.submittedDate}</p>
                        <p><strong>Eco Points:</strong> {submission.ecoPoints}</p>
                      </div>

                      {submission.feedback && (
                        <div className="mt-3 p-3 bg-blue-50 rounded-lg">
                          <p className="text-sm text-blue-800">
                            <strong>Feedback:</strong> {submission.feedback}
                          </p>
                        </div>
                      )}
                    </div>

                    <button
                      onClick={() => setSelectedSubmission(submission)}
                      className="ml-4 p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* NGO Partners */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">NGO Partners</h3>
          </div>
          
          <div className="p-6 space-y-4">
            {ngoPartners.map((ngo, index) => (
              <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <div>
                  <p className="font-medium text-gray-900">{ngo.name}</p>
                  <p className="text-sm text-gray-500">{ngo.type}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">{ngo.projects}</p>
                  <p className="text-xs text-gray-500">projects</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Submission Detail Modal */}
      {selectedSubmission && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={() => setSelectedSubmission(null)} />
            
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
            
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-6 pt-6 pb-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Submission Details</h3>
                  <button
                    onClick={() => setSelectedSubmission(null)}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    ×
                  </button>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Project</h4>
                    <p className="text-gray-600">{selectedSubmission.projectTitle}</p>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">NGO Partner</h4>
                    <p className="text-gray-600">{selectedSubmission.ngoName}</p>
                    <p className="text-sm text-gray-500">{selectedSubmission.ngoType}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Team</h4>
                      <p className="text-gray-600">{selectedSubmission.studentTeam}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Eco Points</h4>
                      <p className="text-gray-600">{selectedSubmission.ecoPoints}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Status</h4>
                    <span className={`inline-flex items-center space-x-1 px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(selectedSubmission.status)}`}>
                      {getStatusIcon(selectedSubmission.status)}
                      <span>{selectedSubmission.status.replace('_', ' ').toUpperCase()}</span>
                    </span>
                  </div>

                  {selectedSubmission.feedback && (
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">NGO Feedback</h4>
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <p className="text-sm text-blue-800">{selectedSubmission.feedback}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NGOSubmissions;