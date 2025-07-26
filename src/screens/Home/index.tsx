import { Button, Text, View } from "react-native";
import { loggout } from "../../services/auth";

export default function Home() {
    return (
        <View style={{ flex: 1 }}>
            <Text>Page home</Text>
            <Button title="Sair" onPress={loggout}/>
        </View>
    )
}