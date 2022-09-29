

import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Navigation from './Navigation';
import AddFarm from './AddFarm';
import Farmer from './Farmer';
import Home from './home'
const FarmerRoutes=() =>{

    return (
      <Routes>
<             Route path="/"  element={<Home />} />
              <Route path="/AddFarm" element={<AddFarm />} />
               <Route path="/User" element={<Farmer />} />
      </Routes>
                    
        
    )
}

export default FarmerRoutes;