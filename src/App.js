
import './App.css';
import Navbar from './Components/Pages/Navbar';
import HomePage from './Components/Pages/HomePage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        
          <Route path="/" element={
            <>
             <Navbar />
            <HomePage />
            </>
            } />
      </Routes>
      </div>
   </Router>

  );
}

export default App;
