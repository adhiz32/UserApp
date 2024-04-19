import { StyleSheet } from "react-native";
import colors from "../common/colours";

const style=(width,height)=>
StyleSheet.create({
    container:{
        paddingHorizontal:15,
        paddingBottom:15,
        backgroundColor:colors.white
    },
    head:{
        flexDirection:'row',
        alignItems:'center',
         justifyContent:'space-between'
    },
    headtext:
    {
        fontFamily:'Lato-Bold',
        fontSize:20,
        color:colors.black,
        marginTop:15
    },
    contentText:
    {fontFamily:'Lato-Regular',
    fontSize:15,
    color:colors.black
},
seeAll:{
    fontFamily:'Lato-Regular',
    fontSize:15,
    color:colors.black
}
});
export default style;