import { Link, useNavigate } from 'react-router-dom';
import logo from "../assets/logo.png"
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/UserSlice';

function Header() {
  const [token, setToken] = useState("")
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout())
    navigate('/login');
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    setToken(token);
  }, [])

  return (
    <header 
      className="shadow w-100 position-fixed start-0 top-0" 
      style={{ 
        backgroundColor: '#FFFFFF', // White background
        zIndex: '9999',
      }}
    >
      <div className="container">
        <div className="d-flex justify-content-between align-items-center py-2">
          {/* Logo/Brand */}
          <Link to="/" className="h4 text-dark text-decoration-none fw-bold">
            <img src={logo} alt="logo" width={150} />
          </Link>

          {/* Navigation Buttons */}
          <div className="d-flex gap-3">
            <Link
              to="/addpost"
              className="btn"
              style={{
                backgroundColor: '#F8BBD0', // Aerial pink
                borderColor: '#F8BBD0',
                color: '#FFFFFF', // White text
              }}
            >
              Add Post
            </Link>
            <Link
              to="/"
              className="btn"
              style={{
                backgroundColor: '#F48FB1', // Slightly darker aerial pink
                borderColor: '#F48FB1',
                color: '#FFFFFF', // White text
              }}
            >
              Show Posts
            </Link>
            <button
              onClick={handleLogout}
              className="btn"
              style={{
                backgroundColor: token ? '#E57373' : '#F8BBD0', // Logout: Coral red; Login: Aerial pink
                borderColor: token ? '#E57373' : '#F8BBD0',
                color: '#FFFFFF', // White text
              }}
            >
              {token ? "Logout" : "Login"}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
