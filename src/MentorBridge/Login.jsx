import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [userType, setUserType] = useState('student');
  const [credentials, setCredentials] = useState({ username: '', email: '', password: '', confirmPassword: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isLogin && credentials.password !== credentials.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    alert(`${isLogin ? 'Logging in' : 'Registering'} as ${userType.charAt(0).toUpperCase() + userType.slice(1)}!`);
  };

  return (
    <div className="tot">
      <div className="login-page">
        <div className="login-card">
          <h2>{isLogin ? 'Login' : 'Register'} to MentorBridge</h2>
          <p>{isLogin ? 'Welcome back! Please log in.' : 'Create an account to get started.'}</p>
          
          <div className="user-toggle">
            <button
              className={userType === 'student' ? 'active' : ''}
              onClick={() => setUserType('student')}
            >
              Student
            </button>
            <button
              className={userType === 'mentor' ? 'active' : ''}
              onClick={() => setUserType('mentor')}
            >
              Mentor
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Username</label>
              <input
                type="text"
                name="username"
                value={credentials.username}
                onChange={handleInputChange}
                placeholder="Enter your username"
                required
              />
            </div>

            {!isLogin && (
              <div className="input-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={credentials.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  required
                />
              </div>
            )}

            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={credentials.password}
                onChange={handleInputChange}
                placeholder="Enter your password"
                required
              />
            </div>

            {!isLogin && (
              <div className="input-group">
                <label>Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={credentials.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="Confirm your password"
                  required
                />
              </div>
            )}

            <button type="submit" className="login-button">
              {isLogin ? 'Login' : 'Register'} as {userType.charAt(0).toUpperCase() + userType.slice(1)}
            </button>
          </form>

          <p className="toggle-text">
            {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
            <span onClick={() => setIsLogin(!isLogin)} className="toggle-link">
              {isLogin ? 'Register' : 'Login'}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
