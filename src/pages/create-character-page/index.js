import React, { useContext } from 'react';
import * as LS from './styled'
import * as GS from '../../styles/index'

import { useForm } from '../../hooks/useForm';
import axios from 'axios';
import { BASE_URL } from '../../constants/BASE_URL';
import { goToPlanet } from '../../routes/coordinator';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../contexts/GlobalContext';

export default function CreateCharacterPage() {
  const [form, onChange] = useForm({ name: '', species: '', image: '' })
  const navigate =useNavigate();
  
  const {receiveDataCharacters}=useContext(GlobalContext)

  //função submit
  //console.log(form);
  const enviar = (e) => {
    e.preventDefault();
    const token = window.localStorage.getItem("token")
    const body = {
      name: form.name,
      species: form.species,
      image: form.image
    }
    const headers= { 
        Authorization: token
      }
    
    axios.post(`${BASE_URL}/character/create`, body, {headers}).then((res) => {
      // //console.log(res.data);
      receiveDataCharacters();
      alert(res.data.message);
      goToPlanet(navigate)
    }).catch((e) => {

      alert(e.response.message);
      //console.log(e.response);
    })
  }

  return (
    <LS.StyledContainer>
      <GS.StyledForm onSubmit={enviar}>
        <GS.StyledTitle>Indentifique-se para entrar no planeta Rick!</GS.StyledTitle>
        <GS.StyledLabel htmlFor='name'>Nome do Personagem</GS.StyledLabel>
        <GS.StyledInput required id='name' name='name' value={form.name} onChange={(e)=>onChange(e)} />
        <GS.StyledLabel htmlFor='species'>Espécie do Personagem</GS.StyledLabel>
        <GS.StyledInputSelectStyle name='species' value={form.species} onChange={(e)=>onChange(e)} >
          <option value="">Selecione a espécie</option>
          <option value="Human">HUMAN</option>
          <option value="Alien">ALIEN</option>
          <option value="Diseas">DISEAS</option>
        </GS.StyledInputSelectStyle>
        <GS.StyledLabel htmlFor='image'>Image</GS.StyledLabel>
        <GS.StyledInput required id='image' name='image' value={form.image} onChange={(e)=>onChange(e)} />
        <GS.StyledButton>Criar Personagem</GS.StyledButton>
      </GS.StyledForm>
    </LS.StyledContainer>
  );
}