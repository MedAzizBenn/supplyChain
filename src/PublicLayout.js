
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Navbar from './react-header/Navbar';
import Content from './components/content';
import Footer from './components/footer/Footer';

export const PublicLayout = (props) => {
return(
    <div>
  <Navbar/>
        <Routes>
        <Route path="/" element={<Content></Content>}/>
        </Routes>
        <Footer/>      
</div>

);
   
}
