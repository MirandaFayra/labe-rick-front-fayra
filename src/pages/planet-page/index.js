import React from 'react';
import {CountContainer} from './styled'
import { ContainerCard } from '../../styles';
import Card from '../../components/Card';

export default function PlanetPage() {
 return (
  <>
  <CountContainer>
    <p>Quantidade de Habitantes no Planeta : <span>NUMERO</span></p>
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