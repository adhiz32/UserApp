import { StyleSheet } from "react-native";
import colors from "../common/colours";

const style=(width,height,isPortrait)=>
StyleSheet.create({
 mainCon:{
    flex:1,
    marginVertical:20,
    padding:15,
    backgroundColor:colors.white_level_2,
    overflow:'hidden'
 },
 drawerView:
    {
        flexDirection:'row',
        alignItems:'center',
        paddingVertical:15,
        justifyContent:'space-between'
      },
      drawerInnerView:{
        flexDirection:'row',
        alignItems:'center',
      },
      accountTouch:{
        flexDirection:'row',
      alignItems:'center',
      borderBottomWidth:1,
      borderBottomColor:colors.black_level_3,
      paddingVertical:10},

      commonMArgin:{
        marginVertical:15
      },
      accountImageView:{
        width:75,
        height:77,
        borderRadius:77/2,
        backgroundColor:colors.white_level_2,
        alignItems:'center',
    },
      icon:{
        width:30,
            height:30,
            resizeMode:'contain',
            marginRight:10
      },
      image: {
        width: width * 0.2,
        height: width * 0.2,
        borderRadius: width * 0.1,
      },
      arrow:{
        backgroundColor:colors.primarygreen,
        overflow:'hidden',
        borderRadius:15,
      },
      secondIcon:{
        width:25,
           height:25,
           backgroundColor:colors.secondarygreen,
           borderRadius:25/2,
           overflow:'hidden',
           resizeMode:'contain'
      },
      drawerText:{
        fontSize:20,
        fontFamily:'Lato-Regular',
      },
      logoutDrawerView:{
        borderColor:colors.black_level_1,
        borderWidth:1,
        paddingVertical:9,
        paddingHorizontal:15,
        backgroundColor:colors.secondarygreen,
        justifyContent:'center',
        alignItems:'center',
        width:'50%',
        borderRadius:20,
        flexDirection:'row',
      },
      logoutText:{
        fontFamily:'Lato-Regular',
        fontSize:20
      },
      supportTouch:{
        borderRadius:20,
        backgroundColor:colors.primarygreen,
        padding:15,
        marginVertical:15,
      },
      supportView:{
        borderRadius:20,
        backgroundColor:colors.secondarygreen,
        padding:15,
        marginVertical:15,
      },
      supportText:{
        fontFamily:'Lato-Italic',
        fontSize:10,
        color:colors.white
      },
      supporthead:{
        fontFamily:'Lato-Black',
        fontSize:18,
      },
      supportContent:{
        fontFamily:'Lato-Regular',
        fontSize:18,
        lineHeight:18
      },
      email:{fontSize:26,
      fontFamily:'Lato-Regular',
      color:colors.black_level_1
    },
    nameView:{
      marginLeft:15,
      width:'65%'
    },
    name:{
      fontSize:20,
      fontFamily:'Lato-Bold',
      color:colors.black_level_3,
  },
});
export default style;