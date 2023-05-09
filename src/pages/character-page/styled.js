import styled from 'styled-components';

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