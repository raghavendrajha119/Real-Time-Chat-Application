import Navigation from './components/navigation';
import {Home} from './components/home';
import {Login} from './components/login';
import {Logout} from './components/logout';
import 'bootstrap/dist/css/bootstrap.min.css';
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
        </Routes>
      </BrowserRouter>
  );
}

export default App;
