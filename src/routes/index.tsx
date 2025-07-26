import { ActivityIndicator, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AppRoutes from "./AppRoutes";
import AuthRoutes from "./AuthRoutes";
import { useAuth } from "../contexts/AuthContext";

export default function Routes() {
    const { user, loading } = useAuth();
    console.log("user", user);

    if(loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" />
            </View>
        )
    }

    return (
        <NavigationContainer>
            {user? <AppRoutes /> : <AuthRoutes />}
        </NavigationContainer>
    )
}