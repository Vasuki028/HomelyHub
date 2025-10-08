import React from 'react'
import { useState } from 'react';
import Modal from "./Modal"

const PropertyImg = () => {
    const [isModalOpen , setIsModalOpen] = useState(false);
    const handleShowAllPhotos = () =>{
        setIsModalOpen(true)
    }

    const handleCloseModal = () =>{
        setIsModalOpen(false)
    }

    //static images 
    const images = [
        {url:"/Assets/property2.webp"},
        {url:"/Assets/property3.webp"},
        {url:"/Assets/property4.webp"},
        {url:"/Assets/property5.webp"},
        {url:"/Assets/property6.webp"}

    ]

  return (
    <>
    <div className = 'propert-img-container'>
        <div className='img-item'>
            <img src={images[0].url} className='images' style={{borderTopLeftRadius:"10px", borderBottomLeftRadius: "10px" }}
            alt ='property-1'/>

        </div>
        <div>
        <img className = 'images' src = {images[1].url} alt = 'property'/>
      </div>
      <div>
        <img className = 'images' src = {images[2].url} alt = 'property'/>
      </div>
      <div>
        <img className = 'images' src = {images[3].url} alt = 'property'/>
      </div>
      <div>
        <img className='images' src ={images[4].url}
        style ={{borderBottomRightRadius : "10px"}}/>

        <button className = 'similar-photos' onClick={handleShowAllPhotos}>
            <span  className = 'material-symbols-outlined'> photo_library</span>

        </button>
      </div>

    </div>
    <div className ='similar-photos-container'>
        {isModalOpen && <Modal images = {images} onClose = {handleCloseModal}/>}
        </div>


    </>
  )
}

export default PropertyImg
