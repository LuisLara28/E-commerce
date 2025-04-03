import React, { useContext } from "react";
import StoreContext from "../../context/StoreContext";
import CardContainer from "./CardContainer";
import ItemCard from "./ItemCard";
import ItemSkeleton from "./SkeletonItem";

const Home = () => {
	const { state } = useContext(StoreContext);
	const { isLoading, items, error } = state;

	const handleRetry = () => {
		// Reintentar carga
		window.location.reload(); // O podrías volver a disparar el fetch manualmente
	};

	return (
		<div className="flex flex-col items-center justify-center px-4 py-6">
			<h1 className="mt-4 text-3xl font-bold text-darkGray">Store</h1>

			{error ? (
				<div className="text-center mt-10">
					<p className="text-red font-semibold mb-4">{error}</p>
					<button
						onClick={handleRetry}
						className="bg-blue text-white px-4 py-2 rounded hover:bg-lightBlue transition"
					>
						Reintentar
					</button>
				</div>
			) : (
				<CardContainer>
					{isLoading ? (
						Array.from({ length: 8 }).map((_, i) => <ItemSkeleton key={i} />)
					) : items.length > 0 ? (
						items.map((item) => (
							<ItemCard
								key={item.id}
								item={item}
							/>
						))
					) : (
						<p className="text-center text-gray-500">No hay productos disponibles</p>
					)}
				</CardContainer>
			)}
		</div>
	);
};

export default Home;
