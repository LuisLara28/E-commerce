import React, { createContext, useReducer } from "react";

//Images
import perfume from "./Images/img1.jpg";
import Shirt from "./Images/img2.jpg";
import Shirt2 from "./Images/img3.jpg";
import Sneakers from "./Images/img4.jpg";
import Dog1 from "./Images/img5.jpg";
import Dog2 from "./Images/img6.jpg";
import Jeans from "./Images/img7.jpg";
import Sweater from "./Images/img8.jpg";
import WhiteSweater from "./Images/img9.jpg";
import Sunglasses from "./Images/img10.jpg";
import Bag from "./Images/img11.jpg";
import Pants from "./Images/img12.jpg";

//Creación del contexto
const StoreContext = createContext();

//Reducer

const initialState = {
  items: [
    {
      id: 1,
      image: perfume,
      name: "Perfume",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac.",
      price: 50,
      quantity: 1,
    },
    {
      id: 2,
      image: Shirt,
      name: "Shirt",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac.",
      price: 60,
      quantity: 1,
    },
    {
      id: 3,
      image: Shirt2,
      name: "Shirt 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac.",
      price: 50,
      quantity: 1,
    },
    {
      id: 4,
      image: Sneakers,
      name: "Sneakers",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac.",
      price: 100,
      quantity: 1,
    },
    {
      id: 5,
      image: Dog1,
      name: "Dog Clothes 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac.",
      price: 30,
      quantity: 1,
    },
    {
      id: 6,
      image: Dog2,
      name: "Dog Clothes 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac.",
      price: 40,
      quantity: 1,
    },
    {
      id: 7,
      image: Jeans,
      name: "Jeans",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac.",
      price: 70,
      quantity: 1,
    },
    {
      id: 8,
      image: Sweater,
      name: "Sweater",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac.",
      price: 80,
      quantity: 1,
    },
    {
      id: 9,
      image: WhiteSweater,
      name: "White Sweater",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac.",
      price: 75,
      quantity: 1,
    },
    {
      id: 10,
      image: Sunglasses,
      name: "Sunglasess",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac.",
      price: 120,
      quantity: 1,
    },
    {
      id: 11,
      image: Bag,
      name: "Bag",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac.",
      price: 250,
      quantity: 1,
    },
    {
      id: 12,
      image: Pants,
      name: "Pants",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac.",
      price: 50,
      quantity: 1,
    },
  ],
  cart: [],
  total: 0,
  qty: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const itemIsOnCart = state.cart.find(
        (item) => item.id === action.payload.id
      );
      return itemIsOnCart
        ? {
            ...state,
            // cart: [...state.cart, action.payload],

            cart: state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),

            total: state.total + action.payload.price,
            qty: state.qty + 1,
          }
        : {
            ...state,
            cart: [...state.cart, action.payload],
            total: state.total + action.payload.price,
            qty: state.qty + 1,
          };

    case "REMOVE_FROM_CART":
      const itemToDelete = state.cart.find(
        (item) => item.id === action.payload.id
      );
      return itemToDelete.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload.id && item.quantity > 1
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
            total: state.total - action.payload.price,
            qty: state.qty - 1,
          }
        : {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload.id),
            total: state.total - action.payload.price,
            qty: state.qty - 1,
          };
    case "REMOVE_ALL":
      return {
        ...state,
        cart: [],
        total: 0,
        qty: 0,
      };

    default:
      return state;
  }
};

//Provider
const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const data = {
    state,
    dispatch,
  };

  return <StoreContext.Provider value={data}>{children}</StoreContext.Provider>;
};

export { StoreProvider };
export default StoreContext;
