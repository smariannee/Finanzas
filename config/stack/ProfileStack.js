import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Profile from '../../modules/profile/adapters/screens/Profile'
import UserGuest from '../../modules/profile/adapters/screens/UserGuest'
import Login from '../../modules/auth/adapters/screens/Login'
import CreateUser from '../../modules/user/CreateUser'

const Stack = createNativeStackNavigator();

export default function ProfileStack() {
  return (
    <Stack.Navigator
        initialRouteName='ProfileStack'
        screenOptions={{
            headerMode: 'screen',
            headerTintColor: 'white',
            headerStyle: { backgroundColor: '#ff5a60' }
        }}
    >

        <Stack.Screen 
            name="ProfileStack"
            options={{ title: 'Profile' }}
            component={Profile}
        />

        <Stack.Screen 
            name="UserGuestStack"
            options={{ title: 'Bienvenido' }}
            component={UserGuest}
        />

        <Stack.Screen 
            name="LoginStack"
            options={{ title: 'Inicio de sesión' }}
            component={Login}
        />

        <Stack.Screen 
            name="CreateUserStack"
            optiones={{ title: 'Crea tu cuenta' }}
            component={CreateUser}
        />

    </Stack.Navigator>
  )
}