import Navigation from './components/navigation';
import {Home} from './components/home';
import {Login} from './components/login';
import {Logout} from './components/logout';
import { RegistrationForm } from './components/registration';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
        <Navigation></Navigation>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/logout" element={<Logout/>}/>
          <Route path="/register" element={<RegistrationForm/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
