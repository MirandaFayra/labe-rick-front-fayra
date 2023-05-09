import styled from 'styled-components';
import { theme }  from '../../constants/THEME'
 
export const Container = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const SForm = styled.form`
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border:solid 0.3vw ${theme.colors.green} ;
    border-radius: 2vw;
    background-color: ${theme.colors.blue100};
`;

export const STitle = styled.p`
    text-transform: uppercase;
    font-size: 1.5vw;
    color: ${theme.colors.brown};
    font-family: 'Kanit', sans-serif;
    font-weight: 800;
    margin: 1.5vw 0vw;
    /* font-family: 'Montserrat', sans-serif; */
`;

export const SLabel = styled.label`

`;
export const SInput = styled.input`

`;
export const SLink = styled.a`

`;
export const SButton = styled.button`

`;