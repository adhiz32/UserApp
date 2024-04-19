import { View, Text, TextInput, Button } from 'react-native'
import React,{useState} from 'react'

const Login = () => {

 const handleLogin=()=>{

 }
    const[password,setPassword]=useState('abc')
    const[user,setUser]=useState('adhi')
  return (
    <View>
      <Text>login</Text>
      <TextInput placeholder='Enter user' />
      <TextInput placeholder='Enter password'/>
      <Button onPress={handleLogin}/>
    </View>
  )
}

export default Login