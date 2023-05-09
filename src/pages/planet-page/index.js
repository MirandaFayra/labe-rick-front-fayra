import React from 'react';
import {CountContainer} from './styled'
import { ContainerCard,SButton} from '../../styles';
import Card from '../../components/Card';

export default function PlanetPage() {
 return (
  <>
  <CountContainer>
    <SButton>Escolher Ser</SButton>
    <p><span>NUMERO</span> - HABITANTES</p>
    <SButton>Criar novo Ser</SButton>
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