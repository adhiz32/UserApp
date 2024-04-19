import { View, Text, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import style from './style'
import CustomTextInput from '../../components/CustomTextInput'
import CustomButton from '../../components/CustomButtons';
import colors from '../../components/common/colours';
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import { validateEmail, validatePhoneNumber } from '../../components/common/validations';
import Snackbar from 'react-native-snackbar';
import { GoogleSignin } from '@react-native-google-signin/google-signin'; 


const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');
  const [error, setError] = useState('');
  const navigation = useNavigation('');

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '751587990244-cppk1i64idehbaflo05cj1k893m003bm.apps.googleusercontent.com',
    });
  }, []);

  const handleButtonPress = async () => {
    await GoogleSignin.hasPlayServices({
      showPlayServicesUpdateDialog: true
    });
  };

  const handleGoToLogin = () => {
    navigation.goBack();
  };

  const handleSignUp = async () => {
    if (
      username.trim() !== '' &&
      email.trim() !== '' &&
      mobile.trim() &&
      cpassword.trim() &&
      password.trim()
    ) {
      if (validatePhoneNumber(mobile.trim())) {

        if (validateEmail(email.trim())) {
          if (password.trim() === cpassword.trim()) {
            await firestore()
              .collection('Users')
              .where('username', '==', username.trim())
              .where('email', '==', email.trim())
              .get()
              .then(async snapshot => {
                if (snapshot.empty) {
                  if (validateEmail(email.trim())) {
                    if (validatePhoneNumber(mobile.trim())) {
                      const userData = {
                        username: username.trim(),
                        email: email.trim(),
                        mobilenumber: mobile.trim(),
                        password: password.trim(),
                        created: String(new Date()),
                        updated: String(new Date()),
                      };
                      await firestore()
                        .collection('Users')
                        .add(userData)
                        .then(resp => {
                          Snackbar.show({
                            text: 'A new account is created for you',
                            duration: Snackbar.LENGTH_LONG,
                            backgroundColor: colors.primarygreen,
                            textColor: colors.white,
                          });
                          navigation.navigate('Home');
                        })
                        .catch(err => {
                          console.warn(err);
                        });
                    } else {
                      setError("Given Phone number is not valid")
                    }
                  } else {
                    setError("Given email not valid")
                  }
                }
                else {
                  Snackbar.show({
                    text: 'This email is already exiting,Try using another email',
                    duration: Snackbar.LENGTH_LONG,
                    backgroundColor: colors.red,
                    textColor: colors.white,
                  });
                }
              })
          }
          else {
            setError('Given Password not matching')
          }
        } else {
          setError("Given Phone number is not valid")
        }
      } else {
        setError("Given Email is not valid")
      }
    } else {
      setError("Fill Up all details to continue")
    }
  };
  return (
    <View style={style.container}>
      <Image source={require('../../images/topBg.png')}
        style={style.topBg}
      />
      <ScrollView style={style.ScrollView} showsVerticalScrollIndicator={false}>
        <Image source={require('../../images/logo.jpeg')}
          style={style.logo}
        />
        <Text style={style.loginText}>Sign Up Account</Text>

        {error !== null ? (
          <View style={{ marginTop: 15 }}>
            <Text style={style.errorText}>
              {error}
            </Text>
          </View>
        ) : null}

        <CustomTextInput
          handleText={text => setUsername(text)}
          placeholder="Username" />

        <CustomTextInput type="email"
          handleText={text => setEmail(text)}
          placeholder="Email Address" />

        <CustomTextInput type="phone"
          handleText={text => setMobile(text)}
          placeholder="Mobile no" />

        <CustomTextInput type="password"
          handleText={text => setPassword(text)}
          placeholder="Password" />

        <CustomTextInput type="password"
          handleText={text => setCpassword(text)}
          placeholder="ConfirmPassword" />

        <CustomButton
          type="primary"
          handleButtonPress={handleSignUp}
          buttonText={'Sign up'} />

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
            }}>Or SignUp With</Text>

          </View>
        </View>
        <CustomButton
          type="secondary"
          handleButtonPress={handleButtonPress}
          buttonText={'Sign In With Google'}
          icon={require('../../images/google.png')} />

        <Text onPress={handleGoToLogin} style={style.createNew}>
          Go to Login</Text>
      </ScrollView>
    </View>
  )
};

export default SignUp;