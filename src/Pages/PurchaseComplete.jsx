import React from 'react'
//Router
import {Link} from 'react-router-dom'
import Image from '../Context/Images/seeklogo.com.svg'


const PurchaseComplete = () => {
    return (
        <div className="flex flex-col items-center m-5 h-screen">
            <h1 className="text-xl font-bold text-center">Thank you for Purchasing with us!</h1>
            <img src={Image} alt="" />
            <button className="m-2 text-sm font-semibold bg-red text-white rounded p-2"><Link to="/">Continue Shopping</Link></button>
        </div>
    )
}

export default PurchaseComplete
