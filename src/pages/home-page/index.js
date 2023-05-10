import React, { useContext } from 'react';
import Login from '../../components/Login';
import { GlobalContext } from '../../contexts/GlobalContext';
import WellCome from '../../components/WellCome';

export default function HomePage() {
  const { user } = useContext(GlobalContext);
  return (<>
    {!user && <Login />}
    {user && <WellCome/>}
  </>
  );
}