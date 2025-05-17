import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Home from './Home.jsx';
import ContactForm from './Components/Contactme/Contact.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import necessary components


function App() {
  const [count, setCount] = useState(0);

  return (
    <Router> 
      <div className='Div'>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

