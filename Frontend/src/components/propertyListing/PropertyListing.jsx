import React from 'react'
import PropertyImg from './PropertyImg'
import "./PropertyListing.css"
// import "../../css/PropertyListing.css"

const PropertyListing = () => {
  return (
    <div className = 'property-container'>
        <p className = 'property-header'>Beautiful Villa in Goa </p>
        <h6 className = 'property-location'> 
        <span className = 'material-symbols-outlined'> House </span>
        <span className = 'location'> Karnataka , India </span>
        </h6>
        <PropertyImg images={["/Assets/property2.webp"]}/>
        <div className = 'middle-container row'>
          <div className = 'des-and-aminities col-md-8 col-sm-12 col-12'>
            <h2 className = 'property-description-header'> Description </h2>
            <p className = 'property-description'> This is a simple description of a luxury villa located near the beach . Perfect for families and group .
              <br>
              </br>
              Max number of guests : 6
                </p>
                <hr/>


          </div>
        </div>
        {/* <PropertyImg */}
    </div>
  )
}

export default PropertyListing
