import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/Card';
import { CountContainer } from './styled'
import { ContainerCard, SButton } from '../../styles';
import { goToCharacter, goToCreateCharacter } from '../../routes/coordinator';
import useProtectedPage from '../../hooks/useProtectedPage';
import { GlobalContext } from '../../contexts/GlobalContext';



export default function PlanetPage() {
  useProtectedPage();
  const navigate = useNavigate()

  const { citizens } = useContext(GlobalContext);
  return (
    <>
      <CountContainer>
        <SButton onClick={() => goToCharacter(navigate)}>Escolher Ser</SButton>
        <p><span>{citizens.length}</span> - HABITANTES</p>
        <SButton onClick={() => goToCreateCharacter(navigate)}>Criar novo Ser</SButton>
      </CountContainer>
      <ContainerCard>
        {citizens.map((citizen) => {
          return <Card
                key={citizen.id}
                id={citizen.id}
                name={citizen.name}
                image={citizen.image}
                species={citizen.species}
           />
        })}
      </ContainerCard>
    </>
  );
}