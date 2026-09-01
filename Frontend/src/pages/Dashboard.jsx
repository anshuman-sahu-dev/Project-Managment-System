import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Folder, Users, MoreVertical, LogOut } from 'lucide-react';
import useAuthStore from '../store/authStore';
import './Dashboard.css';

export default function Dashboard() {
  const { user, logout } = useAuthStore();
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Mock fetching projects
    setTimeout(() => {
      setProjects([
        { id: 1, name: 'Website Redesign', description: 'Revamp the corporate website with new branding.', members: 4, status: 'Active' },
        { id: 2, name: 'Mobile App V2', description: 'New features for the iOS and Android apps.', members: 8, status: 'Planning' },
        { id: 3, name: 'Marketing Campaign Q4', description: 'End of year promotional campaign assets.', members: 3, status: 'Active' },
      ]);
      setIsLoading(false);
    }, 600);
  }, []);

  return (
    <div className="dashboard-layout animate-fade-in">
      <nav className="top-nav glass-panel">
        <div className="nav-brand">
          <div className="brand-logo">PC</div>
          <h2>Project Camp</h2>
        </div>
        
        <div className="nav-actions">
          <div className="user-profile">
            <div className="avatar">{user?.name?.charAt(0)}</div>
            <div className="user-info">
              <span className="user-name">{user?.name}</span>
              <span className="user-role">{user?.role}</span>
            </div>
          </div>
          <button className="btn-icon" onClick={logout} title="Logout">
            <LogOut size={20} />
          </button>
        </div>
      </nav>

      <main className="dashboard-content">
        <header className="page-header">
          <div>
            <h1>Projects</h1>
            <p>Manage and track all your active projects.</p>
          </div>
          
          {user?.role === 'admin' && (
            <button className="btn-primary">
              <Plus size={20} />
              <span>New Project</span>
            </button>
          )}
        </header>

        {isLoading ? (
          <div className="loading-state">Loading projects...</div>
        ) : (
          <div className="projects-grid">
            {projects.map(project => (
              <Link to={`/projects/${project.id}`} key={project.id} className="project-card glass-panel">
                <div className="card-header">
                  <div className="project-icon">
                    <Folder size={24} color="var(--accent-primary)" />
                  </div>
                  <button className="btn-icon">
                    <MoreVertical size={20} />
                  </button>
                </div>
                
                <h3 className="project-title">{project.name}</h3>
                <p className="project-desc">{project.description}</p>
                
                <div className="card-footer">
                  <div className="project-members">
                    <Users size={16} />
                    <span>{project.members} members</span>
                  </div>
                  <span className={`status-badge status-${project.status.toLowerCase()}`}>
                    {project.status}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
