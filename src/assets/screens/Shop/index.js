import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDimensionContext } from '../../../context'
import style from './style';
import { useNavigation, useRoute } from '@react-navigation/native';
import CommonHeaderRight from '../../components/CommonHeaderRight';
import CommonHeaderLeft from '../../components/CommonHeaderLeft';
import CustomSearch from '../../components/CustomSearch';
import { FlatList } from 'react-native-gesture-handler';
import firestore from '@react-native-firebase/firestore';

const Shop = () => {
    const dimensions=useDimensionContext();
    const responsiveStyle=style(
        dimensions.windowHeight,
        dimensions.windowWidth,
        dimensions.isPortrait
    );
    const navigation=useNavigation();
    const route=useRoute();
    const {type}= route.params;
    const {categories} = useSelector(state=>state);
    const[selectedCategory,setSelectedCategory]=useState(type);
    const[products,setProduct]=useState([]);
  
    useEffect(()=>{
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


    useEffect(()=> {
      if(type==='all'){
        setSelectedCategory('Shop');
      }
    },[type]);

    useEffect(()=>{
        navigation.setOptions({
            headerLeft:()=><CommonHeaderLeft type="back" />,
            headerRight:()=><CommonHeaderRight cart={true}/>,
            title:selectedCategory,
           
        });
    },[selectedCategory]);

    const handleCategories= async item=>{
      setSelectedCategory(item.name);
      await firestore()
      .collection('Products')
      .where('categoryId','==',item.id)
      .get()
      .then(snapshot=>{
          if(!snapshot.empty){
              const result=[];
              snapshot.docs.forEach(doc=>{
                  if(doc.exists){
                      result.push(doc.data());
                  }
              });
              setProduct(result.length>0 ? result :[]);
          }
          else{
            setProduct([])
          }
      }).catch(err=>{
          console.log(err);
      });
    }

  const handleRenderItem=({item,index})=>{
    return(
      <TouchableOpacity 
      onPress={()=>handleCategories(item)}
      style={responsiveStyle.catItemView}>
        <Text style={responsiveStyle.catItem}>{item.name}</Text>
      </TouchableOpacity>
    )
  };

  const handleProductsRender=({item,index})=>{
    return(
      <View style={responsiveStyle.mainView}>
      <Image source={{uri:item.image}} style={responsiveStyle.Contentimg}/>
      <View style={responsiveStyle.topView}>
      <Text style={responsiveStyle.itemText}numberOfLines={1}>{item.name}</Text>
      <Text style={responsiveStyle.subText} numberOfLines={2}>{item.description}</Text>
      <View style={responsiveStyle.textView}>
      <View style={responsiveStyle.textView2}>
      <Text style={responsiveStyle.subText}>₹{item.price}</Text>
      <View style={responsiveStyle.offView}>
      <Text style={responsiveStyle.offText}>10%</Text>
         </View>
         </View>
         <View style={responsiveStyle.qunView}>
             <Text style={responsiveStyle.qunText1}>-</Text>
             <Text style={responsiveStyle.qunText2}>0</Text>
             <Text style={responsiveStyle.qunText1}>+</Text>
         </View>
         </View>
       </View>
       </View>
    );
  };

  return (
    <View style={responsiveStyle.container}>
      <FlatList
       data={categories}
       horizontal
       showsHorizontalScrollIndicator={false}
       renderItem={handleRenderItem}
       style={responsiveStyle.categories}
       contentContainerStyle={responsiveStyle.contentStyle}
      />
      <CustomSearch filter={true}/>
      <View style={responsiveStyle.commonPadding}>
       
      <FlatList 
      data={products}
      showsVerticalScrollIndicator={false}
      renderItem={handleProductsRender}
      contentContainerStyle={responsiveStyle.products}
      ListEmptyComponent={()=>{
        return(
          <View>
            <Text>Empty</Text>
            </View>
        )
      }}
      />
    </View>
    </View>
    
  );
};

export default Shop;