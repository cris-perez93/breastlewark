import styled from "@emotion/styled";
import { useState } from "react";
import SliderComponent from "./SliderComponent";

const ButtonHair = styled.button`
  width: 100px;
  padding: 5px;
`
const ContainerButtons= styled.div`

  padding: 5px;
  margin-left: 200px;
  width: 800px;
  display: flex;
  justify-content: space-evenly;
  
`


const DisplayCharacters = ({characters,color}) => {

  const [filteredcolor, setFilteredColor] = useState(null)

  

 

  

    const filteredHair = filteredcolor 
    ? characters.filter(character => character.hair_color === filteredcolor) 
    : characters; 

         

     

    


    return ( 
      <>
       <ContainerButtons>
         {color.map(color =>(
             <ButtonHair key={characters.id} onClick={() =>{setFilteredColor(color)}}>
                 {color}
             </ButtonHair>
         ))}
       </ContainerButtons>

       <SliderComponent filteredHair={filteredHair} />
       </>
     );
}
 
export default DisplayCharacters;