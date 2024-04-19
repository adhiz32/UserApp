import { StyleSheet,Dimensions } from "react-native";
import colors from "../../components/common/colours";


const style=(width,height)=>StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.white_level_2
    },
    flatView:{
        backgroundColor:colors.secondarygreen,
        borderRadius:15,
        padding:15,
        overflow:'hidden',
        marginTop:15,
        marginHorizontal:15,
      },
      innerView:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderBottomColor:colors.grey,
        borderBottomWidth:1,
        paddingBottom:15,
      },
      orderId: {
      fontFamily:'Lato-Bold',
      fontSize:16,
      color:colors.black
    },
    mapImage:{
        width:100,
        height:100,
        borderRadius:50,
        overflow:'hidden',
        resizeMode:'cover'
    },
    bottomView:
    {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingTop:15,
      },
      bottomText:{
      fontFamily:'Lato-Regular',
      fontSize:16,
      color:colors.black_level_3
    },
    greenText:{
    fontFamily:'Lato-Regular',
    fontSize:16,
    color:colors.primarygreen
},
    adress:{
    fontFamily:'Lato-Regular',
    fontSize:14,
    color:colors.grey
},

    paidText:{fontFamily:'Lato-Regular',
    fontSize:14,
    color:colors.black},
    orderDate:{
    fontFamily:'Lato-Regular',
    fontSize:14,
    color:colors.primarygreen
},
});

export default style;