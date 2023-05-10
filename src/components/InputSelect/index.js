import {InputSelectStyle} from './styled'

export default function InputSelect({selectedSpecies,setSelectedSpecies}){
    const handleSelectedSpecies = (event) => {
        setSelectedSpecies(event.target.value);
      }
    return(
        <>
                <InputSelectStyle value={selectedSpecies} onChange={handleSelectedSpecies} >
                    <option value="Human">HUMAN</option>
                    <option value="Alien">ALIEN</option>
                    <option value="Diseas">DISEAS</option>
                </InputSelectStyle>
        </>
    )
}