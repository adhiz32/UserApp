import { View, Text,  FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import style from './style'
import firestore from '@react-native-firebase/firestore';
import { useDimensionContext } from '../../../../../context';
import colors from '../../../../components/common/colours';
import { useSelector } from 'react-redux';

const Trending = () => {
const dimensions=useDimensionContext();
const reponsiveStyle= style(
    dimensions.windowWidth,
    dimensions.windowHeight);

    const {categories} = useSelector(state=>state);

  return (
    <View style={reponsiveStyle.main}>
        <Text style={reponsiveStyle.title}>Trending</Text>   
       <FlatList data={categories}
       horizontal
       showsHorizontalScrollIndicator={false}
       keyExtractor={(item,index)=>String(index)}
       contentContainerStyle={reponsiveStyle.flatList}
       renderItem={({item,index})=>{
       const categoriesColor=
       index%4===0
       ?colors.category1
       :index % 4===1
       ?colors.category2
       :index % 4===2
       ?colors.category3
       :index % 4===3
       ?colors.category4
       :colors.category1;
        return(
        <View style={[reponsiveStyle.imgCon,{backgroundColor:categoriesColor}]}>
            <Image source={{uri:item.image}} style={reponsiveStyle.image}/>
        </View>
        );
       }}/>
    </View>
  )
}

export default Trending