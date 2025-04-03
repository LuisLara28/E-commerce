import React from "react";

const ItemSkeleton = () => {
	return (
		<div className="bg-litegray animate-pulse rounded-xl shadow-md w-full max-w-xs h-[350px] p-4 flex flex-col gap-4">
			<div className="bg-gray-300 h-40 w-full rounded-md" />
			<div className="h-4 bg-gray-300 rounded w-3/4" />
			<div className="h-4 bg-gray-300 rounded w-1/2" />
			<div className="mt-auto h-10 bg-gray-300 rounded w-full" />
		</div>
	);
};

export default ItemSkeleton;
