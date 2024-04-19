import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import style from './style'
import { useDimensionContext } from '../../../context'
import { useNavigation } from '@react-navigation/native'
import CommonHeaderLeft from '../../components/CommonHeaderLeft'

const Wishlist = () => {
  const navigation=useNavigation();
  useEffect(()=>{
    navigation.setOptions({
    headerRight:()=>{
      return(
        <TouchableOpacity>
          <View style={reponsiveStyle.cartCount}>
            <Text style={reponsiveStyle.count}>2</Text>
          </View>
        <Image source={require('../../images/cart.png')} style={reponsiveStyle.cartIcon}/>
        </TouchableOpacity>
        ); 
    },
    headerLeft:()=><CommonHeaderLeft/>,
  
  })
  },[])
  const dimensions=useDimensionContext();
  const reponsiveStyle= style
  (
    dimensions.windowWidth,
    dimensions.windowHeight,
    dimensions.isPortrait
    );
const wishItems=[
{
  id:1,
  image:require('../../images/lemon.png'),
  title:'Lemon',
  desc:'Freshly Direct From Farms',
  off:'50% Off',
  price:'13'
},
{
  id:2,
  image:require('../../images/phone.png'),
  title:'Apple 14',
  desc:'256 GB',
  off:'50% Off',
  price:'33000'
},
{
  id:3,
  image:require('../../images/bananas.png'),
  title:'Banana',
  desc:'Freshly Direct From Farms',
  off:'50% Off',
  price:'35'
},
];
  return (
    <View style={reponsiveStyle.container}>
      <FlatList data={wishItems} renderItem={({item,index})=>{
        return(
          <View style={reponsiveStyle.productView}>
          
          <Image  source={item.image} style={reponsiveStyle.productImage}/>
          <View style={reponsiveStyle.secondView}>
            <Text style={reponsiveStyle.title}numberOfLines={2}>{item.title}</Text>
            <Text style={reponsiveStyle.desc} numberOfLines={2}>{item.desc}</Text>
            <View style={reponsiveStyle.bottomView}>
              <Text style={reponsiveStyle.price}>{item.price}</Text>
              <View style={reponsiveStyle.offView}>
                <Text>{item.off} Off</Text>
              </View>
              <View style={reponsiveStyle.cartView}>
                <Text style={reponsiveStyle.cartText}>Add to Cart</Text>
              </View>
            </View>
          </View>
          <View style={reponsiveStyle.removeView}>
            <Image source={require('../../images/delete-white.png')} style={reponsiveStyle.remove}/>  
            </View>
        </View>
        )
      }}/>
     
    </View>
  );
}

export default Wishlist;