import style from './style';
import { useDimensionContext } from '../../../context';
import { FlatList, Image, ImageBackground, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';

const Banner = () => {
  const dimensions=useDimensionContext();

  const reponsiveStyle= 
  style(
    dimensions.windowWidth,
    dimensions.windowHeight);
    const[bannerItems,setBannerItems]=useState([]);

    useEffect(()=>{
       getBanners();
    },[]);
    

    const getBanners = async()=>{
        await firestore()
        .collection('Banners')
        .get()
        .then(snapshot=>{
            if(!snapshot.empty){
                const result=[];
                snapshot.docs.forEach(doc=>{
                    if(doc.exists){
                        result.push(doc.data());
                    }
                });
                setBannerItems(result);
            }
        }).catch(err=>{
            console.log(err);
        });
    };
    return (
        <View>
     <FlatList 
     data={bannerItems} 
     horizontal
     showsHorizontalScrollIndicator={false}
     keyExtractor={(item,index)=>String(index)}
     renderItem={({item,index})=>{
        return(
            <ImageBackground source={{uri:item.image}} style={reponsiveStyle.banner}>
             <View style={reponsiveStyle.innerView}>
                <Text style={reponsiveStyle.head}>{item.head}</Text>
                <Text style={reponsiveStyle.content}>{item.description}</Text>
                <TouchableOpacity style={reponsiveStyle.touch}>
                    <Text style={reponsiveStyle.touchTest}>Shop now</Text>
                </TouchableOpacity>
             </View>
            </ImageBackground>
        );
     }}/>
     </View>
  );
};
export default Banner;