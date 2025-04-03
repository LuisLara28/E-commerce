import React from "react";

const CardContainer = ({ children }) => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 px-4 mt-6 w-full">
			{children}
		</div>
	);
};

export default CardContainer;
