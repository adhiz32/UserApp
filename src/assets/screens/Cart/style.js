import { StyleSheet } from "react-native";
import colors from "../../components/common/colours";

const style=(width,height)=>StyleSheet.create
({
    container:{
        flex:1,
        height:height,backgroundColor:colors.white_level_2,
        padding:15,  
        paddingHorizontal:25,      
    },
       
Contentimg:{
    width:45,height:45,
        resizeMode:'contain',
        alignSelf:'center',
        marginVertical:10
},
mainView:{width:'100%',
    padding:15,
    marginRight:15,
    marginVertical:15,
    borderRadius:20,
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:colors.white,
    overflow:'hidden'
},
itemText:
{
    fontFamily:'Lato-Black',
    fontSize:18,
},
topView:{
    borderLeftWidth:1,paddingHorizontal:15,marginLeft:10
       },
subText:{
    fontFamily:'Lato-Bold',
    fontSize:14,
    color:colors.black
},
textView:{flexDirection:'row',
alignItems:'center',
justifyContent:'space-between',
marginTop:10},

textView2:{
flexDirection:'row',
alignItems:'center',
},

subView:{
    padding:5,
    backgroundColor:colors.primarygreen,
    borderRadius:5
},
offView:{
    padding:5,
    borderRadius:25,
    backgroundColor:colors.primarygreen,
    marginHorizontal:10
},
offText:{
    fontFamily:'Lato-Bold',
    fontSize:16,
    color:colors.white,
    marginHorizontal:16,
},
qunView:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around',
    borderRadius:15,
    borderWidth:1,
    borderColor:colors.primarygreen,
    overflow:'hidden',
    paddingVertical:5
},
qunText1:{
fontFamily:'Lato-Bold',
fontSize:16,
color:colors.black,
marginHorizontal:10,
},
qunText2:{
    fontFamily:'Lato-Bold',
    fontSize:16,
    color:colors.primarygreen,
    marginHorizontal:5,
    },

});

export default style;