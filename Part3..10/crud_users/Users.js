import { View, Text, StyleSheet,TextInput, Button, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';

export default function Users({navigation}) {
  const userApi = "https://67128aa86c5f5ced6623edfd.mockapi.io/api/v1/users";
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers(); // Call fetchData on component mount
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch(userApi);
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
 useFocusEffect(
    React.useCallback(() => {
      fetchUsers(); // Fetch users every time the screen is focused
    }, [])
  );
  const handleDelete = function(id){
      setLoading(true);
      console.log(id);
      fetch(`https://67128aa86c5f5ced6623edfd.mockapi.io/api/v1/users/${id}`,{
        method:'DELETE',
      }).then((response)=>{
        if(response.ok){
          setUsers((users)=>users.filter((item)=>item.id!==id));
          alert("Done");
        }
        else
          alert("Can't delete");
      }).catch((err)=>{
        console.log("Error:"+ err);
        alert("Error,Try again!");
      })
      .finally(()=>{
        setLoading(false);
      })
    
  }
  const renderUser  = ({ item }) => (
    <View style={styles.userContainer}>
        <View>
       
        <Text> {item.name}</Text>
         <Text> {item.email}</Text>
        </View>
      <View style={styles.userButton}>
       <TouchableOpacity style={styles.buttonUpdate} onPress={()=>navigation.navigate("UpdateUser",   {item})}>
        <Text style={{ color: 'white' }}>Update</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonDelete} onPress={()=>handleDelete(item.id)}>
        <Text style={{ color: 'white' }}>Delete</Text>
      </TouchableOpacity>
      </View>
      
    </View>
  );

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      
      <FlatList style={{flex:1}}
        data={users}
        renderItem={renderUser }
        keyExtractor={(item) => item.id}
      />
      <Button style={{}} title="Add user" onPress={()=>navigation.navigate("AddUser")} />
    </View>
  );
}

const styles = StyleSheet.create({
  userContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    display:'flex',
    flexDirection:'row',
    alignItems:"center",
    justifyContent:"space-between"
  },
  userButton:{
    display:'flex',
    flexDirection:'row',
    alignItems:"center",
    gap:10
  },
  buttonDelete: {
    padding: 3,
    backgroundColor: 'red',
    alignItems: 'center', // Center the text horizontally
  },
  buttonUpdate: {
    padding: 3,
    backgroundColor: 'blue',
    alignItems: 'center', // Center the text horizontally
  },
});