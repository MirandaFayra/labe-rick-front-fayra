import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/Card';
import {CountContainer} from './styled'
import { ContainerCard,SButton} from '../../styles';
import { goToCharacter,goToCreateCharacter } from '../../routes/coordinator';



export default function PlanetPage() {
  const navigate = useNavigate()

 return (
  <>
  <CountContainer>
    <SButton onClick={()=> goToCharacter(navigate)}>Escolher Ser</SButton>
    <p><span>NUMERO</span> - HABITANTES</p>
    <SButton onClick={()=> goToCreateCharacter(navigate)}>Criar novo Ser</SButton>
  </CountContainer>
  <ContainerCard>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
  </ContainerCard>
</>
 );
}