
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Signin from './pages/Signin';
import Signup from './pages/signup';
import About from './pages/About';
import Profile from './pages/profile';
import Header from './components/header';

export default function App() {
  return (
    <BrowserRouter>
    <Header/> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}
