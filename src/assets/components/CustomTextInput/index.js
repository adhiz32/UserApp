import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import style from './style';
import colors from '../common/colours';

const  CustomTextInput = props => {
const {type,handleText,placeholder,value}=props;
const[show,setShow]=useState(false);
const keyboardType = 
type === 'email'
?'email-address'
:type ==='password'
?'default'
:type==='phone'?
'phone-pad'
:'default';
const secureTextEntry= type ==='password' ?(show ? false:true):false;
const icon=
type==='email' ? 
require('../../images/email.png')
:type==='password'
?show
?require('../../images/view.png') 
:require('../../images/hide.png')
:false;
const handlePassword=()=>{
  setShow(!show);
};
    return (
    <View style={style.container}>
    <TextInput 
    placeholder={placeholder}
    placeholderTextColor={colors.grey}
    style={style.textInput}
    keyboardType={keyboardType}
    secureTextEntry={secureTextEntry}
    selectionColor={colors.primarygreen}
    onChangeText={handleText}
    value={value}/>

    {!icon ?null:(
      <TouchableOpacity onPress={handlePassword} 
      disabled={type!=='password'?true:false}>
       <Image style={style.icon} source={icon}/>
       </TouchableOpacity>
       )}
    </View>
  );
};

export default  CustomTextInput;