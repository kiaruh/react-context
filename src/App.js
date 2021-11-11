import React, { useState } from 'react';
import './style.css';
import Pagina1 from './component/Pagina1';
import Pagina2 from './component/Pagina2';
import Boton from './component/Boton';
import { DataProvider } from './context/DataContext';

export default function App() {
  return (
    <DataProvider>
      <Pagina1 />
      <Pagina2 />
      <Boton />
    </DataProvider>
  );
}
