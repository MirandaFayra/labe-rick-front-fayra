import styled from 'styled-components'
import theme from '../../constants/THEME'

export const HeaderContainer = styled.div`
    height: 14vh;
    width: 100vw;
    background: ${theme.colors.blue800};
    color:${theme.colors.white};
    font-weight:bolder;
    font-size:24px; 
`

export const HeaderStyle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.05em;
`
