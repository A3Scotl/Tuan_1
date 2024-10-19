import { View,Text,StyleSheet,TextInput,Button } from 'react-native';
import React,{useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UpdateUser from './UpdateUser'
import Users from './Users'
import AddUser from './AddUser'

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
       <Stack.Screen name="Users" component={Users}/>
        <Stack.Screen
          name="UpdateUser"
         component={UpdateUser}// Pass navigation prop
         options={{title: 'Update user'}}
        />
        <Stack.Screen
          name="AddUser"
         component={AddUser}// Pass navigation prop
         options={{title: 'AddUser'}}
        />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}

