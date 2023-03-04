
import './App.css';

import { Shop } from './components/Shop';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/Navi';
import Cart from './components/cart';
import { Context } from './components/context/context';
import { Payment } from './components/payment';



function App() {
  return (
    <div className="App">
      <Context>
      <Router>
          <NavBar />
          <Routes>
            <Route path='/' element={<Shop />} />
            <Route path='/Cart' element={<Cart />} />
            <Route path='/payment' element={<Payment/>}/>
          </Routes>
        </Router>
      </Context>
      
     


      {/* <Container/> */}
    </div>
  );
}

export default App;
