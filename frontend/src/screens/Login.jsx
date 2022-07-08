import { StyleSheet, Text, View,TextInput,TouchableOpacity,StatusBar,Image ,Modal} from 'react-native'
import React, { useState } from 'react'
import { useContext } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'
import  {setAuth} from "../features/counterSlice"
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) => {
let storeData = async () => {
    try {
      await AsyncStorage.setItem(
      'name','stecie'
      );
    } catch (error) {
      // Error saving data
    }
    
  };
  let retrieveData = async () => {
    storeData();
   
    try {
      const value = await AsyncStorage.getItem('name');
      if (value !== null) {
        // We have data!!
        console.log(value);
      }
    } catch (error) {
      // Error retrieving data
    }
  };

const [email,setEmail]=useState("");
const [pass,setPass]=useState("");
const auth=useSelector(state=>state.counter.authorized);
const dispatch = useDispatch()
const [modalVisible, setModalVisible] = useState(false);

const login=()=>{
  axios.post("http://localhost:4500/user/login",{
    email:email,
    password:pass
  }).then((res)=>{
   dispatch(setAuth(true));
  }).catch(err=>{
    setModalVisible(true);
  })

  
 dispatch(setAuth(true));
}

  
 
  return (
    <View>

<Modal
     
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View  style={{height:"25%",marginTop:"30%" , marginLeft:20,marginRight:20 , backgroundColor:"white",alignItems:"center",justifyContent:"center",}}>
        <Text>Invalid Inputs</Text>
        
        <TouchableOpacity onPress={()=>setModalVisible(false)} style={{backgroundColor:"#FF3030",marginTop:40,padding:10,paddingHorizontal:50}}>
          <Text style={{color:"white"}}>Close</Text>
        </TouchableOpacity>
        </View>
      </Modal>


      <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "transparent" translucent = {true}/>
      <View>
    <Image source={require('../images/shape.png')} style={{width:270,margin:0}} resizeMode="cover">

</Image>
      </View>
      <Text style={{fontWeight:"bold",fontSize:15, textAlign:"center",marginTop:50}}>Welcome back to Vo-Count!!!</Text>
      <View style={{alignItems:"center",marginTop:15}}>
<Image source={require('../images/log.png')} resizeMode="contain" style={{width:170}}  ></Image>
</View>


<View>
  <View>
  <TextInput
        style={styles.input}
        onChangeText={newEmail=>setEmail(newEmail)}
        value={email}
        placeholder="Enter Ur Email"
        keyboardType="email-address"
      />
  </View>
  <View>
  <TextInput
        style={styles.input}
        onChangeText={newPass=>setPass(newPass)}
        value={pass}
        placeholder="Enter Ur Password"
        keyboardType="email-address"
        secureTextEntry={true}
      />
  </View>

  <Text style={{marginTop:25,marginBottom:25,color:"#FF3030",textAlign:"center"}}>
    forgot password?
  </Text>
</View>


<TouchableOpacity onPress={()=>{login()}}  style={{backgroundColor:"#FF3030",padding:15,alignItems:"center"
      ,marginLeft:40,marginRight:40,borderRadius:4}}>
        <Text style={{color:"white"}}>Login</Text>
      </TouchableOpacity>

<View style={{alignItems:"center",marginTop:40}}>
  <View style={{flexDirection:"row"}}>
  <Text>Have an account ?</Text>
  <TouchableOpacity onPress={()=>navigation.navigate("Signup")}>
<Text style={{color:"#FF3030",marginLeft:5}}>Signup</Text>
</TouchableOpacity>
  </View>

</View>
     
    </View>

  )
}

export default Login;

const styles = StyleSheet.create({
  input: {
    height: 50,
    marginTop:20,
    marginLeft:40,
    marginRight:40,
   
    padding: 10,
    paddingLeft:20,
    paddingRight:20,
    borderRadius:100,
    backgroundColor:"white"
  },
})