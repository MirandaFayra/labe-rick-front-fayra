import React, { useContext, useState } from 'react';
import * as LS from './styled'
import * as GS from '../../styles'
import { useForm } from '../../hooks/useForm';
import axios from 'axios';
import { BASE_URL } from '../../constants/BASE_URL';
import { GlobalContext } from '../../contexts/GlobalContext';

export default function Login() {
  const [form, onChange] = useForm({ email: '', password: '' })

  const { setUser } = useContext(GlobalContext)
  const [carregando, setCarregando] = useState(false)
  //função submit
  const enviar = (e) => {
    
    setCarregando(true)
    e.preventDefault();
    const body = {
      email: form.email,
      password: form.password,
    }

    axios.post(`${BASE_URL}/user/login`, body).then((res) => {
      // //console.log(res.data);
      const token = res.data.token
      localStorage.setItem('token', token)
      //pega user
      const headers = {
        headers: {
          Authorization: token
        }
      }
      axios.get(`${BASE_URL}/user/get-user`, headers).then((res) => {
        setCarregando(false);
        setUser(res.data)
      }).catch((err) => {
        //console.log({err});
        setCarregando(false);
      })
    }).catch((e) => {
      console.log("esse erro1!!!!", e.response);
      alert(e.response.data)
      setCarregando(false);
    })
  }

  return <LS.StyledContainer>
    {carregando && <LS.StyledLoginMensagem>Carregando...</LS.StyledLoginMensagem>}
    <GS.StyledForm onSubmit={enviar} >
      <GS.StyledLabel htmlFor='email'>E-mail</GS.StyledLabel>
      <GS.StyledInput id='email' name='email' value={form.email} onChange={onChange} />
      <GS.StyledLabel htmlFor='password'>Password</GS.StyledLabel>
      <GS.StyledInput id='password' name='password' value={form.password} onChange={onChange} />
      <GS.StyledLink href='https://singup-labe-rick.vercel.app/' target="_blank">Fazer cadastro</GS.StyledLink>
      <GS.StyledButton>Login</GS.StyledButton>
    </GS.StyledForm>
  </LS.StyledContainer>
    ;
}