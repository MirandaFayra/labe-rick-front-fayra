import {CardContainer} from './styled'
import Banana from '../../assets/banana.jpeg'

export default function Card(){
    return(
        <CardContainer>
            <img src={Banana}/>
            <p>Bananinha</p>
            <p>Fruta</p>
        </CardContainer>
    )

}