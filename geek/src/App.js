import React from 'react';
import NavBar from './components/NavBar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import logo from './logo.svg';
import './App.css';


function App() {
  
  return (
   //traje navbar 
   <div className="App">
      <NavBar cartCount={0} />
      {
         <div>
         <ItemListContainer greeting="Hola Gamer" />
       </div>
      }
    </div>
  
   
    

  );
}

export default App;
