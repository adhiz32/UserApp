import { StyleSheet,Dimensions } from "react-native";

const style=(width,height)=>
StyleSheet.create({
  padding:{
    paddingLeft:15,
  },
  Image:{
    width:30,
    height:30,
    resizeMode:'contain'
  },
});
export default style;