import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import style from './style'
import { useDimensionContext } from '../../../context'
import colors from '../../components/common/colours'
import OrderTotal from './components/OrderTotal'
import CommonButton from '../../components/CommonButtons'
import { useNavigation } from '@react-navigation/native'
import CommonHeaderLeft from '../../components/CommonHeaderLeft'

const Cart = () => {
  const dimensions=useDimensionContext();
  const reponsiveStyle= style(
    dimensions.windowWidth,
    dimensions.windowHeight,
    dimensions.isPortrait);

    const navigation=useNavigation();
    useEffect(()=>{
      navigation.setOptions({
        headerLeft:()=><CommonHeaderLeft/>
      });
      },[]);
    
  return (
    <View style={reponsiveStyle.container}>
     <View style={reponsiveStyle.mainView}>
         <Image source={require('../../images/lemon.png')} style={reponsiveStyle.Contentimg}/>
         <View style={reponsiveStyle.topView}>
         <Text style={reponsiveStyle.itemText}numberOfLines={1}>Lemon</Text>
         <Text style={reponsiveStyle.subText} numberOfLines={2}>Fresh from farm</Text>
         <View style={reponsiveStyle.textView}>
         <View style={reponsiveStyle.textView2}>
          <Text style={reponsiveStyle.subText}>₹60</Text>
          <View style={reponsiveStyle.offView}>
          <Text style={reponsiveStyle.offText}>10%</Text>
            </View>
            </View>
            <View style={reponsiveStyle.qunView}>
                <Text style={reponsiveStyle.qunText1}>-</Text>
                <Text style={reponsiveStyle.qunText2}>0</Text>
                <Text style={reponsiveStyle.qunText1}>+</Text>
            </View>
            </View>
          </View>
    </View>   
    <View style={{flexDirection:'row',
    alignItems:'center',
    width:'80%',
    alignSelf:'center',
    justifyContent:'center',
    marginBottom:15,
  }}>
            <View style={{marginRight:2,
        zIndex:99}}>
              
            <View style={{ width:25,
                 height:25,
                  borderRadius:25/2,
             backgroundColor:colors.white_level_2,
              marginTop:-25/2}}>
            </View>
            <View style={{ width:25,
                 height:25,
                 borderRadius:25/2,
                  backgroundColor:colors.white_level_2,
                 marginTop:-25/2}}></View>
            <View style={{ width:25,
    height:25,
    borderRadius:25/2,
    backgroundColor:colors.white_level_2,
    marginTop:-25/2}}></View>
            <View style={{ width:25,
    height:25,
    borderRadius:25/2,
    backgroundColor:colors.white_level_2,
    marginTop:-25/2}}>
            </View>
            </View>
            <View style={
            {width:'80%',
            height:100,
            backgroundColor:colors.secondarygreen,
            padding:20}
            }>
              <View style={
                {flexDirection:'row',
                alignItems:'center'}
                }>
              <Text style={
              {fontFamily:'Lato-Bold',
              fontSize:24,
              color:colors.primarygreen}
              }>50</Text>
              <View>
                <Text style={{fontFamily:'Lato-Regular',
                fontSize:15,
                color:colors.primarygreen
                }}>%</Text>
    
                <Text style={{fontFamily:'Lato-Regular',fontSize:14,color:colors.primarygreen}}>Off</Text>
              </View>
              <View style={{marginLeft:10}}>
                <Text style={{fontFamily:'Lato-Bold',fontSize:18,color:colors.black}}>Welcome offer</Text>
                <Text style={{fontFamily:'Lato-Regular',fontSize:12,color:colors.black}}>Offer Above purchase 2300</Text>
              </View>
              </View>
            </View>
              <View style={
                {justifyContent:'space-between',
                height:100,
                backgroundColor:colors.secondarygreen
                }}>
              </View>
              <View style={
                {
                width:'25%',
                height:100,
                backgroundColor:colors.secondarygreen,
                justifyContent:'center',
                alignItems:'center',
                paddingRight:15,
                paddingVertical:15}}>
             <Text style={
              {color:colors.black_level_2,
              fontFamily:'Lato-Regular',
              fontSize:12,
              }}>Usecode</Text>
             <View style={{marginHorizontal:10,
            paddingHorizontal:10,
            paddingVertical:5,
            justifyContent:'center',
            borderRadius:15,
            backgroundColor:colors.lightgreen,
            overflow:'hidden'}}>
              <Text style={{fontFamily:'Lato-Regular',color:colors.white,textAlign:'center',fontSize:10}}>WELCOME80</Text>
             </View>
              </View>
            <View style={{marginLeft:-25/2}}>
            <View style={{width:25,
                height:25,
                borderRadius:25/2,
                  backgroundColor:colors.white_level_2,
                  marginTop:-25/2}}></View>
            <View style={{width:25,
               height:25,
              borderRadius:25/2,
               backgroundColor:colors.white_level_2,
                marginTop:-25/2}}></View>
            <View style={{width:25,
    height:25,
    borderRadius:25/2,
    backgroundColor:colors.white_level_2,
    marginTop:-25/2}}></View>
            <View style={{width:25,
    height:25,
    borderRadius:25/2,
    backgroundColor:colors.white_level_2,
    marginTop:-25/2}}>
              
            </View>
            </View>
          </View>

          <OrderTotal/>
          <CommonButton buttonText={'Proceed To Checkout'}/>
    </View>
  );
}

export default Cart;