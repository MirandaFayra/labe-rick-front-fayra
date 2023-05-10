import React from 'react';
import * as S from '../../styles/index'
import { useForm } from '../../hooks/useForm';
import axios from 'axios';
import { BASE_URL } from '../../constants/BASE_URL';
import { goToPlanet } from '../../routes/coordinator';
import { useNavigate } from 'react-router-dom';

export default function CreateCharacterPage() {
  const [form, onChange] = useForm({ name: '', species: '', image: '' })
  const navigate =useNavigate();
  
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
      goToPlanet(navigate)
    }).catch((e) => {
      //console.log(e.response);
    })
  }

  return (
    <S.Container>
      <S.SForm onSubmit={enviar}>
        <S.STitle>Indentifique-se para entrar no planeta Rick!</S.STitle>
        <S.SLabel htmlFor='name'>Nome do Personagem</S.SLabel>
        <S.SInput required id='name' name='name' value={form.name} onChange={(e)=>onChange(e)} />
        <S.SLabel htmlFor='species'>Espécie do Personagem</S.SLabel>
        <S.InputSelectStyle name='species' value={form.species} onChange={(e)=>onChange(e)} >
          <option value="">Selecione a espécie</option>
          <option value="Human">HUMAN</option>
          <option value="Alien">ALIEN</option>
          <option value="Diseas">DISEAS</option>
        </S.InputSelectStyle>
        <S.SLabel htmlFor='image'>Image</S.SLabel>
        <S.SInput required id='image' name='image' value={form.image} onChange={(e)=>onChange(e)} />
        <S.SButton>Criar Personagem</S.SButton>
      </S.SForm>
    </S.Container>
  );
}