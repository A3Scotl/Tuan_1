import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function AddUser (){
  const navigation = useNavigation();
  const userApi = "https://67128aa86c5f5ced6623edfd.mockapi.io/api/v1/users";
  const [user, setUser ] = useState({name: '',email:'' });
  const handleAdd =  async ()=>{
    try{
        const response = await fetch(userApi,{
          method: 'POST',
          headers: {
          'Content-Type': 'application/json',
          },
          body: JSON.stringify(user),
        });
        const data = await response.json();
        alert("Done");
        navigation.goBack();
    }
    catch(Error){
      alert("Can't add");
      console.log(Error);
    }
    
  };
  return(
    <View style={{backgroundColor:'white',flex:1}}>
      <View style={styles.textInput}>
        <Text style={styles.label}>UserName:</Text>
        <TextInput  style={styles.input}
            placeholder="Enter name"
            value={user.name} // Bind the value to the state
            onChangeText={(text) => setUser ({ ...user, name: text })}
        />
      </View>
       <View style={styles.textInput}>
        <Text style={styles.label}>Email:</Text>
        <TextInput style={styles.input}
             placeholder="Enter email"
            value={user.email} // Bind the value to the state
            onChangeText={(text) => setUser ({ ...user, email: text })}
        />
      </View>
      <Button title="+" onPress={handleAdd}/>
    </View>

  );
}
const styles = StyleSheet.create({
  textInput:{
    padding:10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 3,
  },
})