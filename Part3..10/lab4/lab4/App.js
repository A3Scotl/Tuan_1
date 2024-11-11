import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity, SafeAreaView, FlatList, StatusBar,} from 'react-native';

const YourApp = () => {
  const DATA = [
  {
    id: '1',
    img: require('/img/noicom.png'),
    title: 'Ca nấu lẩu, nấu mì mini',
    shop: 'Shop Devang', 
    chat: 'Chat',
  },
  {
    id: '2',
    img: require('/img/khoga.png'),
    title: '1KG KHÔ GÀ BƠ TỎI...',
    shop: 'Shop LTD Food', 
    chat: 'Chat',
  },
  {
    id: '3',
    img: require('/img/xe.png'),
    title: 'Xe cần cẩu đa năng',
    shop: 'Shop Thế giới đồ chơi', 
    chat: 'Chat',
  },
    {
    id: '4',
    img: require('/img/dochoi.png'),
    title: 'Đồ chơi dạng mô hình',
    shop: 'Shop Thế giới đồ chơi', 
    chat: 'Chat',
  },
    {
    id: '5',
    img: require('/img/sach1.png'),
    title: 'Lãnh đạo giản đơn',
    shop: 'Shop Minh Long Book', 
    chat: 'Chat',
  },
    {
    id: '6',
    img: require('/img/sach2.png'),
    title: 'Hiểu lòng con trẻ',
    shop: 'Shop Minh Long Book', 
    chat: 'Chat',
  },
];


const Item = ({item}) => (
    <View style={{flexDirection: 'row', justifyContent: 'space-between',alignItems:'center', paddingTop: 10}}>
      <Image source = {item.img} style= {{width: 70, height: 70}}/>
      <View>
        <Text>{item.title}</Text>
        <Text style= {{paddingTop: 7, color: 'red'}}>{item.shop}</Text>
      </View>
      <TouchableOpacity style={{backgroundColor: 'blue', height:30,padding:3}}>
        <Text style= {{fontSize: 18, textAlign: 'center', color: '#FFFFFF'}}>{item.chat}</Text>
      </TouchableOpacity>
    </View>
);

  return (
    <View style= {{flex:1,paddingVertical:10}}>
      <View style= {{backgroundColor: 'blue',padding:3, flexDirection: 'row', justifyContent: 'space-between', padding: 10,flex:0.1}}>
        <Image source = {require('/img/vector1.png')} style= {{width: 24, height: 24}}/>
        <Text style={{fontSize: 16, color: '#FFFFFF'}}>Chat</Text>
        <Image source = {require('/img/shopping.png')} style= {{width: 24, height: 24}}/>
      </View>
      <View style={{padding: 15, backgroundColor: 'grey',flex:0.3}}>
        <Text>Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chat với shop!</Text>
      </View>
      <SafeAreaView style={{flex:1}}>
      <FlatList 
        data={DATA}  
        renderItem={Item}
        keyExtractor={item => item.id} />
      </SafeAreaView>
      <View style= {{backgroundColor: 'white',padding:3, flexDirection: 'row', justifyContent: 'space-between', padding: 15}}>
        <Image source = {require('/img/menu.png')} style= {{width: 24, height: 24}}/>
        <Image source = {require('/img/Home.png')} style= {{width: 24, height: 24}}/>
        <Image source = {require('/img/Back.png')} style= {{width: 24, height: 24}}/>
      </View>
    </View>
  );
};


export default YourApp;