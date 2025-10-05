import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
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
        <div className="logo">{isCollapsed ? 'T' : 'TalkItOut'}</div>
        <button className="collapse-btn" onClick={toggleSidebar}>
          {isCollapsed ? '→' : '←'}
        </button>
      </div>

      {isAuthenticated && user ? (
        <div className="profile">
          <img src={user.picture} alt={user.name} className="profile-picture" />
          {!isCollapsed && (
            <div className="profile-info">
              <span className="profile-name">{user.name}</span>
              <span className="profile-email">{user.email}</span>
            </div>
          )}
        </div>
      ) : null}

      <div className="sidebar-content">
        {/* Add navigation links here if needed */}
      </div>

      <div className="sidebar-footer">
        {isAuthenticated ? (
          <button className="auth-button" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
            {isCollapsed ? '🚪' : 'Log Out'}
          </button>
        ) : (
          <button className="auth-button" onClick={() => loginWithRedirect()}>
            {isCollapsed ? '🚪' : 'Log In'}
          </button>
        )}
      </div>
    </div>
  );
};

export default Sidebar;