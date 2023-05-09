import * as S from './styled'
import Arrow  from '../../assets/leftArrow.svg'
import Rocket from '../../assets/rocket.svg'

export default function Header(){
    return(
        <S.HeaderContainer>
        <S.HeaderStyle>
            <img src={Arrow} alt='flexa para esquerda'/>
            <p>Labe Rick</p>
            <img src={Rocket} alt='icone de casa'/>
        </S.HeaderStyle>
        </S.HeaderContainer>
    )
}