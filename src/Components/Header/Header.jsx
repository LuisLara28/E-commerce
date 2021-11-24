import React, {useContext} from "react";

//Router
import { Link, useLocation } from "react-router-dom";


//Context
import StoreContext from "../../Context/StoreContext";

import cartIcon from "../../Icon/shopping-cart-10902.svg";

const Header = () => {
    const {state} = useContext(StoreContext)
    //console.log(state);
    const {pathname} = useLocation()
    return (
        <div className="flex justify-between bg-darkGray text-white h-32 p-5">
            <h1 className="font-bold w-auto text-2xl"><Link to="/">E-commerce APP</Link></h1>
            {pathname === "/" && (
            <div className="flex"><h3 className="text-base font-bold mr-10">Total: $ {state.total}</h3><div className="flex relative w-12 h-12">
                    <Link to="/cart">
                        <img src={cartIcon} alt="cart-icon" className="w-7" />

                        {state?.qty === 0 ?
                            <div className={"flex absolute w-4 h-4  bg-lightGray rounded right-0 top-1"}>
                            <p className={` text-xs`}>{state.qty}</p>
                            </div> : 
                            <div className={"flex absolute w-4 h-4  bg-red rounded right-0 top-1"}>
                            <p className={` text-xs`}>{state.qty}</p>
                            </div> 
                        }
                    </Link>
                </div></div> )}
        </div>
    );
};

export default Header;
