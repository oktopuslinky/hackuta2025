import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

interface SidebarProps {
  isCollapsed: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isCollapsed, toggleSidebar }) => {
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        {!isCollapsed && <div className="logo">TalkItOut</div>}
        <button className="collapse-btn" onClick={toggleSidebar}>
          {isCollapsed ? '→' : '←'}
        </button>
      </div>

      {!isCollapsed && (
        <>
          {isAuthenticated && user ? (
            <div className="profile">
              <img src={user.picture} alt={user.name} className="profile-picture" />
              <div className="profile-info">
                <span className="profile-name">{user.name}</span>
                <span className="profile-email">{user.email}</span>
              </div>
            </div>
          ) : null}

          <div className="sidebar-content">
            <nav className="sidebar-nav">
              <Link to="/interview" className="nav-link">Interview</Link>
              <Link to="/visualizer" className="nav-link">Emotion Visualizer</Link>
            </nav>
          </div>

          <div className="sidebar-footer">
            {isAuthenticated ? (
              <button className="auth-button" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                Log Out
              </button>
            ) : (
              <button className="auth-button" onClick={() => loginWithRedirect()}>
                Log In
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;