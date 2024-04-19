import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import style from './style';
import { useNavigation } from '@react-navigation/native';
import { useDimensionContext } from '../../../context';

const CommonHeader = () => {
  const navigation=useNavigation();
  const dimensions=useDimensionContext();

  const reponsiveStyle= 
  style(
    dimensions.windowWidth,
    dimensions.windowHeight,
    dimensions.isPortrait
    );
    
    return (
    <View style={reponsiveStyle.container}>
      <TouchableOpacity onPress={()=>navigation.toggleDrawer()}>
      <Image source={require('../../images/drawer.png')}
       style={reponsiveStyle.sideicon}/>
      </TouchableOpacity>
      <Image source={require('../../images/logo-small.jpeg')} 
      style={reponsiveStyle.logo}/>
    </View>
  )
};

export default CommonHeader;