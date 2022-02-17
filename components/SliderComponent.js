import styled from '@emotion/styled';
import Slider from "react-slick";
import useSWR from 'swr'
import Card from './Card';


const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3
  };

const Container=styled.div`
   width:90%;
   margin: 0 auto;
   position: absolute;
   bottom: 20px;
   left: 50px;
   border-radius: 10px;
   background-color: #2c2c2c86;
   

   
   
  `







const SliderComponent = ({filteredHair}) => {
    
  
return (
        
      <div>
      
     <Container>
      <Slider {...settings}>
        {filteredHair.map((item) => (
          <Card key={item.id} item={item}/>
        ))}
      </Slider>
      </Container>
      
    </div>
       

      );
}
 
export default SliderComponent;