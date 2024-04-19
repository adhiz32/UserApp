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
        color:colors.black
    },
    contentText:
    {fontFamily:'Lato-Regular',
    fontSize:15,
    color:colors.black
},
mainView:{width:180,height:220,
    padding:15,
    marginRight:15,
    marginVertical:15,
    borderRadius:20,
    borderWidth:1,
    borderColor:colors.primarygreen},
    
Imgtop:{width:25,
    height:25,
    resizeMode:'contain',
    alignSelf:'flex-end'
},
Contentimg:{
    width:45,height:45,
        resizeMode:'contain',
        alignSelf:'center',
        marginVertical:10
},
itemText:
{fontFamily:'Lato-Black',
fontSize:18,
},
subText:{
    fontFamily:'Lato-Regular',fontSize:14
},
textView:{flexDirection:'row',
alignItems:'center',
justifyContent:'space-between'},

subView:{
    padding:5,
    backgroundColor:colors.primarygreen,
    borderRadius:5
},
addText:{fontFamily:'Lato-Bold',
fontSize:16,
color:colors.white}
});
export default style;