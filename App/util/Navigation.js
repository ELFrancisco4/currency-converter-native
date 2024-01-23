import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Login from '../screens/Login'
const Navigation = () => {
    const Stack = createStackNavigator()
  return (
    <NavigationContainer>
       <Stack.Navigator defaultScreenOptions={Login} screenOptions={{headerShown: false}}>
            <Stack.Screen component={Login} name='Login'/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
//Create two separate stacks, one called AuthStack and RegularStack. When a user object is undefined, render the AuthStack. When the user logs in, show the regular stack
