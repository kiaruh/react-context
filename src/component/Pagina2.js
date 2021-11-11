import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext';

function Pagina2() {
  const { data } = useContext(DataContext);

  return (
    <>
      <h1>Pagina 2</h1>
      <hr />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}

export default Pagina2;
