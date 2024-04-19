import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CommonHeader from '../../components/CommonHeader'
import CustomSearch from '../../components/CustomSearch';
import Banner from '../../components/Banner';
import RecentBought from './Components/RecentBought';
import style from './style';
import ShopCategory from './Components/ShopCategory';
import ProductScroll from '../../components/ProductScroll';
import OfferProducts from '../../components/OfferProducts';



const Home = () => {
  return (
    <View style={style.main}>
    <CommonHeader/>
    <ScrollView style={style.container}
    nestedScrollEnabled
    showsVerticalScrollIndicator={false}> 
     <CustomSearch/>
      <Banner/>
      <RecentBought/>
      <ShopCategory/>
      <ProductScroll/>
      <OfferProducts/>
      <Text style={style.footText}>Didn't Find what you are looking for?</Text>
      <View style={style.footButton}>
        <Text>
          Browse Category
        </Text>
      </View>
      </ScrollView>
    </View>
  );
};

export default Home