import React, { createContext, useEffect, useReducer } from "react";

//Creación del contexto
const StoreContext = createContext();

//Reducer

const initialState = {
	items: [],
	cart: [],
	total: 0,
	qty: 0,
	isLoading: true,
	error: null,
};

const reducer = (state, action) => {
	switch (action.type) {
		case "LOAD_PRODUCTS":
			return {
				...state,
				items: action.payload,
				isLoading: false, // termina la carga aquí
			};
		case "ADD_TO_CART": {
			const itemIsOnCart = state.cart.find((item) => item.id === action.payload.id);
			return itemIsOnCart
				? {
						...state,
						// cart: [...state.cart, action.payload],

						cart: state.cart.map((item) =>
							item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
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
		}

		case "REMOVE_FROM_CART": {
			const itemToDelete = state.cart.find((item) => item.id === action.payload.id);
			return itemToDelete.quantity > 1
				? {
						...state,
						cart: state.cart.map((item) =>
							item.id === action.payload.id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
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
		}
		case "REMOVE_ALL":
			return {
				...state,
				cart: [],
				total: 0,
				qty: 0,
			};
		case "SET_LOADING":
			return {
				...state,
				isLoading: action.payload,
			};
		case "SET_ERROR":
			return {
				...state,
				error: action.payload,
				isLoading: false,
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

	useEffect(() => {
		const fetchProducts = async () => {
			dispatch({ type: "SET_LOADING", payload: true });
			try {
				const res = await fetch("https://fakestoreapi.com/products");
				if (!res.ok) throw new Error("API error");

				const data = await res.json();
				const formatted = data.map((p) => ({
					id: p.id,
					name: p.title,
					description: p.description,
					price: Math.round(p.price),
					image: p.image,
					quantity: 1,
				}));

				dispatch({ type: "LOAD_PRODUCTS", payload: formatted });
			} catch (error) {
				console.error("Error al cargar productos:", error);
				dispatch({ type: "SET_ERROR", payload: "No se pudo cargar la tienda." });
			}
		};

		fetchProducts();
	}, []);

	return <StoreContext.Provider value={data}>{children}</StoreContext.Provider>;
};

export { StoreProvider };
export default StoreContext;
