import React from 'react';
import { PageContainer,TextContainer } from '../../styles/index';

export default function HomePage() {
 return (
  <PageContainer>
    <TextContainer>
      <h2>Boas Vindas, NOME</h2>
        <p>Bem Vinde ao planeta Rick! <br/>
          <br/>
          Ajude-nos a povoar o nosso planeta!
        </p>
        <button>Entenda o que Aconteceu</button>
        <button>Ir para o planeta Rick</button>
    </TextContainer>
   </PageContainer>
 );
}