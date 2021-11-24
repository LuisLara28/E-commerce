import React from 'react'

const CardContainer = ({children}) => {
    return (
        <div className="flex flex-row justify-center ml-auto mt-2 items-center flex-wrap w-full ">
            {children}
        </div>
    )
}

export default CardContainer
