import { StyleSheet } from "react-native";
import colors from "../../components/common/colours";

const style=(width,height,isPortrait)=>StyleSheet.create({

catItemView:{
    margin:8,
},
catItem:{
    fontFamily:'Lato-Regular',
    fontSize:16,
    color:colors.primarygreen
},
categories:{
backgroundColor:colors.secondarygreen
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
    marginVertical:8,
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
    borderLeftWidth:1,
    paddingHorizontal:15,
    marginLeft:10,
    width:'80%',
    overflow:'hidden'
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
commonPadding:{
    paddingHorizontal:15,
},

contentStyle:{
    justifyContent:'space-around',
    alignItems:'center',
},
container:{
flex:1,
},

});
export default style;