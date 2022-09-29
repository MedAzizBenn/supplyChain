import React from 'react';
import AddFarmer from './content/farmers/AddFarmer';
import Routes from "./routes/Routes";
import Sidebar from "./sideBar/SideBar";

function Layout(props) {
    return (
        <div>
            <p>I'm the daddy</p>
            <div>
                <AddFarmer></AddFarmer>
            </div>
        </div>
    );
}

export default Layout;