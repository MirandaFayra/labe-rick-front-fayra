import styled from 'styled-components';
import theme from '../../constants/THEME';

export const ContainerSelect =styled.div `
    display: flex;
    flex-direction:row;
    justify-content: space-around;
    align-items: center;

`

export const ContainerCard = styled.div`
    margin-top:12vh;
    display: grid;
	grid-template-columns: repeat(3, 1fr);
    align-self: center;
    align-items: center;
    justify-content: space-evenly;
    justify-items:center;
    row-gap: 16vh;
    grid-auto-flow: row;
`;

