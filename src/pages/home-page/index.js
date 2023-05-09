import React from 'react';
import { PageContainer,TextContainer,SButton } from '../../styles/index';
import {ButtonContainer} from './styled'

export default function HomePage() {
 return (
  <PageContainer>
    <TextContainer>
      <h2>Boas Vindas, NOME</h2>
        <p>Bem Vinde ao planeta Rick! <br/>
          <br/>
          Ajude-nos a povoar o nosso planeta!
        </p>
        <ButtonContainer>
          <SButton>Entenda o que Aconteceu</SButton>
          <SButton>Ir para o planeta Rick</SButton>
        </ButtonContainer>
    </TextContainer>
   </PageContainer>
 );
}