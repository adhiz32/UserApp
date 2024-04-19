import { Dimensions, StyleSheet } from "react-native"
import colors from "../common/colours"

const {width,height}=Dimensions.get('screen')
const style = StyleSheet.create({
 button:{
  padding:width*0.03,
  borderRadius:8,
  alignItems:'center',
  marginVertical:width*0.025,
  flexDirection:'row'
 },
 icon:{
    width:width*0.08,
    height:width*0.08,
    marginRight:width*0.025
 }
});

export default style;