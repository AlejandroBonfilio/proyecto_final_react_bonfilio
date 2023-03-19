import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route} from "react-router-dom";
import NavBar from './components/NavBar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import './App.css';
import Inicio from "./components/Pages/Inicio.js"
import Coleccionables from "./components/Pages/Coleccionables.js"
import Juegos from "./components/Pages/Juegos.js"
import Perifericos from "./components/Pages/Perifericos.js"
import Error from "./components/Pages/Error.js"



function App() {
  
  return (
   
   <div className="App">
      <BrowserRouter>
        <NavBar cartCount={0}/>
        <Routes>
          <Route path="/" exact element={<Inicio/>}/>
          <Route path="/coleccionables" exact element={<Coleccionables/>}/>
          <Route path="/perifericos" exact element={<Perifericos/>}/>
          <Route path="/juegos" exact element={<Juegos/>}/>
          <Route path="*" exact element={<Error/>}/>
        </Routes>
      </BrowserRouter>
      <ItemListContainer greeting="Hola Gamer"/>
      
   </div>
  
  );
}

export default App;
