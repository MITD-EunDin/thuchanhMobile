import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useRoute, getFocusedRouteNameFromRoute } from '@react-navigation/native';

import SplashScreen from './SplashScreen';
import OnBoarding from './OnBording';
import Loginup from './Loginup';
import Number from './Number';
import Verification from './Verification';
import SelectLocationScreen from './SelectLocationScreen';
import LoginScreen from './LoginScreen';
import SignUpScreen from './SignUpScreen';
import HomeScreen from './HomeScreen';

import CartScreen from "./CartScreen";
import AccountScreen from "./AccountScreen";
import ExploreScreen from "./ExploreScreen";
import ProductDetailScreen from "./ProductDetailScreen";
import CategoryScreen from "./CategoryScreen";
import FilterScreen from "./FilterScreen"

import  Icon  from "react-native-vector-icons/Ionicons";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function ExploreStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} >
      <Stack.Screen name="ExploreHome" component={ExploreScreen} />
      <Stack.Screen name="Category" component={CategoryScreen} />
      <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
      <Stack.Screen name="FilterScreen" component={FilterScreen} />
    </Stack.Navigator>
  );
}

function MainTabs() {
  const route = useRoute();
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'ExploreHome';

  const hiddenRoutes = ['Category', 'ProductDetail'];
  const isTabBarHidden = hiddenRoutes.includes(routeName);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: isTabBarHidden ? { display: 'none' } : {},
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: 'gray',
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Home') iconName = 'home-outline';
          else if (route.name === 'Explore') iconName = 'search-outline';
          else if (route.name === 'Cart') iconName = 'cart-outline';
          else if (route.name === 'Favourite') iconName = 'heart-outline';
          else if (route.name === 'Account') iconName = 'person-outline';
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Explore" component={ExploreStack} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Favourite" component={CartScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
}

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
        {/* <Stack.Screen name="Filter" component={FilterScreen} /> */}
        {/* sau đăng nhập thì sẽ sang đây */}
        <Stack.Screen name="MainTabs" component={MainTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}