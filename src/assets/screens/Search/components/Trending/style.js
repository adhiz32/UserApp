import { StyleSheet } from "react-native";


const style=(width,height)=>StyleSheet.create
({   
    main:
    {
        flex:1,
        padding:10,
    },
    title:{
        fontFamily:'Lato-Bold',
        fontSize:15
    },
    flatList:{
        alignItems:'center',
        marginVertical:20
    },
    imgCon:{
        padding:15,
        borderRadius:15,
        overflow:'hidden',
        marginRight:15,
    },
    image:{
        width:width*0.15,
        height:height*0.07,
        resizeMode:'contain',
    },
});
export default style;