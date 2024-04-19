import style from './style';
import { useNavigation } from '@react-navigation/native';
import { useDimensionContext } from '../../../context';
import { FlatList, Image, Text, TextInput, View } from 'react-native';
import colors from '../common/colours';
import CommonSectionHeader from '../CommonSectionHeader';

const OfferProducts = () => {
  const navigation=useNavigation();
  const dimensions=useDimensionContext();

  const reponsiveStyle= 
  style(
    dimensions.windowWidth,
    dimensions.windowHeight
    );
    const products=[{
        id:0,
        name:'Lemon',
        content:'Fresh lemons direct from farm',
        price:10,
        image:require('../../images/lemon.png'),
        off:'20%'
    },
    {
        id:1,
        name:'Chair',
        content:'Comfortable chair',
        price:1000,
        image:require('../../images/apple.png'),
        off:'20%'
    },
    {
        id:2,
        name:'Sony Tv',
        content:'Full hd tv',
        price:10000,
        image:require('../../images/lemon.png'),
        off:'20%'
    },
    {
        id:4,
        name:'Lemon',
        price:10,
        content:'dummmy',
        image:require('../../images/lemon.png'),
        off:'20%'
    },
]
    return (
    <View style={reponsiveStyle.container}>
    <CommonSectionHeader head={'Say Hello to Offers'} content={' Shop at Best Price'} rightText={'See All'}/>
    <View>
    <FlatList
    data={products}
    showsVerticalScrollIndicator={false}
    keyExtractor={(item,index)=>String(index)}
    renderItem={({item,index})=>{
    return(
        <View style={reponsiveStyle.mainView}>
         <Image source={item.image} style={reponsiveStyle.Contentimg}/>
         <View style={{borderLeftWidth:1,paddingHorizontal:15,marginLeft:10}}>
         <Text style={reponsiveStyle.itemText}numberOfLines={1}>{item.name}</Text>
         <Text style={reponsiveStyle.subText} numberOfLines={2}>{item.content}</Text>
         <View style={reponsiveStyle.textView}>
          <View style={reponsiveStyle.textView2}>
            <Text style={reponsiveStyle.subText}>₹{item.price}</Text>
            <View style={reponsiveStyle.offView}>
                <Text style={reponsiveStyle.offText}>{item.off}</Text>
            </View>
            </View>
            <View style={reponsiveStyle.qunView}>
                <Text style={reponsiveStyle.qunText1}>-</Text>
                <Text style={reponsiveStyle.qunText2}>0</Text>
                <Text style={reponsiveStyle.qunText1}>+</Text>
            </View>
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
export default OfferProducts;