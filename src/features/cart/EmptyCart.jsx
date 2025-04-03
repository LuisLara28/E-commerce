import React from "react";
import { Link } from "react-router-dom";

const EmptyCart = () => {
	return (
		<div className="flex flex-col items-center justify-center text-center px-4 py-20">
			<h1 className="text-2xl font-bold text-darkGray mb-4 animate-pulse">Your cart is empty!</h1>
			<p className="text-gray-600 mb-6">But we're sure you'll find something you like 😉</p>
			<Link
				to="/"
				className="inline-block px-6 py-2 bg-customRed text-white font-semibold text-sm rounded hover:bg-darkGray transition-colors duration-200"
			>
				Continue Shopping
			</Link>
		</div>
	);
};

export default EmptyCart;
