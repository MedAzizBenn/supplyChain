import {
    Link
} from "react-router-dom";
import { Navbar, Nav, Button, Container } from 'react-bootstrap'
import {Home} from './home'
import {Farmer} from './Farmer'
import {AddFarm} from './AddFarm'
import Sidebar from "./sideBar/SideBar";
import FarmerRoutes from './FarmerRoutes'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useLocation } from 'react-router-dom';
import React, { useState } from "react";

const Navigation = ({ navigation, route }) => {
  
   
    return (
        <div style={{display: "flex"}}>
                <Sidebar/>
                <div className="container">
                    <FarmerRoutes />
                </div>
            </div>
    )
}
export default Navigation;
