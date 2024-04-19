import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { useDimensionContext } from '../../../context';
import style from './style'


const CommonHeaderRight = props => {
    const navigation= useNavigation();
    const dimensions=useDimensionContext();
    const handleClick=()=>{
       navigation.navigate('Cart');
    };

const reponsiveStyle= style
  (
    dimensions.windowWidth,
    dimensions.windowHeight,
    dimensions.isPortrait
    );
  return (
    <>
    {props.cart ?<TouchableOpacity style={reponsiveStyle.padding}
    onPress={handleClick}>
        <>
    <View style={reponsiveStyle.cartCount}>
    <Text style={reponsiveStyle.count}>2</Text>
    </View>
    <Image source={require('../../images/cart.png')}
    style={reponsiveStyle.Image}/>
    </>
    </TouchableOpacity> : null}
    </>
    
  );
};

export default CommonHeaderRight;