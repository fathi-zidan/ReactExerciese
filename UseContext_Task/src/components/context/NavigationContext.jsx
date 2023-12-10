
import React, { createContext, useState } from 'react';
import { useContext } from 'react';

export const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState('info');

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  return (
    <NavigationContext.Provider value={{ currentPage, navigateTo }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNav = ()=>{
    return useContext(NavigationContext);
}
