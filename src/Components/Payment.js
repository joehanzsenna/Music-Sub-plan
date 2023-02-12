import React from 'react'
import image from '../Assets/image01.svg'
import icon from '../Assets/music-icon.svg'
import Bmobile from '../Assets/pattern-background-mobile.svg'

const Payment = () => {
  return (
    <div className='Payment'>
        <img src={Bmobile}alt="Bg-pattern" className='Bg-mobile' />
        <div className='Payment-contents'>
            <img src={image} alt="" className='bg-image'/>
            <h2>Payment Summary</h2>
            <button className='btn'><a target={'_blank'} href="../Components/Desktop.js">Click to pay</a></button>
            <h5 className='cancel-order'>Cancel Order</h5>
        </div>
    </div>
  )
}

export default Payment