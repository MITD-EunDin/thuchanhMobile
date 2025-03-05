import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import SplashScreen from "./SplashScreen";
import Loginup from "./Loginup";
import Number from "./Number";
import Verification from "./Verification";
import OnBoarding from "./OnBording";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="OnBoarding" component={OnBoarding} />
        <Stack.Screen name="Loginup" component={Loginup} />
        <Stack.Screen name="Number" component={Number} />
        <Stack.Screen name="Verification" component={Verification} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
