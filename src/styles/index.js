import styled from 'styled-components';
import space from '../assets/space-background.png'
import theme from '../constants/THEME'

export const PageContainer = styled.div`
    height: 89vh;
    width: 100vw;
    display: flex;
    background: url(${space});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    align-items: center;
    justify-content: space-around;
    

    @media (max-width: 1015px) {
        background: url(${space});
        background-repeat: no-repeat;
        background-size: auto;
    }

`

export const TextContainer = styled.div`
    width: 40vw;
    height: 60vh;
    background:${theme.colors.blue100};
    align-items: center;
    justify-content: center;
    padding: 2rem;
    border-radius:5px;
    opacity: 0.87;
    letter-spacing: 1.5px;
    font-size:1.19rem;

    span{
        font-weight:bolder;
    }
`

export const SButton = styled.button`
    padding: 17px 40px;
    border-radius: 50px;
    border: 0;
    background-color: white;
    box-shadow: rgb(0 0 0 / 5%) 0 0 8px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    font-size: 1.3vw;
    transition: all .5s ease;
    margin: 1.4vw 0;

    :hover {
    letter-spacing: 3px;
    background-color: ${theme.colors.green};
    color: hsl(0, 0%, 100%);
    box-shadow: ${theme.colors.green} 0px 7px 29px 0px;
    }

    :active {
    letter-spacing: 3px;
    background-color: ${theme.colors.green};
    color: hsl(0, 0%, 100%);
    box-shadow:${theme.colors.green} 0px 0px 0px 0px;
    transform: translateY(10px);
    transition: 100ms;
    }
`;

