// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom';
import MainComponent from './MainComponent';
import Component1 from './Component1';
import Component2 from './Component2';
function App() {
 
  return (
    <Router>
      <MainComponent/>
      <Routes>

 
      <Route  path="/component1" element={<Component1 />}/>
     
      <Route  path="/component2" element={<Component2 />}/>
 
      </Routes>
      {/* <ToastNotification /> */}
    </Router>
  );
}


export default App;
