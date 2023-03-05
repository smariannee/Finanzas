import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import About from '../../modules/about/adapters/screens/About'

const Stack = createNativeStackNavigator();

export default function AboutStack() {
  return (
    <Stack.Navigator
        screenOptions={{
            headerMode: 'screen',
            headerTintColor: 'white',
            headerStyle: { backgroundColor: '#ff5a60' }
        }}
    >
        <Stack.Screen 
            name="AboutStack"
            options={{ title: 'About' }}
            component={About}
        />
    </Stack.Navigator>
  )
}