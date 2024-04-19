import { View, Text, ScrollView, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import style from './style'
import CustomSearch from '../../components/CustomSearch'
import colors from '../../components/common/colours'
import { useDimensionContext } from '../../../context'
import { useNavigation } from '@react-navigation/native'
import CommonHeaderLeft from '../../components/CommonHeaderLeft'

const Offers = () => {
  const dimensions = useDimensionContext();
  const reponsiveStyle = style(
    dimensions.windowWidth,
    dimensions.windowHeight,
    dimensions.isPortrait);

    const navigation=useNavigation();
    useEffect(()=>{
      navigation.setOptions({
        headerLeft:()=><CommonHeaderLeft/>
      });
      },[]);


  const offerArray=[
    {
    offer:'41',
    head:'Midnight Sale Offer',
    content:'On all order above 700',
    code:'ADNA29'
  },
  {
    offer:'50',
    head:'Half price Offer',
    content:'On all order above 1000',
    code:'WOW50'
  },
  {
    offer:'32',
    head:'Diwali Sale',
    content:'On all order above 500',
    code:'ADNA29'
  },
  {
    offer:'11',
    head:'Summer Sale',
    content:'On all order above 200',
    code:'MNA19'
  },
  {
    offer:'80',
    head:'Welcome Offer',
    content:'On all order above 3700',
    code:'WELCOME80'
  },
  ]
  return (
    <View style={reponsiveStyle.main}>
    <ScrollView
    style={reponsiveStyle.container}
    nestedScrollEnabled
    showsVerticalScrollIndicator={false}>
    <CustomSearch/>
    
      <FlatList
      data={offerArray}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={reponsiveStyle.contentStyle}
      keyExtractor={(item,index)=>String(index)}
       renderItem={({item,index})=>{
        return(
          <View style={reponsiveStyle.renderView}>
            <View style={reponsiveStyle.offCircleView}>
              
            <View style={reponsiveStyle.circleRight}>
            </View>
            <View style={reponsiveStyle.circleRight}></View>
            <View style={reponsiveStyle.circleRight}></View>
            <View style={reponsiveStyle.circleRight}>
            </View>
            </View>
            <View style={
            {width:'80%',
            height:100,
            backgroundColor:colors.secondarygreen,
            padding:20}
            }>
              <View style={
                {flexDirection:'row',
                alignItems:'center'}
                }>
              <Text style={
              {fontFamily:'Lato-Bold',
              fontSize:24,
              color:colors.primarygreen}
              }>{item.offer}</Text>
              <View>
                <Text style={{fontFamily:'Lato-Regular',
                fontSize:15,
                color:colors.primarygreen
                }}>%</Text>
    
                <Text style={{fontFamily:'Lato-Regular',fontSize:14,color:colors.primarygreen}}>Off</Text>
              </View>
              <View style={{marginLeft:10}}>
                <Text style={{fontFamily:'Lato-Bold',fontSize:18,color:colors.black}}>{item.head}</Text>
                <Text style={{fontFamily:'Lato-Regular',fontSize:12,color:colors.black}}>{item.content}</Text>
              </View>
              </View>
            </View>
              <View style={
                {justifyContent:'space-between',
                height:100,
                backgroundColor:colors.secondarygreen
                }}>
              </View>
              <View style={
                {
                width:'25%',
                height:100,
                backgroundColor:colors.secondarygreen,
                justifyContent:'center',
                alignItems:'center',
                paddingRight:15,
                paddingVertical:15}}>
             <Text style={
              {color:colors.black_level_2,
              fontFamily:'Lato-Regular',
              fontSize:12,
              }}>Usecode</Text>
             <View style={{marginHorizontal:10,
            paddingHorizontal:10,
            paddingVertical:5,
            justifyContent:'center',
            borderRadius:15,
            backgroundColor:colors.lightgreen,
            overflow:'hidden'}}>
              <Text style={{fontFamily:'Lato-Regular',color:colors.white,textAlign:'center',fontSize:10}}>{item.code}</Text>
             </View>
              </View>
            <View style={{marginLeft:-25/2}}>
            <View style={reponsiveStyle.circleRight}></View>
            <View style={reponsiveStyle.circleRight}></View>
            <View style={reponsiveStyle.circleRight}></View>
            <View style={reponsiveStyle.circleRight}>
              
            </View>
            </View>
          </View>
        );
      }}
      />
    </ScrollView>
    </View>
  )
}

export default Offers;