import styled from 'styled-components';
import theme from '../../constants/THEME';

export const ConfirmationContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 8vh;

    h2{
        color:whitesmoke;
        padding-bottom:24px;
        //text-shadow:${theme.colors.green} 2px 2px;
        text-shadow: 2px 2px 3px ${theme.colors.green}, 0 0 30px blue, 0 0 12px darkblue;

    }
`;