import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import ItemListContainer from './components/ItemListContainer/';
import ItemDetailContainer from './components/ItemDetailContainer';
import NavBar from './components/NavBar/'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemList from './components/ItemList';


function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar /> {/* Como quiero que el nav este siempre lo uso fuera de Routes */}
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/categoria/:categoriaId' element={<ItemListContainer />} />
        <Route path='/detalle/:detalleId' element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
