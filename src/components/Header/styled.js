import styled from 'styled-components'
import theme from '../../constants/THEME'

export const HeaderStyle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 12vh;
    width: 100vw;
    background: ${theme.colors.blue800};
    color:${theme.colors.white};
    font-weight:bolder;
    
`