import style from './style';
import { useNavigation } from '@react-navigation/native';
import { useDimensionContext } from '../../../context';
import { Image, Text, TextInput, View } from 'react-native';
import colors from '../common/colours';

const CustomSearch = props => {
  const {filter}={...props};
  const navigation=useNavigation();
  const dimensions=useDimensionContext();

  const reponsiveStyle= 
  style(
    dimensions.windowWidth,
    dimensions.windowHeight);
    
    return (
    <View style={[filter? reponsiveStyle.newContainer:reponsiveStyle.container]}>
        <View style={[filter?reponsiveStyle.newStyle:reponsiveStyle.search]}>
            <View style={reponsiveStyle.innerView}>
        <Image source={require('../../images/search.png')} 
        style={reponsiveStyle.styleIcon}/>
        <TextInput placeholder="Search Here"
        style={reponsiveStyle.textInput}
        selectionColor={colors.primarygreen}/>
        </View>
        <Image source={require('../../images/voice.png')} 
        style={reponsiveStyle.styleIcon}/>
        </View>
        {filter?<Text style={reponsiveStyle.filter}>Filter</Text>:null}
    </View>
  )
};
export default CustomSearch;
