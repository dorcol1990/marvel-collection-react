import React from 'react'

function ImageWraper(props) {
  return (
    <div className='left-side'>
        <img src={props.image} alt="image not found" className='page-image' /> 
        </div>
  )
}

export default ImageWraper