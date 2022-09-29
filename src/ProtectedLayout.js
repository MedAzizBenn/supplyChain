
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Customer from './components/Customer';
import Navigation from './components/farmer/Navigation';
import Admin from './components/admin/Admin'
import Login from './components/login/Login';
import AddFarmer from './components/farmer/AddFarm';


export const ProtectedLayout = (props) => {
    
return(
    <div>

        <Routes>
        <Route path="/Consumer/:code" element={<Customer></Customer>}/>
        <Route path="/Login" element={<Login></Login>}/>
        <Route path="/farmer/*" element={<Navigation/>}/>
        <Route path="/Admin" element={<Admin/>}/>


        </Routes>
</div>

);
   
}
