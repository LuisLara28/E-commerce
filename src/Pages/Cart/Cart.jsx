import React, { useContext } from "react";

//Router
import {Link} from 'react-router-dom'

//Components
import CardContainer from "../../Components/Card container/CardContainer";
import ItemCard from "../../Components/ItemCard/ItemCard";
import EmptyCart from "../../Components/EmptyCart/EmptyCart";
//Context
import StoreContext from "../../Context/StoreContext";


const Cart = () => {
  const { state, dispatch} = useContext(StoreContext);
  console.log(state);
  return (
    <div>
      { state.cart.length > 0 ?
      <div className="flex justify-between mt-4">
          <p className="font-bold text-xl m-2">Subtotal:$ <span>{state.total}</span></p>
          <div className="mr-4">
              <button onClick={() => dispatch({type:"REMOVE_ALL", payload: state.item})} className="bg-redOrange text-white p-1 rounded mr-3 hover:bg-lightRedOrange">Empty Cart</button>
              <button className="bg-blue text-white p-1 rounded hover:bg-lightBlue"><Link to="/checkout">Checkout</Link></button>
          </div>
      </div>: <EmptyCart />}
      <CardContainer>
        {state?.cart?.map((item) => (
          <ItemCard
            key={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
            id={item.id}
            img={item.image}
            item={item}
            quantity={item.quantity}
          />
        ))}
      </CardContainer>
    </div>
  );
};

export default Cart;
