import * as S from './styled'
import Arrow  from '../../assets/leftArrow.svg'

export default function Header(){
    return(
        <S.HeaderStyle>
            <img src={Arrow} alt='flexa para esquerda'/>
            <p>Labe Rick</p>
            <img alt='icone de casa'/>
        </S.HeaderStyle>
    )
}