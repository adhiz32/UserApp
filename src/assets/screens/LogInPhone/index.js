import {View, Text, ScrollView, Image} from 'react-native';
import React, {useState} from 'react';
import style from './style';
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButtons';
import auth from '@react-native-firebase/auth';
import colors from '../../components/common/colours';
import {useNavigation} from '@react-navigation/native';
import Snackbar from 'react-native-snackbar';
import { validateOtp, validatePhone } from './controller';
import { useDimensionContext } from '../../../context';

const LoginPhone = () => {
  const [phone, setPhone] = useState('');
  const [error, setError] = useState(null);
  const [otp, setOtp] = useState('');
  const [showOtp, setShowOtpField] = useState(false);
  const [confirm, setConfirm] = useState(null);
  const navigation = useNavigation();
  const dimensions = useDimensionContext();
  const reponsiveStyle=style(dimensions.windowWidth,dimensions.windowHeight);
  

  handleGoToLogin = () => {
    navigation.goBack();
  };

  const handleButtonPress = async () => {
    try {
      setError(null);
      if(validatePhone(phone.trim())){
        const confirmation = await auth().signInWithPhoneNumber(phone);
        if (confirmation) {
          Snackbar.show({
          text:'Verification code send to your mobile, please verify',
          duration:Snackbar.LENGTH_LONG,
          backgroundColor:colors.primarygreen,
          textColor:colors.black
          });
          setConfirm(confirmation);
          setShowOtpField(true);
        }
      }
      else{
        setError('Given Phone number is not valid');
      }
    } catch (error) {
      setError('Given phone number is incorrect.', error);
    }
  };

  const handleVerifyOtp = async () => {
    if(otp.trim() !== '' && validateOtp(otp.trim())) {
     const res =  await confirm.confirm(otp.trim());
     if(res){
      Snackbar.show({
        text:'Phone number verified,Login Successfull',
        duration:Snackbar.LENGTH_LONG,
        backgroundColor:colors.primarygreen,
        textColor:colors.black
      });
      navigation.navigate('Home');
     }
    }
    else{
      setError("Invalid Otp")
    }
  };

  return (
    <View style={reponsiveStyle.container}>
      <Image
        source={require('../../images/topBg.png')}
        style={reponsiveStyle.topBg}
      />
      <ScrollView style={reponsiveStyle.scrollview} showsVerticalScrollIndicator={false}>
        <Image
          source={require('../../images/logo.jpeg')}
          style={reponsiveStyle.logo}
        />
        <Text style={reponsiveStyle.loginText}>Login With Phone</Text>
        {error !== null ? <Text style={reponsiveStyle.errorText}>{error}</Text> : null}
        <CustomTextInput
            type="phone"
            handleText={text => setPhone(text)}
            placeholder="Phone number"
          />

        {showOtp ? (
          <CustomTextInput
            type="phone"
            handleText={text => setOtp(text)}
            placeholder="Enter OTP"
          />
        ) : null}

        <CustomButton
          type="primary"
          handleButtonPress={showOtp ? handleVerifyOtp : handleButtonPress}
          buttonText={showOtp ? 'Verify OTP' : 'Sign in with Phone'}
        />

        <Text onPress={handleGoToLogin} style={reponsiveStyle.createNew}>
          Go to login
        </Text>
      </ScrollView>
    </View>
  );
};

export default LoginPhone;
