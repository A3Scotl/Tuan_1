// UpdateUser .js
import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';

export default function UpdateUser () {
  const route = useRoute();
  const navigation = useNavigation();
  const dataUser  = route.params?.item; // Get user data from route params
  const [user, setUser ] = useState({ id: '', name: '' });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Initialize user state with data from params
    if (dataUser ) {
      setUser ({ id: dataUser .id, name: dataUser .name });
    }
  }, [dataUser]);

  const handleUpdate = async (id) => {
    setLoading(true);
    try {
      const response = await fetch(`https://67128aa86c5f5ced6623edfd.mockapi.io/api/v1/users/${id}`, {
        method: 'PUT', // Use PUT for updating
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user), // Send updated user data
      });
      
      if (response.ok) {
        alert("Done");
        navigation.navigate("Users"); // Navigate back to Users screen

      } else {
        alert("Can't update user");
      }
    } catch (err) {
      console.log("Error:", err);
      alert("Error .Try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={[styles.white, styles.container]}>
      <View>
        <Text style={styles.h1}>Update Form</Text>
      </View>
      <View style={styles.container}>
        <View>
          <Text style={styles.label}>Current Name: {dataUser ?.name}</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter new name"
            value={user.name} // Bind the value to the state
            onChangeText={(text) => setUser ({ ...user, name: text })} // Update state on change
          />
        </View>
        <View>
          <Button title="Update" onPress={() => handleUpdate(dataUser .id)} disabled={loading} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    rowGap: 10,
    padding: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  h1: {
    fontSize: 20,
    padding: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 3,
  },
  white: {
    backgroundColor: 'white',
  },
});