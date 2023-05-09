import styled from 'styled-components';
import space from '../../assets/space-background.png'

export const PageContainer = styled.div`
    height: 86vh;
    width: 100vw;
    background: url(${space});
    background-repeat: no-repeat;
    background-size: 100vw;


    @media (max-width: 1015px) {
        background: url(${space});
        background-repeat: no-repeat;
        background-size: auto;
    }
    
`

