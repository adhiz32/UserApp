import { View, Text, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import style from './style'
import CustomTextInput from '../../components/CustomTextInput'
import CustomButton from '../../components/CustomButtons';
import colors from '../../components/common/colours';
import { useNavigation } from '@react-navigation/native';
import Snackbar from 'react-native-snackbar';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth'; 
import { validateEmail } from './controller';
import { useDimensionContext } from '../../../context';
import { useDispatch } from 'react-redux';
import { login } from '../../../storage/action';


const Login = () => {
  const dimensions=useDimensionContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const reponsiveStyle= 
  style
  (dimensions.windowWidth,
    dimensions.windowHeight);

  function onAuthStateChanged(user){
    console.warn('onAuthStateChanged',user)
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; 
  }, []);


  const handleLogin = async () => {
    if (email.trim() !== "" && password.trim() !== "") {
      await firestore()
        .collection("Users")
        .where("email", "==", email.trim().toLocaleLowerCase())
        .get()
        .then(async (snapshot) => {
          if (snapshot.empty) {
            Snackbar.show({
              text: "This user is not registered with us, try creating a new account. ",
              duration: Snackbar.LENGTH_LONG,
              backgroundColor: colors.red,
            });
          } else {
            snapshot.forEach((documentSnapshot) => {
              const respData = documentSnapshot.data();
              if (password.trim() === respData.password) {
                Snackbar.show({
                  text: "Login Successful",
                  duration: Snackbar.LENGTH_LONG,
                  backgroundColor: colors.primarygreen,
                });
                dispatch(
                  login({
                    userId: documentSnapshot.id,
                    firstName: respData.firstName,
                    lastName: respData.lastName,
                    email: respData.email,
                    mobileNumber: respData.mobileNumber,
                    profileImage: respData.profileImage
                  })
                );
                //navigation.navigate('MyDrawer');
              } else {
                Snackbar.show({
                  text: "The password you entered is wrong.",
                  duration: Snackbar.LENGTH_LONG,
                  backgroundColor: colors.red,
                });
              }
            });
          }
        });
    } else {
      Snackbar.show({
        text: "Fill up the fields to continue..",
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: colors.red,
      });
    }
  };

  
  const handleSignUp = () => {
    navigation.navigate('SignUp')
  };

  const handleGoToLoginPhone = () => {
    navigation.navigate('LogInPhone')
  };
  const handleButtonPress=()=>{

  }
  return (
    <View style={reponsiveStyle.container}>
      <Image source={require('../../images/topBg.png')}
        style={reponsiveStyle.topBg}
      />
      <ScrollView style={reponsiveStyle.ScrollView} showsVerticalScrollIndicator={false}>
        <Image source={require('../../images/logo.jpeg')}
          style={reponsiveStyle.logo}
        />
        <Text style={reponsiveStyle.loginText}>Login Account</Text>
        <CustomTextInput type="email"
          handleText={text => setEmail(text)}
          placeholder="Email Address" />

        <CustomTextInput type="password"
          handleText={text => setPassword(text)}
          placeholder="Password" />

        <CustomButton
          type="primary"
          handleButtonPress={handleLogin}
          buttonText={'Sign in'} />

        <Text onPress={handleSignUp}
          style={reponsiveStyle.createNew}> If you are new , Create Here</Text>

        <View style={{ marginVertical: 15 }}>
          <View style={{ overflow: 'hidden' }}>
            <View style={{
              borderStyle: 'dashed',
              borderWidth: 2,
              margin: -2,
              borderColor: colors.grey,
              marginBottom: 0,
            }}
            />
          </View>
          <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            marginTop: -13,
            backgroundColor: colors.white_level_2,
            width: 110,
          }}>
            <Text style={{
              textAlign: 'center',
              color: colors.black_level_3,
              fontFamily: 'Poppins-Regular',
              fontSize: 14
            }}>Or Login With</Text>

          </View>
        </View>
        <CustomButton
          type="secondary"
          handleButtonPress={handleGoToLoginPhone}
          buttonText={'Sign In With Phone'}
          icon={require('../../images/phone.png')}
        
        />
        <CustomButton
          type="secondary"
          handleButtonPress={handleButtonPress}
          buttonText={'Sign In With Google'}
          icon={require('../../images/google.png')} />
      </ScrollView>
      <View style={reponsiveStyle.footer}>
        <Text style={reponsiveStyle.footerText}>Login as Guest</Text>
      </View>
    </View>
  )
};

export default Login;