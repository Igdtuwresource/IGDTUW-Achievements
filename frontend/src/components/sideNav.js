import React from 'react';
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from 'cdbreact';

import { NavLink } from 'react-router-dom';
import photoURL from "../images/girl.png"

const Sidebar = () => {
    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            <CDBSidebar textColor="#fff" backgroundColor="#333">
                <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                    <img
                        src={photoURL}
                        alt="user"
                        className="person"
                    />
                </CDBSidebarHeader>

                <CDBSidebarContent className="sidebar-content">
                    <CDBSidebarMenu>
                        <NavLink exact to="/achievements" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/form" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="plus">New Post</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/edit" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="user">Edit Profile & <br /> other Settings</CDBSidebarMenuItem>
                        </NavLink>

                        <NavLink exact to="/" target="_blank" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="exclamation-circle">Logout </CDBSidebarMenuItem>
                        </NavLink>
                    </CDBSidebarMenu>
                </CDBSidebarContent>
            </CDBSidebar>
        </div>
    );
};

export default Sidebar;