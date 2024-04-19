import { Text,View } from 'react-native';
import { useDimensionContext } from '../../../context';
import style from './style';
import { useNavigation } from '@react-navigation/native';

const CommonSectionHeader=(props)=>{
    const dimensions=useDimensionContext();
    const reponsiveStyle= 
    style(
      dimensions.windowWidth,
      dimensions.windowHeight
      );
      const navigation=useNavigation();
      const handleNavigate=()=>{
        navigation.navigate('Shop',{type:'all'});
      };
return(
<View style={reponsiveStyle.head}>
<View>
<Text style={reponsiveStyle.headtext}>{props.head}</Text>
<Text style={reponsiveStyle.contentText}>{props.content}</Text>
</View>
<Text style={reponsiveStyle.seeAll} onPress={handleNavigate}>{props.rightText}</Text>
</View>

    );
};
export default CommonSectionHeader;