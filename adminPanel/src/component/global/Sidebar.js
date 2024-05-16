import React, { useState } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu, sidebarClasses } from 'react-pro-sidebar';
import GridViewIcon from '@mui/icons-material/GridView';
import EngineeringIcon from '@mui/icons-material/Engineering';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import BadgeRoundedIcon from '@mui/icons-material/BadgeRounded';
import GroupAddRoundedIcon from '@mui/icons-material/GroupAddRounded';
import { Navigate, useNavigate, useNavigation, useRoutes } from 'react-router-dom';

const SidebarComp = ({ sidbarToggle }) => {

    const [closeSidebar, setCloseSidebar] = useState(false);
    const navigate = useNavigate();

    const handleRouteClick = (routeName) => {
        navigate(routeName);
    }
    return (
        <Sidebar collapsed={!sidbarToggle} className='Sidebar' rootStyles={{
            height: "100%",
            overflowX: "scroll",
            width: "20%",
            scrollbarColor: "none",
            position: 'fixed',
            left: 0,
            wordWrap: "break-word"

        }}>
            <Menu className='main_menu_sidebar'>
                <div className='sidebarHeading'>
                    <h1>Patient Appointment System</h1>
                </div>
                <MenuItem onClick={() => handleRouteClick('/dashboard')} className='subMenu_items' icon={<GridViewIcon />}>DashBoard</MenuItem>
                <SubMenu className='subMenu_items' icon={<EngineeringIcon />} label="Patient Desk">
                    <MenuItem onClick={() => handleRouteClick('/all_patient')} icon={<BadgeRoundedIcon />} >Patient List</MenuItem>
                    <MenuItem onClick={() => handleRouteClick('/add_patient')} icon={<GroupAddRoundedIcon />}>Add Patient</MenuItem>
                </SubMenu>

                <SubMenu className='subMenu_items' icon={<AccountBalanceWalletOutlinedIcon />} label="Appointment Desk">
                    <MenuItem onClick={() => handleRouteClick('/all_appointment')} icon={<MoreVertRoundedIcon />}>Add Appointment</MenuItem>
                </SubMenu>
            </Menu>
        </Sidebar>
    )
};

export default SidebarComp;