import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import style from './style';
import colors from '../common/colours';

const CustomButton = props => {
    const{type,handleButtonPress,buttonText,icon}=props;
  return (
    <TouchableOpacity onPress={handleButtonPress} 
    style={[style.button,
    {backgroundColor:type ==="primary"?colors.primarygreen:colors.secondarygreen}
    ]}>

{type!=='primary' ? <Image source={icon} style={style.icon}/>:null}

      <Text style={
        {color:type==='primary'?colors.white:colors.black_level_3,
        fontFamily:type==='primary'? 'Poppins-SemiBold':'Poppins-Regular',
        fontSize:type==='primary'?20:14,
    }}>
        {buttonText}</Text>
      </TouchableOpacity>
  )
}

export default CustomButton;