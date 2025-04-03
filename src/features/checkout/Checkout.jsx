import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import StoreContext from "../../context/StoreContext";

const Checkout = () => {
	const { state, dispatch } = useContext(StoreContext);
	const navigate = useNavigate();

	const handleCompletePurchase = (e) => {
		e.preventDefault(); // para que no recargue la página
		dispatch({ type: "REMOVE_ALL" });
		navigate("/purchase_complete");
	};

	return (
		<div className="m-4">
			<div className="grid md:grid-cols-3 gap-6">
				<div className="md:col-span-1">
					<h3 className="text-xl font-bold text-darkGray mb-2">Personal Information</h3>
					<p className="text-sm text-gray-600">Use a permanent address where you can receive mail.</p>
				</div>

				<div className="md:col-span-2">
					<form onSubmit={handleCompletePurchase}>
						<div className="shadow rounded-md bg-white p-6 space-y-4">
							<div className="grid grid-cols-6 gap-4">
								{/* Nombre */}
								<div className="col-span-6 sm:col-span-3">
									<label className="block text-sm font-medium text-gray-700">First name</label>
									<input
										type="text"
										required
										className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm sm:text-sm focus:ring-lightBlue focus:border-lightBlue"
									/>
								</div>

								{/* Apellido */}
								<div className="col-span-6 sm:col-span-3">
									<label className="block text-sm font-medium text-gray-700">Last name</label>
									<input
										type="text"
										required
										className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm sm:text-sm focus:ring-lightBlue focus:border-lightBlue"
									/>
								</div>

								{/* Email */}
								<div className="col-span-6">
									<label className="block text-sm font-medium text-gray-700">Email</label>
									<input
										type="email"
										required
										className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm sm:text-sm focus:ring-lightBlue focus:border-lightBlue"
									/>
								</div>

								{/* Dirección */}
								<div className="col-span-6">
									<label className="block text-sm font-medium text-gray-700">Address</label>
									<input
										type="text"
										required
										className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm sm:text-sm focus:ring-lightBlue focus:border-lightBlue"
									/>
								</div>
							</div>

							{/* Total y acción */}
							<div className="flex flex-col items-center justify-between mt-6">
								<h2 className="text-2xl font-bold text-darkGray mb-2">Total: ${state.total}</h2>
								<button
									type="submit"
									className="bg-lightBlue text-white px-6 py-2 rounded-md font-semibold hover:bg-blue transition"
								>
									Complete Purchase
								</button>
							</div>
						</div>
					</form>

					<div className="text-center mt-6">
						<p className="font-medium text-gray-700 mb-2">Not ready yet?</p>
						<Link
							to="/"
							className="bg-customRed text-white px-6 py-2 rounded-md font-semibold text-sm hover:bg-redOrange transition"
						>
							Continue Shopping
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Checkout;
