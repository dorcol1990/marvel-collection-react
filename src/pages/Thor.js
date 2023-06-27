import React from 'react'
import thor from '../assets/thor.jpg';
import Description from '../components/Description';
import ImageWraper from '../components/ImageWraper';

function Thor() {
  return (
    <div className='page-background'>
    <div className='page-container'>
      <ImageWraper image={thor} />
      <Description text="Thor, the Marvel superhero, is the God of Thunder and a member of the Avengers. As the prince of Asgard, Thor possesses incredible strength and wields the mighty Mjolnir, a mystical hammer that grants him control over lightning and storms. With his regal presence, Thor brings a mix of nobility, bravery, and humor to his adventures. His journey includes battles against powerful enemies and personal growth, as he learns the true meaning of heroism and the responsibility that comes with his godly powers. Thor's character explores themes of redemption, sacrifice, and the balance between power and humility. His iconic hammer and thunderous abilities have made him a beloved and integral part of the Marvel Cinematic Universe."/>
    </div>
  </div>
  )
}

export default Thor