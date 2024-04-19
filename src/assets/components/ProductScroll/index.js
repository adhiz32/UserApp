import style from './style';
import { useNavigation } from '@react-navigation/native';
import { useDimensionContext } from '../../../context';
import { FlatList, Image, Text, TextInput, View } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import CommonSectionHeader from '../CommonSectionHeader';
import { useEffect, useState } from 'react';

const ProductScroll = () => {
  const navigation=useNavigation();
  const dimensions=useDimensionContext();
  const reponsiveStyle= 
  style(
    dimensions.windowWidth,
    dimensions.windowHeight
    );

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
  
  //  const products=[{
//         id:0,
//         name:'Lemon',
//         content:'Fresh lemons direct from farm',
//         price:10,
//         image:require('../../images/lemon.png')
//     },
//     {
//         id:1,
//         name:'Chair',
//         content:'Comfortable chair',
//         price:1000,
//         image:require('../../images/lemon.png')
//     },
//     {
//         id:2,
//         name:'Sony Tv',
//         content:'Full hd tv',
//         price:10000,
//         image:require('../../images/lemon.png')
//     },
//     {
//         id:4,
//         name:'Lemon',
//         price:10,
//         content:'dummmy',
//         image:require('../../images/lemon.png')
//     },
// ]
    return (
    <View style={reponsiveStyle.container}>
    <CommonSectionHeader head={'Newly Added'} content={'Pay less,Get more'} rightText={'See All'}/>
    <View>
    <FlatList
    data={products}
    horizontal
    showsHorizontalScrollIndicator={false}
    keyExtractor={(item,index)=>String(index)}
    renderItem={({item,index})=>{
    return(
        <View style={reponsiveStyle.mainView}>
         <Image source={require('../../images/wishlist.png')} style={reponsiveStyle.Imgtop}/>
         <Image source={{uri:item.image}}style={reponsiveStyle.Contentimg}/>
         <Text style={reponsiveStyle.itemText}numberOfLines={1}>{item.name}</Text>
         <Text style={reponsiveStyle.subText} numberOfLines={2}>{item.description}</Text>
          <View style={reponsiveStyle.textView}>
            <Text style={reponsiveStyle.subText}>{item.price}</Text>
            <View style={reponsiveStyle.subView}>
            <Text style={reponsiveStyle.addText}>+</Text>
            </View>
          </View>
        </View>
    )

    }

}
    />
</View>

</View>
    )
};
export default ProductScroll;
