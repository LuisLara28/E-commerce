import React, { useContext } from "react";

//Router
import { useLocation } from "react-router-dom";

//Context
import StoreContext from "../../Context/StoreContext";

//Styles
import './ItemCard.styles.css'

const ItemCard = ({ id, name, description, img, price, item,quantity }) => {
  const { dispatch } = useContext(StoreContext);
  const { pathname } = useLocation();

  //Funciones
  const handleAddOrRemove = () => {
    if (pathname === "/") {
      dispatch({ type: "ADD_TO_CART", payload: item });
    } else if (pathname === "/cart") {
      dispatch({ type: "REMOVE_FROM_CART", payload: item });
    }
  };
  
  return (
    <div
      id="ItemCard"
      className=" flex m-2 justify-start items-start rounded  w-19/20 max-w-xs h-auto"
    >
      <div key={id}>
        <img src={img} alt={name} className="w-full h-96 " />
        <div className="flex flex-col  ">
          <p className="font-bold w-full">{name}</p>
          <p className="text-xs ">{description}</p>
        </div>
        <div className="flex flex-row justify-between items-end w-full">
          {pathname === "/cart" && <p className="font-semibold">Qty: {quantity}</p>}
          <div>
            <p className="p-1 font-semibold text-lg">$ {price}</p>
            <button
              onClick={handleAddOrRemove}
              className="bg-gradient-to-r from-purple to-peach hover:from-lightPurple hover:to-lightPeach text-white text-xs rounded mr-1 p-3"
            >
              {pathname === "/"
                ? "Add to Cart"
                : pathname === "/cart"
                ? "Remove"
                : null}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
