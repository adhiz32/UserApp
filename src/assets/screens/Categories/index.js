import { View, Text, ScrollView, FlatList, Image, TouchableOpacity, ImageBackground } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import style from './style';
import CustomSearch from '../../components/CustomSearch'
import { useDimensionContext } from '../../../context'
import firestore from '@react-native-firebase/firestore';
import colors from '../../components/common/colours';
import CommonHeaderLeft from '../../components/CommonHeaderLeft';
import { useSelector } from 'react-redux';

const Categories = () => {
  const dimensions=useDimensionContext();
  const reponsiveStyle= style(
    dimensions.windowWidth,
    dimensions.windowHeight);
  const {categories}=useSelector(state=> state)
  const[products,setProduct]=useState([]);
  const[active, setActive]=useState(0);
  const navigation=useNavigation();
  
  useEffect(()=>{
    navigation.setOptions({
      headerLeft:()=><CommonHeaderLeft/>
    });

    getProducts();
    },[]);


  
  const getProducts= async ()=>{
    await firestore()
    .collection('Products')
    .get()
    .then(snapshot=>{
        if(!snapshot.empty){
            const result=[];
            snapshot.docs.forEach(doc=>{
                if(doc.exists){
                    result.push(doc.data());
                }
            });
            setProduct(result);
        }
    }).catch(err=>{
        console.log(err);
    });
 }

  const handleCategoryTouch=(index)=>{
  setActive(index);
  }
  return (
    <View style={reponsiveStyle.main}>
      <ScrollView style={reponsiveStyle.container}
      nestedScrollEnabled
      showsVerticalScrollIndicator={false}>
      <CustomSearch/>
      <View style={reponsiveStyle.rowStyle}>
        <View>
          <FlatList data={categories} showsVerticalScrollIndicator={false}
          contentContainerStyle={reponsiveStyle.Flatcat}
          renderItem={({item,index})=>{
           return(
            <TouchableOpacity style={[reponsiveStyle.catTouch,
              {
              backgroundColor:index===active?colors.white:'transparent',
              },
            ]} onPress={()=>handleCategoryTouch(index)}>
            <Image source={{uri:item.image}} style={reponsiveStyle.catImage}/>
            </TouchableOpacity>
           );
          }}/>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
         <ImageBackground source={require('../../images/home1bg.jpg')} style={reponsiveStyle.backImage}>
          <Text numberOfLines={1} style={reponsiveStyle.catName}>{categories[active]?.name}</Text>
          <Text numberOfLines={3} style={reponsiveStyle.catDesc}>{categories[active]?.description}</Text>
         </ImageBackground>
         <FlatList
         numColumns={3}
         data={products}
         showsVerticalScrollIndicator={false}
         contentContainerStyle={reponsiveStyle.proStyle}
         renderItem={({item,index})=>{
          return(
            <TouchableOpacity style={reponsiveStyle.proContainer}>
              <View style={reponsiveStyle.imgBg}>
              <Image source={{uri:item.image}} 
              style={reponsiveStyle.proImage}/>
              </View>
              <Text style={reponsiveStyle.proName}>{item.name}</Text>
              <Text style={reponsiveStyle.proDesc}>₹{item.price}</Text>
            </TouchableOpacity>
          );
         }
        }
         />
        </ScrollView>
      </View>
      </ScrollView>
    </View>
  );
};

export default Categories;