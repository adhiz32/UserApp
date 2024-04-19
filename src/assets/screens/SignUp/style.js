import { StyleSheet,Dimensions } from "react-native";
import colors from "../../components/common/colours";

const{width,height}=Dimensions.get('screen')
const style=StyleSheet.create({
    container:{height:height,flex: 1},
    topBg:{
        width:width,
        height: height*0.2,
        resizeMode:'cover',
    },
    ScrollView:{
        flex:1,
        backgroundColor: colors.white_level_1,
        marginTop:-width * 0.2,
        borderTopRightRadius: width *0.05,
        borderTopLeftRadius: width * 0.05,
        overflow:'hidden',
        padding: width * 0.03,
    },
    logo:{
        width:width * 0.4,
        height: width * 0.2,
        resizeMode:'contain',
    },
    loginText:{
        fontFamily:'Poppins-SemiBold',
        fontSize:22,
        color: colors.black_level_2,
    },
    createNew:{
        fontFamily:'Poppins-Regular',
        fontSize:14,
        color: colors.black_level_2,
        textAlign:'center',
        marginVertical:width*0.025,
        paddingBottom:width*0.2,
    },
    footer:{
        padding:15,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:colors.secondarygreen,
    },
    errorText:{
        color:colors.red,
        fontFamily:'Lato-Regular',
        fontSize:14,
    }
    
});

export default style;