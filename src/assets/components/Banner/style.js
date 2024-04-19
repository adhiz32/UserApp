import { StyleSheet } from "react-native";
import colors from "../common/colours";

const style=(width,height)=>
StyleSheet.create({
 container:{
      alignItems:'center',
      justifyContent:'center',
      marginVertical:15,
 },
banner:{
    width:width*0.88,
    height:width*0.4,
    resizeMode:'contain',
    borderRadius:15,
    overflow:'hidden',
    margin:15,
},
innerView:{
    padding:15,
},
head:{
    fontFamily:'Lato-Regular',
    fontSize:20,
},
content:{
    fontFamily:'Lato-Regular',
    fontSize:20,
},
touch:{
    backgroundColor:colors.primarygreen,
    padding:10,
    justifyContent:'center',
    alignItems:'center',
    width:width*0.3,
    marginVertical:10,
    borderRadius:15,
    },
    
    touchTest:{
        fontFamily:'Lato-Regular',
        fontSize:16,
        color:colors.white,
    },

});
export default style;