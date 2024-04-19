import { StyleSheet } from "react-native";
import colors from "../../../../components/common/colours";


const style=(width,height,isPortrait)=>StyleSheet.create
({
container:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginVertical:15,
    borderBottomColor:colors.black_level_2,
    borderBottomWidth:1,
},
head:
{fontFamily:'Lato-Black',
fontSize:20,
lineHeight:50,
color:colors.black_level_1
},
content:{
    fontFamily:'Lato-Black',
    fontSize:18,
    lineHeight:30
},
endContent:{
    fontFamily:'Lato-Regular',
    fontSize:18,
    lineHeight:30,
    marginBottom:10,
    color:colors.black_level_1
},
headEnd:{
fontFamily:'Lato-Black',
fontSize:20,
lineHeight:50,
color:colors.white_level_2
},
total:{
fontFamily:'Lato-Bold',
fontSize:20,
lineHeight:50,
color:colors.black_level_1}
});

export default style;