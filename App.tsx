import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Routes from './src/routes';
import { AuthProvider } from './src/contexts/AuthContext';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </GestureHandlerRootView>
  );
}
