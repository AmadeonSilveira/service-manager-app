import { useState } from "react";
import { loginUser } from "../../services/auth";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleLogin() {
        try {
            await loginUser(email, password);
            console.log("Login realizado com sucesso");
        } catch (error) {
            console.error("[LOGIN] erro ao fazer login", error);
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
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
            <Button title="Entrar" onPress={handleLogin} />
        </View>
    );
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
        borderRadius: 5,
    }
});