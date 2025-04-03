import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const [username, setUsername] = useState("");
	const { login } = useAuth();
	const navigate = useNavigate();

	const handleLogin = (e) => {
		e.preventDefault();
		login(username);
		navigate("/"); // Redirige al home
	};

	return (
		<div className="flex flex-col items-center justify-center h-screen space-y-4">
			<h1 className="text-2xl font-bold">Login</h1>
			<form
				onSubmit={handleLogin}
				className="flex flex-col space-y-4"
			>
				<input
					type="text"
					placeholder="Username"
					value={username}
					className="border rounded px-4 py-2"
					onChange={(e) => setUsername(e.target.value)}
					required
				/>
				<button
					type="submit"
					className="bg-blue text-white px-4 py-2 rounded"
				>
					Login
				</button>
			</form>
		</div>
	);
};

export default Login;
