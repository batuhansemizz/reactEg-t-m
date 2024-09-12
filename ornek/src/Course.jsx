import React from 'react'
import './css/header.css'

function Course({ course }) {
    const {id,title,description,price,link,image} = course;
  return (
    <div className='course'>
        <div>
            <img src={image}  />
            <div><h4>{title}</h4></div>
            <div><h5>{description}</h5></div>
            <div><p>{price}</p>Satın Almak için</div>
            <div><a href={link}></a></div>



        </div>
    </div>
  )
}

export default Course