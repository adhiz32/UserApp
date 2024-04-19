import { View, Text, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDimensionContext } from '../../../../../context';
import style from './style';
import colors from '../../../../components/common/colours';
import firestore from '@react-native-firebase/firestore';
import { useDispatch } from 'react-redux';
import { updatecategories } from '../../../../../storage/action';

const ShopCategory = () => {
  const dimensions=useDimensionContext();
  const reponsiveStyle= style(
    dimensions.windowWidth,
    dimensions.windowHeight);
    const[categories,setCategories]=useState([]);
    const dispatch=useDispatch();
    
    useEffect(()=>{
    getCategories();
    },[]);

  const getCategories=async()=>{
   await firestore()
   .collection('Categories')
   .get()
        .then(snapshot=>{
            if(!snapshot.empty){
                const result=[];
                snapshot.docs.forEach(doc=>{
                    if(doc.exists){
                      const responseData={id:doc.id,...doc?.data()};
                        result.push(responseData);
                    }
                });
                setCategories(result);
                dispatch(updatecategories(result));
            }
        }).catch(err=>{
            console.log(err);
        });
  };

  return (
    <View style={reponsiveStyle.container}>
      <Text style={reponsiveStyle.head }>ShopCategory</Text>
      <FlatList
       data={categories}
       numColumns={4}
       contentContainerStyle={reponsiveStyle.flatlist}
       keyExtractor={(item,index)=>String(index)}
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
            <View style={reponsiveStyle.innerView}>
                <View style={[reponsiveStyle.imageView,{backgroundColor:categoriesColor}]}>
                    <Image style={reponsiveStyle.image} source={{uri:item.image}}/>
                    </View>
            <Text style={reponsiveStyle.itemName}>{item.name}</Text>
            </View>
        );
       }}
      />
    </View>
  );
};

export default ShopCategory;