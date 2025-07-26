import { useState } from "react";
import { StyleSheet, View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { loginUser } from "../../services/auth";

export default function Login() {
    const navigation = useNavigation();

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
        
            <TouchableOpacity onPress={() => navigation.navigate('Register' as never)}>
                <Text style={styles.link}>Criar nova conta</Text>
            </TouchableOpacity>
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
    },
    link: {
        marginTop: 16,
        color: '#007bff',
        textAlign: 'center',
    },
});