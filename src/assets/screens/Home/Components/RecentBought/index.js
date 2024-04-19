import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import style from './style';
import { useDimensionContext } from '../../../../../context';

const RecentBought = () => {
  const dimensions=useDimensionContext();
  const reponsiveStyle= 
  style(
    dimensions.windowWidth,
    dimensions.windowHeight);
    const recentItems=[
        {id:0 , image:require('../../../../images/apple.png')},
        {id:1 , image:require('../../../../images/strawberry.png')},
        {id:2 , image:require('../../../../images/lemon.png')},
        {id:3 , image:require('../../../../images/bananas.png')},
        {id:4 , image:require('../../../../images/grapes.png')},
    ]
  return (
    <View style={reponsiveStyle.container}>
      <Text style={reponsiveStyle.head}> Buy from RecentBought</Text>
      <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item,index)=>String(index)}
       data={recentItems}
       renderItem={({item,index})=>{
        return(
            <View style={reponsiveStyle.contentview}>
                <Image source={item.image} style={reponsiveStyle.Image}/>
                </View>
        );
    }}
      />
    </View>
  );
};

export default RecentBought;