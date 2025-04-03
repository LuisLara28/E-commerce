import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import StoreContext from "../../context/StoreContext";

const ItemCard = ({ item }) => {
	const { dispatch } = useContext(StoreContext);
	const { pathname } = useLocation();

	const isCart = pathname === "/cart";
	const { name, description, image, price, quantity } = item;

	const handleClick = () => {
		dispatch({
			type: isCart ? "REMOVE_FROM_CART" : "ADD_TO_CART",
			payload: item,
		});
	};

	return (
		<div className="bg-white rounded-2xl shadow-md w-full max-w-xs m-2 overflow-hidden flex flex-col">
			<img
				src={image}
				alt={name}
				className="w-full h-60 object-contain transition-transform duration-300 hover:scale-110"
			/>

			<div className="p-4 space-y-2 flex flex-col justify-between h-full">
				<div>
					<p className="font-bold text-lg line-clamp-2	 text-darkGray">{name}</p>
					<p className="text-xs line-clamp-3  text-gray-600">{description}</p>
				</div>

				<div className="flex flex-col mt-4">
					{isCart && <p className="font-medium text-sm text-gray-800 mb-1">Qty: {quantity}</p>}
					<p className="font-semibold text-lg text-darkGray mb-2">${price}</p>
					<button
						onClick={handleClick}
						className="bg-gradient-to-r from-purple to-peach hover:from-lightPurple hover:to-lightPeach text-white text-sm font-semibold rounded-md py-2"
					>
						{isCart ? "Remove" : "Add to Cart"}
					</button>
				</div>
			</div>
		</div>
	);
};

export default ItemCard;
