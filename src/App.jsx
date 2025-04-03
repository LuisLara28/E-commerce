import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainLayout from "./ui/MainLayout";

import Home from "./features/products/Home";
import Cart from "./features/cart/Cart";
import Checkout from "./features/checkout/Checkout";
import PurchaseComplete from "./features/checkout/PurchaseComplete";

import ErrorPage from "./ui/ErrorPage";
import Login from "./features/auth/Login";
import ProtectedRoute from "./routes/ProtectedRoute";

const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout />,
		errorElement: <ErrorPage />,
		children: [
			{ path: "/", element: <Home /> },
			{ path: "/cart", element: <Cart /> },
			{ path: "/login", element: <Login /> },
			{
				element: <ProtectedRoute />,
				children: [
					{ path: "/checkout", element: <Checkout /> },
					{ path: "/purchase_complete", element: <PurchaseComplete /> },
				],
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
