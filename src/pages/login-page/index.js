import React from 'react';
import * as S from './styled';

export default function LoginPage() {
 return (
   <S.Container>
      <S.SForm>
        <S.STitle>Indentifique-se para entrar no planeta Rick!</S.STitle>
        <S.SLabel htmlFor='email'>E-mail</S.SLabel>
        <S.SInput id='email' name='email' value={''} onChange={''} />
        <S.SLabel htmlFor='password'>Email</S.SLabel>
        <S.SInput type='password' id='password' name='password' value={''} onChange={''} />
        <S.SLink href='http://google.com'>Inscreva-se</S.SLink>
        <S.SButton>Entrar emm Orbita</S.SButton> 
      </S.SForm>
   </S.Container>
 );
}