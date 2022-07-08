import { StyleSheet, Text, View,TextInput,TouchableOpacity,StatusBar,Image,Modal } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios';


const Signup = ({navigation}) => {

    const [email,setEmail]=useState("");
    const [phone,setPhone]=useState("");
    const [nationalId,setNationalId]=useState("");
    const [pass,setPass]=useState("");
    const [name,setName]=useState("");
    const [adress,setAddress]=useState("");
    const [modalVisible, setModalVisible] = useState(false);
const register=async()=>{
  console.log("in here");
 await axios.post("http://localhost:4500/voter/register",{
  name: name,
  email: email,
  phone: phone,
  nationalId: nationalId,
  address: adress,
  password: pass

  })
  .then(res=>{

console.log(res);
navigation.navigate("Login");


  }).catch(err=>{
    // setModalVisible(true)
    console.log(err);

  })
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
     <Text>Check Ur Inputs, Or U have same email as someone else</Text>
     <TouchableOpacity onPress={()=>setModalVisible(false)} style={{backgroundColor:"#FF3030",marginTop:40,padding:10,paddingHorizontal:50}}>
          <Text style={{color:"white"}}>Close</Text>
        </TouchableOpacity>
     </View>
   
   </Modal>

      <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "transparent" translucent = {true}/>
      <View>
    <Image source={require('../../images/shape.png')} style={{width:270,margin:0}} resizeMode="cover">

</Image>
      </View>
      <Text style={{fontWeight:"bold",fontSize:15, textAlign:"center",marginTop:50}}>Welcome to Vo-Count!</Text>
      <Text style={{marginTop:15,marginLeft:40,marginRight:40,textAlign:"center"}}>
      REgister for Vo-Count!
      </Text>
      


<View style={{marginTop:40}}>
  <View>
   
  <TextInput
        style={styles.input}
         onChangeText={newName=>{setName(newName); }}
         value={name}
        placeholder="Enter Ur Name"
        keyboardType="default"
      />
  </View>
  <View>
   
  <TextInput
        style={styles.input}
         onChangeText={newAdress=>{setAddress(newAdress); }}
         value={adress}
        placeholder="Enter address"
        keyboardType="default"
      />
  </View>
  <View>
   
  <TextInput
        style={styles.input}
         onChangeText={newEmail=>{setEmail(newEmail); }}
         value={email}
        placeholder="Enter email"
        keyboardType="default"
      />
  </View>
  <View>
  <TextInput
        style={styles.input}
        onChangeText={newId=>setNationalId(newId)}
        value={nationalId}
        placeholder="Enter Ur NID"
        keyboardType="email-address"
      />
  </View>
  <View>
  <TextInput
        style={styles.input}
        onChangeText={newPhone=>setPhone(newPhone)}
        value={phone}
        placeholder="Enter Ur Phone Nbr"
        keyboardType="email-address"
      />
  </View>
  <View>
  <TextInput
        style={styles.input}
        onChangeText={newPass=>setPass(newPass)}
        value={pass}
        placeholder="Enter Ur Paasword"
        secureTextEntry={true}
      />
  </View>



</View>


<TouchableOpacity onPress={()=>register()} style={{backgroundColor:"#FF3030",padding:15,alignItems:"center"
     ,marginTop:40 ,marginLeft:40,marginRight:40,borderRadius:4}}>
        <Text style={{color:"white"}}>Register</Text>
      </TouchableOpacity>

      <View style={{alignItems:"center",marginTop:40}}>
  <View style={{flexDirection:"row"}}>
  <Text>Have an account ?</Text>
  <TouchableOpacity onPress={()=>navigation.navigate("Login")}>
<Text style={{color:"#FF3030",marginLeft:5}}>Login</Text>
</TouchableOpacity>
  </View>

</View>
     
    </View>

  )
}

export default Signup;

const styles = StyleSheet.create({
  text:{
    marginLeft:47,
  },
  input: {
    height: 50,
    marginTop:10,
    marginLeft:40,
    marginRight:40,
   
    padding: 10,
    paddingLeft:20,
    paddingRight:20,
    borderRadius:100,
    backgroundColor:"white"
  },
})