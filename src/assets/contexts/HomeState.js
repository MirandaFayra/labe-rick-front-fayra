import React, { useState } from 'react';
import { HomeContext } from './HomeContext';

export default function HomeState({children}) {
    const [citizen,setCitizen]=useState([]);

    const data={
        citizen,
        setCitizen
    }

 return (
   <HomeContext.Provider value={data}>
        {children}
   </HomeContext.Provider>
 );
}