import React, { useContext } from "react";
import { Link } from "react-router-dom";

import CardContainer from "../products/CardContainer";
import ItemCard from "../products/ItemCard";
import EmptyCart from "./EmptyCart";
import StoreContext from "../../context/StoreContext";

const Cart = () => {
	const { state, dispatch } = useContext(StoreContext);
	const isCartEmpty = state.cart.length === 0;

	const formatter = new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
	});

	const handleClearCart = () => {
		const confirm = window.confirm("¿Estás seguro de vaciar el carrito?");
		if (confirm) dispatch({ type: "REMOVE_ALL" });
	};

	if (isCartEmpty) return <EmptyCart />;

	return (
		<div>
			<div className="flex flex-col sm:flex-row sm:justify-between items-center gap-4 p-4 bg-gray-100 rounded-md shadow-md mt-4">
				<p className="font-bold text-xl">
					Subtotal: <span className="text-darkGray">{formatter.format(state.total)}</span>
				</p>
				<div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
					<button
						onClick={handleClearCart}
						className="bg-redOrange text-white px-4 py-2 rounded hover:bg-lightRedOrange"
					>
						Empty Cart
					</button>
					<Link to="/checkout">
						<button className="bg-blue text-white px-4 py-2 rounded hover:bg-lightBlue">Checkout</button>
					</Link>
				</div>
			</div>

			<CardContainer>
				{state.cart.map((item) => (
					<ItemCard
						key={item.id}
						item={item}
					/>
				))}
			</CardContainer>
		</div>
	);
};

export default Cart;
