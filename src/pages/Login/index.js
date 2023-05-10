import React from 'react';
import * as S from '../../styles/index'
import * as J from './styled'
import { useForm } from '../../hooks/useForm';
import axios from 'axios';
import { BASE_URL } from '../../constants/BASE_URL';
import { goToHome } from '../../routes/coordinator';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [form,onChange]=useForm({email:'', password:''})
  const navigate= useNavigate()
  
  //função submit
  const enviar=(e)=>{
    e.preventDefault();

    const body={
      email: form.email,
      password: form.password,
    }

    axios.post(`${BASE_URL}/user/login`,body).then((res)=>{
        // console.log(res.data);
        const token=res.data.token
        localStorage.setItem('token',token)
        goToHome(navigate);
    }).catch((e)=>{
     console.log(e.response); })
  }
 return (
   <S.Container>
      <S.SForm onSubmit={enviar}>
        <S.STitle>Indentifique-se para entrar no planeta Rick!</S.STitle>
        <S.SLabel htmlFor='email'>E-mail</S.SLabel>
        <S.SInput required id='email' name='email' type='email' value={form.emai} onChange={(e)=>onChange(e)} />
        <S.SLabel htmlFor='password'>Password</S.SLabel>
        <S.SInput type='password' id='password' name='password' value={form.password} onChange={(e)=>onChange(e)} />
        <J.SLink href='http://google.com'>Inscreva-se</J.SLink>
        <S.SButton>Entrar em Orbita</S.SButton> 
      </S.SForm>
   </S.Container>
 );
}