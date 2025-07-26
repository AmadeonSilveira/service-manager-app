
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { autenticacao } from "./firebase";

export async function loginUser(email: string, password: string) {
    try {
        const user = await signInWithEmailAndPassword(autenticacao, email, password);
        console.log("Usuário logado com sucesso", user.user.uid);
        return user.user;
    } catch (error) {
        console.error("[AUTH] erro ao fazer login", error);
        throw error;
    }
}

export async function registerUser(email: string, password: string){
    try {
        const user = await createUserWithEmailAndPassword(autenticacao, email, password);
        console.log("Usuário cadastrado com sucesso", user.user.uid);
        return user.user;
    } catch (error) {
        console.error("[AUTH] erro ao registrar usuário", error);
        throw error;
    }
}