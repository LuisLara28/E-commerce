import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../ui/Header";

const MainLayout = () => {
	return (
		<div>
			<Header />
			<main className="p-4">
				<Outlet />
			</main>
		</div>
	);
};

export default MainLayout;
