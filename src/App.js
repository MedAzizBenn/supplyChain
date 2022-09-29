import './App.css';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import {ProtectedLayout} from './ProtectedLayout'
import {PublicLayout} from './PublicLayout'



function App() {
  return (
    <>

    <Router>
        <Routes>
        <Route path='/app/*' element={<ProtectedLayout/>}/>
        <Route path='/' element={<PublicLayout/>} />
      </Routes>

    </Router>

    </>
  );
}

export default App;
