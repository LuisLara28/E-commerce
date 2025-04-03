import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";

// Contexts
import StoreContext from "../context/StoreContext";
import { useAuth } from "../context/AuthContext";

// Icon
import cartIcon from "../assets/icons/shopping-cart-10902.svg";

const Header = () => {
	const { state } = useContext(StoreContext);
	const { user, logout } = useAuth();
	const { pathname } = useLocation();

	return (
		<div className="flex justify-between items-center bg-darkGray text-white h-32 p-5">
			<h1 className="font-bold text-2xl">
				<Link to="/">E-commerce APP</Link>
			</h1>

			<div className="flex items-center space-x-6">
				{/* Usuario logueado */}
				{user ? (
					<div className="flex items-center space-x-4">
						<span className="text-sm">Welcome, {user.username}</span>
						<button
							onClick={logout}
							className="text-sm bg-customRed px-3 py-1 rounded hover:bg-redOrange transition"
						>
							Logout
						</button>
					</div>
				) : (
					<Link
						to="/login"
						className="text-sm underline hover:text-lightGray"
					>
						Login
					</Link>
				)}

				{/* Icono del carrito solo en / */}
				{pathname === "/" && (
					<div className="relative w-12 h-12">
						<Link
							className="relative w-12 h-12 flex items-center justify-center"
							to="/cart"
						>
							<img
								src={cartIcon}
								alt="Cart"
								className="w-7"
							/>
							{state.qty > 0 && (
								<div className="flex absolute w-4 h-4 bg-customRed rounded-full right-0 top-1 items-center justify-center">
									<p className="text-xs">{state.qty}</p>
								</div>
							)}
						</Link>
					</div>
				)}
			</div>
		</div>
	);
};

export default Header;
