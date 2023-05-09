import React from 'react';
import * as S from '../../styles/index'
import { useForm } from '../../hooks/useForm';
import axios from 'axios';
import { BASE_URL } from '../../constants/BASE_URL';

export default function CreateCharacterPage() {
  // const [form,onChange]=useForm({name:'', species:'',image:''})
  // //função submit
  // const enviar=(e)=>{
  //   e.preventDefault();

  //   const body={
  //     name: form.name,
  //     species:form.species,
  //     image: form.image,
  //   }

  //   axios.post(`${BASE_URL}/user/login`,body).then((res)=>{
  //       console.log(res.data);
  //       const token=res.data.token
  //       localStorage.setItem('token',token)

  //   }).catch((e)=>{
  //    console.log(e.response); })
  // }

 return (
   <S.Container>
      <S.SForm onSubmit={''}>
        <S.STitle>Indentifique-se para entrar no planeta Rick!</S.STitle>
        <S.SLabel htmlFor='name'>Name</S.SLabel>
        <S.SInput id='name' name='name' value={''} onChange={(e)=>''} />
        <S.SLabel htmlFor='specie'>Specie</S.SLabel>
        <S.SInput type='specie' id='specie' name='specie' value={''} onChange={''} />
        <S.SLabel htmlFor='image'>Image</S.SLabel>
        <S.SInput id='image' name='image' value={''} onChange={(e)=>''} />
        <S.SButton>Criar Personagem</S.SButton> 
      </S.SForm>
   </S.Container>
 );
}