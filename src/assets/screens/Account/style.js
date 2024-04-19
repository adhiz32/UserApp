import { StyleSheet, } from "react-native";
import colors from "../../components/common/colours";

  const style = (width, height) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white,
      padding: 15,
    },
    header: {
      fontFamily: "Lato-Black",
      fontSize: 25,
      color: colors.black,
      alignSelf: "center",
    },
    bigImage: {
      width: width * 0.8,
      height: width * 0.8,
    },
    image: {
      width: width * 0.3,
      height: width * 0.3,
      borderRadius: width * 0.2,
    },
    userImage: {
      alignSelf: "center",
      justifyContent: "center",
      alignItems: "center",
      marginVertical: 10,
      backgroundColor: colors.secondarygreen,
      borderRadius: width * 0.2,
    },
    edit: {
      width: 40,
      height: 40,
      resizeMode: "contain",
    },
    editTouch: {
      position: "absolute",
      right: 0,
      bottom: 0,
    },
    modalBack: {
      backgroundColor: "rgba(0,0,0,0.7)",
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    edit: {
      width: 40,
      height: 40,
      resizeMode: "contain",
    },
    close: {
      backgroundColor: colors.white,
      borderRadius: 25,
      position: "absolute",
      zIndex: 9,
      right: 15,
      top: height * 0.29,
      // bottom: 10,
      // left: 140
    },
    selectBox: {
      backgroundColor: colors.white,
      padding: 25,
      borderRadius: 15,
      justifyContent: "space-around",
      alignItems: "center",
      flexDirection: "row",
    },
    touch: {
      padding: 15,
      justifyContent: "center",
      backgroundColor: colors.primarygreen,
      borderRadius: 15,
      marginHorizontal: 10,
    },
    pickText: {
      fontFamily: "Lato-Regular",
      fontSize: 18,
      color: colors.white,
    },
    editChoose: {
      width: 40,
      height: 40,
      resizeMode: "contain",
    },
    closechoose: {
      backgroundColor: colors.white,
      borderRadius: 25,
      position: "absolute",
      zIndex: 9,
      right: -10,
      top: -10,
    },
  });

export default style;