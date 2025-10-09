import React from 'react'

const PropertyAmenities = ({amenities}) => {
  return (
    <>
      <h2 className = "property-amenities">What this place offers
        <div className = 'amenities'>
          {amenities.map((amenity,index) =>(
            <p key = {index}>
              <span className = 'material-symbols-outlined'> 
                {amenity.toLowerCase()}

              </span>
              <span>{amenity}</span>
              </p>
          )) }


        </div>
        
      </h2>
    </>
  )
}

export default PropertyAmenities
