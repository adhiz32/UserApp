import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Login';
import SignUp from '../SignUp';
import LogInPhone from '../LogInPhone';
import Home from '../Home';
import 'react-native-gesture-handler';
import { DimensionContextProvider } from '../../../context';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Categories from '../Categories';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Cart from '../Cart';
import CustomDrawer from '../../components/CustomDrawer';
import CustomFooter from '../../components/CustomFooter';
import Search from '../Search';
import Offers from '../Offers';
import Orders from '../Orders';
import Wishlist from '../Wishlist';
import Account from '../Account';
import style from './style';
import { Provider, useSelector } from 'react-redux';
import { store } from '../../../storage/store';
import Splash from '../Splash';
import Shop from '../Shop';


const Drawer=createDrawerNavigator();
const AppDrawer=()=>{
  return(
<Drawer.Navigator 
   initialRouteName='MyFooter'
   drawerContent={props=> < CustomDrawer{...props}/>}
   screenOptions={
  { headerTitleAlign:'left',
   headerTitleStyle:style.title,
    headerStyle:{
      height:100,
    },
  }}
   >
    <Drawer.Screen name='MyFooter'component={AppFooter} options={{headerShown:false}}/>
    <Drawer.Screen name='Categories' component={Categories}/>
    <Drawer.Screen name='Orders' component={Orders}/>
    <Drawer.Screen name='Wishlist' component={Wishlist}/>
    <Drawer.Screen name='Account' component={Account}/>
    <Drawer.Screen name='Shop' component={Shop} />
  </Drawer.Navigator>
  );
};
const Footer=createBottomTabNavigator();
const AppFooter=()=>{
  return(
    <Footer.Navigator tabBar={props=><CustomFooter{...props} />}
    screenOptions={{
      headerTitleAlign:'left',
      headerTitleStyle:{fontSize:20,fontFamily:'Lato-Bold'}
    }
    }>
     <Footer.Screen name='Home' component={Home} options={{headerShown:false}}/>
     <Footer.Screen name='Categories' component={Categories}/>
     <Footer.Screen name='Search' component={Search}/>
     <Footer.Screen name='Offers' component={Offers}/>
     <Footer.Screen name='Cart' component={Cart} />
        </Footer.Navigator>
  );
};

const AppStack=createNativeStackNavigator();
const AppNavigation = () => {
  const[loading,setLoading]=useState(true);
  const {isLoggedIn}=useSelector(state => state);

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false);
    },1000);  
  },[isLoggedIn]);

  return (
   <DimensionContextProvider>
   <NavigationContainer>
   <AppStack.Navigator screenOptions={{headerShown:false}}>
    {loading ? ( <AppStack.Screen name='Splash' component={Splash} />
    ):(
    <>
    {isLoggedIn ? (<AppStack.Screen name='MyDrawer' component={AppDrawer}/>
    ):(
    <>
    <AppStack.Screen name='Login' component={Login} />
    <AppStack.Screen name='SignUp' component={SignUp}/>
    <AppStack.Screen name='LogInPhone' component={LogInPhone}/>
    </>
    )}
    </>
    )}
   
   </AppStack.Navigator>
   </NavigationContainer>
   </DimensionContextProvider>
 
  );
};

const App=()=>{
  return(
    <Provider store={store}>
      <AppNavigation/>
    </Provider>
  );
};

export default App;