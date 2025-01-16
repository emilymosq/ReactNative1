import React from "react";
import Login from "./app/presentation/views/auth/Login";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import LoginScreen from "./app/presentation/views/auth/Login";
import RegistroScreen from "./app/presentation/views/auth/Registro";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={"LoginScreen"} component={LoginScreen}></Stack.Screen>
              <Stack.Screen name={"RegistroScreen"} component={RegistroScreen} options={{headerShown: true}}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
  );
}

