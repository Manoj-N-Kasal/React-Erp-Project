import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import './Header.css'

function Header() {
  const [micon, setMicon] = useState(false)
    const handleClick = () => {
        setMicon(!micon);
    }
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
      setTheme(theme === 'dark' ? 'light' : 'dark'); // Toggle between 'dark' and 'light'
    };
  return (
    <header className={`${theme}`}>
        <nav className={micon ? 'menu-open' : ''}>
                <div className="menu-icon" onClick={() => handleClick()}>
                    {micon ? "X" : <>&#9776;</>}</div>

                <ul className={`menu-links ${micon ? 'show' : ''}`}>
                    <Link className='linkClass' to="/">Dashboard</Link>

                    <Link className='linkClass' to="/ordermanagement">OrderManagement</Link>

                    <Link className='linkClass' to="/produclists">ProductsManagement</Link>

                    <Link className='linkClass' to="/calendarview">OrdersCalendarView</Link>
                </ul>
                <button  className='changeThemeBtn'onClick={toggleTheme}>Change Theme</button>
            </nav>
            <Outlet />
    </header>
  )
}

export default Header