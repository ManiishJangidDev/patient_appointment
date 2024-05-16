import React, { useState } from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import Dropdown from 'react-bootstrap/Dropdown';
import { Navigate, useNavigate } from 'react-router-dom';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

const Navbar = ({ setSideBarToggle, sidbarToggle }) => {

  const [sideToggle, setSideToggle] = useState(false);
  const navigate = useNavigate();

  console.log("sidbarToggle", sidbarToggle);
  const handleToggleButton = () => {

  }

  const handleRouteClick = (routeName) => {
    navigate(routeName);
  }

  return (
    <div className='navbar_main_div'>
      <div className='navbar_contents'>
        {/*for employee id  & name */}
        <div className='right_nav_bar'>
          <span onClick={() => setSideBarToggle(!sidbarToggle)}>
            <MenuOpenIcon />
          </span>
          <div className='user_det'>
            <p>User Name: Admin</p>
            <p>User ID: EMPLYEE10003</p>
          </div>
        </div>
        {/* for icons and handles */}
        <div className='left_nav_bar'>
          <button className='notify'><NotificationsIcon /></button>
          {/* <Dropdown>
            <Dropdown.Toggle>
              <PersonPinIcon /> Admin
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => handleRouteClick('/profile')}>Profile</Dropdown.Item>
              <Dropdown.Item>forgot Password</Dropdown.Item>
              <Dropdown.Item>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown> */}
        </div>
      </div>
    </div>
  )
}

export default Navbar
