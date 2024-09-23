import React from 'react';
import {Text, View,Button,Image,Alert,StyleSheet,} from 'react-native';
var linkImg = "https://images.pexels.com/photos/3336447/pexels-photo-3336447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const styles = StyleSheet.create(
 {
   
   container:{
     flexDirection:'row',
     display:'flex',
     justifyContent:'center',
     alignItems:'center',
     gap:30,
     paddingTop:100
   },
   body:{
     width:'100%',
     height:'100%',
     backgroundColor:'#fff'

   },
   fontSize:{
     fontSize:50,
   },
   buttons:{
     display:'flex',
     flexDirection:'row',
     padding:30
   },
   padding:{
     padding:50,
   }
 }
);
const YourApp = () => {
  return (
    <View style={styles.body}>
        <View style={styles.container}>
             <Image source={{uri:linkImg}} style={{width:300,height:300}}/>
        </View>
        <View style={styles.container}>
             <Text style={styles.fontSize}>Grow your bussiness</Text>
        </View>
         <View style={styles.container}>
             <View style={styles.buttons}>
             <Button
             title="Button 1"
             color="red"
              onPress={()=>Alert.alert("Button 1")}
             />
            
        </View>
        
         <View style={styles.buttons}>
             <Button
             title="Button 2"
             color="blue"
             onPress={()=>Alert.alert("Button 2")}
             />
            
        </View>
        </View>
    </View>
  );
};


export default YourApp;