import React from 'react'

//Router
import {Link} from 'react-router-dom'

const EmptyCart = () => {
    return (
        <div className="h-screen flex flex-col text-2xl text-center items-center ml-2 mr-2 mt-40 font-semibold">
            <h1>Your cart is empty!, but sure you find something you like!</h1>
            <button className="m-2 text-sm font-semibold bg-red text-white rounded p-2"><Link to="/">Continue Shopping</Link></button>
        </div>
    )
}

export default EmptyCart
