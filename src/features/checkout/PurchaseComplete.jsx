import React from "react";
import { Link } from "react-router-dom";
import Image from "../../assets/Images/seeklogo.com.svg";

const PurchaseComplete = () => {
	return (
		<div className="flex flex-col justify-center items-center text-center h-screen px-4 space-y-6 animate-fade-in">
			<h1 className="text-2xl font-bold text-darkGray animate-pulse">🎉 Thank you for purchasing with us!</h1>

			<img
				src={Image}
				alt="Logo"
				className="w-40 h-auto opacity-90 drop-shadow-md"
			/>

			<Link
				to="/"
				className="bg-customRed hover:bg-redOrange text-white px-6 py-2 rounded font-semibold text-sm transition"
			>
				Continue Shopping
			</Link>
		</div>
	);
};

export default PurchaseComplete;
