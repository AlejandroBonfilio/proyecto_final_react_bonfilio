import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route} from "react-router-dom";
import NavBar from './components/NavBar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import './App.css';
import Inicio from "./components/Pages/Inicio"
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
        <Route exact path="/" component={Inicio} />
        <Route exact path="/juegos" render={() => <ItemListContainer categoryId="Juegos" />} />
        <Route exact path="/coleccionables" render={() => <ItemListContainer categoryId="Coleccionables" />} />
        <Route exact path="/perifericos" render={() => <ItemListContainer categoryId="Perifericos" />} />
        <Route exact path="/producto/:itemId" component={ItemListContainer} />
        </Routes>
        
      </BrowserRouter>
     
      
   </div>
  
  );
}

export default App;
