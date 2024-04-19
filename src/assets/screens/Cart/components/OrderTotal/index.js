import { View, Text } from 'react-native'
import React from 'react'
import colors from '../../../../components/common/colours';
import { useDimensionContext } from '../../../../../context';
import style from './style'

const OrderTotal = () => {
  const dimensions=useDimensionContext();
  const reponsiveStyle= style(
    dimensions.windowWidth,
    dimensions.windowHeight,
    dimensions.isPortrait);


  return (
    <View>
    <View style={reponsiveStyle.container}>
        <View>
        <Text style={reponsiveStyle.head}>Order Details</Text>
        <Text style={reponsiveStyle.content}>Bag Total</Text>
        <Text style={reponsiveStyle.content}>Bag Savings</Text>
        <Text style={reponsiveStyle.content}>Coupon Discount</Text>
        <Text style={reponsiveStyle.endContent}>Delivery</Text>
        </View>
        <View style={{alignItems:'flex-end'}}>
            <Text style={reponsiveStyle.headEnd}>.</Text>
            <Text style={{fontFamily:'Lato-Regular',fontSize:18,lineHeight:30}}>₹50.0</Text>
            <Text style={{fontFamily:'Lato-Regular',fontSize:18,lineHeight:30,color:colors.primarygreen}}>₹0.0</Text>
            <Text style={{fontFamily:'Lato-Regular',fontSize:18,lineHeight:30,color:colors.red}}>Apply Coupon</Text>
            <Text style={{fontFamily:'Lato-Regular',fontSize:18,lineHeight:30,marginBottom:15,color:colors.black_level_1}}>₹50.00</Text>
        </View>
    </View>
     <View style={{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',}}>
        <Text style={reponsiveStyle.total}>OrderTotal</Text>
        <Text style={reponsiveStyle.total}> ₹100</Text>
      </View>
      </View>
  );
}

export default OrderTotal;