import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './SplashScreen';
import OnBoarding from './OnBording';
import Loginup from './Loginup';
import Number from './Number';
import Verification from './Verification';
import SelectLocationScreen from './SelectLocationScreen';
import LoginScreen from './LoginScreen';
import SignUpScreen from './SignUpScreen';
import SuccessScreen from './SuccessScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="OnBoarding" component={OnBoarding} />
        <Stack.Screen name="Loginup" component={Loginup} />
        <Stack.Screen name="Number" component={Number} />
        <Stack.Screen name="Verification" component={Verification} />
        <Stack.Screen name="SelectLocation" component={SelectLocationScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Success" component={SuccessScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}