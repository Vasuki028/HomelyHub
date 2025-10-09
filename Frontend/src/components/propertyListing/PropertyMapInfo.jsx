import React from 'react'

const PropertyMapInfo = () => {
  return (
    <>
    <div className = 'map-image-cintainer col-md-6 col-sm-12 col-12'>
        <h2 className='map-header'>Where you will be </h2>
        <img
        alt ='map'
        className= 'map-image'
        src="https://i.sstatic.net/uJ9HQ.png"/>

      
    </div>
    <div className= 'extra-info col-md-6 col-sm-12 col-12 '>
        <h2 className= 'extra-heading'> Extra info </h2>
        <p className = 'extra-description'>
            -checking the most beautiful Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quos, consectetur mollitia, ut tenetur facilis facere necessitatibus vero, provident architecto ipsam aut. Pariatur dicta explicabo illo ducimus autem, eos minima.
        </p>


    </div>
    </>
  )
}

export default PropertyMapInfo
