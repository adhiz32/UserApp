import { StyleSheet } from "react-native";
import colors from "../common/colours";


const style=(width,height)=>StyleSheet.create
({
container:{
    borderRadius:15,
    backgroundColor:colors.primarygreen,
    padding:15,
    width:width*0.9,
    justifyContent:'center',
    alignItems:'center',
},
text:{
    color:colors.white,
    fontFamily:'Lato-Bold',
    fontSize:22,
},
})
export default style;