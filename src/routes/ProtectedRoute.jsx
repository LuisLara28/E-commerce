import { useAuth } from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
	const { user } = useAuth();

	// Si no está logueado, redirige a /login
	if (!user)
		return (
			<Navigate
				to="/login"
				replace
			/>
		);

	// Si está logueado, muestra la ruta protegida
	return <Outlet />;
};

export default ProtectedRoute;
