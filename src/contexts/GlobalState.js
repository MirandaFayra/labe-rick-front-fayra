import React, { useState } from 'react';
import { GlobalContext } from './GlobalContext';
import { useRequestData } from '../hooks/useRequestData';

export default function GlobalState({ children }) {
  const {data:characters,receiveData:receiveDataCharacters,isLoading:isLoadingCharacters,error:errorCharacters}=useRequestData([],'/character/all-characters')
  const [citizens, setCitizen] = useState([]);
  const [user, setUser] = useState(undefined);
  
  //valores para context
  const dataContext = {
    citizens,
    setCitizen,
    user,
    setUser,
    characters,
    receiveDataCharacters,
    isLoadingCharacters,
    errorCharacters
  }

  return (
    <GlobalContext.Provider value={dataContext}>
      {children}
    </GlobalContext.Provider>
  );
}