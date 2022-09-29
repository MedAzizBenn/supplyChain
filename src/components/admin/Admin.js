import { useRoutes } from "react-router-dom";
import Sidebar from './sideBar/SideBar';
import AddFarmer from './content/farmers/AddFarmer';
import RegisterFarm from './content/farmers/RegisterFarm';

import AdminContent from "./content/Content";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Layout from './Layout';

export const Admin = (props) => {
    return (
    <div>
            <div>
          <AddFarmer/>    
          <hr></hr>
        <RegisterFarm></RegisterFarm>
        </div>
        </div>
  );
}

export default Admin;