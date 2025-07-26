import { useState } from "react";
import { registerUser } from "../../services/auth";
import { View, StyleSheet, Text, Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { useAuth } from "../../contexts/AuthContext";

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { setUser } = useAuth();

    async function handleRegister() {
        try {
            const user = await registerUser(email, password);
            setUser({uid: user.uid, email: user.email || ''});
            console.log("Usuário cadastrado com sucesso");
        } catch (error) {
            console.error("handleRegister", error);
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cadastro de usuário</Text>
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                keyboardType="email-address"
                style={styles.input}
            />
            <TextInput
                placeholder="Senha"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                style={styles.input}
            />
            <Button title="Cadastrar" onPress={handleRegister} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center',
        padding: 20
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20
    },
    input: {
        backgroundColor: '#eee',
        marginBottom: 10, 
        padding: 10, 
        borderRadius: 5
    }
})