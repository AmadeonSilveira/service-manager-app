import AsyncStorage from "@react-native-async-storage/async-storage";

const USER_KEY = '@user_logged';

export async function saveSession(user: {uid: string; email: string}) {
    await AsyncStorage.setItem(USER_KEY, JSON.stringify(user));
}

export async function getSession() {
    const data = await AsyncStorage.getItem(USER_KEY);
    return data? JSON.parse(data) : null;
}

export async function clearSession() {
    await AsyncStorage.removeItem(USER_KEY);
}