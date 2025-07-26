import { banco } from "./firebase";
import { collection, addDoc } from "firebase/firestore";

export async function saveEnterpriseTest() {
    try {
        const docRef = await addDoc(collection(banco, 'empresas'), {
            name: "Empresa Teste",
            cnpj: "12345678000199",
            timeInsert: new Date()
        });
        
        return docRef.id;
    } catch (error) {
        console.error('Erro ao salvar empresa:', error);
    }
}