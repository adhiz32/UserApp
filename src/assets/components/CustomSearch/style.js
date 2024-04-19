import { StyleSheet } from "react-native";
import colors from "../common/colours";

const style=(width,height)=>
StyleSheet.create({
 container:{
      alignItems:'center',
      justifyContent:'center',
      marginVertical:15,
 },
 newContainer:{
   flexDirection:'row',
   alignItems:'center',
   justifyContent:'space-around',
   marginVertical:15,
 },
 search:{
    borderWidth:1,
    borderColor:colors.primarygreen,
    backgroundColor:colors.secondarygreen,
    justifyContent:'space-between',
    flexDirection:'row',
    alignItems:'center',
    borderRadius:10,
    padding:15,
    width:width*0.92
 },

 newStyle:{
   borderWidth:1,
   borderColor:colors.primarygreen,
   backgroundColor:colors.secondarygreen,
   justifyContent:'space-between',
   flexDirection:'row',
   alignItems:'center',
   borderRadius:10,
   padding:15,
   width:width*0.82
},
 styleIcon:{
    width:25,
    height:25,
    resizeMode:'contain'
 },
 textInput:{
    fontFamily:'Lato-Regular',
    fontSize:13,
    marginLeft:15,
    color:colors.primarygreen,
    width:width*0.9
 },
 innerView:{
    flexDirection:'row',
    alignItems:'center',
 },
 filter:{
   fontFamily:'Lato-Regular',
   fontSize:16,
   color:colors.primarygreen,
 }
});
export default style;