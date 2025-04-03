import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null); // null = no autenticado

	const login = (username) => {
		setUser({ username });
	};

	const logout = () => {
		setUser(null);
	};

	return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
};

// Hook personalizado
export const useAuth = () => useContext(AuthContext);
