import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import style from './style'
import { useDimensionContext } from '../../../context';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { signout } from '../../../storage/action';

const CustomDrawer = () => {
  const dimensions=useDimensionContext();
  const responsiveStyle = style(
    dimensions.windowWidth,
    dimensions.windowHeight,
    dimensions.isPortrait
  );

  const navigation=useNavigation();
  const reponsiveStyle= style(dimensions.width,dimensions.height);
  const dispatch=useDispatch();
  const{firstName,
  lastName,
  email,profileImage}=useSelector(state=>state);
  const Contents=[
    {
    itemId:0,
    itemName:'Home',
    navigateTo:'MyFooter',
    icon:require('../../images/home.png')
    },
    {
      itemId:1,
      itemName:'Shop By Category',
      navigateTo:'Categories',
      icon:require('../../images/drawer.png')
      },
      {
        itemId:2,
        itemName:'Orders',
        navigateTo:'Orders',
        icon:require('../../images/orders.png')
        },
        {
          itemId:3,
          itemName:'My Wishlist',
          navigateTo:'Wishlist',
          icon:require('../../images/wishlist.png')
          },
          {
            itemId:4,
            itemName:'Your Account',
            navigateTo:'Account',
            icon:require('../../images/user.png')
            },
  ];
  const handlesignout=()=>{
   dispatch(signout());
  }
  return (
<View style={responsiveStyle.mainCon}>
  <TouchableOpacity
       style={responsiveStyle.accountTouch}
       onPress={navigation.navigate('Account')}>
    
        <View style={responsiveStyle.accountImageView}>
        <Image
            source={
               profileImage === ""
                  ? require("../../images/profile-pic.png")
                  : { uri: profileImage }
            }
            style={responsiveStyle.image}
          />
        </View>
        <View style={responsiveStyle.nameView}>
        <Text style={responsiveStyle.name}>{firstName}{lastName}</Text>
        <Text style={responsiveStyle.email}>{email}</Text>
        </View>
    </TouchableOpacity>
    <View style={responsiveStyle.commonMargin}>
        <View>
          {Contents.map((item,index)=>{
            return(
              <TouchableOpacity
              key={item.itemId}
              onPress={()=>navigation.navigate(item.navigateTo)}
              style={responsiveStyle.drawerView}>
              <View style={responsiveStyle.drawerInnerView}>
              <Image source={item.icon} 
              style={responsiveStyle.icon}/>
              <Text style={responsiveStyle.drawerText}>{item.itemName}</Text>
            </View>
            <Image source={require('../../images/arrow-right.png')}
             style={responsiveStyle.secondIcon}/>
          </TouchableOpacity>
            );
          })}
      </View>
    </View>

        <TouchableOpacity onPress={handlesignout} style={responsiveStyle.logoutDrawerView}>
          <Image source={require('../../images/arrow-right.png')} 
          style={[responsiveStyle.icon,responsiveStyle.arrow]}/>
          <Text style={responsiveStyle.logoutText}>Sign Out</Text>
    </TouchableOpacity>
          <View style={responsiveStyle.supportView}>
            <Text style={responsiveStyle.supporthead}>Contact Support</Text>
            <Text style={responsiveStyle.supportContent}> if you have any problems with the app,
            feel free to contact our support system
            </Text>
            <View style={responsiveStyle.supportTouch}>
              <Text style={responsiveStyle.supportText}>
                Contact
              </Text>
            </View>
          </View>
    </View>
  );
};

export default CustomDrawer;