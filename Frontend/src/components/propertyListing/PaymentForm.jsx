import React from 'react'
import {DatePicker , Space} from "antd";
import {Link} from "react-router-dom";

const PaymentForm = () => {
    const {RangePicker} = DatePicker;
  return (
    <div className = 'form-container'>
        <form className = 'paymemnt-form'>
            <div className='price-pernight'>
                Price:  <b>&#8377;2000</b>
                <span>/- per night </span>
            </div>
            <div className = 'payment-field'>
                <div className='date'>
                    <Space direction = 'vertical' size={12}>
                        <RangePicker format="YYYY-MM-DD" picker = "date"/>

                    </Space>
                </div>

                {/* {guests} */}
                <div className = 'guest'>
                    <label className = 'payment-labels'>Number of guests: </label>
                    <br/>
                    <input
                     type = "number"
                    className = 'no-of-guests'
                    placeholder = "guest"
                    // defaultValue ="2"
                    />
                </div>

                {/* Name+ph no */}
                <div className = 'name-phoneno'>
                    <label className= 'payment-labels'> Your full name :</label>
                    <br/>
                    <input 
                    type = "text"
                    className = 'full-name'
                    placeholder = 'Name'/>

                    <br/>
                    <label className = 'payment-labels'>Phone no. </label>
                    <input type='number' className = 'phone-number' placeholder = 'Number' />

                     </div>



            </div>

            <div className = 'book-place'>
                <button>
                    <Link to = {"/login"} style = {{textDecoration : "none" , color:"white" }}>
                    Login to book
                    </Link>
                </button>
            </div>




        </form>
      
    </div>
  )
}

export default PaymentForm
