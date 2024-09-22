import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const Navbarschools = () => {

    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light-mode');

    const themehandler = () => {
        if (theme === 'light-mode') {
            setTheme('dark-mode');
            localStorage.setItem('theme', 'dark-mode');
        } else {
            setTheme('light-mode');
            localStorage.setItem('theme', 'light-mode');
        }
    };


    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    const navigate = useNavigate();
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path ? 'active-nav-link' : '';
    };

    return (
        <div className='navbar-home stickt-navbar'>
            <nav className="navbar navbar-expand-lg navbar_home_navbar">
                <div className="container-fluid navbar_conatiner">
                    <img
                        className='navbar_logo_image'
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQrcmuVMzYjWqzt2opemz09M3u7J8Vny1UwQ&s'
                        onClick={() => navigate('/')}
                        alt="logo"
                    />
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <Link to='/' className={`nav-link ${isActive('/')}`} aria-current="page">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/allteachers' className={`nav-link ${isActive('/allteachers')}`}>
                                    All-teachers
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/about' className={`nav-link ${isActive('/about')}`}>
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/education' className={`nav-link ${isActive('/education')}`}>
                                    Education
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/contact' className={`nav-link ${isActive('/contact')}`}>
                                    Contact
                                </Link>
                            </li>
                            <li className="nav-item">
                                <img
                                    className='navbar_logo_image navbar_logo_image_img'
                                    src='https://toppng.com/uploads/preview/icons-logos-emojis-user-icon-png-transparent-11563566676e32kbvynug.png'
                                    alt="user"
                                />
                            </li>

                            <li>
                                <div>
                                    <FontAwesomeIcon
                                        icon={theme === 'light-mode' ? faMoon : faSun}
                                        onClick={themehandler}
                                        style={{
                                            cursor: 'pointer',
                                            margin: '11px',
                                            color: theme === 'light-mode' ? 'black' : 'white',
                                            fontSize: '22px'
                                        }}
                                    />
                                </div>
                            </li>



                        </ul>
                    </div>
                    <div className='ms-auto nav_large_screensw_only'>
                        <img
                            className='navbar_logo_image'
                            src='https://toppng.com/uploads/preview/icons-logos-emojis-user-icon-png-transparent-11563566676e32kbvynug.png'
                            alt="user"
                        />
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbarschools;
