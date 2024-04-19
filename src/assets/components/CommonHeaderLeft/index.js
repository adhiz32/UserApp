import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { useDimensionContext } from '../../../context';
import style from './style'


const CommonHeaderLeft = props => {
    const navigation= useNavigation();
    const dimensions=useDimensionContext();
    const handleClick=()=>{
        if(props.type==='back'){
            navigation.goBack();
        }else{
            navigation.toggleDrawer();
        }
    };

const reponsiveStyle= style
  (
    dimensions.windowWidth,
    dimensions.windowHeight,
    dimensions.isPortrait
    );
  return (
    <TouchableOpacity style={reponsiveStyle.padding}
    onPress={handleClick}>
    <Image source={props.type==='back'?
    require('../../images/left-arrow.png')
    :require('../../images/drawer.png')}
    style={reponsiveStyle.Image}/>
    </TouchableOpacity>
  );
};

export default CommonHeaderLeft;