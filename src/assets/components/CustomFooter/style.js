import { StyleSheet } from "react-native";
import colors from "../common/colours";

const style=(width,height,isPortrait)=>
StyleSheet.create({
   mainContainer:{
    height: isPortrait? height*0.17:height*0.11,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around',
    backgroundColor:colors.primarygreen,
    marginTop:5,
},
touchContainer:{
    justifyContent:'center',
    alignItems:'center'
},
iconStyle:{
    width: isPortrait ? width*0.05: width*0.065,
    height: isPortrait ? width*0.05: width*0.065,
    resizeMode:'cover'
},
textFooter:{color:colors.white,
    fontSize:14,
    fontFamily:'Lato-Bold',
    marginTop:isPortrait ? height*0.008 : height*0.015, 
},
cartCount:{
    position:'absolute',
    right:-8,
    top:-2,
    backgroundColor:colors.red,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:14,
    overflow:'hidden',
    paddingHorizontal:6,
    paddingVertical:2,
    zIndex:9,
   },
dot:{
    fontSize:18,
    color:colors.white,
    textAlign:'center',
    marginTop:-height*0.008,
},
cartCount:{
    position:'absolute',
    right:-8,
    top:-2,
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