import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Content from "../content/Content";
import AddFarmer from "../content/farmers/AddFarmer";
import Layout from "../Layout";

function Routes() {
    return (
            <Routes>
                <Route path="/" element={<Content/>}/>
                <Route path="/AddFarmer" element={<AddFarmer/>}/>
              
            </Routes>
    )
}  

export default Routes