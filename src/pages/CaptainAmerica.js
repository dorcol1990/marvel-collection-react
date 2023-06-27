import React from 'react'
import captainamerica from '../assets/captainamerica.jpg';
import Description from '../components/Description';
import ImageWraper from '../components/ImageWraper';

function CaptainAmerica() {
  return (
    <div className='page-background'>
    <div className='page-container'>
      <ImageWraper image={captainamerica} />
      <Description text="Captain America is a legendary Marvel superhero and symbol of patriotism. Steve Rogers, a scrawny and determined soldier, is transformed into a super-soldier during World War II. Clad in his iconic red, white, and blue suit, Captain America wields his indestructible shield as he fights for justice and defends the innocent. With unwavering principles, exceptional leadership, and unmatched combat skills, he embodies the ideals of courage, honor, and sacrifice. Captain America's journey explores themes of duty, identity, and the pursuit of a better world. His unwavering resolve and unwavering dedication inspire both his allies and fans worldwide. Captain America stands as a timeless symbol of heroism and the enduring spirit of America."/>
    </div>
  </div>
  )
}

export default CaptainAmerica