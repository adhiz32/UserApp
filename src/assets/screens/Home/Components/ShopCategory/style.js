import { StyleSheet } from "react-native";
import colors from "../../../../components/common/colours";


const style=(width,height)=>
StyleSheet.create({
 container:{
    margin:10,
 },
 head:{
    fontSize:18,
    textAlign:'center',
    fontFamily:'Lato-Bold'
 },
 flatlist:{
    marginVertical:15,
    justifyContent:'center',
    alignItems:'center'
 },
 innerView:{
    justifyContent:'center',
    alignItems:'center',
    marginRight:15,
    marginBottom:15
 },
 imageView:{
    justifyContent:'center',
    alignItems:'center',
    borderRadius:20,
    padding:15,
    marginBottom:10,
 },
 itemName:{
    fontFamily:'Lato-Regular',
    fontSize:16,
    color:colors.black
 },
 image:{
    width:width*0.1,
    height:width*0.1,
    resizeMode:'contain'
 },
});
export default style;