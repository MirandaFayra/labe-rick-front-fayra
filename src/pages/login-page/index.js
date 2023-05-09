import React from 'react';
import * as S from './styled';
import { useForm } from '../../hooks/useForm';
import axios from 'axios';
import { BASE_URL } from '../../constants/BASE_URL';

export default function LoginPage() {
  const [form,onChange]=useForm({email:'', password:''})
  //função submit
  const enviar=(e)=>{
    e.preventDefault();

    const body={
      email: form.email,
      password: form.password,
    }

    axios.post(`${BASE_URL}/user/login`,body).then((res)=>{
        console.log(res.data);
        const token=res.data.token
        localStorage.setItem('token',token)

    }).catch((e)=>{
     console.log(e.response); })
  }
 return (
   <S.Container>
      <S.SForm onSubmit={enviar}>
        <S.STitle>Indentifique-se para entrar no planeta Rick!</S.STitle>
        <S.SLabel htmlFor='email'>E-mail</S.SLabel>
        <S.SInput id='email' name='email' value={form.emai} onChange={(e)=>onChange(e)} />
        <S.SLabel htmlFor='password'>Password</S.SLabel>
        <S.SInput type='password' id='password' name='password' value={form.password} onChange={(e)=>onChange(e)} />
        <S.SLink href='http://google.com'>Inscreva-se</S.SLink>
        <S.SButton>Entrar em Orbita</S.SButton> 
      </S.SForm>
   </S.Container>
 );
}