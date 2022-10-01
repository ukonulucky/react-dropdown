
import './App.css';
import Navbar from './Components/Pages/Navbar';
import HomePage from './Components/Pages/HomePage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar2 from './Components/Pages/Navbar2';
import InterSectionDelay from './Components/Pages/interSectionDelay';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        
          <Route path="/" element={
            <>
             <Navbar2 />
              <HomePage />
              <InterSectionDelay />
            </>
            } />
      </Routes>
      </div>
   </Router>

  );
}

export default App;
