import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, useEffect } from 'react'; // Corregir la importación de useEffect
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './src/screens/SplashScreen';
import Login from './src/screens/Login';
import Pantalla1 from "./src/screens/Pantalla1";
import CalendarEvents from 'react-native-calendar-events';

const Stack = createNativeStackNavigator();

export default function App() {
  useEffect(() => {
    async function requestCalendarPermissions() {
      try {
        await CalendarEvents.requestPermissions();
        console.log('Permisos de calendario concedidos');
      } catch (error) {
        console.error('Error al solicitar permisos de calendario:', error);
      }
    }

    requestCalendarPermissions();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{
          orientation: 'portrait',
          headerShown: false,
          animation: 'none',
        }}>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: 'Login' }}
        />
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Pantalla1" component={Pantalla1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

