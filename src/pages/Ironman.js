import React from 'react'
import ironman from '../assets/ironman.jpg';
import Description from '../components/Description';
import ImageWraper from '../components/ImageWraper';

function Ironman() {
  return (
    <div className='page-background'>
    <div className='page-container'>
      <ImageWraper image={ironman} />
      <Description text="Iron Man is a Marvel superhero known for his genius intellect, cutting-edge technology, and iconic suit of armor. Tony Stark, the man behind the mask, is a billionaire industrialist and playboy who becomes a hero after a life-altering experience. With his suits equipped with advanced weaponry and flight capabilities, Iron Man fights against villains and defends humanity. He embodies the perfect blend of intelligence, charisma, and bravery. Tony Stark's journey showcases personal growth, redemption, and the exploration of the consequences of wielding such power. Iron Man's impact on popular culture and the Marvel Universe is undeniable, making him an iconic and beloved character."/>
    </div>
  </div>
  )
}

export default Ironman