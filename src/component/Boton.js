import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext';

function Boton() {
  const data = {
    nombre: 'Pedro',
    edad: 50,
  };
  const { setData } = useContext(DataContext);

  return (
    <>
      <button
        onClick={() => {
          setData(data);
        }}
      >
        Cambiar data
      </button>
    </>
  );
}

export default Boton;
