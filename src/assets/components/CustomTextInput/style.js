import { Dimensions, StyleSheet } from "react-native"
import colors from "../common/colours"

const {width,height}=Dimensions.get('screen')
const style = StyleSheet.create({
  container:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    backgroundColor:colors.secondarygreen,
    padding:width*0.02,
    borderRadius:15,
    marginVertical:10,
    borderWidth:1,
    borderColor:colors.iron,
    paddingRight: 30,
    margin:5,
  },
  textInput:{
    color:colors.black_level_3,
    fontSize:13,
    fontFamily:'Poppins-Regular',  
    width: '80%', 
  },
  icon:{
    width:width*0.04,
    height:width*0.04,
    resizeMode:'contain',
    //marginLeft: -30
    
  }
});

export default style;