import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Overview from './pages/Overview';
import UserManagement from './pages/UserManagement';
import InstitutionManagement from './pages/InstitutionManagement';
import ContentManagement from './pages/ContentManagement';
import Analytics from './pages/Analytics';
import ProjectManagement from './pages/ProjectManagement';
import NGOSubmissions from './pages/NGOSubmissions';
import Settings from './pages/Settings';

type ActiveSection = 'overview' | 'users' | 'institutions' | 'content' | 'analytics' | 'projects' | 'ngo' | 'settings';

const AdminDashboard: React.FC = () => {
  const [activeSection, setActiveSection] = useState<ActiveSection>('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return <Overview />;
      case 'users':
        return <UserManagement />;
      case 'institutions':
        return <InstitutionManagement />;
      case 'content':
        return <ContentManagement />;
      case 'analytics':
        return <Analytics />;
      case 'projects':
        return <ProjectManagement />;
      case 'ngo':
        return <NGOSubmissions />;
      case 'settings':
        return <Settings />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar 
        activeSection={activeSection} 
        setActiveSection={setActiveSection}
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
      />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header setSidebarOpen={setSidebarOpen} />
        
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;