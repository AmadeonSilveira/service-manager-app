import { createUserWithEmailAndPassword } from "firebase/auth";
import { autenticacao } from "./firebase";

export async function registerUser(email: string, senha: string){
    try {
        const user = await createUserWithEmailAndPassword(autenticacao, email, senha);
        console.log("Usuário cadastrado com sucesso", user.user.uid);
        return user.user;
    } catch (error) {
        console.error("[AUTH] erro ao registrar usuário", error);
        throw error;
    }
}