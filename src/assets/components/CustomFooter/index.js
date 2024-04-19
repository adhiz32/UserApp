import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useDimensionContext } from '../../../context';
import style from './style'

const CustomFooter = ({state,descriptors,navigation}) => {
 const dimensions= useDimensionContext();

 const reponsiveStyle=style(
   dimensions.windowHeight,
   dimensions.windowWidth,
   dimensions.isPortrait
 );
  return (
<View style={reponsiveStyle.mainContainer}>
{state.routes.map((route,index)=>{
const isFocused=state.index===index;
const icon=route.name==='Home'?
require('../../images/home-white.png'):
route.name ==='Categories'?
require('../../images/category-white.png'):
route.name==='Search'?
require('../../images/search-white.png'):
route.name==='Offers'?
require('../../images/offers-white.png'):
require('../../images/cart-white.png')

   return(
      <TouchableOpacity
      key={index}
      onPress={()=>navigation.navigate(route.name)}
      style={reponsiveStyle.touchContainer}>
      {isFocused?<Text style={reponsiveStyle.dot}>.</Text>:null}
      {route.name ==='Cart'?(
       <View style={reponsiveStyle.cartCount}>
      <Text style={reponsiveStyle.count}>2</Text>
      </View>
      ):null}
        <Image 
        source={icon}
        style={reponsiveStyle.iconStyle}/>
        <Text style=
        {reponsiveStyle.textFooter}>
         {route.name}
         </Text>
        
     </TouchableOpacity>
   );
   })}
    </View>
  )
};

export default CustomFooter;