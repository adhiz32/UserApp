import { View, Text, Image, TouchableOpacity, Modal, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import style from './style'
import { useNavigation } from '@react-navigation/native'
import CommonHeaderLeft from '../../components/CommonHeaderLeft'
import { useDimensionContext } from '../../../context'
import CustomTextInput from '../../components/CustomTextInput'
import CustomButton from '../../components/CustomButtons'
import ImagePicker from 'react-native-image-crop-picker';
import Snackbar from 'react-native-snackbar'
import firestore from '@react-native-firebase/firestore';
import colors from '../../components/common/colours'
import { validateEmail, validatePhoneNumber } from '../../components/common/validations'
import { useDispatch, useSelector } from 'react-redux'
import { updateProfile } from '../../../storage/action'
import { updateProfileImage } from './controller'


const Account = () => {
  const { userId, firstname, lastname, email, mobileNumber, profileImage} =
    useSelector((state) => state);

  const dispatch = useDispatch();

  const [fName, setFName] = useState(firstname);
  const [lName, setLName] = useState(lastname);
  const [phone, setPhone] = useState(mobileNumber);
  const [StateEmail, setEmail] = useState(email);
  const [modal, setModal] = useState(false);
  const [modalChoose, setModalChoose] = useState(false);
  const [userImage, setUserImage] = useState('');

  const dimensions = useDimensionContext();
  const responsiveStyle = style(
    dimensions.windowWidth,
    dimensions.windowHeight
  );
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => <CommonHeaderLeft />,
    });
  }, []);

  const handleOpenImage = () => {
    setModal(!modal);
  };

  const handleEditImage = () => {
    setModalChoose(true);
  };

  const handlePickFromGallery = () => {
    // setModalChoose(false);
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then((image) => {
        setUserImage(image.sourceURL ?? "");
        setModalChoose(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleFromCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then((image) => {
        setModalChoose(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleUpdateProfile = async () => {
    if (validatePhoneNumber(phone.trim())) {
      if (validateEmail(StateEmail.trim())) {
        if (fName !== "" && lName !== "") {
           let newUrl = profileImage;
          if (userImage !== "") {
            newUrl = await updateProfileImage(userImage);
          }
          console.warn('newUrl',newUrl)
          await firestore()
            .collection("Users")
            .doc(userId)
            .update({
              firstName: fName,
              lastName: lName,
              email: StateEmail,
              mobileNumber: phone,
              profileimage: newUrl,
            })
            .then(() => {
              dispatch(
                updateProfile({
                  firstName: fName,
                  lastName: lName,
                  email: StateEmail,
                  mobileNumber: phone,
                  profileImage: newUrl,
                })
              );
              setUserImage('');
              Snackbar.show({
                text: "profile is updated",
                duration: Snackbar.LENGTH_SHORT,
                backgroundColor: colors.primarygreen,
                textColor: colors.white,
              });
            });
        } else {
          Snackbar.show({
            text: "Please all the fields to continue",
            duration: Snackbar.LENGTH_SHORT,
            backgroundColor: colors.red,
            textColor: colors.white,
          });
        }
      } else {
        Snackbar.show({
          text: "Given email is not valid",
          duration: Snackbar.LENGTH_SHORT,
          backgroundColor: colors.red,
          textColor: colors.white,
        });
      }
    } else {
      Snackbar.show({
        text: "Given phone number is not valid",
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: colors.red,
        textColor: colors.white,
      });
    }
  };

  return (
    <ScrollView style={responsiveStyle.container}>
      <Text style={responsiveStyle.header}>
        {firstname} {lastname}
      </Text>
      <View style={responsiveStyle.userImage}>
        <TouchableOpacity onPress={handleOpenImage}>
          <Image
            source={
              userImage === ""
                ? profileImage === ""
                  ? require("../../images/profile-pic.png")
                  : { uri: profileImage }
                : { uri: userImage }
            }
            style={responsiveStyle.image}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleEditImage}
          style={responsiveStyle.editTouch}
        >
          <Image
            source={require("../../images/edit-green.png")}
            style={responsiveStyle.edit}
          />
        </TouchableOpacity>
      </View>

      <CustomTextInput
        handleText={(text) => setFName(text)}
        value={fName}
        placeholder="First Name"
      />
      <CustomTextInput
        handleText={(text) => setLName(text)}
        value={lName}
        placeholder="Last Name"
      />
      <CustomTextInput
        type="email"
        handleText={(text) => setEmail(text)}
        value={StateEmail}
        placeholder="Email"
      />
      <CustomTextInput
        handleText={(text) => setPhone(text)}
        value={phone}
        placeholder="Mobile number"
      />

      <CustomButton
        type="primary"
        handleButtonPress={handleUpdateProfile}
        buttonText={"Update Profile"}
      />

      <Modal visible={modal} onRequestClose={() => setModal(false)}>
        <View style={responsiveStyle.modalBack}>
          <TouchableOpacity onPress={() => setModal(false)} transparent>
            <Image
              source={require("../../images/close.png")}
              style={responsiveStyle.edit}
            />
          </TouchableOpacity>
          <Image source={{ uri: userImage }} style={responsiveStyle.bigImage} />
        </View>
      </Modal>

      <Modal visible={modalChoose} onRequestClose={() => setModalChoose(false)}>
        <View style={responsiveStyle.modalBack}>
          <TouchableOpacity
            onPress={() => setModalChoose(false)}
            transparent
            style={responsiveStyle.Choose}
          >
            <Image
              source={require("../../images/close.png")}
              style={responsiveStyle.editChoose}
            />
          </TouchableOpacity>
          <View style={responsiveStyle.selectBox}>
            <TouchableOpacity
              onPress={handlePickFromGallery}
              style={responsiveStyle.touch}
            >
              <Text style={responsiveStyle.pickText}>Gallery</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handleFromCamera}
              style={responsiveStyle.touch}
            >
              <Text style={responsiveStyle.pickText}>Camera</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};


export default Account;