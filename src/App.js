import './App.css';
import Homepage from './Component/Homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbarschools from './Component/Navbarschools';
import Education from './pages/Education';
import Footer from './pages/Footer';
import Allteachers from './Component/Allteachers';
import Singleteachersdetails from './Component/Singleteachersdetails';


function App() {
  return (
    <div className="App">
      <Navbarschools />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<About />} />
        <Route path='/education' element={<Education />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/teachers/:id' element={<Singleteachersdetails />} />

        {/* all teachers  */}

        <Route path='/allteachers' element={<Allteachers />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
