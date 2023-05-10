import React, { useContext, useState } from 'react';
import Card from '../../components/Card';
import { ContainerSelect } from './styled'
import InputSelect from '../../components/InputSelect';
import { SButton, ContainerCard } from '../../styles/index'
import { GlobalContext } from '../../contexts/GlobalContext';
import useProtectedPage from '../../hooks/useProtectedPage';
import { useNavigate } from 'react-router-dom';
import { goToPlanet } from '../../routes/coordinator';

export default function CharacterPage() {
    useProtectedPage();
    const navigate=useNavigate()

    const [selected, setSelected] = useState(false);
    const [selectedSpecies, setSelectedSpecies] = useState('Human');

    const context = useContext(GlobalContext);
    //citizens
    const selectCitizen =()=>{
        const characterSelect=context.characters.find((character)=>character.id===selected);
        context.setCitizen([...context.citizens,characterSelect])
        goToPlanet(navigate);
    }
    return (
        <>
            <ContainerSelect>
                <InputSelect selectedSpecies={selectedSpecies} setSelectedSpecies={setSelectedSpecies} />
                {selected &&
                    <SButton onClick={selectCitizen} >Selecionar Personagem</SButton>}
            </ContainerSelect>
            <ContainerCard>
                {context.isLoadingCharacters && <p> carregando...</p>}
                {context.characters && context.characters.filter((character) => {
                    console.log({ character });
                    console.log({ selectedSpecies });
                    return character.species === selectedSpecies;
                })
                    .map((character) => {
                        return <Card
                            key={character.id}
                            id={character.id}
                            selected={selected}
                            setSelected={setSelected}
                            name={character.name}
                            image={character.image}
                            species={character.species}
                        />
                    })}
            </ContainerCard>
        </>
    );
}