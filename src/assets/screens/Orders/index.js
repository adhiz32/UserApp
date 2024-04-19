import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import style from './style'
import CustomSearch from '../../components/CustomSearch';
import { useDimensionContext } from '../../../context';
import { useNavigation } from '@react-navigation/native';
import CommonHeaderLeft from '../../components/CommonHeaderLeft';


const Orders = () => {
  const navigation=useNavigation();
  const dimensions=useDimensionContext();
  const reponsiveStyle= style(
    dimensions.windowWidth,
    dimensions.windowHeight,
    );
    useEffect(()=>{
    navigation.setOptions({
    headerLeft:()=> <CommonHeaderLeft/>
    });
   },[]);

  const orderArray=[
    {id:'0',
     userId:'#ASW2342',
     orderDate:'11/02/2024,4:09 PM',
     address1:'1800 Eliis St,San Francisco,CA',
     address2:'94123,USA',
     price:'879',
     quantity:'3',
    },
    {id:'1',
    userId:'#ASW2342',
    orderDate:'11/02/2024,4:09 PM',
    address1:'1800 Eliis St,San Francisco,CA',
    address2:'94123,USA',
    price:'454',
    quantity:'6',
   },
   {id:'2',
   userId:'#ASW2342',
   orderDate:'11/02/2024,4:09 PM',
   address1:'1800 Eliis St,San Francisco,CA',
   address2:'94123,USA',
   price:'100',
   quantity:'1',
  },
  {id:'3',
  userId:'#ASW2342',
  orderDate:'11/02/2024,4:09 PM',
  address1:'1800 Eliis St,San Francisco,CA',
  address2:'94123,USA',
  price:'909',
  quantity:'3',
 },
]

  return (
    <View style={style.container}>
      <CustomSearch filter={true}/>
      <FlatList data={orderArray} showsVerticalScrollIndicator={false} renderItem={({item}) =>{
        return(
          <TouchableOpacity style={reponsiveStyle.flatView}>
          <View style={reponsiveStyle.innerView}>
            <View>
              <Text style={reponsiveStyle.orderId}>ID:{item.id}</Text>
              <Text style={reponsiveStyle.orderDate}>Ordered On:{item.orderDate}</Text>
              <Text style={reponsiveStyle.address}>{item.address1}</Text>
              <Text style={reponsiveStyle.address}>{item.address2}</Text>
              <Text style={reponsiveStyle.paidText}>Paid:{''}<Text style={reponsiveStyle.greenText}>{item.price}
            </Text>Items:{''}<Text style={reponsiveStyle.greenText}>{item.quantity}</Text></Text>
    
            </View>
            <Image source={require('../../images/map.webp')}
            style={reponsiveStyle.mapImage}/>
          </View>
          <View style={reponsiveStyle.bottomView}>
              <Text style={reponsiveStyle.bottomText}>Order Shipped</Text>
              <Text style={reponsiveStyle.bottomText}>Rate and Review Products</Text>
          </View>
        </TouchableOpacity>
        );
      }}
      keyExtractor={(item,index)=>String(index)}/>
    </View>
  )
}

export default Orders;