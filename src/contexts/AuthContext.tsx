import { createContext, useContext, useEffect, useState } from "react";
import { getSession, saveSession, clearSession } from "../services/session";
import { signOut } from "firebase/auth";
import { autenticacao } from "../services/firebase";

interface User {
    uid: string,
    email: string
}

interface AuthContextData {
    user: User | null;
    setUser: (user: User | null) => void;
    logout: () => Promise<void>;
    loading: boolean;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: any) {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        async function verifySession() {
            const storagedUser = await getSession();
            setUser(storagedUser);
            setLoading(false);
        }

        verifySession();
    });

    async function logout() {
        await signOut(autenticacao);
        await clearSession();
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{user, setUser, logout, loading}}
        >
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext);
}