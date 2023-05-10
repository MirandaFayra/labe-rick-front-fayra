import {CardContainer} from './styled'

export default function Card({id,name,image,species,selected,setSelected}){
    return(
        <CardContainer selected={selected} id={id} onClick={()=>setSelected(id)}>
            <img src={image}/>
            <p>{name}</p>
            <p>{species}</p>
        </CardContainer>
    )

}