import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext';

function Pagina1() {
  const { data } = useContext(DataContext);

  return (
    <>
      <h1>Pagina 1</h1>
      <hr />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}

export default Pagina1;
