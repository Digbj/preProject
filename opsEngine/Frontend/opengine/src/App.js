
import './App.css';
import LoginForm from './COmponents/login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignUp from './COmponents/signup';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<LoginForm/>}/>
          <Route path='/SignUp' element={<SignUp/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
