import React from 'react'
import hulk from '../assets/hulk.jpg';
import Description from '../components/Description';
import ImageWraper from '../components/ImageWraper';

function Hulk() {
  return (
    <div className='page-background'>
    <div className='page-container'>
      <ImageWraper image={hulk} />
      <Description text="Hulk, the Marvel superhero, is a formidable force of raw power and uncontrollable rage. Dr. Bruce Banner, a brilliant scientist, transforms into the Hulk whenever his anger is unleashed. With his immense size and strength, the Hulk smashes through obstacles and battles villains with extraordinary might. However, his dual nature presents a constant internal struggle. While the Hulk is a symbol of unbridled strength, Dr. Banner represents intelligence and vulnerability. The character delves into themes of inner turmoil, the consequences of unchecked power, and the duality of human nature. Hulk's iconic presence and incredible strength have made him an integral part of the Marvel Universe, captivating audiences with his epic battles and complex persona."/>
    </div>
  </div>
  )
}

export default Hulk