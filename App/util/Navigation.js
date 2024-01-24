import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "../screens/Login";
import Profile from "../screens/Profile";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';
import Charts from "../screens/Charts";
import Calculator from "../screens/Calculator";

let loggedIn = true;

const AuthStack = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        defaultScreenOptions={Login}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen component={Login} name="Login" />
        <Stack.Screen component={Profile} name="Profile" />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const RootStack = () => {
  const Tab = createBottomTabNavigator();
  // return (
  //   <NavigationContainer>
  //     <Tab.Navigator screenOptions={{ headerShown: false }}>
  //       <Tab.Screen
  //         name="Profile"
  //         component={Profile}
  //         options={{ title: "Profile" }}
  //       />
  //     </Tab.Navigator>
  //   </NavigationContainer>
  // );
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            } else if (route.name === 'Charts') {
              iconName = focused ? 'stats-chart' : 'stats-chart-outline';
             } else if (route.name === 'Calculator'){
               iconName = focused ? 'calculator' : 'calculator-outline'
             } 
            // ... other routes with corresponding icons
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'purple', // active icon color
          tabBarInactiveTintColor: 'gray', // inactive icon color
          tabBarShowLabel: true, // show text labels
          tabBarLabelStyle: { fontSize: 12 }, // label styles
          tabBarStyle: {
            position: 'absolute', // Needed to show the background image
            borderTopWidth: 0, // No border top
            borderRadius: 10, // Match the border radius with the image
            height: 60, // Match the height with the image
            paddingBottom: 10, // padding bottom
          },
          headerShown: false, // No header
        })}
      >
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{ title: 'Profile' }}
        />
        <Tab.Screen name="Charts" component={Charts}/>
        <Tab.Screen name="Calculator" component={Calculator}/>
        {/* Other Tab.Screens go here */}
      </Tab.Navigator>
    </NavigationContainer>
  );
};
const Navigation = () => {
  return loggedIn ? <RootStack/> : <AuthStack/> 
};

export default Navigation;