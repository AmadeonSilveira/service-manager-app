import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import Login from '../screens/Login/Login';
import Register from '../screens/Register';

export type routesList = {
    Home: undefined;
    Register: undefined;
    Login: undefined;
};

const Stack = createNativeStackNavigator<routesList>();

export default function Routes() {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}