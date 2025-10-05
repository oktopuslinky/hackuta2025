import { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { MessageCircle, Sparkles, Zap, Shield, Users, Search, Link2, Sun, Moon } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { ComponentType } from 'react';
import './landing.css';

const LogoIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
  </svg>
);

// Navigation Component
const Navigation = ({ theme, toggleTheme }: { theme: string, toggleTheme: () => void }) => {
  const [scrolled, setScrolled] = useState(false);
  const { loginWithRedirect } = useAuth0();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navigation ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-content">
          <div className="logo-container">
            <LogoIcon className="logo-icon" />
            <span className="logo-text">TalkItOut</span>
          </div>
          
          <div className="nav-links-container">
            <div className="nav-links">
              <button className="nav-button" onClick={() => loginWithRedirect()}>
                Sign In
              </button>
            </div>
            <button onClick={toggleTheme} className="theme-toggle-button">
              <Sun className={`theme-icon sun-icon ${theme === 'dark' ? 'hidden' : ''}`} />
              <Moon className={`theme-icon moon-icon ${theme === 'light' ? 'hidden' : ''}`} />
            </button>
            <Link to="/app" style={{ textDecoration: 'none' }}>
              <button className="open-chat-button">
                <MessageCircle className="open-chat-icon" />
                Open Chat
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Floating Chat Button
const FloatingChatButton = () => {
  return (
    <button className="floating-chat-button">
      <MessageCircle className="floating-chat-icon" />
      <span className="notification-ping"></span>
      <span className="notification-dot"></span>
    </button>
  );
};

// Hero Component
const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-background">
        <div className="hero-bg-shape-1"></div>
        <div className="hero-bg-shape-2"></div>
      </div>
      
      <div className="hero-content">
        <div className="hero-badge">
          <Sparkles className="hero-badge-icon" />
          Now with AI-powered conversations
        </div>
        <h1 className="hero-title">
          TalkItOut
        </h1>
        <p className="hero-subtitle">
          <span className="hero-subtitle-highlight">Everyone deserves to be heard. </span>
          Let&apos;s talk about it.
        </p>
        <div className="hero-buttons">
          <Link to="/app">
            <button className="get-started-button">
              <span className="get-started-button-content">
                Get Started Free
                <Zap className="get-started-icon" />
              </span>
            </button>
          </Link>
          <button onClick={() => alert('Video coming soon!')} className="watch-demo-button">
            Watch Demo
          </button>
        </div>
      </div>
    </section>
  );
};

// Stats Component
const Stats = () => {
  const stats = [
    { number: "50K+", label: "Active Users" },
    { number: "1M+", label: "Messages Daily" },
    { number: "99.9%", label: "Uptime" }
  ];

  return (
    <section className="stats-section">
      <div className="stats-container">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="stat-item"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div className="stat-number">
              {stat.number}
            </div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Feature Card Props Interface
interface FeatureCardProps {
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
  delay: number;
}

// Feature Card Component
const FeatureCard = ({ title, description, icon: Icon, delay }: FeatureCardProps) => {
  return (
    <div
      className="feature-card"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="feature-card-icon-container">
        <Icon className="feature-card-icon" />
      </div>
      <h3 className="feature-card-title">
        {title}
      </h3>
      <p className="feature-card-description">{description}</p>
    </div>
  );
};

// Features Component
const Features = () => {
  const features = [
    {
      icon: Sparkles,
      title: "Simple & Intuitive",
      description: "Clean interface designed for effortless communication without the learning curve"
    },
    {
      icon: Zap,
      title: "Real-time Sync",
      description: "Stay connected with instant message delivery across all your devices"
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Your conversations are protected with end-to-end encryption"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Create channels, share files, and work together seamlessly"
    },
    {
      icon: Search,
      title: "Smart Search",
      description: "Find any message or file instantly with powerful search tools"
    },
    {
      icon: Link2,
      title: "Custom Integrations",
      description: "Connect with your favorite tools and automate workflows"
    }
  ];

  return (
    <section id="features" className="features-section">
      <div className="features-container">
        <div className="features-header">
          <h2 className="features-title">
            Everything You Need
          </h2>
          <p className="features-subtitle">
            Powerful features that make communication effortless and enjoyable
          </p>
        </div>
        <div className="features-grid">
          {features.map((feature, i) => (
            <FeatureCard key={i} {...feature} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
};

// CTA Component
const CTA = () => {
  return (
    <section className="cta-section">
      <div className="cta-background">
        <div className="cta-bg-shape-1"></div>
        <div className="cta-bg-shape-2"></div>
        <div className="cta-bg-shape-3"></div>
      </div>
      <div className="cta-content">
        <h2 className="cta-title">
          Ready to start talking?
        </h2>
        <p className="cta-subtitle">
          Join thousands who communicate better every day. Start your free trial now.
        </p>
        <div className="cta-buttons">
          <Link to="/app">
            <button className="start-trial-button">
              <span className="start-trial-button-content">
                Start Free Trial
                <Zap className="start-trial-icon" />
              </span>
            </button>
          </Link>
          <button onClick={() => alert('Video coming soon!')} className="contact-sales-button">
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-about">
            <div className="footer-logo-container">
              <LogoIcon className="footer-logo-icon" />
              <span className="footer-logo-text">TalkItOut</span>
            </div>
            <p className="footer-about-text">
              Making communication simple and effective for everyone.
            </p>
          </div>
          <div className="footer-links">
            <h4 className="footer-links-title">Product</h4>
            <div className="footer-links-list">
              <a href="#" className="footer-link">Features</a>
              <a href="#" className="footer-link">Pricing</a>
              <a href="#" className="footer-link">Updates</a>
            </div>
          </div>
          <div className="footer-links">
            <h4 className="footer-links-title">Company</h4>
            <div className="footer-links-list">
              <a href="#" className="footer-link">About</a>
              <a href="#" className="footer-link">Blog</a>
              <a href="#" className="footer-link">Careers</a>
            </div>
          </div>
          <div className="footer-links">
            <h4 className="footer-links-title">Legal</h4>
            <div className="footer-links-list">
              <a href="#" className="footer-link">Privacy</a>
              <a href="#" className="footer-link">Terms</a>
              <a href="#" className="footer-link">Security</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 TalkItOut. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// Main Landing Component
const Landing = () => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme : 'light';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`landing-page ${theme}`}>
      <Navigation theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <Stats />
      <Features />
      <CTA />
      <Footer />
      <FloatingChatButton />
    </div>
  );
};

export default Landing;