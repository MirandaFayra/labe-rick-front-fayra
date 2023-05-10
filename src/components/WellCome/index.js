import React, { useContext } from 'react';
import { PageContainer,TextContainer,SButton} from '../../styles/index';
import {ButtonContainer,TitleContainer} from './styled'
import space from '../../assets/backgrounds/space-background.png'
import useProtectedPage from '../../hooks/useProtectedPage';
import { GlobalContext } from '../../contexts/GlobalContext';
import { goToInstruction, goToPlanet } from '../../routes/coordinator';
import { useNavigate } from 'react-router-dom';

export default function WellCome() {
  useProtectedPage();
  const {user}=useContext(GlobalContext)
  const navigate=useNavigate();
  return ( 
  <PageContainer image={space}>
    <TextContainer>
      <TitleContainer>Boas Vindas, {user.name}!</TitleContainer>
        <p>Bem Vinde ao planeta Rick! <br/>
          <br/>
          Ajude-nos a povoar o nosso planeta!
        </p>
        <ButtonContainer>
          <SButton onClick={()=>goToInstruction(navigate)}>Entenda o que Aconteceu</SButton>
          <SButton onClick={()=>goToPlanet(navigate)}>Ir para o planeta Rick</SButton>
        </ButtonContainer>
    </TextContainer>
   </PageContainer>
 );
}