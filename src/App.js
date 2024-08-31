import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Nav } from './Components/Nav';
import { Main } from './Components/Main';
import { Micro } from './Components/Micro';
import { Model } from './Components/Model';
import { Privacy } from './Components/Privacy';
import { Cookies } from './Components/Cookies';
import { Terms } from './Components/Terms';
import { Dis } from './Components/Dis';

function App() {
  return (
    <Router>
       < Nav/>
     
           <Routes>
      <Route path="/" element={<Main/> }/>
              <Route path="/terms-conditions" element={<Terms/> }/>
            <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/cookies-policy" element={<Cookies/>} />
        </Routes>
        <Dis/>
  <Micro/>
  <Model/>
   </Router>
  );
} 

export default App;
