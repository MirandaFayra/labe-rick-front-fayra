import styled from 'styled-components';
import space from '../../assets/space-background.png'
import theme from '../../constants/THEME';

export const PageContainer = styled.div`
    height: 86vh;
    width: 100vw;
    display: flex;
    background: url(${space});
    background-repeat: no-repeat;
    background-size: 100vw;
    align-items: center;
    justify-content: center;


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
    opacity: 0.8;

    span{
        font-weight:bolder;
    }
`

