import React from 'react';
import Card from '../../components/Card';
import {ContainerCard,ContainerSelect} from './styled'
import InputSelect from '../../components/InputSelect';
import {SButton} from '../../styles/index'

export default function CharacterPage() {

    return (
        <> 
            <ContainerSelect>
                <InputSelect/>
                <SButton>Selecionar Personagem</SButton>
            </ContainerSelect>
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