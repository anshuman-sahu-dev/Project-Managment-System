import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, User, Mail, Shield, Badge, Save, Lock } from 'lucide-react';
import useAuthStore from '../store/authStore';
import './AdminProfile.css';

export default function AdminProfile() {
  const { user } = useAuthStore();
  
  // Local state for profile editing
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    employeeId: user?.employeeId || ''
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    // Simulate API call to update profile
    setTimeout(() => {
      setIsEditing(false);
      alert('Profile updated successfully!'); // Replace with toast in real app
    }, 500);
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    // Simulate API call to update password
    setTimeout(() => {
      setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
      alert('Password updated successfully!'); // Replace with toast in real app
    }, 500);
  };

  return (
    <div className="dashboard-layout animate-fade-in">
      <nav className="top-nav glass-panel">
        <div className="nav-brand">
          <Link to="/" className="btn-icon">
            <ArrowLeft size={20} />
          </Link>
          <h2>Admin Profile</h2>
        </div>
      </nav>

      <main className="profile-content">
        <div className="profile-grid">
          
          {/* Profile Overview Card */}
          <div className="profile-card glass-panel text-center">
            <div className="profile-avatar-large">
              {user?.name?.charAt(0) || 'A'}
            </div>
            <h2>{user?.name}</h2>
            <div className="role-badge">
              <Shield size={14} />
              <span>{user?.role?.toUpperCase()}</span>
            </div>
            <p className="profile-desc">System Administrator with full access to project and user management.</p>
          </div>

          {/* Profile Details Form */}
          <div className="profile-details glass-panel">
            <div className="section-header">
              <h3>Personal Information</h3>
              <button 
                className={`btn-secondary ${isEditing ? 'active' : ''}`}
                onClick={() => setIsEditing(!isEditing)}
              >
                {isEditing ? 'Cancel' : 'Edit Profile'}
              </button>
            </div>

            <form onSubmit={handleProfileSubmit} className="profile-form">
              <div className="form-row">
                <div className="input-group">
                  <label>Full Name</label>
                  <div className="input-wrapper">
                    <User className="input-icon" size={18} />
                    <input 
                      type="text" 
                      className="input-field" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      disabled={!isEditing}
                    />
                  </div>
                </div>
                
                <div className="input-group">
                  <label>Employee ID</label>
                  <div className="input-wrapper">
                    <Badge className="input-icon" size={18} />
                    <input 
                      type="text" 
                      className="input-field" 
                      value={formData.employeeId}
                      onChange={(e) => setFormData({...formData, employeeId: e.target.value})}
                      disabled={!isEditing}
                    />
                  </div>
                </div>
              </div>

              <div className="input-group">
                <label>Email Address</label>
                <div className="input-wrapper">
                  <Mail className="input-icon" size={18} />
                  <input 
                    type="email" 
                    className="input-field" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    disabled={!isEditing}
                  />
                </div>
              </div>

              {isEditing && (
                <button type="submit" className="btn-primary" style={{ marginTop: '1rem' }}>
                  <Save size={18} />
                  <span>Save Changes</span>
                </button>
              )}
            </form>

            <hr className="divider" />

            {/* Password Management */}
            <div className="section-header">
              <h3>Change Password</h3>
            </div>
            
            <form onSubmit={handlePasswordSubmit} className="profile-form">
              <div className="input-group">
                <label>Current Password</label>
                <div className="input-wrapper">
                  <Lock className="input-icon" size={18} />
                  <input 
                    type="password" 
                    className="input-field" 
                    value={passwordData.currentPassword}
                    onChange={(e) => setPasswordData({...passwordData, currentPassword: e.target.value})}
                    required
                  />
                </div>
              </div>
              
              <div className="form-row">
                <div className="input-group">
                  <label>New Password</label>
                  <div className="input-wrapper">
                    <Lock className="input-icon" size={18} />
                    <input 
                      type="password" 
                      className="input-field" 
                      value={passwordData.newPassword}
                      onChange={(e) => setPasswordData({...passwordData, newPassword: e.target.value})}
                      required
                    />
                  </div>
                </div>
                
                <div className="input-group">
                  <label>Confirm New Password</label>
                  <div className="input-wrapper">
                    <Lock className="input-icon" size={18} />
                    <input 
                      type="password" 
                      className="input-field" 
                      value={passwordData.confirmPassword}
                      onChange={(e) => setPasswordData({...passwordData, confirmPassword: e.target.value})}
                      required
                    />
                  </div>
                </div>
              </div>

              <button type="submit" className="btn-secondary" style={{ marginTop: '1rem' }}>
                Update Password
              </button>
            </form>
          </div>

        </div>
      </main>
    </div>
  );
}
