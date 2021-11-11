import React, { createContext, useState } from 'react';

export const DataContext = createContext();
const fixdata = {
  nombre: 'Nicolas',
  edad: 10,
};

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(fixdata);
  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};
