import { createContext, useContext, useState } from "react";
import { authService } from "./authService";
import { useLocalStorage } from "./Hooks/useLocalStorage";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useLocalStorage('user', null)

    console.log(user, 'i get conotexxt')
    async function handleToken(props) {
        try {
            const data = await authService.getLogged(props);
            if (data.status) {
                localStorage.setItem('user', props.email);
                localStorage.setItem('token', data.data.token);
            }
        }
        catch (e) {

        }
    }
    const login = (props) => {
        handleToken(props);
        setUser(props.email);
    }

    const logout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        console.log('logout clicked');
        setUser('')
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }} >
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    return useContext(AuthContext)
}