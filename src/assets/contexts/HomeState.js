import React, { useState } from 'react';
import { HomeContext } from './HomeContext';
import { useRequestData } from '../../hooks/useRequestData';

export default function HomeState({children}) {
    
    const {data}=useRequestData({},'/user/get=user')
    const [citizen,setCitizen]=useState([]);

    const dataContext={
        citizen,
        setCitizen,
        user:data
    }

 return (
   <HomeContext.Provider value={dataContext}>
        {children}
   </HomeContext.Provider>
 );
}