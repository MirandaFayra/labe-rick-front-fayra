import React, { useContext } from 'react';
import * as S from './styled'
import * as GS from '../../styles'
import { useForm } from '../../hooks/useForm';
import axios from 'axios';
import { BASE_URL } from '../../constants/BASE_URL';
import { goToHome } from '../../routes/coordinator';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../contexts/GlobalContext';

export default function Login() {
  const [form,onChange]=useForm({email:'', password:''})
  const navigate= useNavigate()
  
  const {setUser}=useContext(GlobalContext)
  
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
        //pega user
        const headers = {
          headers: {
            Authorization: token
          }
        }
        axios.get(`${BASE_URL}/user/get-user`, headers).then((res) => {
              setUser(res.data)
        }).catch((err) => { 
          console.log({err});
        })
    }).catch((e)=>{
     console.log(e.response); })
  }

 return (
   <GS.Container>
      <GS.SForm onSubmit={enviar}>
        <GS.STitle>Indentifique-se para entrar no planeta Rick!</GS.STitle>
        <GS.SLabel htmlFor='email'>E-mail</GS.SLabel>
        <GS.SInput required id='email' name='email' type='email' value={form.emai} onChange={(e)=>onChange(e)} />
        <GS.SLabel htmlFor='password'>Password</GS.SLabel>
        <GS.SInput type='password' id='password' name='password' value={form.password} onChange={(e)=>onChange(e)} />
        <S.SLink href='http://google.com'>Inscreva-se</S.SLink>
        <GS.SButton>Entrar em Orbita</GS.SButton> 
      </GS.SForm>
   </GS.Container>
 );
}