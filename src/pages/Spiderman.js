import React from 'react'
import spiderman from '../assets/spiderman.jpg';

function Spiderman() {
  return (
    <div className='page-background'>
      <div className='page-container'>
        <div className='left-side'>
        <img src={spiderman} alt="spiderman" className='page-image' /> 
        </div>
        <div className='right-side'>
          <p>
        Spider-Man is a beloved superhero known for his incredible agility, web-slinging abilities, and iconic red and blue suit. With a tragic backstory and a strong sense of responsibility, he fights crime in the streets of New York City, protecting the innocent and upholding justice. Created by Stan Lee and Steve Ditko, Spider-Man has become one of the most recognizable and relatable characters in the Marvel Universe, captivating audiences with his relatable struggles and witty banter. As both Peter Parker, a brilliant student, and Spider-Man, a masked hero, he navigates the challenges of dual identities while using his powers for the greater good.
        </p>
        </div>
      </div>
    </div>
  )
}

export default Spiderman