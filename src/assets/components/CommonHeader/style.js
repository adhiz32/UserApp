import { StyleSheet } from "react-native";
import colors from "../../components/common/colours";

//const{width,height}=Dimensions.get('screen')
const style=(width,height,isPortrait)=>
StyleSheet.create({container:{
flexDirection:"row",
justifyContent:"space-between",
alignItems:"center",
marginTop: isPortrait? width*0.01:width*0.01,
backgroundColor:colors.white_level_1,
height: isPortrait?width*0.175:width*0.1,
paddingHorizontal:width*0.03,
},

logo:{
    resizeMode:'contain',
    height:height*0.1,
    width:width*0.2,
    
},
sideicon:{
    resizeMode:'contain',
    height:height*0.15,
    width:width*0.1,
},
});

export default style;