import React,{useState} from 'react';
import {StyleSheet,View,Text,Image,Button} from 'react-native';
var linkImg = "https://salt.tikicdn.com/cache/w1200/ts/product/7a/5e/62/8a692ce25c7ed5778c5e2e72576a15cc.jpg";
const styles = StyleSheet.create(
 {
   
   flexRow:{
     flexDirection:'row',
     display:'flex',
     justifyContent:'space-between',
     gap:10,
     padding:5
   },
   flexColunm:{
     flexDirection:'column',
     display:'flex',
     justifyContent:'space-evenly',
     gap:3,
     paddingBottom:25
   },
   body:{
     flex:1,
     backgroundColor:'#C4C4C4',
     padding:5,
   },
   buttonsUpDown:{
      flexDirection:'row',
     display:'flex',
     justifyContent:'space-between',
     alignItems:'center',
     height:20,
     width:'30%',
     fontWeight:'bold',
     gap:10,
     backgroundColor:'grey'
   }}
);
function YourApp () {
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(141800);

  return (
   <View style={styles.body}>
     <View style={{backgroundColor:'#fff',paddingTop:50}}>
      <View style={styles.flexRow}>
        <View>
          <Image source={{uri:linkImg}} style={{width:150,height:150}}/>
        </View>
        <View>
          <View style={styles.flexColunm}>
            <Text style={{fontWeight:'bold',fontSize:12}}>Nguyên hàm tích phân và ứng dụng</Text>
            <Text style={{fontWeight:'bold'}}>Cung cấp bởi tiki Trading</Text>
            <Text style={{color:'red',fontWeight:'bold',fontSize:'20px'}}>
            141,800₫
            </Text>
            <Text style={{textDecorationLine:'line-through'}}>
              141,800₫
            </Text>
            </View>
            <View style={styles.flexRow}>
            <View style={styles.buttonsUpDown}>
            <Button title="-" color='blue' onPress={() => {
              if(count>1){
                setCount(count  - 1);
                setPrice(price-141800);
              }
              else{
                setCount(1);
              }
            }} />
            <Text>{count}</Text>
            <Button title="+" color='blue' onPress={() =>{setCount(count + 1),setPrice(price+141800)}} />
          </View>
          <View>
            <Text style={{fontWeight:'bold',color:'blue'}}>Mua sau</Text>
          </View>
            </View>
        </View>
      </View>
       <View >
        <View style={{display:'flex',flexDirection:'row',gap:15,padding:10}}>
          <Text style={{fontWeight:'bold'}}>Mã giảm giá đã lưu</Text>
          <Text style={{fontWeight:'bold',color:'blue'}}>Xem tại đây</Text>
        </View>
         <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',padding:10}}>
             <View style={{display:'flex',flexDirection:'row',gap:10,padding:10,borderWidth:1,borderColor:'black',alignItems:'center'}}>
                 <View style={{backgroundColor:'#F2DD1B', width:32,height:16}}>
      <Text style={{color:'#F2DD1B',textAlign:'center',display:'block'}}>âss</Text>
      </View>
                <Text style={{fontWeight:'bold',fontSize:16}}>Mã giảm giá</Text>
              </View>
               <View style={{display:'flex',flexDirection:'row',backgroundColor:'#0A5EB7',padding:10}}>
                  <Text style={{fontWeight:'bold',fontSize:16,color:'#fff'}}>Áp dụng</Text>
              </View>
      </View>
      </View>
     </View>
      <View style={{ backgroundColor:'#C4C4C4',height:30}}>
      </View>
      <View style={{display:'flex',flexDirection:'row',gap:15,padding:10,backgroundColor:'#fff'}}>
          <Text style={{fontWeight:'bold',fontSize:11}}>
          Bạn có phiếu quà tặng Tiki/Got it/ Urbox?
          </Text>
          <Text style={{fontWeight:'bold',color:'blue',fontSize:11}}>Nhập tại đây?</Text>
        </View>
         <View style={{ backgroundColor:'#C4C4C4',height:30}}>
      </View>
        <View style={{backgroundColor:'#fff',padding:10,display:'flex',flexDirection:'row', justifyContent:'space-between'}}> 
        <Text style={{fontWeight:'bold',fontSize:16}}>Tạm tính</Text>
        <Text style={{fontWeight:'bold',fontSize:16,color:'red'}}>
          {price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
          </Text>
      </View>
      <View style={{ backgroundColor:'#C4C4C4',height:300}}>
      </View>
      <View style={{backgroundColor:'#fff',padding:5,height:100}}>
        <View style={styles.flexRow}> 
        <Text style={{fontWeight:'bold',fontSize:16,color:'grey'}}>THÀNH TIỀN</Text>
        <Text style={{fontWeight:'bold',fontSize:16,color:'red'}}>
          {price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
          </Text>
      </View>
        <View style={{backgroundColor:'red'}}> 
        <Button title="TIẾN HÀNH ĐẶT HÀNG" color="#fff"/>
      </View>
      </View>
   </View>
  );
};
export default YourApp;