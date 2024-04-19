import { StyleSheet,Dimensions } from "react-native";
import colors from "../common/colours";

const style=(width,height)=>
StyleSheet.create({
  padding:{
    paddingRight:15},
  Image:{
    width:30,
    height:30,
    resizeMode:'contain'
  },
  cartCount:{
    position:'absolute',
    right:7,
    top:-4,
    backgroundColor:colors.red,
    justifyContent:'center',
    borderRadius:14,
    overflow:'hidden',
    paddingHorizontal:6,
    paddingVertical:2,
    zIndex:9,
},
count:{
    fontFamily:'Lato-Regular',
    fontSize:10,
    color:colors.white,
    textAlign:'center'
}
});
export default style;