import { StyleSheet } from "react-native";
import colors from "../../../../components/common/colours";


const style=(width,height)=>
StyleSheet.create({
contentview:{
backgroundColor:colors.white,
padding:15,
marginRight:15,
borderRadius:15
},
 Image:{
    width:35,
    height:35,
    resizeMode:'contain'
 },
 head:{
    fontFamily:'Lato-Black',
    fontSize:10,
    marginBottom:10
 },
 container:{
    backgroundColor:colors.secondarygreen,
    borderRadius:15,
    margin:15,
    padding:15,

 }
});
export default style;