import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Nav from './web.js';
import Home from './Home.js';
import Shop from './Shopmen.js';
import Homeliving from './homeliving.js';
import './Men.css';
import Womenshop from './women.js';
import './women.css';
import Footer from './footer.js';
import Kidshop from './kids.js';
import  './kid.css';
import './Living.css';
import Beauty from './Beauty.js';
import './Beauty.css';




function App() {
  return (
    <Router>
      <Nav/>
    <div>
      
     
      <Routes>

      <Route exact path='/' element={ <Home/>}></Route>
      <Route exact path='/shopmen' element={<Shop/>}></Route>       
      <Route exact path='/women' element={ <Womenshop/>}></Route>
      <Route exact path='/kids' element={<Kidshop/>}></Route>
      <Route exact path='/homeliving' element={<Homeliving/>}></Route>
      <Route exact path='/beauty' element={<Beauty/>}></Route>
       </Routes>
    </div>
    <Footer/>

    </Router>
    
    
  );
}

export default App;

