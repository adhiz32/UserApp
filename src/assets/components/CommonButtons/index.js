import { View, Text } from 'react-native'
import React from 'react'
import style from './style'
import { useDimensionContext } from '../../../context';

const CommonButton = (props) => {
    const dimensions=useDimensionContext();
    const reponsiveStyle= style(
      dimensions.windowWidth,
      dimensions.windowHeight,
      dimensions.isPortrait);
      
  return (
    <View style={reponsiveStyle.container}>
      <Text style={reponsiveStyle.text}>{props.buttonText}</Text>
    </View>
  )
}

export default CommonButton