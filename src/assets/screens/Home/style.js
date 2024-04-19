import { Dimensions, StyleSheet } from "react-native";
import colors from "../../components/common/colours";

const{width,height}=Dimensions.get('screen');
const style=StyleSheet.create({
    container:{
        backgroundColor:colors.white_level_2
    },
    main:{
        flex:1
    },
    footText:{
        fontFamily:'Lato-Bold',
        fontSize:25,
        color:colors.grey,
        padding:15
    },
    footButton:{
        padding:15,
        backgroundColor:colors.primarygreen,
        width:'40%' ,
        marginHorizontal:15,
        alignItems:'center',
        justifyContent:'center',
        marginBottom:20,
        borderRadius:8,
    },
    footButtonText:{
        fontFamily:'Lato-Bold',
        fontSize:14,
        color:colors.white,
        
    }
})
export default style;