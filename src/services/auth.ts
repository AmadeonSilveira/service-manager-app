
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { autenticacao } from "./firebase";
import { clearSession, saveSession } from "./session";

export async function loginUser(email: string, password: string) {
    try {
        const result = await signInWithEmailAndPassword(autenticacao, email, password);
        await saveSession({uid: result.user.uid, email: result.user.email || ''});

        console.log("Usuário logado com sucesso", result.user.uid);
        
        return result.user;
    } catch (error) {
        console.error("[AUTH] erro ao fazer login", error);
        throw error;
    }
}

export async function registerUser(email: string, password: string){
    try {
        const result = await createUserWithEmailAndPassword(autenticacao, email, password);
        await saveSession({uid: result.user.uid, email: result.user.email || ''});
        
        console.log("Usuário cadastrado com sucesso", result.user.uid);
        
        return result.user;
    } catch (error) {
        console.error("[AUTH] erro ao registrar usuário", error);
        throw error;
    }
}

export async function loggout() {
    console.log("Tchau")
    await signOut(autenticacao);
    await clearSession();
}