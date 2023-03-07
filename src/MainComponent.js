import React from 'react';
import { NavLink} from 'react-router-dom';
import './MainComponent.css';

// import ToastNotification from './ToastNotification';
const MainComponent = () => {
    return (
      <div>
    
       <div className='navCon'>
       <header>
         
         <h2>Header</h2>
       </header>
       <nav>
         <ul>
           <li><NavLink className="navLink" to="/component1">First Component</NavLink></li>
           <li><NavLink className="navLink"  to="/component2">Second Component</NavLink></li>
          
         </ul>
       </nav>
       </div>
        <main>
         {/* <ToastNotification /> */}
        </main>
      </div>
    );
  }
  
  export default MainComponent;
  