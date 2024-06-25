import {View, TouchableOpacity} from 'react-native';
import {cssVariable} from '../styles/cssVariable';

export default function BackButton({nav, action}) {
  return (
    <TouchableOpacity
      onPress={() => {
        action == 'back' && nav.goBack();
        action == 'home' && nav.navigate('HomeScreen');
        action == 'akun' && nav.navigate('AkunScreen');
      }}>
      <View
        style={{
          width: 13,
          height: 13,
          marginTop: 15,
          marginLeft: 10,
          marginBottom: 5,
          borderLeftWidth: 1.5,
          borderBottomWidth: 1.5,
          borderColor: cssVariable.colors.white,
          transform: [{rotate: '45deg'}],
        }}></View>
    </TouchableOpacity>
  );
}
