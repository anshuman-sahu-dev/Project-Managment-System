import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Plus, MoreHorizontal, MessageSquare, Paperclip, CheckCircle2, Circle, Clock } from 'lucide-react';
import './ProjectDetails.css';

export default function ProjectDetails() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Mock fetch project details
    setTimeout(() => {
      setProject({
        id,
        name: 'Website Redesign',
        description: 'Revamp the corporate website with new branding.',
        tasks: [
          { id: 101, title: 'Design System', status: 'done', comments: 3, attachments: 1 },
          { id: 102, title: 'Homepage Wireframes', status: 'in_progress', comments: 8, attachments: 2 },
          { id: 103, title: 'Copywriting for About page', status: 'todo', comments: 0, attachments: 0 },
          { id: 104, title: 'Hero Section Assets', status: 'in_progress', comments: 1, attachments: 4 },
          { id: 105, title: 'Footer Design', status: 'todo', comments: 0, attachments: 0 },
        ]
      });
      setIsLoading(false);
    }, 500);
  }, [id]);

  if (isLoading) return <div className="loading-state">Loading project...</div>;
  if (!project) return <div className="error-message">Project not found</div>;

  const getStatusIcon = (status) => {
    switch(status) {
      case 'done': return <CheckCircle2 size={18} className="text-success" />;
      case 'in_progress': return <Clock size={18} className="text-warning" />;
      default: return <Circle size={18} className="text-muted" />;
    }
  };

  const getTasksByStatus = (status) => project.tasks.filter(t => t.status === status);

  return (
    <div className="dashboard-layout animate-fade-in">
      <nav className="top-nav glass-panel">
        <div className="nav-brand">
          <Link to="/" className="btn-icon">
            <ArrowLeft size={20} />
          </Link>
          <h2>{project.name}</h2>
        </div>
      </nav>

      <main className="dashboard-content">
        <header className="page-header">
          <div>
            <h1>Project Board</h1>
            <p>{project.description}</p>
          </div>
          <button className="btn-primary">
            <Plus size={20} />
            <span>Add Task</span>
          </button>
        </header>

        <div className="kanban-board">
          {/* TO DO COLUMN */}
          <div className="kanban-column">
            <div className="column-header">
              <h3>To Do</h3>
              <span className="task-count">{getTasksByStatus('todo').length}</span>
            </div>
            <div className="task-list">
              {getTasksByStatus('todo').map(task => (
                <div key={task.id} className="task-card glass-panel">
                  <div className="task-header">
                    {getStatusIcon(task.status)}
                    <button className="btn-icon-small"><MoreHorizontal size={16}/></button>
                  </div>
                  <h4 className="task-title">{task.title}</h4>
                  <div className="task-meta">
                    {task.comments > 0 && <span className="meta-item"><MessageSquare size={14}/> {task.comments}</span>}
                    {task.attachments > 0 && <span className="meta-item"><Paperclip size={14}/> {task.attachments}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* IN PROGRESS COLUMN */}
          <div className="kanban-column">
            <div className="column-header">
              <h3>In Progress</h3>
              <span className="task-count text-warning">{getTasksByStatus('in_progress').length}</span>
            </div>
            <div className="task-list">
              {getTasksByStatus('in_progress').map(task => (
                <div key={task.id} className="task-card glass-panel border-warning">
                  <div className="task-header">
                    {getStatusIcon(task.status)}
                    <button className="btn-icon-small"><MoreHorizontal size={16}/></button>
                  </div>
                  <h4 className="task-title">{task.title}</h4>
                  <div className="task-meta">
                    {task.comments > 0 && <span className="meta-item"><MessageSquare size={14}/> {task.comments}</span>}
                    {task.attachments > 0 && <span className="meta-item"><Paperclip size={14}/> {task.attachments}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* DONE COLUMN */}
          <div className="kanban-column">
            <div className="column-header">
              <h3>Done</h3>
              <span className="task-count text-success">{getTasksByStatus('done').length}</span>
            </div>
            <div className="task-list">
              {getTasksByStatus('done').map(task => (
                <div key={task.id} className="task-card glass-panel border-success">
                  <div className="task-header">
                    {getStatusIcon(task.status)}
                    <button className="btn-icon-small"><MoreHorizontal size={16}/></button>
                  </div>
                  <h4 className="task-title text-strike">{task.title}</h4>
                  <div className="task-meta">
                    {task.comments > 0 && <span className="meta-item"><MessageSquare size={14}/> {task.comments}</span>}
                    {task.attachments > 0 && <span className="meta-item"><Paperclip size={14}/> {task.attachments}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
