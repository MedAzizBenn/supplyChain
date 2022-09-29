import React, { useEffect, useState } from "react";
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
  } from 'cdbreact';
  import { NavLink } from 'react-router-dom';
  import SidebarItems from "./SideBarItems"

  
  function Sidebar(props, {defaultActive}) {
    const [activeIndex, ] = useState(defaultActive || 1);
    return (
      <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
        <CDBSidebar textColor="#fff" backgroundColor="#333">
          <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
            <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
              Sidebar
            </a>
          </CDBSidebarHeader>
  
          <CDBSidebarContent className="sidebar-content">
            <CDBSidebarMenu>
                {
            SidebarItems.map((item, index)=> {
                return(
              <NavLink  to={item.route} key={item.name} className="activeClicked">
                <CDBSidebarMenuItem icon="columns">{item.name}</CDBSidebarMenuItem>
              </NavLink>
                )
            })
        }
              {/*<NavLink  to="/app/Admin/AddFarmer" className="activeClicked">
                <CDBSidebarMenuItem icon="table">Farmers</CDBSidebarMenuItem>
              </NavLink>
              <NavLink  to="/app/Admin/profile" className="activeClicked">
                <CDBSidebarMenuItem icon="user">Profile page</CDBSidebarMenuItem>
              </NavLink>
              <NavLink  to="/app/Admin/analytics" className="activeClicked">
                <CDBSidebarMenuItem icon="chart-line">Analytics</CDBSidebarMenuItem>
    </NavLink>*/}
  
        
            </CDBSidebarMenu>
          </CDBSidebarContent>
  
          <CDBSidebarFooter style={{ textAlign: 'center' }}>
            <div
              style={{
                padding: '20px 5px',
              }}
            >
            </div>
          </CDBSidebarFooter>
        </CDBSidebar>
      </div>
    );
  };
  
  export default Sidebar;